//  Write a JavaScript function that takes an array of URLs and downloads the contents of each URL in parallel using Promises.

// const fetch = require('node-fetch');

const getJSON = function(url){
    return fetch(url).then((response) => response.json()).catch((error) => console.log(error));
}
const main = async function(){
    const data = await Promise.all([
        getJSON('https://restcountries.com/v2/name/portugal'),
        getJSON('https://restcountries.com/v2/name/usa'),
        getJSON('https://restcountries.com/v2/name/china'),
        getJSON('https://restcountries.com/v2/name/bharat'),
    ]);

    data.forEach((item) => {
        console.log(item[0].name);
    });
}

main();