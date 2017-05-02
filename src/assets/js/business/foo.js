'use strict';

var Foo = function () {
    console.log('instantiating a new bar object');
    this.message = "I am a foo object";
};

Foo.prototype.hello = function () {
    console.log(this.message);
};
