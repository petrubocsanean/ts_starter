"use strict";
let regexp = new RegExp('ab+c');
let array = [1, 2, 3, 4];
let set = new Set([1, 2, 3]); //used for a unique set of items. Internally it will remove any duplicates from the array.
/** A first in first ou collection */
class Queue {
    constructor() {
        this.data = [];
    }
    push(item) {
        this.data.push(item);
    }
    pop() {
        return this.data.shift();
    }
}
let queue = new Queue();
