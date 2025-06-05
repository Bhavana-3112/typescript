
let personName: string;
personName = "Alex";
let personAge: number;
personAge = 30;
function createGreeting(name: string, age: number): string {
    let greetingMessage: string; 
    if (age < 18) {
        greetingMessage = `Hello ${name}! Hope you're having a great day at school.`;
    } else {
        greetingMessage = `Welcome, ${name}! It's good to see you. We hope you enjoy your visit.`;
    }
    return greetingMessage;
}
let myGreeting: string = createGreeting(personName, personAge);

console.log(myGreeting);

let anotherName: string = "Sam";
let anotherAge: number = 16;
let anotherGreeting: string = createGreeting(anotherName, anotherAge);
console.log(anotherGreeting);

