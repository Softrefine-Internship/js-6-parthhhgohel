// Write a JavaScript program to implement a function that executes a given function repeatedly at a fixed interval using 'setInterval()'.

function demo(){
    console.log('softrefine');
}

function main(func, time){
    setInterval(() => {
        func();
    }, time * 1000);
};

main(demo, 2);