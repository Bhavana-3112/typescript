//static properties and methods

// Static properties and methods are accessed on the class itself, not on instances of the class.
class MathUtils {
  static PI: number = 3.14;

  static calculateCircumference(radius: number): number {
    return 2 * MathUtils.PI * radius;
  }
}

console.log(MathUtils.PI); // 3.14
console.log(MathUtils.calculateCircumference(5)); // 31.400000000000002
