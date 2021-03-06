import { ClassCount } from '../types';

/**
 * @summary this is a weighted function of length and frequency
 *
 * @description
 * the number of characters used up by a particular class can be defined as:
 * (the length of the classname string * the number of times the class is mentioned)
 * so we sort it in descending fashion
 *
 * @see BASIC_HTML_CLASS_LIST in tests/constants/index.ts for an example
 *
 * @param {ClassCount} a
 * @param {ClassCount} b
 */
const comparatorFunc = (a: ClassCount, b: ClassCount): number => (
  b.className.length * b.count - a.className.length * a.count
);

/**
 * @summary extracts classes and returns a sorted array
 *
 * @description
 * first generates a classArray that is a list of all the classlists of the tags
 * classesCount is a record, generated by iterating over classArray and recording frequency
 * recordsArray converts the record to an array, then sorts and returns it.
 *
 * @param {Array<Element>} arr  an array of elements, generated by @see extractAllTags
 *
 * @returns {Array<ClassCount>} an array of classes, sorted by @see comparatorFunc
 */
const extractAllClasses = (arr: Array<Element>): Array<ClassCount> => {
  const classesCount: Record<string, number> = {};
  const classArray = arr.map((el) => Array.from(el.classList));

  classArray.forEach((classes) => {
    classes.forEach((c) => {
      classesCount[c] = Object.prototype.hasOwnProperty.call(classesCount, c)
        ? classesCount[c] + 1 : 1;
    });
  });

  const recordsArray: Array<ClassCount> = Object.keys(classesCount).map(
    (className: string): ClassCount => ({
      className,
      count: classesCount[className],
    }),
  );

  recordsArray.sort(comparatorFunc);
  return recordsArray;
};

export default extractAllClasses;
