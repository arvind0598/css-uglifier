
import extractAllClasses from '../src/utils/extractAllClasses';
import extractAllTags from '../src/utils/extractAllTags';
import { readHTMLFile } from '../src/utils/readFile';
import { BASIC_HTML_CLASSES } from './constants';

describe('extracting classes from basic html', () => {
  const document = readHTMLFile('basic');
  const tags = extractAllTags(document);
  const result = extractAllClasses(tags);

  test('extracted classes are accurate', () => {
    expect(result).toStrictEqual(BASIC_HTML_CLASSES);
  });
});
