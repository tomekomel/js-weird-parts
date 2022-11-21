// using Immediately Invoked Function Expression
var greetFunc = function(name) {
    return 'Hallo ' + name;
}('John');

console.log(greetFunc);

// function expression, thanks () it does not throw an error
var firstname = 'Tom';
(function(name) {
    console.log('Hallo ' + name);
}(firstname))