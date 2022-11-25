var person = {
    firstname: 'Default',
    lastname: 'Default',
    getName: function () {
        return this.firstname + ' ' + this.lastname;
    }
}

var john = {
    firstname: 'John',
    lastname: 'Doe',
}

// don't do this Ever! For demo purposes
john.__proto__ = person;
console.log(john.getName());

var jane = {
    firstname: 'Jane',
}

jane.__proto__ = person;
console.log(jane.getName());
