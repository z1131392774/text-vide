# Quality Guidelines

> Code standards for the `text-vide` library.

---

## Patterns to Follow

### Pure functions

All exported functions are pure — no side effects, no mutations of inputs:

```typescript
// ✅ Good
export default (text: string, sep: string | string[]) => {
  if (typeof sep === 'string') {
    return `${sep}${text}${sep}`;
  }
  return `${sep[0]}${text}${sep[1]}`;
};
```

### Null/undefined guards

Check for falsy inputs at entry points:

```typescript
// ✅ Good — text-vide/src/index.ts
export const textVide = (text: string, maybeOptions: Partial<Options> = {}) => {
  if (!text?.length) {
    return '';
  }
  // ...
};
```

### Default option merging

Use `utils/defaults` (which delegates to `isEmpty` + `omitBy`) to merge partial options:

```typescript
// ✅ Good — text-vide/src/getOptions.ts
export default (maybeOptions: Partial<Options>): Options =>
  defaults(maybeOptions, {
    sep: DEFAULT_SEP,
    fixationPoint: DEFAULT_FIXATION_POINT,
    ignoreHtmlTag: DEFAULT_IGNORE_HTML_TAG,
    ignoreHtmlEntity: DEFAULT_IGNORE_HTML_ENTITY,
  });
```

### Segment-based text processing (since v1.9)

The core algorithm now uses a segment-based pipeline instead of iterating regex matches:

1. **Split into segments**: Identify CJK runs (`Han`/`Hiragana`/`Katakana`/`Hangul`) and Latin words separately
2. **Chunk CJK runs**: Each CJK region is split into random-sized groups (8-12 chars) independently
3. **Apply bold ratio**: Each letter segment gets `Math.ceil(length * 0.4)` characters bolded
4. **Non-letter segments** (punctuation, spaces) pass through unchanged

```typescript
// ✅ Good — text-vide/src/index.ts (segment pipeline)
const CJK_REGEX = /(\p{sc=Han}|\p{sc=Hiragana}|\p{sc=Katakana}|\p{sc=Hangul})+/gu;
const LATIN_WORD_REGEX = /(\p{L}|\p{Nd})*\p{L}(\p{L}|\p{Nd})*/gu;

// 1. Find CJK runs and interleaving Latin words
// 2. Each CJK run → random 8-12 char chunks
// 3. Every letter segment → bold first 40%
// 4. Join all segments
```

### Unicode script property for language detection

Use `\p{sc=<Script>}` (Unicode Script property) to detect specific writing systems:

```typescript
// Match CJK scripts
const CJK_REGEX = /(\p{sc=Han}|\p{sc=Hiragana}|\p{sc=Katakana}|\p{sc=Hangul})+/gu;

// Match Latin words (letters + numbers with at least one letter)
const LATIN_WORD_REGEX = /(\p{L}|\p{Nd})*\p{L}(\p{L}|\p{Nd})*/gu;
```

The `v` flag is not needed — `sc=` works with the `u` flag.

### Bold percentage ratio (replaces fixation boundary table)

Since v1.9, the fixation boundary table (`FIXATION_BOUNDARY_LIST`) is replaced by a uniform percentage ratio:

```typescript
const BOLD_RATIO = 0.4; // 40%
const boldLen = Math.ceil(segment.length * BOLD_RATIO);
```

This applies to all letter segments (both CJK chunks and Latin words). The `fixationPoint` option is kept for backward compatibility but ignored.

## Patterns to Avoid

### ❌ Mutating function parameters

```typescript
// ❌ Bad: mutates the arg
const fn = (obj: Record<string, unknown>) => {
  Object.keys(obj).forEach(key => delete obj[key]); // ❌
};
```

```typescript
// ✅ Good: return a new object or use reduce
const fn = <T extends object>(obj: T, filter: ...) => {
  return Object.keys(obj).reduce((acc, key) => { ... }, {} as Partial<T>);
};
```

### ❌ Type assertions without justification

```typescript
// ✅ Acceptable with eslint-disable comment:
// @ts-ignore or as Type (only when the type system can't express the constraint)
```

---

## ESLint Rules

Rule set from `.eslintrc.js`:

| Rule | Value | Note |
|------|-------|------|
| `no-unused-vars` | `error` with `varsIgnorePattern: '.*', args: 'none'` | All vars ignored, but catch truly unused |
| `no-restricted-syntax` | `error` on `ObjectPattern > RestElement` | Ban rest element in destructuring |
| `@typescript-eslint/no-non-null-assertion` | `off` | `!` assertions allowed |
| Test files | Override to disable `restricted-globals` + `restricted-syntax` | |

## Prettier Formatting

Defined in `.prettierrc`:

| Setting | Value |
|---------|-------|
| `trailingComma` | `all` |
| `singleQuote` | `true` |
| `printWidth` | `80` |
| `arrowParens` | `avoid` |
| `endOfLine` | `auto` |
