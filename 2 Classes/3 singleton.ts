
//The Singleton pattern is used when you want to make sure that only one object of a class can ever exist in your program.
class Singleton {
  private static instance: Singleton;

  private constructor() {}

  static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }
}
// Usage
const singleton1 = Singleton.getInstance(); // Get the singleton instance
const singleton2 = Singleton.getInstance(); // Get the same instance    
console.log(singleton1 === singleton2); // true, both are the same instance