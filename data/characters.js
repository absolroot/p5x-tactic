      
// 캐릭터 목록 데이터
const characterList = {
    mainParty: [
        "렌", "루우나", "루페르", "레오", "류지",
        "리코·매화", "마사키", "마코토", "미나미", "모르가나",
        "모토하", "모토하·여름", "몽타뉴", "몽타뉴·백조", "슌",
        "세이지", "안", "아야카", "야오링", "야오링·사자무",
        "원더", "유스케", "유이 YUI", "유키미", "카스미",
        "키라", "키요시", "토모코", "토모코·여름", "토시야",
        "하루", "하루나", "치즈코"
    ],
    supportParty: [
        "리코", "미유", "유우미", "카요", "후타바"
    ]
};

// 캐릭터 데이터에 이미지와 색상 정보 추가
const characterData = {
    "원더":      {image: "./img/characters/원더.webp", color: "#8B0000" },
    "아야카":    {image: "./img/characters/아야카.webp", color: "#f3e966", main_revelation: "창조", sub_revelation: "화해"},
    "리코·매화": {image: "./img/characters/리코매화.webp", color: "#c32233", main_revelation: "창조", sub_revelation: "우려"},
    "하루나":    {image: "./img/characters/하루나.webp", color: "#ff1493", main_revelation: "창조", sub_revelation: "화해"},
    "렌":        {image: "./img/characters/렌.webp", color: "#212529", main_revelation: "여정", sub_revelation: "방해"},
    "마사키":    {image: "./img/characters/마사키.webp", color: "#3cf2ff", main_revelation: "신념", sub_revelation: "평화"},
    "미나미":    {image: "./img/characters/미나미.webp", color: "#f7cd80", main_revelation: "신뢰", sub_revelation: "풍요"},
    "유이 YUI":  {image: "./img/characters/유이YUI.webp", color: "#8cd1cb", main_revelation: "성장", sub_revelation: "변환"},
    "모르가나":   {image: "./img/characters/모르가나.webp", color: "#111111", main_revelation: "전념", sub_revelation: "사랑"},
    "유스케":    {image: "./img/characters/유스케.webp", color: "#00bfff", main_revelation: "전념", sub_revelation: "화려"},
    "토모코·여름": {image: "./img/characters/토모코여름.webp", color: "#cc5995", main_revelation: "조화", sub_revelation: "승리"},
    "모토하·여름": {image: "./img/characters/모토하여름.webp", color: "#1498fd", main_revelation: "결심", sub_revelation: "미덕"},
    "마코토":     {image: "./img/characters/마코토.webp", color: "#000080", main_revelation: "깨달음", sub_revelation: "진리"},
    "하루":       {image: "./img/characters/하루.webp", color: "#800080", main_revelation: "지혜", sub_revelation: "환희"},
    "치즈코":     {image: "./img/characters/치즈코.webp", color: "#2680a7", main_revelation: "여정", sub_revelation: "주권"},
    "유키미":     {image: "./img/characters/유키미.webp", color: "#642efe", main_revelation: "신뢰", sub_revelation: "풍요"},
    "레오":       {image: "./img/characters/레오.webp", color: "#01dfd7", main_revelation: "신뢰", sub_revelation: "풍요"},
    "류지":       {image: "./img/characters/류지.webp", color: "#ffff00", main_revelation: "전념", sub_revelation: "용맹"},
    "루우나":     {image: "./img/characters/루우나.webp", color: "#ff69b4", main_revelation: "자유", sub_revelation: "좌절"},
    "루페르":     {image: "./img/characters/루페르.webp", color: "#4b0082", main_revelation: "수락", sub_revelation: "사랑"},
    "리코":       {image: "./img/characters/리코.webp", color: "#dc143c", main_revelation: "결심", sub_revelation: "직책"},
    "모토하":     {image: "./img/characters/모토하.webp", color: "#1e90ff", main_revelation: "신뢰", sub_revelation: "변환"},
    "몽타뉴":     {image: "./img/characters/몽타뉴.webp", color: "#483d8b", main_revelation: "전념", sub_revelation: "화려"},
    "몽타뉴·백조": {image: "./img/characters/몽타뉴백조.webp", color: "#483d8b", main_revelation: "전념", sub_revelation: "화려"},
    "미유":       {image: "./img/characters/미유.webp", color: "#ff1493", main_revelation: "신념", sub_revelation: "평화"},
    "세이지":     {image: "./img/characters/세이지.webp", color: "#008080", main_revelation: "조화", sub_revelation: "승리"},
    "슌":         {image: "./img/characters/슌.webp", color: "#4169e1", main_revelation: "여정", sub_revelation: "주권"},
    "안":         {image: "./img/characters/안.webp", color: "#ff0000", main_revelation: "수락", sub_revelation: "분쟁"},
    "야오링":     {image: "./img/characters/야오링.webp", color: "#ff4500", main_revelation: "여정", sub_revelation: "주권"},
    "야오링·사자무": {image: "./img/characters/야오링사자무.png", color: "#ff4500", main_revelation: "수락", sub_revelation: "분쟁"},
    "유우미":     {image: "./img/characters/유우미.webp", color: "#9370db", main_revelation: "진정성", sub_revelation: "직책"},
    "카스미":     {image: "./img/characters/카스미.webp", color: "#9932cc", main_revelation: "지혜", sub_revelation: "미덕"},
    "카요":       {image: "./img/characters/카요.webp", color: "#8b008b", main_revelation: "진정성", sub_revelation: "직책"},
    "키라":       {image: "./img/characters/키라.webp", color: "#ff69b4", main_revelation: "지혜", sub_revelation: "억압"},
    "키요시":     {image: "./img/characters/키요시.webp", color: "#2e8b57", main_revelation: "여정", sub_revelation: "주권"},
    "토모코":     {image: "./img/characters/토모코.webp", color: "#cc5995", main_revelation: "신뢰", sub_revelation: "풍요"},
    "토시야":     {image: "./img/characters/토시야.webp", color: "#4682b4", main_revelation: "지혜", sub_revelation: "억압"},
    "후타바":     {image: "./img/characters/후타바.webp", color: "#32cd32", main_revelation: "결심", sub_revelation: "직책"}
};