export default function hansleResponseFromAPI(promise) {
  promise
    .then(() => {
      const data = { status: 200, body: 'success' };
      return (data);
    })
    .catch(() => new Error())
    .finally(() => {
      console.log('Got a response from the API');
    });
}
