//interface-->>
interface UserInterface {
  name: string;
  age: number;
  isAdmin?: boolean; // optional
}

const user1: UserInterface = {
  name: "Nani",
  age: 25
};

// Using the interface to define a function parameter
function greetUser(user: UserInterface): void {
  console.log(`Hello, ${user.name}. You are ${user.age} years old.`);
}

greetUser(user1);
// Using the interface with a class
class AppUser implements UserInterface {
  name: string;
  age: number;
  isAdmin?: boolean;

  constructor(name: string, age: number, isAdmin?: boolean) {
    this.name = name;
    this.age = age;
    this.isAdmin = isAdmin;
  }

  greet(): void {
    console.log(`Hello, ${this.name}. You are ${this.age} years old.`);
  }
}