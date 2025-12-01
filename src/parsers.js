import { readFileSync } from 'fs';
import { extname, resolve } from 'path';

const getAbsolutePath = (filepath) => {
  return resolve(process.cwd(), filepath);
};

const readFile = (filepath) => {
  const absolutePath = getAbsolutePath(filepath);
  return readFileSync(absolutePath, 'utf-8');
};

const parse = (content, format) => {
  if (format === '.json') {
    return JSON.parse(content);
  }
  throw new Error(`Unsupported format: ${format}. Currently only JSON is supported.`);
};

export const getData = (filepath) => {
  const content = readFile(filepath);
  const format = extname(filepath);
  return parse(content, format);
};