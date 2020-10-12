let exampleAny: any;
let exampleUnknown: unknown;

//both of these types are universal types in typescript

exampleAny = 1243;
exampleAny = 'Hello';

//unknown
exampleUnknown = 1234;
exampleUnknown = 'World'

//any
exampleAny.allows.anything.you.can.imagine();
let anysetBool: boolean = exampleAny;

//unknown
//you can accept anything into uknown but u canot use it in an unsafe manner.
//if you want to use it as a string you have to check if the value is a string
if (typeof exampleUnknown == 'string') {
    exampleUnknown.trim();
}

if (typeof exampleUnknown == 'boolean') {
    let unknowSetBool: boolean = exampleUnknown;
}

/* 
unknown is a safe version of any, its still allows free access to all types
whithin the type system but does so in a safe manner.
*/