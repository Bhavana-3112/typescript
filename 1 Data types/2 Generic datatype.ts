//generic function--->helps in reuseable code
function box<T>(value: T): T {
    console.log(value);
    return value;
}

box("Hello, World!"); // string
box(42); // number


//normal function
function normalFunction(value:string): string {
    console.log(value);
    return value;
}
