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
