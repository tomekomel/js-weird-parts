(function(global, $) {
    var greetr = function(firstName, lastName, language) {
        return new greetr.init(firstName, lastName, language);
    }

    var supportedLanguages = ['en', 'es'];

    var greetings = {
        en: 'Hello',
        es: 'Hola',
    };

    var formalGreetings = {
        en: 'Greetings',
        es: 'Saludos',
    };

    var logMessages = {
        en: 'Logged in',
        es: 'Inicio sesion',
    };

    greetr.prototype = {
        fullName: function () {
            return this.firstName + ' ' + this.lastName;
        },

        validate: function () {
            if (supportedLanguages.indexOf(this.language) === -1) {
                throw "Invalid language";
            }
        },

        greeting: function () {
            return greetings[this.language] + ' ' + this.firstName + '!';
        },

        formalGreetings: function () {
            return formalGreetings[this.language] + ', ' + this.fullName() + '!';
        },

        greet: function (formal) {
            var msg;

            if (formal) {
                msg = this.formalGreetings();
            } else {
                msg = this.greeting();
            }

            if (console) {
                console.log(msg);
            }

            // 'this' refers to the calling object at execution time
            // makes the method chainable
            return this;
        },

        log: function () {
            if (console) {
                console.log(logMessages[this.language] + ': ' + this.fullName());
            }

            return this;
        },

        setLang: function (lang) {
            this.language = lang;
            this.validate();

            return this;
        },

        HTMLGreeting: function (selector, formal) {
            if (!$) {
                throw 'jQuery not loaded';
            }

            if (!selector) {
                throw 'Missing jQuery selector';
            }

            var msg;
            if (formal) {
                msg = this.formalGreetings();
            } else {
                msg = this.greeting();
            }

            $(selector).html(msg);

            return this;
        }
    };

    var init = greetr.init = function(firstName, lastName, language) {
        var self = this;
        self.firstName = firstName || 'Tom';
        self.lastName = lastName || 'Doe';
        self.language = language || 'en';
    }

    greetr.init.prototype = greetr.prototype;

    global.greetr = global.$G = greetr;
}(window, jQuery));
