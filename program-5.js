// Write a JavaScript function that fetches data from multiple APIs concurrently and returns a combined result using Promises and 'Promise.all()'.

const getJSON = function (url){
    return fetch(url).then((res) => {
        if(!res.ok){
            throw new Error('response was not ok');
        }
        return res.json();
    }).catch((err) => console.log('Your error is : ', err));
};

function main(){
    const data = Promise.all([
        getJSON('https://restcountries.com/v2/name/china'),
        getJSON('https://restcountries.com/v2/name/portugal'),
        getJSON('https://restcountries.com/v2/name/usa')
    ]);

    data.then((data) => {
        const result = data.map((item) => {
            return item[0].name;
        });
        console.log(result);
    });
};

main();