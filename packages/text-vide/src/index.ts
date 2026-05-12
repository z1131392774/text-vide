import { Options } from './types';
import getOptions from './getOptions';
import getHighlightedText from './getHighlightedText';

const CJK_REGEX =
  /(\p{sc=Han}|\p{sc=Hiragana}|\p{sc=Katakana}|\p{sc=Hangul})+/gu;
const LATIN_WORD_REGEX = /(\p{L}|\p{Nd})*\p{L}(\p{L}|\p{Nd})*/gu;
const HTML_TAG_REGEX = /<!--[^]*?-->|<[^>]+>/g;
const HTML_ENTITY_REGEX = /&[\w#]+;/g;
const BOLD_RATIO = 0.4;

function getCjkChunkSize(): number {
  return 8 + Math.floor(Math.random() * 5);
}

interface Segment {
  start: number;
  text: string;
}

export const textVide = (text: string, maybeOptions: Partial<Options> = {}) => {
  if (!text?.length) {
    return '';
  }

  const { sep, ignoreHtmlTag, ignoreHtmlEntity } = getOptions(maybeOptions);

  // Build skip ranges for HTML tags and entities
  const skipRanges: Array<[number, number]> = [];

  if (ignoreHtmlTag) {
    for (const m of text.matchAll(HTML_TAG_REGEX)) {
      skipRanges.push([m.index!, m.index! + m[0].length - 1]);
    }
  }

  if (ignoreHtmlEntity) {
    for (const m of text.matchAll(HTML_ENTITY_REGEX)) {
      skipRanges.push([m.index!, m.index! + m[0].length - 1]);
    }
  }

  skipRanges.sort((a, b) => a[0] - b[0]);

  const isInSkipRange = (pos: number): boolean =>
    skipRanges.some(([start, end]) => pos > start && pos < end);

  // Collect all segments to bold, in document order
  const segments: Segment[] = [];
  let lastCjkEnd = 0;

  for (const cjkMatch of text.matchAll(CJK_REGEX)) {
    const cjkStart = cjkMatch.index!;
    const cjkFullMatch = cjkMatch[0];

    // Process non-CJK text before this CJK run
    const beforeText = text.slice(lastCjkEnd, cjkStart);
    for (const wordMatch of beforeText.matchAll(LATIN_WORD_REGEX)) {
      const globalStart = lastCjkEnd + wordMatch.index!;
      if (!isInSkipRange(globalStart)) {
        segments.push({ start: globalStart, text: wordMatch[0] });
      }
    }

    // Chunk the CJK run
    const chunkSize = getCjkChunkSize();
    for (let i = 0; i < cjkFullMatch.length; i += chunkSize) {
      const chunk = cjkFullMatch.slice(i, i + chunkSize);
      const chunkStart = cjkStart + i;
      if (!isInSkipRange(chunkStart)) {
        segments.push({ start: chunkStart, text: chunk });
      }
    }

    lastCjkEnd = cjkStart + cjkFullMatch.length;
  }

  // Process remaining text after last CJK run
  const afterText = text.slice(lastCjkEnd);
  for (const wordMatch of afterText.matchAll(LATIN_WORD_REGEX)) {
    const globalStart = lastCjkEnd + wordMatch.index!;
    if (!isInSkipRange(globalStart)) {
      segments.push({ start: globalStart, text: wordMatch[0] });
    }
  }

  // Sort segments by start position
  segments.sort((a, b) => a.start - b.start);

  // Build result
  let result = '';
  let lastIndex = 0;

  for (const seg of segments) {
    if (seg.start > lastIndex) {
      result += text.slice(lastIndex, seg.start);
    }

    const boldLen = Math.ceil(seg.text.length * BOLD_RATIO);
    result += getHighlightedText(seg.text.slice(0, boldLen), sep);
    result += seg.text.slice(boldLen);

    lastIndex = seg.start + seg.text.length;
  }

  if (lastIndex < text.length) {
    result += text.slice(lastIndex);
  }

  return result;
};
