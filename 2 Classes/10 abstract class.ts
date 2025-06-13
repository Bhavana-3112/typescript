//abstract class--> a class that cannot be use directly to create an object
abstract class AbstractAnimal {
  // abstract method
  abstract makeSound(): void;

  // regular method
  move(): void {
    console.log("The animal moves");
  }
}

class AbstractDog extends AbstractAnimal {
  makeSound(): void {
    console.log("Woof!");
  }
}

const abstractDog = new AbstractDog();
abstractDog.makeSound(); // Woof!
abstractDog.move();      // The animal moves
