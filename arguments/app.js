function greet(firstname, lastname, language, ...other) {
    if (arguments.length === 0) {
        console.log('Missing parameters');
        console.log('_________________');
        return;
    }

    console.log(firstname);
    console.log(lastname);
    console.log(language);
    console.log(arguments);
    console.log('_________________');
}

greet();
greet('John');
greet('John', 'Doe');
greet('John', 'Doe', 'en');

