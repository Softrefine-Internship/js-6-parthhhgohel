// Write a JavaScript function that fetches data from an API and cancels the request if it takes longer than a specified time.

function fetchData(url, timeout = 5000) {

  // NOT in a given tutorial but learnt from Mdn documentation
  const controller = new AbortController();
  const signal = controller.signal;

  const timeoutId = setTimeout(() => {
    controller.abort();
  }, timeout);

  return fetch(url, { signal })
    .then(response => {
      clearTimeout(timeoutId);
      return response.json();
    })
    .catch(error => {
      if (error.name === 'AbortError') {
        console.log('Request timed out');
      } else {
        console.error(error);
      }
    });
}

fetchData('https://restcountries.com/v2/name/portugal', 100)
  .then(data => console.log(data))
  .catch(error => console.error(error));