//If you declare an interface with the same name more than once, TypeScript merges them

interface Person {
  name: string;
}
interface Person {
  age: number;
}

//now we can do as:

const use: Person = { name: "Raj", age: 30 };
