import { ClassCount, ClassMap } from '../types';
import { ALLOWED_LETTERS } from '../constants';

const n = ALLOWED_LETTERS.length;

/**
 * @summary basically converts to a base-n string, where n is the length of ASCII_LETTERS
 *
 * @description
 * this is the same algorithm used to convert a base-10 number to a base-n number
 * the only difference is that the output is not reversed as it doesn't matter here
 *
 * @param index {number} the initial number
 *
 * @returns name {string} of the mapped number
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
 * @summary returns a mappings between old and new classname
 *
 * @param name {string} unuglified classname
 * @param index {number} the index at which the classname existed
 */
export const generateClassMap = (name: string, index: number): ClassMap => ({
  before: name,
  after: generateClassName(index),
});

/**
 * @summary generates new class names and maps them to existing ones
 *
 * @param arr the output of @see extractAllTags
 *
 * @returns {Array<ClassCount>} a list of mappings
 */
export const remapClasses = (arr: Array<ClassCount>): Array<ClassMap> => (
  arr.map(({ className }, index) => generateClassMap(className, index))
);

export default remapClasses;
