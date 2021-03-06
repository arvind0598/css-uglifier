import fs from 'fs';
import path from 'path';
import { FileNotFoundError, MalformedFileError } from '../classes';

/**
 * @summary parses html to generate a Document
 *
 * @description
 * parses html content via DOMParser
 * the error handling is still not reliable for malformedfileerror
 * online examples only exist for XML documents and/or browser environments
 *
 * @throws {MalformedFileError} error during parsing
 * @throws {FileNotFoundError} file does not exist on disk
 *
 * @param {string} title of the file, without extension
 *
 * @returns {Document} if the document is succesfully parsed
 */
export const readHTMLFile = (title: string): Document | Error => {
  const htmlPath = path.join(process.cwd(), 'test', 'html', `${title}.html`);
  try {
    const htmlContent = fs.readFileSync(htmlPath, 'utf8');
    const document = new DOMParser().parseFromString(htmlContent, 'text/html');
    if (document.getElementsByTagName('parsererror').length > 0) {
      throw new MalformedFileError();
    }
    return document;
  }
  catch (err) {
    if (err.code === 'ENOENT') {
      throw new FileNotFoundError(err.path);
    }
    else {
      throw new Error(err.message);
    }
  }
};

export const readScriptFile = (title: string) => ({ title });
