const extractAllTags = (document: Document | Error): Array<Element> => {
  if (document instanceof Error) return [];
  const allElements = document.querySelectorAll('html, body, body *');
  return Array.from(allElements);
};

export default extractAllTags;
