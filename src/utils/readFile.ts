import fs from 'fs';
import path from 'path';
import { FileNotFoundError } from '../classes';

export const readHTMLFile = (title: string): Document | Error => {
  const htmlPath = path.join(process.cwd(), 'test', 'html', `${title}.html`);
  try {
    const htmlContent = fs.readFileSync(htmlPath, 'utf8');
    const document = new DOMParser().parseFromString(htmlContent, 'text/html');
    return document;
  }
  catch ({ code, message }) {
    if (code === 'ENOENT') {
      throw new FileNotFoundError(message);
    }
    else {
      throw new Error(message);
    }
  }
};

export const readScriptFile = (title: string) => ({ title });
