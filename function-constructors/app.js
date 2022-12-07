function Person(firstname, lastname) {
    console.log(this);
    this.firstname = firstname;
    this.lastname = lastname;
    console.log('This is function is invoked.');
}

Person.prototype.getFormalFullName = function () {
    return this.firstname + ' ' + this.lastname;
}

var john = new Person('John', 'Doe');
console.log(john);

var jim = new Person('Jim', 'Carter');
console.log(jim);
console.log(jim.getFormalFullName());

String.prototype.isLengthGreaterThenLimit = function (limit) {
    return this.length > limit;
}

console.log("John".isLengthGreaterThenLimit(3));

Number.prototype.isPositive = function () {
    return this > 0;
}

console.log(new Number(5).isPositive());

// this creates an object
var c = new Number(3);
// this creates a primitive
var d = Number(3);

console.log(c, d);
