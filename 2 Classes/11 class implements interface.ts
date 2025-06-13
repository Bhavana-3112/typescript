//class implements interface-->a class can implement an interface to ensure it adheres to a specific structure.

//interface -->any class that uses  must have these properties or methods

interface IWorker {
  name: string;
  work(): void;
}

class Engineer implements IWorker {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  work(): void {
    console.log(`${this.name} is coding`);
  }
}

const emp = new Engineer("Kookie");
emp.work(); // Kookie is coding
