// using Immediately Invoked Function Expression
var greetFunc = function(name) {
    return 'Hallo ' + name;
}('John');

console.log(greetFunc);

// function expression, thanks () it does not throw an error
(function(name) {
    return 'Hallo ' + name;
})