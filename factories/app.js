function makeGreetings(language) {
    return function (firstName, lastName) {
        if (language === 'en') {
            console.log('Hello ' + firstName + ' ' + lastName);
        }

        if (language === 'es') {
            console.log('Hola ' + firstName + ' ' + lastName);
        }
    };
}

var greetEnglish = makeGreetings('en');
var greetSpanish = makeGreetings('es');

greetEnglish('John', 'Doe');
greetSpanish('John', 'Doe');
