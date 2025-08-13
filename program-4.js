// Write a JavaScript program that implements a function that performs a series of asynchronous operations in sequence using 'async/await'.

// note: here async operations refers to async functions. your task is to write multiple async functions using promises and call them in sequence in a function using async/await

const promises = function (msg) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve("successfully : " + msg);
    }, 1000);
  });
};

const main = async function () {
  const read = await promises('reading');
  console.log(read);

  const write = await promises('writing');
  console.log(write);

  const burn = await promises('burning');
  console.log(burn);
};

main();