import _ from 'lodash';
import getData from './parsers.js';

const buildDiff = (data1, data2) => {
  const keys1 = Object.keys(data1);
  const keys2 = Object.keys(data2);
  const allKeys = _.union(keys1, keys2);
  const sortedKeys = _.sortBy(allKeys);

  return sortedKeys.map((key) => {
    if (!_.has(data1, key)) {
      return { key, value: data2[key], type: 'added' };
    }
    if (!_.has(data2, key)) {
      return { key, value: data1[key], type: 'deleted' };
    }
    if (_.isEqual(data1[key], data2[key])) {
      return { key, value: data1[key], type: 'unchanged' };
    }
    return {
      key,
      value1: data1[key],
      value2: data2[key],
      type: 'changed',
    };
  });
};

const formatDiff = (diff) => {
  const lines = diff.map((item) => {
    switch (item.type) {
      case 'added':
        return `  + ${item.key}: ${item.value}`;
      case 'deleted':
        return `  - ${item.key}: ${item.value}`;
      case 'unchanged':
        return `    ${item.key}: ${item.value}`;
      case 'changed':
        return `  - ${item.key}: ${item.value1}\n  + ${item.key}: ${item.value2}`;
      default:
        return '';
    }
  });
  return `{\n${lines.join('\n')}\n}`;
};

const genDiff = (filepath1, filepath2) => {
  const data1 = getData(filepath1);
  const data2 = getData(filepath2);
  const diff = buildDiff(data1, data2);
  return formatDiff(diff);
};

export default genDiff;
