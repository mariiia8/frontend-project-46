import { getData } from './parsers.js';

const genDiff = (filepath1, filepath2, format = 'stylish') => {
  const data1 = getData(filepath1);
  const data2 = getData(filepath2);
  
  return `File 1 (${filepath1}):\n${JSON.stringify(data1, null, 2)}\n\nFile 2 (${filepath2}):\n${JSON.stringify(data2, null, 2)}`;
};

export default genDiff;