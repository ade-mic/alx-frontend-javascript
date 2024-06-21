export const weakMap = new WeakMap();

// initialize the query count for each endpoint 
weakMap.set({ endpoint: 0 });

export function queryAPI(endPoint) {
  const currentCount = weakMap.get(endPoint) || 0;
  weakMap.set(endPoint, currentCount + 1);

  //   check if the count exceeds the threshold of 5
  if (currentCount >= 5) {
    throw new Error('EndPoint load is high');
  }
}
