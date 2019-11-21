const extractAllClasses = (arr: Array<Element>): Record<string, number> => {
  const classesCount: Record<string, number> = {};
  const classArray = arr.map((el) => Array.from(el.classList));

  classArray.forEach((classes) => {
    classes.forEach((c) => {
      classesCount[c] = Object.prototype.hasOwnProperty.call(classesCount, c)
        ? classesCount[c] + 1 : 1;
    });
  });

  return classesCount;
};

export default extractAllClasses;
