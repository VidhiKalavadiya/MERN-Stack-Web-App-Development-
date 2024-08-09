// Base class for books
class Book {
  constructor(title, author, isbn) {
      this.title = title;
      this.author = author;
      this.isbn = isbn;
  }

  getDetails() {
      return `${this.title} by ${this.author}, ISBN: ${this.isbn}`;
  }
}

// Derived class for Fiction books
class Fiction extends Book {
  constructor(title, author, isbn, genre) {
      super(title, author, isbn);
      this.genre = genre;
  }

  getDetails() {
      return `${super.getDetails()}, Genre: ${this.genre}`;
  }
}

// Derived class for Non-Fiction books
class NonFiction extends Book {
  constructor(title, author, isbn, subject) {
      super(title, author, isbn);
      this.subject = subject;
  }

  getDetails() {
      return `${super.getDetails()}, Subject: ${this.subject}`;
  }
}

// Derived class for Reference books
class Reference extends Book {
  constructor(title, author, isbn, field) {
      super(title, author, isbn);
      this.field = field;
  }

  getDetails() {
      return `${super.getDetails()}, Field: ${this.field}`;
  }
}

// Library class to manage books
class Library {
  constructor() {
      this.books = [];
  }

  addBook(book) {
      this.books.push(book);
  }

  listBooks() {
      return this.books.map(book => book.getDetails()).join('\n');
  }

  findBook(isbn) {
      return this.books.find(book => book.isbn === isbn);
  }
}

// Create a new library
const library = new Library();

// Add books to the library
const book1 = new Fiction('The Great Gatsby', 'F. Scott Fitzgerald', '9780743273565', 'Classic');
const book2 = new NonFiction('Sapiens', 'Yuval Noah Harari', '9780062316097', 'History');
const book3 = new Reference('Encyclopedia of Science', 'DK', '9781465462426', 'Science');

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

// List all books in the library
console.log('Books in the library:');
console.log(library.listBooks());

// Find a book by ISBN
const isbnToFind = '9780062316097';
const foundBook = library.findBook(isbnToFind);
console.log(`\nFound book with ISBN ${isbnToFind}:`);
console.log(foundBook ? foundBook.getDetails() : 'Book not found');
