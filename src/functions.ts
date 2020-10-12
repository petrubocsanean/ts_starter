function add(a: number, b: number): number {
    return a + b;
}


function log(message: string): void {
    console.log('LOG:', message);
}

function sum(...values: number[]) {
    return values.reduce((previous, current) => {
        return previous + current;
    });
}


//first class functions

let addFunc: (a: number, b: number) => number;

addFunc = function (a: number, b: number): number {
    return a + b;
}

//we can create function types
type Add = (a: number, b: number) => number;

let addFunc2L: Add;