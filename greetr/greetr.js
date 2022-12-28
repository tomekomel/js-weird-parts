(function(global, $) {
    var greetr = function(firstName, lastName, language) {
        return new greetr.init(firstName, lastName, language);
    }

    greetr.prototype = {};

    var init = greetr.init = function(firstName, lastName, language) {
        var self = this;
        self.firstName = firstName || 'Tom';
        self.lastName = lastName || 'Doe';
        self.language = language || 'en';
    }

    greetr.init.prototype = greetr.prototype;

    global.greetr = global.$G = greetr;
}(window, jQuery));
