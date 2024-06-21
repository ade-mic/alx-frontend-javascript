export const weakMap = new WeakMap();

// initialize the query count for each endpoint
weakMap.set({ endpoint: 0 });

export function queryAPI(endPoint) {
  const currentCount = weakMap.get(endPoint) || 0;
  //   check if the count exceeds the threshold of 5
  if (currentCount >= 4) {
    throw new Error('Endpoint load is high');
  } else {
    weakMap.set(endPoint, currentCount + 1);
  }
}
