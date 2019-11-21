import fs from 'fs';
import path from 'path';

export const readHTMLFile = (title: string): Document => {
  const htmlPath = path.join(process.cwd(), 'test', 'html', `${title}.html`);
  const htmlContent = fs.readFileSync(htmlPath, 'utf8');
  const document = new DOMParser().parseFromString(htmlContent, 'text/html');
  return document;
};

export const readScriptFile = (title: string) => ({ title });
