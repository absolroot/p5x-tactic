// 액션 이름 매핑 상수
const ACTION_TO_CODE = {
  '스킬1': 'a',
  '스킬2': 'b',
  '스킬3': 'c',
  'HIGHLIGHT': 'h',
  'ONE MORE': 'o',
  '총격': 'g',
  '근접': 'm',
  '방어': 'd',
  '아이템': 'i'
};

const CODE_TO_ACTION = {
  'a': '스킬1',
  'b': '스킬2',
  'c': '스킬3',
  'h': 'HIGHLIGHT',
  'o': 'ONE MORE',
  'g': '총격',
  'm': '근접',
  'd': '방어',
  'i': '아이템'
};

// 캐릭터 이름 매핑 (알파벳 2글자)
const CHAR_TO_CODE = {
  "렌": "a", "루우나": "b", "루페르": "c", "레오": "d", "류지": "e",
  "리코·매화": "f", "마사키": "g", "마코토": "h", "미나미": "i", "모르가나": "j",
  "모토하": "k", "모토하·여름": "l", "몽타뉴": "m", "몽타뉴·백조": "n", "슌": "o",
  "세이지": "p", "안": "q", "아야카": "r", "야오링": "s", "야오링·사자무": "t",
  "원더": "u", "유스케": "v", "유이 YUI": "w", "유키미": "x", "카스미": "y",
  "키라": "z", "키요시": "A", "토모코": "B", "토모코·여름": "C", "토시야": "D",
  "하루": "E", "하루나": "F", "치즈코": "G",
  // 서포트 파티
  "리코": "H", "미유": "I", "유우미": "J", "카요": "K", "후타바": "L"
};

const CODE_TO_CHAR = Object.fromEntries(
  Object.entries(CHAR_TO_CODE).map(([k, v]) => [v, k])
);

// 페르소나 매핑 (알파벳 2글자)
const PERSONA_TO_CODE = {
  "광목천": "gm", "네코쇼군": "ns", "노른": "nr", "년수": "ny", "도미니온": "dm",
  "디오니소스": "di", "라미아": "rm", "릴리스": "ll", "미트라스": "mt", "바포멧": "bp",
  "비사문천": "bs", "비슈누": "vs", "사라스바티": "sr", "서큐버스": "sc", "수르트": "st",
  "스라오샤": "sl", "시바": "sv", "아누비스": "ab", "앨리스": "al", "야노식": "yn",
  "야마타노오로치": "ym", "야메노우즈메": "yu", "요시츠네": "yt", "오우쿠시누시": "ok",
  "유룽": "yl", "이시스": "is", "지국천": "jg", "지크프리트": "zf", "체르노보그": "cb",
  "킹프로스트": "kf", "티타니아": "tt", "파르바티": "pv", "파즈스": "pz"
};

const CODE_TO_PERSONA = Object.fromEntries(
  Object.entries(PERSONA_TO_CODE).map(([k, v]) => [v, k])
);

// 원더 무기 매핑 (알파벳 1글자)
const WEAPON_TO_CODE = {
  "천상의 별": "a",
  "태고의 역장": "b",
  "메커니컬 심판자": "c",
  "작열의 연옥": "d",
  "야수의 이빨": "e",
  "크리스탈 트레저": "f",
  "망자의 눈": "g",
  "메아리의 절규": "h",
  "7일의 불꽃": "i"
};

const CODE_TO_WEAPON = Object.fromEntries(
  Object.entries(WEAPON_TO_CODE).map(([k, v]) => [v, k])
);

// 메인 계시 매핑 (알파벳 2글자)
const MAIN_REV_TO_CODE = {
  "창조": "a",
  "깨달음": "b",
  "여정": "c",
  "성장": "d",
  "지혜": "e",
  "전념": "f",
  "신념": "g",
  "신뢰": "h",
  "조화": "i",
  "결심": "j",
  "수락": "k",
  "자유": "l",
  "진정성": "m"
};

// 서브 계시 매핑 (알파벳 2글자)
const SUB_REV_TO_CODE = {
  "우려": "a",
  "화해": "b",
  "진리": "c",
  "주권": "d",
  "방해": "e",
  "풍요": "f",
  "화려": "g",
  "변환": "h",
  "힘": "i",
  "억압": "j",
  "환희": "k",
  "미덕": "l",
  "용맹": "m",
  "사랑": "n",
  "평화": "o",
  "승리": "p",
  "직책": "q",
  "분쟁": "r",
  "개선": "s",
  "좌절": "t"
};

const CODE_TO_MAIN_REV = Object.fromEntries(
  Object.entries(MAIN_REV_TO_CODE).map(([k, v]) => [v, k])
);

const CODE_TO_SUB_REV = Object.fromEntries(
  Object.entries(SUB_REV_TO_CODE).map(([k, v]) => [v, k])
);

// 자주 사용되는 텍스트 매핑 (알파벳 2글자)
const TEXT_TO_CODE = {
  // 스킬명
  "리벨리온": "rb",
  "라쿤다": "rk",
  "타루카쟈": "tj",
  "타루카자": "tj",  // 동일 코드 사용
  "라쿠카자": "lj",
  "라쿠카쟈": "lj",  // 동일 코드 사용
  "리벨": "rv",
  "마하라쿤다": "mk",
  "메디아라한": "mh",
  "메디아": "md",
  "마하갈다인": "mg",
  "마하사이": "ms",
  "갈다인": "gd",
  "음율": "yl",
  "음률의 침입": "yi",
  "음률": "yl",
  "명중": "ac",
  "강화": "bf",
  "조준": "am",
  "죽어줄래": "dk",
  "빙결": "fr",
  "화상": "bn",
  "감전": "el",
  "풍습": "wt",
  "즉사": "in",
  "리트": "rt",
  "방어": "df",
  "응집": "cn",
  "레볼루션": "rv",
  "타케미나이엘": "te",
  "1스": "s1",
  "2스": "s2",
  "3스": "s3",
  "HL": "hl",
  "하이라이트": "hl"
};

const CODE_TO_TEXT = Object.fromEntries(
  Object.entries(TEXT_TO_CODE).map(([k, v]) => [v, k])
);

// 공유 데이터 처리 함수
function processSharedData(sharedData) {
  try {
    const decompressedData = LZString.decompressFromEncodedURIComponent(sharedData);
    const compressed = JSON.parse(
      decompressedData
      .replace(/¶/g, 'm":1,"')          // manual 타입 복원
      .replace(/§6/g, '{"n":6,"a":[{"')  // 순서 중요: 큰 숫자부터 복원
      .replace(/§5/g, '{"n":5,"a":[{"')
      .replace(/§4/g, '{"n":4,"a":[{"')
      .replace(/§3/g, '{"n":3,"a":[{"')
      .replace(/§2/g, '{"n":2,"a":[{"')
      .replace(/§1/g, '{"n":1,"a":[{"')
      .replace(/\$/g, '":"')
      .replace(/@/g, '","')
      .replace(/¤/g, '"},{"')
    );
    
    return {
      w: compressed.w?.map(p => CODE_TO_PERSONA[p] || p) || [],
      weapon: compressed.wp ? CODE_TO_WEAPON[compressed.wp] || compressed.wp : "",
      personaSkills: compressed.ps?.map(p => CODE_TO_PERSONA[p] || p) || ["", "", ""],
      p: compressed.p.map(member => ({
        name: CODE_TO_CHAR[member.n] || member.n,
        order: member.o || "",
        ritual: member.r || "0",
        mainRev: member.mr ? CODE_TO_MAIN_REV[member.mr] || member.mr : "",
        subRev: member.sr ? CODE_TO_SUB_REV[member.sr] || member.sr : ""
      })),
      t: compressed.t.map(turn => ({
        turn: turn.n,
        actions: turn.a.map(action => ({
          type: action.m ? 'manual' : 'auto',
          character: CODE_TO_CHAR[action.c] || action.c,
          wonderPersona: action.w ? CODE_TO_PERSONA[action.w] || action.w : "",
          action: action.a ? CODE_TO_ACTION[action.a] || action.a : "",
          memo: action.mm ? action.mm.split(' ').map(word => CODE_TO_TEXT[word] || word).join(' ') : ""
        }))
      }))
    };
  } catch (error) {
    console.error('Invalid shared data:', error);
    return null;
  }
}

// URL 공유 함수
function shareURL() {
  const partyMap = {};
  partyMembers.forEach((member, idx) => {
    if (member.name) {
      partyMap[member.name] = `p${idx}`;
    }
  });

  const data = {
    w: wonderPersonas.filter(p => p).map(p => PERSONA_TO_CODE[p] || p),
    wp: WEAPON_TO_CODE[document.querySelector(".wonder-weapon-input").value] || undefined,
    p: partyMembers.map((pm, idx) => {
      const obj = { n: CHAR_TO_CODE[pm.name] || pm.name };
      if (pm.order !== "") obj.o = pm.order;
      if (pm.ritual !== "") obj.r = pm.ritual;
      
      const mainRev = document.querySelector(`.party-member[data-index="${idx}"]`)?.querySelector(".main-revelation")?.value;
      const subRev = document.querySelector(`.party-member[data-index="${idx}"]`)?.querySelector(".sub-revelation")?.value;
      
      if (mainRev) obj.mr = MAIN_REV_TO_CODE[mainRev];
      if (subRev) obj.sr = SUB_REV_TO_CODE[subRev];
      return obj;
    }),
    t: turns.map(turn => ({
      n: turn.turn,
      a: turn.actions.filter(action => action.action || action.wonderPersona || action.memo)
         .map(action => {
           const obj = { c: CHAR_TO_CODE[action.character] || action.character };
           if (action.type === 'manual') obj.m = 1;
           if (action.wonderPersona) obj.w = PERSONA_TO_CODE[action.wonderPersona];
           if (action.action) obj.a = ACTION_TO_CODE[action.action];
           if (action.memo) {
             const words = action.memo.split(' ');
             const convertedWords = words.map(word => TEXT_TO_CODE[word] || word);
             obj.mm = convertedWords.join(' ');
           }
           return obj;
         })
    }))
  };

  // ps 필드는 모두 빈 값이면 제외
  const personaSkills = Array.from(document.querySelectorAll(".persona-skill-input"))
    .map(input => PERSONA_TO_CODE[input.value] || input.value)
    .filter(v => v);
  if (personaSkills.length > 0) {
    data.ps = personaSkills;
  }

  console.log(data);

  const jsonString = JSON.stringify(data)
    .replace(/":"/g, '$')
    .replace(/","/g, '@')
    .replace(/"},{"/g, '¤')
    .replace(/{"n":1,"a":\[{"/g, '§1')  // 턴 1 시작 패턴
    .replace(/{"n":2,"a":\[{"/g, '§2')  // 턴 2 시작 패턴
    .replace(/{"n":3,"a":\[{"/g, '§3')  // 턴 3 시작 패턴
    .replace(/{"n":4,"a":\[{"/g, '§4')  // 턴 4 시작 패턴
    .replace(/{"n":5,"a":\[{"/g, '§5')  // 턴 5 시작 패턴
    .replace(/{"n":6,"a":\[{"/g, '§6')  // 턴 6 시작 패턴
    .replace(/m":1,"/g, '¶');           // manual 타입 패턴

  const compressedData = LZString.compressToEncodedURIComponent(jsonString);
  
  console.log(jsonString);
  const shareURL = new URL(getBaseUrl());
  shareURL.searchParams.set('data', compressedData);
  
  return shareURL.toString();
}

// shareURL 함수 수정
function handleShare() {
    // exportData와 동일한 데이터 구조 사용
    const url = shareURL();
    navigator.clipboard.writeText(url)
        .then(() => {
        alert('공유 URL이 클립보드에 복사되었습니다.');
        })
        .catch(err => {
        alert('URL 복사에 실패했습니다. 수동으로 복사해주세요.');
        console.error('Failed to copy: ', err);
        });

    // URL 파라미터 제거 시에도 동일하게 적용
    window.history.replaceState({}, document.title, getBaseUrl());
}