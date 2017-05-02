"use strict";

var Bar = function () {
    console.log('instantiating a new bar object');
    this.message = "I am a foo object";
};

Bar.prototype.hello = function () {
    console.log(this.message);
};
