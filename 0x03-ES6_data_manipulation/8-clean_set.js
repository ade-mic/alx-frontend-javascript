export default function cleanSet(set, startString) {
  if (startString !== '') {
    const filteredValues = [...set].map((value) => {
      if (value.startsWith(startString)) {
        const newValue = value.substr(startString.length);
        return newValue;
      }
      return '';
    });
    const hyphenated = filteredValues.join('-');
    return hyphenated.replace(/-$/, '');
  }
  return '';
}
