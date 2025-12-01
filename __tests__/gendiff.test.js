import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { readFileSync } from 'fs';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => join(__dirname, '..', '__fixtures__', filename);
const readFixture = (filename) => readFileSync(getFixturePath(filename), 'utf-8');

describe('gendiff', () => {
  test('should compare flat JSON files correctly', () => {
    const filepath1 = getFixturePath('file1.json');
    const filepath2 = getFixturePath('file2.json');
    const expected = readFixture('expected_flat.txt').trim();

    const result = genDiff(filepath1, filepath2);
    expect(result).toBe(expected);
  });

  test('should compare flat YAML files correctly', () => {
    const filepath1 = getFixturePath('file1.yml');
    const filepath2 = getFixturePath('file2.yml');
    const expected = readFixture('expected_flat.txt').trim();

    const result = genDiff(filepath1, filepath2);
    expect(result).toBe(expected);
  });

  test('should throw error for unsupported format', () => {
    const filepath1 = getFixturePath('file1.txt');
    const filepath2 = getFixturePath('file2.txt');

    expect(() => genDiff(filepath1, filepath2)).toThrow();
  });
});
