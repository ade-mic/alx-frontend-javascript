// 8-clean_set.js

export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string' || startString.length === 0) {
    return '';
  }

  const filteredValues = [];

  for (const value of set) {
    if (value.startsWith(startString)) {
      filteredValues.push(value.slice(startString.length));
    }
  }

  return filteredValues.join('-');
}
