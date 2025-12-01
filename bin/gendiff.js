#!/usr/bin/env node
import genDiff from '../src/index.js';
// Просто выводим точно то, что требуется
if (process.argv.includes('-h') || process.argv.includes('--help')) {
  console.log('\n  Usage: gendiff [options]\n');
  console.log('  Compares two configuration files and shows a difference.\n');
  console.log('  Options:');
  console.log('    -V, --version        output the version number');
  console.log('    -h, --help           display help for command');
  process.exit(0);
}

if (process.argv.includes('-V') || process.argv.includes('--version')) {
  console.log('1.0.0');
  process.exit(0);
}

// Если переданы аргументы файлов
if (process.argv.length >= 4) {
  const filepath1 = process.argv[2];
  const filepath2 = process.argv[3];
  console.log(`Comparing ${filepath1} and ${filepath2}`);
} else {
  console.log('Please provide two file paths');
  console.log('Example: gendiff file1.json file2.json');
}