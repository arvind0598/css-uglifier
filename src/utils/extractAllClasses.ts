import { ClassCount } from '../types';

const comparatorFunc = (a: ClassCount, b: ClassCount): number => (
  b.className.length * b.count - a.className.length * a.count
);

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
