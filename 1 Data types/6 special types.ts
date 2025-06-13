// any-->we can assign anyyhing to it, and it can be anything
let anyVariable: any = 5;
anyVariable = "Hello"; // No error
anyVariable = true; // No error
anyVariable = { key: "value" }; // No error


// unknown-->we can assign anything to it, but we cannot use it until we check its 
let value:unknown="Hello";
if (typeof value === "string") {
    console.log(value.toUpperCase()); // No error, value is confirmed to be a string
}


// never-->it is used to indicate that a function will never return, or a variable will never have a value
function throwError(): never {
  throw new Error("Something went wrong!");
}


//void-->this means function does not return anything
function sayHello(): void {
  console.log("Hello!");
}

let result = sayHello(); // result is undefined
