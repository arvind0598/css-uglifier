import extractAllClasses from '../src/utils/extractAllClasses';
import extractAllTags from '../src/utils/extractAllTags';
import remapClasses from '../src/utils/remapClasses';
import { readHTMLFile } from '../src/utils/readFile';
import { BASIC_HTML_CLASS_MAP, MULTIPLE_CLASSES_CLASS_MAP } from './constants';

describe('remapping classes from basic html', () => {
  const document = readHTMLFile('basic');
  const tags = extractAllTags(document);
  const classes = extractAllClasses(tags);
  const result = remapClasses(classes);

  test('mapped classes are accurate', () => {
    expect(result).toStrictEqual(BASIC_HTML_CLASS_MAP);
  });
});

describe('remapping classes from multiple classes html', () => {
  const document = readHTMLFile('multiple-classes');
  const tags = extractAllTags(document);
  const classes = extractAllClasses(tags);
  const result = remapClasses(classes);

  test('mapped classes are accurate', () => {
    expect(result).toStrictEqual(MULTIPLE_CLASSES_CLASS_MAP);
  });
});
