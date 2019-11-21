
import extractAllTags from '../src/utils/extractAllTags';
import { readHTMLFile } from '../src/utils/readFile';

describe('reading the basic html', () => {
  const document = readHTMLFile('basic');
  const result = extractAllTags(document);

  test('extracted tags are returned as an array', () => {
    expect(result).toBeInstanceOf(Array);
  });

  test('there are 12 elements in the file', () => {
    expect(result.length).toBe(12);
  });

  test('check if all elements are of type HTMLElement', () => {
    result.forEach((element) => expect(element).toBeInstanceOf(HTMLElement));
  });
});
