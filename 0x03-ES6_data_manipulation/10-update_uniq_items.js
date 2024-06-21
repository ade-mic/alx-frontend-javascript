export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new TypeError('Cannot process');
  } else {
    map.forEach((value, key) => {
      if (value === 1) {
        try {
          map.set(key, 100);
        } catch (error) {
          console.error('Cannot process');
        }
      }
    });
  }
}
