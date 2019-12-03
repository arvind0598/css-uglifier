import { ClassCount } from '../../src/types';
import BASIC_DATA from '../data/BASIC_DATA.json';
import MULTIPLE_CLASS_DATA from '../data/MULTIPLE_CLASS_DATA.json';

export const BASIC_HTML_CLASS_LIST:
Array<ClassCount> = BASIC_DATA.PRETTY_CLASS_LIST;

export const BASIC_HTML_CLASS_MAP:
Record<string, string> = BASIC_DATA.UGLY_CLASS_LIST;

export const MULTIPLE_CLASSES_CLASS_LIST:
Array<ClassCount> = MULTIPLE_CLASS_DATA.PRETTY_CLASS_LIST;

export const MULTIPLE_CLASSES_CLASS_MAP:
Record<string, string> = MULTIPLE_CLASS_DATA.UGLY_CLASS_LIST;
