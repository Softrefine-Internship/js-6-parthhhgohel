// Write a JavaScript a function that makes an HTTP GET request and returns a Promise that resolves with the response data.

const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const requestData = function(lat, lng){
    const httpReq = new XMLHttpRequest();
    httpReq.open('GET', `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`);
    httpReq.send();

    return new Promise(function(resolve, reject){
        httpReq.onload = function(){
            if(httpReq.status === 200){
                const data = JSON.parse(httpReq.responseText);
                resolve(data);
            }
        };
    });
};

requestData(52.508, 13.381).then((data) => {
    console.log(data.city);
});