console.log(this);

function a() {
    console.log(this);
    this.newVariable = 'hello';
}

var b = function () {
    console.log(this);
}

a();
console.log(newVariable);
b();

var c = {
    name: 'The c object',
    log: function() {
        var self = this;

        self.name = 'Updated c object';
        console.log(this);

        var setname = function (newname) {
            // this points to the global object
            self.name = newname;
        }
        setname('Updated again! The c object');
        console.log(self);
    }
}

c.log();
