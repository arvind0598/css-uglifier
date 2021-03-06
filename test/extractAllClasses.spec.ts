
import extractAllClasses from '../src/utils/extractAllClasses';
import extractAllTags from '../src/utils/extractAllTags';
import { readHTMLFile } from '../src/utils/readFile';
import { BASIC_HTML_CLASS_LIST, MULTIPLE_CLASSES_CLASS_LIST } from './constants';

describe('extracting classes from basic html', () => {
  const document = readHTMLFile('basic');
  const tags = extractAllTags(document);
  const result = extractAllClasses(tags);

  test('extracted classes are accurate', () => {
    expect(result).toStrictEqual(BASIC_HTML_CLASS_LIST);
  });
});

describe('extracting classes from multiple classes html', () => {
  const document = readHTMLFile('multiple-classes');
  const tags = extractAllTags(document);
  const result = extractAllClasses(tags);

  test('extracted classes are accurate', () => {
    expect(result).toStrictEqual(MULTIPLE_CLASSES_CLASS_LIST);
  });
});
