// Write a JavaScript function that fetches data from an API and retries the request a specified number of times if it fails.

let retryCount = 3;
const getJSON = function(url){
    return fetch(url).then((res) => {
        if(!res.ok){
            if(retryCount > 0){
                retryCount--;
                console.log(`${retryCount} retries left`);
                return getJSON(url);
            }
            throw new Error('Data not fetched');
        }
        return res.json();
    });
};

const main = async function(){
    const data = await getJSON('https://restcountries.com/v2/name/psdfgort').then((data) => {
        if(data.length === 0){
            throw new Error('Data not fetched');
        }
        console.log(data);
    }).catch((error) => console.log(error));
    console.log(data);
}

main();