const extractAllTags = (document: Document): Array<Element> => {
  const allElements = document.querySelectorAll('html, body, body *');
  return Array.from(allElements);
};

export default extractAllTags;
