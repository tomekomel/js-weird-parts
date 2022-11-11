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
