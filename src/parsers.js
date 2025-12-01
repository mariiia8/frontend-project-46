import { readFileSync } from 'fs';
import { extname, resolve } from 'path';
import yaml from 'js-yaml';

const getAbsolutePath = (filepath) => resolve(process.cwd(), filepath);

const readFile = (filepath) => {
  const absolutePath = getAbsolutePath(filepath);
  return readFileSync(absolutePath, 'utf-8');
};

const parse = (content, format) => {
  switch (format) {
    case '.json':
      return JSON.parse(content);
    case '.yml':
    case '.yaml':
      return yaml.load(content);
    default:
      throw new Error(`Unsupported format: ${format}`);
  }
};

const getData = (filepath) => {
  const content = readFile(filepath);
  const format = extname(filepath);
  return parse(content, format);
};

export default getData;
