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

for (var prop in john) {
    if (john.hasOwnProperty(prop)) {
        console.log(prop + ": " + john[prop]);
    }
}

var jane = {
    firstname: 'Jane',
}

jane.__proto__ = person;
console.log(jane.getName());

var alex = {
    address: 'Main Street 111',
    getFormalFullName: function () {
        return this.firstname + ", " + this.lastname;
    }
}

var jim = {
    getFirstName: function () {
        return this.firstname;
    }
}

_.extend(john, alex, jim);

console.log(john);
