var person = {
    firstName: 'John',
    lastName: 'Doe',
    getFullName: function() {
        var fullName = this.firstName + ' ' + this.lastName;
        return fullName;
    }
}

var logName = function(lang1, lang2) {
    console.log('Logged: ' + this.getFullName());
    console.log('Arguments: ' + lang1 + ' ' + lang2);
    console.log('____________________');
}

var logPersonName = logName.bind(person);

logPersonName('en');

logName.call(person, 'en', 'ua');
logName.apply(person, ['en', 'sk']);

(function (lang1, lang2) {
    console.log('Logged: ' + this.getFullName());
    console.log('Arguments: ' + lang1 + ' ' + lang2);
    console.log('____________________');
}).apply(person, ['ru', 'fi']);

// function borrowing
var person2 = {
    firstName: 'Jane',
    lastName: 'Doe',
}

console.log(person.getFullName.apply(person2));

// function currying
function multiply(a, b) {
    return a*b;
}

var multipleByTwo = multiply.bind(this, 2);
console.log(multipleByTwo(4));
