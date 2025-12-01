#!/usr/bin/env node
import { Command } from 'commander';
import genDiff from '../src/index.js';

const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0', '-V, --version', 'output the version number')
  .option('-f, --format [type]', 'output format', 'stylish')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2, options) => {
    try {
      const diff = genDiff(filepath1, filepath2, options.format);
      console.log(diff);
    } catch (error) {
      console.error(`Error: ${error.message}`);
      process.exit(1);
    }
  });

program.showHelpAfterError('(add --help for additional information)');

if (process.argv.includes('-h') || process.argv.includes('--help')) {
  console.log('\n  Usage: gendiff [options] <filepath1> <filepath2>\n');
  console.log('  Compares two configuration files and shows a difference.\n');
  console.log('  Options:');
  console.log('    -V, --version        output the version number');
  console.log('    -f, --format [type]  output format');
  console.log('    -h, --help           display help for command');
  process.exit(0);
}

program.parse(process.argv);
