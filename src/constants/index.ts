/**
 * refer to https://stackoverflow.com/questions/5501581/javascript-new-arrayn-and-array-prototype-map-weirdness
 * directly mapping over an undefined array leads to weird issues
 * >> map skips undefined elements, the spread operator is thus required
 */

const ASCII_LOWER = [...Array(26)].map((_e, i) => (String.fromCharCode(i + 97)));

const ASCII_UPPER = [...Array(26)].map((_e, i) => (String.fromCharCode(i + 65)));

const ASCII_LETTERS = ASCII_LOWER.concat(ASCII_UPPER);

export const ALLOWED_LETTERS = ASCII_LETTERS;
