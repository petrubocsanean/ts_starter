"use strict";
class FIFOQueue {
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
const fifoQueue = new FIFOQueue();
fifoQueue.push(123);
fifoQueue.push(456);
console.log(queue.pop()?.toPrecision(1));
