const extractAllTags = (document: Document): Array<Element> => {
  const allElements = document.querySelectorAll('*');
  return Array.from(allElements);
};

export default extractAllTags;
