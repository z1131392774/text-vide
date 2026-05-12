import { textVide } from '..';
import { describe, expect, it } from 'vitest';

describe('test textVide module', () => {
  it('test paragraph 1', () => {
    const text =
      'orem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.';
    const expectedText =
      '<b>or</b>em <b>ip</b>sum <b>do</b>lor <b>si</b>t <b>am</b>et, <b>cons</b>etetur <b>sadi</b>pscing <b>el</b>itr, <b>se</b>d <b>di</b>am <b>non</b>umy <b>eir</b>mod <b>tem</b>por <b>invi</b>dunt <b>u</b>t <b>lab</b>ore <b>e</b>t <b>dol</b>ore <b>ma</b>gna <b>aliq</b>uyam <b>er</b>at, <b>se</b>d <b>di</b>am <b>volu</b>ptua. <b>A</b>t <b>ve</b>ro <b>eo</b>s <b>e</b>t <b>acc</b>usam <b>e</b>t <b>ju</b>sto <b>du</b>o <b>dol</b>ores <b>e</b>t <b>e</b>a <b>re</b>bum. <b>St</b>et <b>cl</b>ita <b>ka</b>sd <b>gube</b>rgren, <b>n</b>o <b>se</b>a <b>taki</b>mata <b>san</b>ctus <b>es</b>t <b>Lo</b>rem <b>ip</b>sum <b>do</b>lor <b>si</b>t <b>am</b>et. <b>Lo</b>rem <b>ip</b>sum <b>do</b>lor <b>si</b>t <b>am</b>et, <b>cons</b>etetur <b>sadi</b>pscing <b>el</b>itr, <b>se</b>d <b>di</b>am <b>non</b>umy <b>eir</b>mod <b>tem</b>por <b>invi</b>dunt <b>u</b>t <b>lab</b>ore <b>e</b>t <b>dol</b>ore <b>ma</b>gna <b>aliq</b>uyam <b>er</b>at, <b>se</b>d <b>di</b>am <b>volu</b>ptua. <b>A</b>t <b>ve</b>ro <b>eo</b>s <b>e</b>t <b>acc</b>usam <b>e</b>t <b>ju</b>sto <b>du</b>o <b>dol</b>ores <b>e</b>t <b>e</b>a <b>re</b>bum. <b>St</b>et <b>cl</b>ita <b>ka</b>sd <b>gube</b>rgren, <b>n</b>o <b>se</b>a <b>taki</b>mata <b>san</b>ctus <b>es</b>t <b>Lo</b>rem <b>ip</b>sum <b>do</b>lor <b>si</b>t <b>am</b>et.';

    expect(textVide(text)).toBe(expectedText);
  });

  it('test paragraph 2', () => {
    const text =
      'Bionic Reading is a new method facilitating the reading process by guiding the eyes through text with artificial fixation points. As a result, the reader is only focusing on the highlighted initial letters and lets the brain center complete the word. In a digital world dominated by shallow forms of reading, Bionic Reading aims to encourage a more in-depth reading and understanding of written content.';
    const expectedText =
      '<b>Bio</b>nic <b>Rea</b>ding <b>i</b>s <b>a</b> <b>ne</b>w <b>met</b>hod <b>facil</b>itating <b>th</b>e <b>rea</b>ding <b>pro</b>cess <b>b</b>y <b>gui</b>ding <b>th</b>e <b>ey</b>es <b>thr</b>ough <b>te</b>xt <b>wi</b>th <b>arti</b>ficial <b>fixa</b>tion <b>poi</b>nts. <b>A</b>s <b>a</b> <b>res</b>ult, <b>th</b>e <b>rea</b>der <b>i</b>s <b>on</b>ly <b>focu</b>sing <b>o</b>n <b>th</b>e <b>highl</b>ighted <b>ini</b>tial <b>let</b>ters <b>an</b>d <b>le</b>ts <b>th</b>e <b>br</b>ain <b>cen</b>ter <b>comp</b>lete <b>th</b>e <b>wo</b>rd. <b>I</b>n <b>a</b> <b>dig</b>ital <b>wo</b>rld <b>domi</b>nated <b>b</b>y <b>sha</b>llow <b>fo</b>rms <b>o</b>f <b>rea</b>ding, <b>Bio</b>nic <b>Rea</b>ding <b>ai</b>ms <b>t</b>o <b>enco</b>urage <b>a</b> <b>mo</b>re <b>i</b>n-<b>de</b>pth <b>rea</b>ding <b>an</b>d <b>unders</b>tanding <b>o</b>f <b>wri</b>tten <b>con</b>tent.';

    expect(textVide(text)).toBe(expectedText);
  });

  it('test paragraph 3 (with number)', () => {
    const text = `Pan Am Flight 7 was a westbound round-the-world flight operated by Pan American World Airways that crashed in the Pacific Ocean on November 8, 1957, while flying from San Francisco International Airport to Honolulu International Airport. The crash of the Boeing 377 Stratocruiser 10-29 (example pictured) killed all thirty-six passengers and eight crew members. The flight's fate was not known until about nine hours after its last radio transmission. No emergency radio reports were received.`;
    const expectedText = `<b>Pa</b>n <b>A</b>m <b>Fli</b>ght 7 <b>wa</b>s <b>a</b> <b>west</b>bound <b>ro</b>und-<b>th</b>e-<b>wo</b>rld <b>fli</b>ght <b>oper</b>ated <b>b</b>y <b>Pa</b>n <b>Amer</b>ican <b>Wo</b>rld <b>Air</b>ways <b>th</b>at <b>cra</b>shed <b>i</b>n <b>th</b>e <b>Pac</b>ific <b>Oc</b>ean <b>o</b>n <b>Nove</b>mber 8, 1957, <b>wh</b>ile <b>fly</b>ing <b>fr</b>om <b>Sa</b>n <b>Fran</b>cisco <b>Intern</b>ational <b>Air</b>port <b>t</b>o <b>Hono</b>lulu <b>Intern</b>ational <b>Air</b>port. <b>Th</b>e <b>cr</b>ash <b>o</b>f <b>th</b>e <b>Boe</b>ing 377 <b>Strato</b>cruiser 10-29 (<b>exa</b>mple <b>pict</b>ured) <b>kil</b>led <b>al</b>l <b>thi</b>rty-<b>si</b>x <b>pass</b>engers <b>an</b>d <b>ei</b>ght <b>cr</b>ew <b>mem</b>bers. <b>Th</b>e <b>fli</b>ght'<b>s</b> <b>fa</b>te <b>wa</b>s <b>no</b>t <b>kn</b>own <b>un</b>til <b>ab</b>out <b>ni</b>ne <b>ho</b>urs <b>af</b>ter <b>it</b>s <b>la</b>st <b>ra</b>dio <b>trans</b>mission. <b>N</b>o <b>emer</b>gency <b>ra</b>dio <b>rep</b>orts <b>we</b>re <b>rece</b>ived.`;

    expect(textVide(text)).toBe(expectedText);
  });

  it('special char (dash)', () => {
    const text = '-----';
    const expected = '-----';
    expect(textVide(text)).toBe(expected);
  });

  it('test Korean', () => {
    const text =
      '바이오닉 리딩은 인위적인 fixation point를 사용하여 문장을 읽기 쉽게 만들어줍니다. 눈은 강조된 단어만 따라가며 뇌를 의존해 문장을 완성합니다. 얕고 넓은 디지털 정보 시대에 바이오닉 리딩은 콘텐츠를 깊게 음미할 수 있도록 도와줍니다.';
    const expectedText =
      '<b>바이</b>오닉 <b>리딩</b>은 <b>인위</b>적인 <b>fixa</b>tion <b>po</b>int<b>를</b> <b>사용</b>하여 <b>문장</b>을 <b>읽</b>기 <b>쉽</b>게 <b>만들어</b>줍니다. <b>눈</b>은 <b>강조</b>된 <b>단어</b>만 <b>따라</b>가며 <b>뇌</b>를 <b>의존</b>해 <b>문장</b>을 <b>완성</b>합니다. <b>얕</b>고 <b>넓</b>은 <b>디지</b>털 <b>정</b>보 <b>시대</b>에 <b>바이</b>오닉 <b>리딩</b>은 <b>콘텐</b>츠를 <b>깊</b>게 <b>음미</b>할 <b>수</b> <b>있도</b>록 <b>도와</b>줍니다.';

    expect(textVide(text)).toBe(expectedText);
  });

  it('test Russian', () => {
    const text = `Конституция СФРЮ 1974 года - третья и последняя конституция Социалистической Федеративной Республики Югославии. Вступила в силу 21 февраля 1974 года, действие окончательно прекратилось в результате начавшегося распада Югославии в 1992 году.`;
    const expected = `<b>Конст</b>итуция <b>СФ</b>РЮ 1974 <b>го</b>да - <b>тре</b>тья <b>и</b> <b>посл</b>едняя <b>конст</b>итуция <b>Социали</b>стической <b>Федер</b>ативной <b>Респ</b>ублики <b>Югос</b>лавии. <b>Всту</b>пила <b>в</b> <b>си</b>лу 21 <b>фев</b>раля 1974 <b>го</b>да, <b>дейс</b>твие <b>оконч</b>ательно <b>прекр</b>атилось <b>в</b> <b>резу</b>льтате <b>начав</b>шегося <b>рас</b>пада <b>Югос</b>лавии <b>в</b> 1992 <b>го</b>ду.`;
    expect(textVide(text)).toBe(expected);
  });

  it('pass empty string', () => {
    const text = '';
    const expected = '';
    expect(textVide(text)).toBe(expected);
  });

  it('pass len 1 string', () => {
    const text = 'a';
    const expected = '<b>a</b>';
    expect(textVide(text)).toBe(expected);
  });

  it('pass strings with line break', () => {
    const text = `
    a
    b
    c
    `;

    const expected = `
    <b>a</b>
    <b>b</b>
    <b>c</b>
    `;

    expect(textVide(text)).toBe(expected);
  });

  it('very long word', () => {
    const text =
      'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
    const expected =
      '<b>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</b>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
    expect(textVide(text)).toBe(expected);
  });

  it('test Chinese short text', () => {
    const text = '你好世界';
    // len=4, bold=ceil(4*0.4)=2 → first 2 chars bolded
    const expected = '<b>你好</b>世界';
    expect(textVide(text)).toBe(expected);
  });

  it('test Chinese single char', () => {
    const text = '你';
    const expected = '<b>你</b>';
    expect(textVide(text)).toBe(expected);
  });

  it('test mixed CJK and Latin', () => {
    const text = 'Hello你好World';
    // Latin: "Hello" (len=5, bold=2), "World" (len=5, bold=2)
    // CJK: "你好" (len=2, bold=1)
    const expected = '<b>He</b>llo<b>你</b>好<b>Wo</b>rld';
    expect(textVide(text)).toBe(expected);
  });

  it('test Chinese with punctuation', () => {
    const text = '你好，世界！';
    // Each segment: len=2, bold=ceil(2*0.4)=1
    const expected = '<b>你</b>好，<b>世</b>界！';
    expect(textVide(text)).toBe(expected);
  });

  it('test Japanese', () => {
    const text = 'こんにちは世界';
    // Hiragana + Kanji: continuous CJK run
    // len=7, chunked 8-12 → one chunk, bold=ceil(7*0.4)=3
    const result = textVide(text);
    expect(result).toContain('<b>');
    expect(result.length).toBeGreaterThan(text.length);
  });

  it('test Chinese within HTML tags', () => {
    const text = '<div>中文测试</div>';
    const result = textVide(text);
    expect(result).toContain('<div>');
    expect(result).toContain('</div>');
    expect(result).toContain('<b>');
  });
});

describe('test options', () => {
  it('pass empty options object', () => {
    expect(textVide('aaaa', {})).toBe('<b>aa</b>aa');
  });

  it('options.sep :: [<strong>, </strong>]', () => {
    const text =
      'orem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.';
    const expectedText =
      '<strong>or</strong>em <strong>ip</strong>sum <strong>do</strong>lor <strong>si</strong>t <strong>am</strong>et, <strong>cons</strong>etetur <strong>sadi</strong>pscing <strong>el</strong>itr, <strong>se</strong>d <strong>di</strong>am <strong>non</strong>umy <strong>eir</strong>mod <strong>tem</strong>por <strong>invi</strong>dunt <strong>u</strong>t <strong>lab</strong>ore <strong>e</strong>t <strong>dol</strong>ore <strong>ma</strong>gna <strong>aliq</strong>uyam <strong>er</strong>at, <strong>se</strong>d <strong>di</strong>am <strong>volu</strong>ptua. <strong>A</strong>t <strong>ve</strong>ro <strong>eo</strong>s <strong>e</strong>t <strong>acc</strong>usam <strong>e</strong>t <strong>ju</strong>sto <strong>du</strong>o <strong>dol</strong>ores <strong>e</strong>t <strong>e</strong>a <strong>re</strong>bum. <strong>St</strong>et <strong>cl</strong>ita <strong>ka</strong>sd <strong>gube</strong>rgren, <strong>n</strong>o <strong>se</strong>a <strong>taki</strong>mata <strong>san</strong>ctus <strong>es</strong>t <strong>Lo</strong>rem <strong>ip</strong>sum <strong>do</strong>lor <strong>si</strong>t <strong>am</strong>et. <strong>Lo</strong>rem <strong>ip</strong>sum <strong>do</strong>lor <strong>si</strong>t <strong>am</strong>et, <strong>cons</strong>etetur <strong>sadi</strong>pscing <strong>el</strong>itr, <strong>se</strong>d <strong>di</strong>am <strong>non</strong>umy <strong>eir</strong>mod <strong>tem</strong>por <strong>invi</strong>dunt <strong>u</strong>t <strong>lab</strong>ore <strong>e</strong>t <strong>dol</strong>ore <strong>ma</strong>gna <strong>aliq</strong>uyam <strong>er</strong>at, <strong>se</strong>d <strong>di</strong>am <strong>volu</strong>ptua. <strong>A</strong>t <strong>ve</strong>ro <strong>eo</strong>s <strong>e</strong>t <strong>acc</strong>usam <strong>e</strong>t <strong>ju</strong>sto <strong>du</strong>o <strong>dol</strong>ores <strong>e</strong>t <strong>e</strong>a <strong>re</strong>bum. <strong>St</strong>et <strong>cl</strong>ita <strong>ka</strong>sd <strong>gube</strong>rgren, <strong>n</strong>o <strong>se</strong>a <strong>taki</strong>mata <strong>san</strong>ctus <strong>es</strong>t <strong>Lo</strong>rem <strong>ip</strong>sum <strong>do</strong>lor <strong>si</strong>t <strong>am</strong>et.';

    expect(textVide(text, { sep: ['<strong>', '</strong>'] })).toBe(
      expectedText,
    );
  });

  it('options.sep :: `**`', () => {
    const text =
      'orem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.';
    const expectedText =
      '**or**em **ip**sum **do**lor **si**t **am**et, **cons**etetur **sadi**pscing **el**itr, **se**d **di**am **non**umy **eir**mod **tem**por **invi**dunt **u**t **lab**ore **e**t **dol**ore **ma**gna **aliq**uyam **er**at, **se**d **di**am **volu**ptua. **A**t **ve**ro **eo**s **e**t **acc**usam **e**t **ju**sto **du**o **dol**ores **e**t **e**a **re**bum. **St**et **cl**ita **ka**sd **gube**rgren, **n**o **se**a **taki**mata **san**ctus **es**t **Lo**rem **ip**sum **do**lor **si**t **am**et. **Lo**rem **ip**sum **do**lor **si**t **am**et, **cons**etetur **sadi**pscing **el**itr, **se**d **di**am **non**umy **eir**mod **tem**por **invi**dunt **u**t **lab**ore **e**t **dol**ore **ma**gna **aliq**uyam **er**at, **se**d **di**am **volu**ptua. **A**t **ve**ro **eo**s **e**t **acc**usam **e**t **ju**sto **du**o **dol**ores **e**t **e**a **re**bum. **St**et **cl**ita **ka**sd **gube**rgren, **n**o **se**a **taki**mata **san**ctus **es**t **Lo**rem **ip**sum **do**lor **si**t **am**et.';

    expect(textVide(text, { sep: '**' })).toBe(expectedText);
  });

  it('options.sep :: `__`', () => {
    const text =
      'orem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.';
    const expectedText =
      '__or__em __ip__sum __do__lor __si__t __am__et, __cons__etetur __sadi__pscing __el__itr, __se__d __di__am __non__umy __eir__mod __tem__por __invi__dunt __u__t __lab__ore __e__t __dol__ore __ma__gna __aliq__uyam __er__at, __se__d __di__am __volu__ptua. __A__t __ve__ro __eo__s __e__t __acc__usam __e__t __ju__sto __du__o __dol__ores __e__t __e__a __re__bum. __St__et __cl__ita __ka__sd __gube__rgren, __n__o __se__a __taki__mata __san__ctus __es__t __Lo__rem __ip__sum __do__lor __si__t __am__et. __Lo__rem __ip__sum __do__lor __si__t __am__et, __cons__etetur __sadi__pscing __el__itr, __se__d __di__am __non__umy __eir__mod __tem__por __invi__dunt __u__t __lab__ore __e__t __dol__ore __ma__gna __aliq__uyam __er__at, __se__d __di__am __volu__ptua. __A__t __ve__ro __eo__s __e__t __acc__usam __e__t __ju__sto __du__o __dol__ores __e__t __e__a __re__bum. __St__et __cl__ita __ka__sd __gube__rgren, __n__o __se__a __taki__mata __san__ctus __es__t __Lo__rem __ip__sum __do__lor __si__t __am__et.';

    expect(textVide(text, { sep: '__' })).toBe(expectedText);
  });

  it('undefeined options.sep', () => {
    const text =
      'orem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.';
    const expectedText =
      '<b>or</b>em <b>ip</b>sum <b>do</b>lor <b>si</b>t <b>am</b>et, <b>cons</b>etetur <b>sadi</b>pscing <b>el</b>itr, <b>se</b>d <b>di</b>am <b>non</b>umy <b>eir</b>mod <b>tem</b>por <b>invi</b>dunt <b>u</b>t <b>lab</b>ore <b>e</b>t <b>dol</b>ore <b>ma</b>gna <b>aliq</b>uyam <b>er</b>at, <b>se</b>d <b>di</b>am <b>volu</b>ptua. <b>A</b>t <b>ve</b>ro <b>eo</b>s <b>e</b>t <b>acc</b>usam <b>e</b>t <b>ju</b>sto <b>du</b>o <b>dol</b>ores <b>e</b>t <b>e</b>a <b>re</b>bum. <b>St</b>et <b>cl</b>ita <b>ka</b>sd <b>gube</b>rgren, <b>n</b>o <b>se</b>a <b>taki</b>mata <b>san</b>ctus <b>es</b>t <b>Lo</b>rem <b>ip</b>sum <b>do</b>lor <b>si</b>t <b>am</b>et. <b>Lo</b>rem <b>ip</b>sum <b>do</b>lor <b>si</b>t <b>am</b>et, <b>cons</b>etetur <b>sadi</b>pscing <b>el</b>itr, <b>se</b>d <b>di</b>am <b>non</b>umy <b>eir</b>mod <b>tem</b>por <b>invi</b>dunt <b>u</b>t <b>lab</b>ore <b>e</b>t <b>dol</b>ore <b>ma</b>gna <b>aliq</b>uyam <b>er</b>at, <b>se</b>d <b>di</b>am <b>volu</b>ptua. <b>A</b>t <b>ve</b>ro <b>eo</b>s <b>e</b>t <b>acc</b>usam <b>e</b>t <b>ju</b>sto <b>du</b>o <b>dol</b>ores <b>e</b>t <b>e</b>a <b>re</b>bum. <b>St</b>et <b>cl</b>ita <b>ka</b>sd <b>gube</b>rgren, <b>n</b>o <b>se</b>a <b>taki</b>mata <b>san</b>ctus <b>es</b>t <b>Lo</b>rem <b>ip</b>sum <b>do</b>lor <b>si</b>t <b>am</b>et.';

    expect(textVide(text, { sep: undefined })).toBe(expectedText);
  });

  it('pass strings with line break (w/ set options.sep to `__`)', () => {
    const text = `
    orem ipsum dolor sit amet, consetetur sadipscing elitr,
    sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
    sed diam voluptua.`;

    const expected = `
    __or__em __ip__sum __do__lor __si__t __am__et, __cons__etetur __sadi__pscing __el__itr,
    __se__d __di__am __non__umy __eir__mod __tem__por __invi__dunt __u__t __lab__ore __e__t __dol__ore __ma__gna __aliq__uyam __er__at,
    __se__d __di__am __volu__ptua.`;

    expect(textVide(text, { sep: '__' })).toBe(expected);
  });

  it('invalid fixation point', () => {
    const text =
      'orem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.';
    const expectedText =
      '<b>or</b>em <b>ip</b>sum <b>do</b>lor <b>si</b>t <b>am</b>et, <b>cons</b>etetur <b>sadi</b>pscing <b>el</b>itr, <b>se</b>d <b>di</b>am <b>non</b>umy <b>eir</b>mod <b>tem</b>por <b>invi</b>dunt <b>u</b>t <b>lab</b>ore <b>e</b>t <b>dol</b>ore <b>ma</b>gna <b>aliq</b>uyam <b>er</b>at, <b>se</b>d <b>di</b>am <b>volu</b>ptua. <b>A</b>t <b>ve</b>ro <b>eo</b>s <b>e</b>t <b>acc</b>usam <b>e</b>t <b>ju</b>sto <b>du</b>o <b>dol</b>ores <b>e</b>t <b>e</b>a <b>re</b>bum. <b>St</b>et <b>cl</b>ita <b>ka</b>sd <b>gube</b>rgren, <b>n</b>o <b>se</b>a <b>taki</b>mata <b>san</b>ctus <b>es</b>t <b>Lo</b>rem <b>ip</b>sum <b>do</b>lor <b>si</b>t <b>am</b>et. <b>Lo</b>rem <b>ip</b>sum <b>do</b>lor <b>si</b>t <b>am</b>et, <b>cons</b>etetur <b>sadi</b>pscing <b>el</b>itr, <b>se</b>d <b>di</b>am <b>non</b>umy <b>eir</b>mod <b>tem</b>por <b>invi</b>dunt <b>u</b>t <b>lab</b>ore <b>e</b>t <b>dol</b>ore <b>ma</b>gna <b>aliq</b>uyam <b>er</b>at, <b>se</b>d <b>di</b>am <b>volu</b>ptua. <b>A</b>t <b>ve</b>ro <b>eo</b>s <b>e</b>t <b>acc</b>usam <b>e</b>t <b>ju</b>sto <b>du</b>o <b>dol</b>ores <b>e</b>t <b>e</b>a <b>re</b>bum. <b>St</b>et <b>cl</b>ita <b>ka</b>sd <b>gube</b>rgren, <b>n</b>o <b>se</b>a <b>taki</b>mata <b>san</b>ctus <b>es</b>t <b>Lo</b>rem <b>ip</b>sum <b>do</b>lor <b>si</b>t <b>am</b>et.';

    expect(textVide(text, { fixationPoint: -1 })).toBe(expectedText);
  });

  it('emojis', () => {
    const text = '👆 h👆el👆lo there, this is s👆ome dummy text';
    const expected =
      '👆 <b>h</b>👆<b>e</b>l👆<b>l</b>o <b>th</b>ere, <b>th</b>is <b>i</b>s <b>s</b>👆<b>om</b>e <b>du</b>mmy <b>te</b>xt';

    expect(textVide(text)).toBe(expected);
  });

  it('ignoreHtmlTag: true', () => {
    const text = '<div>abcd</div>efg';
    const expectedText = '<div><b>ab</b>cd</div><b>ef</b>g';
    expect(textVide(text, { ignoreHtmlTag: true })).toBe(expectedText);
  });

  it('ignoreHtmlTag: false', () => {
    const text = '<div>abcd</div>efg';
    const expected = '<<b>di</b>v><b>ab</b>cd</<b>di</b>v><b>ef</b>g';
    expect(textVide(text, { ignoreHtmlTag: false })).toBe(expected);
  });

  it('ignoreHtmlEntity: true', () => {
    const text = '&nbsp;abcd&gt;';
    const expectedText = '&nbsp;<b>ab</b>cd&gt;';
    expect(textVide(text, { ignoreHtmlEntity: true })).toBe(expectedText);
  });

  it('ignoreHtmlEntity: false', () => {
    const text = '&nbsp;abcd&gt;';
    const expected = '&<b>nb</b>sp;<b>ab</b>cd&<b>g</b>t;';
    expect(textVide(text, { ignoreHtmlEntity: false })).toBe(expected);
  });
});

describe('fixation point ([2, 5])', () => {
  const p2Text =
    'Bionic Reading is a new method facilitating the reading process by guiding the eyes through text with artificial fixation points. As a result, the reader is only focusing on the highlighted initial letters and lets the brain center complete the word. In a digital world dominated by shallow forms of reading, Bionic Reading aims to encourage a more in-depth reading and understanding of written content.';
  const p2Expected =
    '<b>Bio</b>nic <b>Rea</b>ding <b>i</b>s <b>a</b> <b>ne</b>w <b>met</b>hod <b>facil</b>itating <b>th</b>e <b>rea</b>ding <b>pro</b>cess <b>b</b>y <b>gui</b>ding <b>th</b>e <b>ey</b>es <b>thr</b>ough <b>te</b>xt <b>wi</b>th <b>arti</b>ficial <b>fixa</b>tion <b>poi</b>nts. <b>A</b>s <b>a</b> <b>res</b>ult, <b>th</b>e <b>rea</b>der <b>i</b>s <b>on</b>ly <b>focu</b>sing <b>o</b>n <b>th</b>e <b>highl</b>ighted <b>ini</b>tial <b>let</b>ters <b>an</b>d <b>le</b>ts <b>th</b>e <b>br</b>ain <b>cen</b>ter <b>comp</b>lete <b>th</b>e <b>wo</b>rd. <b>I</b>n <b>a</b> <b>dig</b>ital <b>wo</b>rld <b>domi</b>nated <b>b</b>y <b>sha</b>llow <b>fo</b>rms <b>o</b>f <b>rea</b>ding, <b>Bio</b>nic <b>Rea</b>ding <b>ai</b>ms <b>t</b>o <b>enco</b>urage <b>a</b> <b>mo</b>re <b>i</b>n-<b>de</b>pth <b>rea</b>ding <b>an</b>d <b>unders</b>tanding <b>o</b>f <b>wri</b>tten <b>con</b>tent.';
  const sepExpected =
    '__<b>or</b>e__<b>m</b> __<b>ip</b>s__<b>u</b>m __<b>do</b>l__<b>o</b>r __<b>s</b>i__<b>t</b> __<b>am</b>e__<b>t</b>, __<b>cons</b>etet__<b>u</b>r __<b>sadi</b>psci__<b>n</b>g __<b>el</b>i__<b>t</b>r, __<b>s</b>e__<b>d</b> __<b>di</b>a__<b>m</b> __<b>no</b>nu__<b>m</b>y __<b>ei</b>rm__<b>o</b>d __<b>te</b>mp__<b>o</b>r __<b>inv</b>idu__<b>n</b>t __<b>u</b>__<b>t</b> __<b>la</b>bo__<b>r</b>e __<b>e</b>__<b>t</b> __<b>do</b>lo__<b>r</b>e __<b>ma</b>g__<b>n</b>a __<b>ali</b>quy__<b>a</b>m __<b>er</b>a__<b>t</b>, __<b>s</b>e__<b>d</b> __<b>di</b>a__<b>m</b> __<b>vol</b>upt__<b>u</b>a. __<b>A</b>__<b>t</b> __<b>ve</b>r__<b>o</b> __<b>e</b>o__<b>s</b> __<b>e</b>__<b>t</b> __<b>ac</b>cus__<b>a</b>m __<b>e</b>__<b>t</b> __<b>ju</b>s__<b>t</b>o __<b>d</b>u__<b>o</b> __<b>do</b>lor__<b>e</b>s __<b>e</b>__<b>t</b> __<b>e</b>__<b>a</b> __<b>re</b>b__<b>u</b>m. __<b>St</b>e__<b>t</b> __<b>cl</b>i__<b>t</b>a __<b>ka</b>s__<b>d</b> __<b>gub</b>ergr__<b>e</b>n, __<b>n</b>__<b>o</b> __<b>s</b>e__<b>a</b> __<b>tak</b>ima__<b>t</b>a __<b>sa</b>nct__<b>u</b>s __<b>e</b>s__<b>t</b> __<b>Lo</b>r__<b>e</b>m __<b>ip</b>s__<b>u</b>m __<b>do</b>l__<b>o</b>r __<b>s</b>i__<b>t</b> __<b>am</b>e__<b>t</b>. __<b>Lo</b>r__<b>e</b>m __<b>ip</b>s__<b>u</b>m __<b>do</b>l__<b>o</b>r __<b>s</b>i__<b>t</b> __<b>am</b>e__<b>t</b>, __<b>cons</b>etet__<b>u</b>r __<b>sadi</b>psci__<b>n</b>g __<b>el</b>i__<b>t</b>r, __<b>s</b>e__<b>d</b> __<b>di</b>a__<b>m</b> __<b>no</b>nu__<b>m</b>y __<b>ei</b>rm__<b>o</b>d __<b>te</b>mp__<b>o</b>r __<b>inv</b>idu__<b>n</b>t __<b>u</b>__<b>t</b> __<b>la</b>bo__<b>r</b>e __<b>e</b>__<b>t</b> __<b>do</b>lo__<b>r</b>e __<b>ma</b>g__<b>n</b>a __<b>ali</b>quy__<b>a</b>m __<b>er</b>a__<b>t</b>, __<b>s</b>e__<b>d</b> __<b>di</b>a__<b>m</b> __<b>vol</b>upt__<b>u</b>a. __<b>A</b>__<b>t</b> __<b>ve</b>r__<b>o</b> __<b>e</b>o__<b>s</b> __<b>e</b>__<b>t</b> __<b>ac</b>cus__<b>a</b>m __<b>e</b>__<b>t</b> __<b>ju</b>s__<b>t</b>o __<b>d</b>u__<b>o</b> __<b>do</b>lor__<b>e</b>s __<b>e</b>__<b>t</b> __<b>e</b>__<b>a</b> __<b>re</b>b__<b>u</b>m. __<b>St</b>e__<b>t</b> __<b>cl</b>i__<b>t</b>a __<b>ka</b>s__<b>d</b> __<b>gub</b>ergr__<b>e</b>n, __<b>n</b>__<b>o</b> __<b>s</b>e__<b>a</b> __<b>tak</b>ima__<b>t</b>a __<b>sa</b>nct__<b>u</b>s __<b>e</b>s__<b>t</b> __<b>Lo</b>r__<b>e</b>m __<b>ip</b>s__<b>u</b>m __<b>do</b>l__<b>o</b>r __<b>s</b>i__<b>t</b> __<b>am</b>e__<b>t</b>.';

  it('fixation 2 - 1', () => {
    expect(textVide(p2Text, { fixationPoint: 2 })).toBe(p2Expected);
  });
  it('fixation 2 - 2', () => {
    expect(
      textVide(
        '__ore__m __ips__um __dol__or __si__t __ame__t, __consetet__ur __sadipsci__ng __eli__tr, __se__d __dia__m __nonu__my __eirm__od __temp__or __invidu__nt __u__t __labo__re __e__t __dolo__re __mag__na __aliquy__am __era__t, __se__d __dia__m __volupt__ua. __A__t __ver__o __eo__s __e__t __accus__am __e__t __jus__to __du__o __dolor__es __e__t __e__a __reb__um. __Ste__t __cli__ta __kas__d __gubergr__en, __n__o __se__a __takima__ta __sanct__us __es__t __Lor__em __ips__um __dol__or __si__t __ame__t. __Lor__em __ips__um __dol__or __si__t __ame__t, __consetet__ur __sadipsci__ng __eli__tr, __se__d __dia__m __nonu__my __eirm__od __temp__or __invidu__nt __u__t __labo__re __e__t __dolo__re __mag__na __aliquy__am __era__t, __se__d __dia__m __volupt__ua. __A__t __ver__o __eo__s __e__t __accus__am __e__t __jus__to __du__o __dolor__es __e__t __e__a __reb__um. __Ste__t __cli__ta __kas__d __gubergr__en, __n__o __se__a __takima__ta __sanct__us __es__t __Lor__em __ips__um __dol__or __si__t __ame__t.',
        { fixationPoint: 2 },
      ),
    ).toBe(sepExpected);
  });
  it('fixation 3 - 1', () => {
    expect(textVide(p2Text, { fixationPoint: 3 })).toBe(p2Expected);
  });
  it('fixation 3 - 2', () => {
    expect(
      textVide(
        '__ore__m __ips__um __dol__or __si__t __ame__t, __consetet__ur __sadipsci__ng __eli__tr, __se__d __dia__m __nonu__my __eirm__od __temp__or __invidu__nt __u__t __labo__re __e__t __dolo__re __mag__na __aliquy__am __era__t, __se__d __dia__m __volupt__ua. __A__t __ver__o __eo__s __e__t __accus__am __e__t __jus__to __du__o __dolor__es __e__t __e__a __reb__um. __Ste__t __cli__ta __kas__d __gubergr__en, __n__o __se__a __takima__ta __sanct__us __es__t __Lor__em __ips__um __dol__or __si__t __ame__t. __Lor__em __ips__um __dol__or __si__t __ame__t, __consetet__ur __sadipsci__ng __eli__tr, __se__d __dia__m __nonu__my __eirm__od __temp__or __invidu__nt __u__t __labo__re __e__t __dolo__re __mag__na __aliquy__am __era__t, __se__d __dia__m __volupt__ua. __A__t __ver__o __eo__s __e__t __accus__am __e__t __jus__to __du__o __dolor__es __e__t __e__a __reb__um. __Ste__t __cli__ta __kas__d __gubergr__en, __n__o __se__a __takima__ta __sanct__us __es__t __Lor__em __ips__um __dol__or __si__t __ame__t.',
        { fixationPoint: 3 },
      ),
    ).toBe(sepExpected);
  });
  it('fixation 4 - 1', () => {
    expect(textVide(p2Text, { fixationPoint: 4 })).toBe(p2Expected);
  });
  it('fixation 4 - 2', () => {
    expect(
      textVide(
        '__ore__m __ips__um __dol__or __si__t __ame__t, __consetet__ur __sadipsci__ng __eli__tr, __se__d __dia__m __nonu__my __eirm__od __temp__or __invidu__nt __u__t __labo__re __e__t __dolo__re __mag__na __aliquy__am __era__t, __se__d __dia__m __volupt__ua. __A__t __ver__o __eo__s __e__t __accus__am __e__t __jus__to __du__o __dolor__es __e__t __e__a __reb__um. __Ste__t __cli__ta __kas__d __gubergr__en, __n__o __se__a __takima__ta __sanct__us __es__t __Lor__em __ips__um __dol__or __si__t __ame__t. __Lor__em __ips__um __dol__or __si__t __ame__t, __consetet__ur __sadipsci__ng __eli__tr, __se__d __dia__m __nonu__my __eirm__od __temp__or __invidu__nt __u__t __labo__re __e__t __dolo__re __mag__na __aliquy__am __era__t, __se__d __dia__m __volupt__ua. __A__t __ver__o __eo__s __e__t __accus__am __e__t __jus__to __du__o __dolor__es __e__t __e__a __reb__um. __Ste__t __cli__ta __kas__d __gubergr__en, __n__o __se__a __takima__ta __sanct__us __es__t __Lor__em __ips__um __dol__or __si__t __ame__t.',
        { fixationPoint: 4 },
      ),
    ).toBe(sepExpected);
  });
  it('fixation 5 - 1', () => {
    expect(textVide(p2Text, { fixationPoint: 5 })).toBe(p2Expected);
  });
  it('fixation 5 - 2', () => {
    expect(
      textVide(
        '__ore__m __ips__um __dol__or __si__t __ame__t, __consetet__ur __sadipsci__ng __eli__tr, __se__d __dia__m __nonu__my __eirm__od __temp__or __invidu__nt __u__t __labo__re __e__t __dolo__re __mag__na __aliquy__am __era__t, __se__d __dia__m __volupt__ua. __A__t __ver__o __eo__s __e__t __accus__am __e__t __jus__to __du__o __dolor__es __e__t __e__a __reb__um. __Ste__t __cli__ta __kas__d __gubergr__en, __n__o __se__a __takima__ta __sanct__us __es__t __Lor__em __ips__um __dol__or __si__t __ame__t. __Lor__em __ips__um __dol__or __si__t __ame__t, __consetet__ur __sadipsci__ng __eli__tr, __se__d __dia__m __nonu__my __eirm__od __temp__or __invidu__nt __u__t __labo__re __e__t __dolo__re __mag__na __aliquy__am __era__t, __se__d __dia__m __volupt__ua. __A__t __ver__o __eo__s __e__t __accus__am __e__t __jus__to __du__o __dolor__es __e__t __e__a __reb__um. __Ste__t __cli__ta __kas__d __gubergr__en, __n__o __se__a __takima__ta __sanct__us __es__t __Lor__em __ips__um __dol__or __si__t __ame__t.',
        { fixationPoint: 5 },
      ),
    ).toBe(sepExpected);
  });
});

describe('numbers', () => {
  it('1234567890', () => {
    const text = '1234567890';
    const expected = '1234567890';
    expect(textVide(text)).toBe(expected);
  });

  it('1234-567890', () => {
    const text = '1234-567890';
    const expected = '1234-567890';
    expect(textVide(text)).toBe(expected);
  });

  it('a1234567890', () => {
    const text = 'a1234567890';
    const expected = '<b>a1234</b>567890';
    expect(textVide(text)).toBe(expected);
  });

  it('1234567890a', () => {
    const text = '1234567890a';
    const expected = '<b>12345</b>67890a';
    expect(textVide(text)).toBe(expected);
  });

  it('1234a567890', () => {
    const text = '1234a567890';
    const expected = '<b>1234a</b>567890';
    expect(textVide(text)).toBe(expected);
  });

  it('@1234567890', () => {
    const text = '@1234567890';
    const expected = '@1234567890';
    expect(textVide(text)).toBe(expected);
  });

  it('1234567890@', () => {
    const text = '1234567890@';
    const expected = '1234567890@';
    expect(textVide(text)).toBe(expected);
  });

  it('1234@567890', () => {
    const text = '1234@567890';
    const expected = '1234@567890';
    expect(textVide(text)).toBe(expected);
  });
});

describe('with html tags', () => {
  it('normal text', () => {
    const text = 'abcdefg';
    const expected = '<b>abc</b>defg';
    expect(textVide(text)).toBe(expected);
  });

  it('with a tag', () => {
    const text = '<a>abcd</a>efg';
    const expected = '<a><b>ab</b>cd</a><b>ef</b>g';
    expect(textVide(text)).toBe(expected);
  });

  it('with b tag', () => {
    const text = '<b>abcd</b>efg';
    const expected = '<b><b>ab</b>cd</b><b>ef</b>g';
    expect(textVide(text)).toBe(expected);
  });

  it('with div tag', () => {
    const text = '<div>abcd</div>efg';
    const expected = '<div><b>ab</b>cd</div><b>ef</b>g';
    expect(textVide(text)).toBe(expected);
  });

  it('complex html tags', () => {
    const text = `<div class="bionic-reader-container">
            
            
    <span class="w bionic"><b class="b bionic">nor</b>mal </span><span class="w bionic"><b class="b bionic">te</b>xt</span>: <span class="w bionic"><b class="b bionic">abcd</b>efg</span><br><span class="w bionic"><b class="b bionic">wi</b>th </span><span class="w bionic"><b class="b bionic">a</b> </span><span class="w bionic"><b class="b bionic">t</b>ag</span>: <a target="_blank"><span class="w bionic"><b class="b bionic">ab</b>cd</span></a><span class="w bionic"><b class="b bionic">e</b>fg</span><br><span class="w bionic"><b class="b bionic">wi</b>th </span><span class="w bionic"><b class="b bionic">b</b> </span><span class="w bionic"><b class="b bionic">t</b>ag</span>: <b><span class="w bionic"><b class="b bionic">ab</b>cd</span></b><span class="w bionic"><b class="b bionic">e</b>fg</span><br><span class="w bionic"><b class="b bionic">wi</b>th </span><span class="w bionic"><b class="b bionic">d</b>iv </span><span class="w bionic"><b class="b bionic">t</b>ag</span>: <div><span class="w bionic"><b class="b bionic">ab</b>cd</span></div><span class="w bionic"><b class="b bionic">e</b>fg</span><br>

        <!-- <div class="br-foot-node">
            <p style="margin: 32px 0 32px 70px; font-weight: 700; font-size: 26px; line-height: 1.6em;">
                —
            </p>
            <p>
                Bionic Reading<sup>®</sup><br>
                A higher dimension of reading.<br>
                <a href="https://bionic-reading.com">bionic-reading.com</a>
            </p>
            <br/>
            <br/>
            <p>
                
            </p>
        </div> -->

</div>`;

    const expected = `<div class="bionic-reader-container">
            
            
    <span class="w bionic"><b class="b bionic"><b>no</b>r</b><b>ma</b>l </span><span class="w bionic"><b class="b bionic"><b>t</b>e</b><b>x</b>t</span>: <span class="w bionic"><b class="b bionic"><b>ab</b>cd</b><b>ef</b>g</span><br><span class="w bionic"><b class="b bionic"><b>w</b>i</b><b>t</b>h </span><span class="w bionic"><b class="b bionic"><b>a</b></b> </span><span class="w bionic"><b class="b bionic"><b>t</b></b><b>a</b>g</span>: <a target="_blank"><span class="w bionic"><b class="b bionic"><b>a</b>b</b><b>c</b>d</span></a><span class="w bionic"><b class="b bionic"><b>e</b></b><b>f</b>g</span><br><span class="w bionic"><b class="b bionic"><b>w</b>i</b><b>t</b>h </span><span class="w bionic"><b class="b bionic"><b>b</b></b> </span><span class="w bionic"><b class="b bionic"><b>t</b></b><b>a</b>g</span>: <b><span class="w bionic"><b class="b bionic"><b>a</b>b</b><b>c</b>d</span></b><span class="w bionic"><b class="b bionic"><b>e</b></b><b>f</b>g</span><br><span class="w bionic"><b class="b bionic"><b>w</b>i</b><b>t</b>h </span><span class="w bionic"><b class="b bionic"><b>d</b></b><b>i</b>v </span><span class="w bionic"><b class="b bionic"><b>t</b></b><b>a</b>g</span>: <div><span class="w bionic"><b class="b bionic"><b>a</b>b</b><b>c</b>d</span></div><span class="w bionic"><b class="b bionic"><b>e</b></b><b>f</b>g</span><br>

        <!-- <div class="br-foot-node">
            <p style="margin: 32px 0 32px 70px; font-weight: 700; font-size: 26px; line-height: 1.6em;">
                —
            </p>
            <p>
                Bionic Reading<sup>®</sup><br>
                A higher dimension of reading.<br>
                <a href="https://bionic-reading.com">bionic-reading.com</a>
            </p>
            <br/>
            <br/>
            <p>
                
            </p>
        </div> -->

</div>`;

    expect(textVide(text)).toBe(expected);
  });
});
