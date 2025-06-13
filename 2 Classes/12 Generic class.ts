//generic-->means a class that works with any type

class Box<T> {
  content: T;

  constructor(content: T) {
    this.content = content;
  }

  getContent(): T {
    return this.content;
  }
}

const numberBox = new Box<number>(100);
const stringBox = new Box<string>("hello");
