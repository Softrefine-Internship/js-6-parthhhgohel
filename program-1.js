// Write a JavaScript function that takes a callback and invokes it after a delay of 2 second.

function callBackFun(func){
    setTimeout(() => {
        func();
    }, 2000);
};

function actualFun(){
    console.log('softrefine');
}

callBackFun(actualFun);