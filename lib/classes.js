"use strict";
/*
JS class
class Animal {
    name;

    constructor(name) {
        this.name = name;
    }

    move(distanceInMeters) {
        console.log(`${this.name} moved ${distanceInMeters}`);
    }
}

let cat = new Animal('Cat');
cat.move(10);
*/
//TS class
class Animal {
    constructor(name) {
        this.name = name;
    }
    move(distanceInMeters) {
        console.log(`${this.name} moved ${distanceInMeters}`);
    }
}
let cat = new Animal('Cat');
cat.move(20);
//cat.name = 'Dog'; //compile error since is private
//by default all methods and props are public
//private methods are oncly accessible in the class body.
//protected methos are accessible also in the class hierarchy.
class Bird extends Animal {
    fly(distanceInMeters) {
        console.log(`${this.name} flew ${distanceInMeters}m`);
    }
}
