class FIFOQueue<T> {
    data: T[] = [];

    push(item: T) {
        this.data.push(item);
    }

    pop(): T {
        return this.data.shift()!;
    }
}

const fifoQueue = new FIFOQueue<number>();
fifoQueue.push(123);
fifoQueue.push(456);

console.log(queue.pop()?.toPrecision(1));
