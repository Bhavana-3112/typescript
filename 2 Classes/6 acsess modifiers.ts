//the access modifiers in TypeScript
//the keywords control who can access the members of a class

//public:anyone can acess
//private:only inside the class
//protected:only inside the class and subclasses

class PersonWithAccessModifiers {
  //public
  public name: string;
  //private
  private age: number;
  //protected
  protected address: string;

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  public getAge(): number {
    return this.age;
  }

  protected getAddress(): string {
    return this.address;
  }
}

const personWithAccess = new PersonWithAccessModifiers("Nani", 25, "123 Main St");
console.log(personWithAccess.name); // Accessible
console.log(personWithAccess.getAge()); // Accessible
// console.log(personWithAccess.age); // Error: Property 'age' is private and only accessible within class 'PersonWithAccessModifiers'.
// console.log(personWithAccess.address); // Error: Property 'address' is protected and only accessible within class 'PersonWithAccessModifiers' and its subclasses.