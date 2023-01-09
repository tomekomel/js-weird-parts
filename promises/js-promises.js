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

async function doAllTheWork() {
    const someText = new Promise(doWork);
    const text1 = await someText;
    console.log(text1);

    const otherText = new Promise(doOtherWork);
    const text2 = await otherText;
    console.log(text2);
}

doAllTheWork();
console.log("Done!");
