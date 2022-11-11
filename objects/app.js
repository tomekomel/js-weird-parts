var person = new Object();

person["firstName"] = "Tony";
person["lastName"] = "Kovalczyk";

var firstNameKey = "firstName";

console.log(person[firstNameKey]);
console.log(person.firstName);
console.log(person.lastName);

person.address = new Object();
person.address.street = "121 street";

console.log(person);

var anotherPerson = {
    firstName: 'Joanna',
    lastName: 'Johnson',
    address: {
        street: '1 av',
        city: 'NY',
    },
};

console.log(anotherPerson);

function greet(person) {
    console.log('Hello ' + person.firstName);
}

greet(person);
greet({ firstName: 'Mark', lastName: 'Caven' });
