//Split your code into reusable pieces.

//math.ts

export function add(a: number, b: number) {
  return a + b;
}


//main.ts

import { add } from "./math";
console.log(add(2, 3));
