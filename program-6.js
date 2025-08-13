// Write a JavaScript function that fetches data from an API and retries the request a specified number of times if it fails.

const getJSON = function(url){
    return fetch(url).then((res) => {
        if(!res.ok){
            throw new Error('Data not fetched');
        }
        return res.json();
    });
};