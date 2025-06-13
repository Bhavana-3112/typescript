class Menu {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet(): string {
        return this.greeting;
    }
};
let greeter = new Menu("Hello, welcome  to typescript");
console.log(greeter.greet());