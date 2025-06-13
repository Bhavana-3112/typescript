//inherited-->one class can inherit from another class
//using the extends keyword

class Animal {
  makeSound(): void {
    console.log("Some generic animal sound");
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log("Bark");
  }
}

class Cat extends Animal {
  makeSound(): void {
    console.log("Meow");
  }
}

const dog = new Dog();
const cat = new Cat();

dog.makeSound(); // Bark
cat.makeSound(); // Meow