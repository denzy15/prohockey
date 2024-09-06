export function addSpacesToNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

export const formatPhoneNumberWithSpaces = (phoneNumber) => {
  return (
    phoneNumber.slice(0, 2) +
    " " +
    phoneNumber.slice(2, 5) +
    " " +
    phoneNumber.slice(5, 8) +
    " " +
    phoneNumber.slice(8, 10) +
    " " +
    phoneNumber.slice(10, 12)
  ).trim();
};

export function transliterate(text) {
  const cyrillicToLatinMap = {
    а: "a",
    б: "b",
    в: "v",
    г: "g",
    д: "d",
    е: "e",
    ё: "yo",
    ж: "zh",
    з: "z",
    и: "i",
    й: "y",
    к: "k",
    л: "l",
    м: "m",
    н: "n",
    о: "o",
    п: "p",
    р: "r",
    с: "s",
    т: "t",
    у: "u",
    ф: "f",
    х: "kh",
    ц: "ts",
    ч: "ch",
    ш: "sh",
    щ: "shch",
    ы: "yi",
    э: "e'",
    ю: "yu",
    я: "ya",
    ъ: "''",
    ь: "'",
    " ": "-",
  };

  return text
    .toLowerCase()
    .split("")
    .map((char) => cyrillicToLatinMap[char] || char)
    .join("");
}

export function reverseTransliterate(text) {
  const latinToCyrillicMap = {
    a: "а",
    b: "б",
    v: "в",
    g: "г",
    d: "д",
    e: "е",
    yo: "ё",
    zh: "ж",
    z: "з",
    i: "и",
    y: "й",
    k: "к",
    l: "л",
    m: "м",
    n: "н",
    o: "о",
    p: "п",
    r: "р",
    s: "с",
    t: "т",
    u: "у",
    f: "ф",
    kh: "х",
    ts: "ц",
    ch: "ч",
    sh: "ш",
    shch: "щ",
    yi: "ы",
    "e'": "э",
    yu: "ю",
    ya: "я",
    "-": " ",
    "'": "ь",
    "''": "ъ",
  };

  // Сортировка по длине, чтобы сначала заменялись более длинные последовательности
  const keys = Object.keys(latinToCyrillicMap).sort(
    (a, b) => b.length - a.length
  );

  let result = text.toLowerCase();

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const value = latinToCyrillicMap[key];
    result = result.split(key).join(value);
  }

  // Преобразование первой буквы в верхний регистр
  if (result.length > 0) {
    result = result.charAt(0).toUpperCase() + result.slice(1);
  }

  return result;
}
