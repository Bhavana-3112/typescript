//this  means->When a variable can be multiple types
//This makes sure the right function is used for the correct type.


function printValue(val: string | number) {
  if (typeof val === "string") {
    console.log("String length:", val.length);
  } else {
    console.log("Doubled number:", val * 2);
  }
}

printValue("hello"); // Output: String length: 5
printValue(10);      // Output: Doubled number: 20

//val: string | number → val can be either a string or a number.

//typeof val === "string" → if it's a string, print its length.

//Else → treat it as a number and multiply it.