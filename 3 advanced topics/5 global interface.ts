//In TypeScript, if you define an interface without using export inside a module, it becomes global.
//  This means it is automatically visible everywhere, and can be merged unintentionally.

// File A
interface Person {
  name: string;
}

// File B
interface Person {
  age: number;
}

// Now 'Person' has both 'name' and 'age' — even if you didn't mean to!
const p: Person = {
  name: "Raj",
  age: 25
};

//Leads to hard-to-debug type errors.
//Not safe for large or team-based projects.

//so, best practice:
// user.ts
export interface User {
  name: string;
  age: number;
}

// main.ts
import { User } from "./user";
