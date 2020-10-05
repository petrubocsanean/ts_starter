let regexp: RegExp = new RegExp('ab+c');

let array: Array<number> = [1,2,3,4];

let set: Set<number> = new Set([1, 2, 3]); //used for a unique set of items. Internally it will remove any duplicates from the array.

/** A first in first ou collection */
class Queue<T> {
    private data: Array<T> = [];
    push(item: T) {
        this.data.push(item);
    }

    pop() : T | undefined {
        return this.data.shift();
    }
}

let queue: Queue<number> = new Queue();

