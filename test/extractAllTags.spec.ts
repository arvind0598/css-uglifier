
import extractAllTags from '../src/utils/extractAllTags';
import { readHTMLFile } from '../src/utils/readFile';
import { FileNotFoundError } from '../src/classes';

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

// https://github.com/Cauterite/domparser-tests/blob/master/xmlts20080827/sun/sun-error.xml
// describe('reading weird xml', () => {
//   const filename = 'sun-error';

//   test('should throw an error', () => {
//     expect(() => readHTMLFile(filename)).toThrowError(FileNotFoundError);
//   });
// });

describe('reading file that does not exist', () => {
  const filename = 'does-not-exist';

  test('should throw an error', () => {
    expect(() => readHTMLFile(filename)).toThrowError(FileNotFoundError);
  });

  test('should show correct file as path', () => {
    expect(() => readHTMLFile(filename)).toThrowError(filename);
  });
});
