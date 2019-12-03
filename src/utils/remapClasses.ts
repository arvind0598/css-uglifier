import { ClassCount } from '../types';
import { ALLOWED_LETTERS } from '../constants';

const n = ALLOWED_LETTERS.length;

/**
 * @summary basically converts to a base-n string, where n is the length of ASCII_LETTERS
 *
 * @description
 * this is the same algorithm used to convert a base-10 number to a base-n number
 * the only difference is that the output is not reversed as it doesn't matter here
 *
 * @param {number} index the initial number
 *
 * @returns {string} name of the mapped number
 */
export const generateClassName = (index: number): string => {
  let name = '';
  let x = index;
  const looped = x >= n;
  while (x >= n) {
    name += ALLOWED_LETTERS[x % n];
    x = Math.floor(x / n);
  }
  name += ALLOWED_LETTERS[looped ? x - 1 : x];
  return name;
};

/**
 * @summary generates new class names and maps them to existing ones
 *
 * @param arr the output of @see extractAllTags
 *
 * @returns {Array<ClassCount>} a list of mappings
 */
export const remapClasses = (arr: Array<ClassCount>): Record<string, string> => {
  const obj: Record<string, string> = {};
  arr.forEach(({ className }, i) => {
    const newClass = generateClassName(i);
    obj[className] = newClass;
  });
  return obj;
};

export default remapClasses;
