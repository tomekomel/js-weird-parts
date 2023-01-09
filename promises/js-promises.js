const doWork = (resolve, reject) => {
    setTimeout(() => {
        resolve("Hello World!");
    }, 1000);
}

const doOtherWork = (resolve, reject) => {
    setTimeout(() => {
        resolve("How are You?");
    }, 3000);
}

let someText = new Promise(doWork);

// here we are not adding tow different handlers to one promise,
// we are adding second handler to new promise returned by first handler
// then function always returns a promise
someText.then((val) => {
    console.log("1st log: " + val);
    return new Promise(doOtherWork);
}).then((value) => {
    console.log(value);
});
