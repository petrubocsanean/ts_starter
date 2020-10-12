"use strict";
function add(a, b) {
    return a + b;
}
function log(message) {
    console.log('LOG:', message);
}
function sum(...values) {
    return values.reduce((previous, current) => {
        return previous + current;
    });
}
//first class functions
let addFunc;
addFunc = function (a, b) {
    return a + b;
};
let addFunc2L;
