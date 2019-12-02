
import extractAllTags from '../src/utils/extractAllTags';
import { readHTMLFile } from '../src/utils/readFile';

describe('reading the basic html', () => {
  const document = readHTMLFile('basic');
  const result = extractAllTags(document);

  test('extracted tags are returned as an array', () => {
    expect(result).toBeInstanceOf(Array);
  });

  test('there are 7 elements in the file', () => {
    expect(result.length).toBe(7);
  });

  test('check if all elements are of type HTMLElement', () => {
    result.forEach((element) => expect(element).toBeInstanceOf(HTMLElement));
  });
});

describe('reading incomplete error html', () => {
  const document = readHTMLFile('incomplete-error');
  const result = extractAllTags(document);

  test('extracted tags are returned as an array', () => {
    expect(result).toBeInstanceOf(Array);
  });

  test('there are 4 elements in the file', () => {
    expect(result.length).toBe(4);
  });
});

describe('reading file that does not exist', () => {
  const filename = 'does-not-exist';

  test('should throw an error', () => {
    expect(() => readHTMLFile(filename)).toThrowError(/ENOENT/);
  });
});
