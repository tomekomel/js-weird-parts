function greet() {
    console.log('Greetings!');
}

greet.lanaguage = 'English';

console.log(greet.lanaguage);

greet();

function greet() {
    console.log('hi');
}

var anonymousGreet = function() {
    console.log('hi');
}

anonymousGreet();

function log(a) {
    a();
}

log(function () {
    console.log('hi!');
});

