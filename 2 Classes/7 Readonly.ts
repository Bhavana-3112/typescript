//once set, cannot be changed
class Book {
  readonly title: string;

  constructor(title: string) {
    this.title = title;
  }
}
const book = new Book("The Great Gatsby");
console.log(book.title); // The Great Gatsby
