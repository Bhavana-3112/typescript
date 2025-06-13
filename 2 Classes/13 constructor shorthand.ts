//constructor -->a special method that is called when an object is created from a class. 

// without shorthand (long way)
class Stud {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}


//with shorthand

class Stu {
  constructor(public name: string, public age: number) {}
}

//it does exactly  the same thing --butt just in one line

const s = new Stu("Nani", 25);  // create an object from the class
s.name;  // Nani    
s.age;   // 25
console.log(`Name: ${s.name}, Age: ${s.age}`);