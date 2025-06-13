//type assertions-->it is a way to tell the TypeScript compiler that you know more about the type of a value than it does. It allows you to override the type inference of the compiler and specify a more specific type for a value.

// Type assertions are useful when you have more information about the type of a value than TypeScript can infer. They can be used to tell the compiler that a value is of a certain type, even if it cannot determine that type on its own.
// Type assertions can be done using the `as` keyword or the angle-bracket syntax. The `as` keyword is preferred in modern TypeScript code, as it is more readable and less prone to conflicts with JSX syntax.
// Example of type assertions in TypeScript

let someValue: any = "Hello World";

// Way 1: Using angle brackets
let strLength: number = (<string>someValue).length;

// Way 2: Using `as` keyword (recommended)
let strLength2: number = (someValue as string).length;
// Output the lengths
console.log(strLength);  // Output: 11
console.log(strLength2); // Output: 11