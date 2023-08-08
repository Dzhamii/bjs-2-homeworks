class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this.state = 100;
      this.type = null;
    }
  
    fix() {
      this.state *= 1.5;
    }
  
    set state(newState) {
      if (newState < 0) {
        this._state = 0;
      } else if (newState > 100) {
        this._state = 100;
      } else {
        this._state = newState;
      }
    }
  
    get state() {
      return this._state;
    }
  }
  
  class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.type = "magazine";
    }
  }
  
  class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.author = author;
      this.type = "book";
      
    }
  }
  
  class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = "novel";
    }
  }
  
  class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = "fantastic";
    }
  }
  
  class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = "detective";
    }
  }
  
  const sherlock = new PrintEditionItem(
    "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
    2019,
    1008
  );
  
  console.log(sherlock.releaseDate); 
  console.log(sherlock.state);
  sherlock.fix();
  console.log(sherlock.state); 
  
  const cosmopolitan = new Magazine("Cosmopolitan", 2021, 120);
  console.log(cosmopolitan.name);
  console.log(cosmopolitan.pagesCount);
  console.log(cosmopolitan.type);
  
  const warAndPeace = new NovelBook("Война и мир", 1869, 1225, "Лев Толстой");
  console.log(warAndPeace.author); 
  console.log(warAndPeace.type); 







  class Library {
    constructor(name) {
      this.name = name;
      this.books = [];
    }
  
    addBook(book) {
      if (book.state > 30) {
        this.books.push(book);
      }
    }
  
    findBookBy(key, value) {
      const foundBook = this.books.find(book => book[key] === value);
      return foundBook || null;
    }
  
    giveBookByName(bookName) {
        const book = this.findBookBy("name", bookName);
        if (!book) return null;
        this.books = this.books.filter((item) => item.name !== bookName);
        return book;
      }
  }
  
  const library = new Library("Библиотека имени Ленина");
  
  library.addBook(
    new DetectiveBook(
      "Артур Конан Дойл",
      "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
      2019,
      1008
    )
  );
  library.addBook(
    new FantasticBook(
      "Аркадий и Борис Стругацкие",
      "Пикник на обочине",
      1972,
      168
    )
  );
  library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
  library.addBook(new Magazine("Мурзилка", 1924, 60));
  
  console.log(library.findBookBy("name", "Властелин колец")); 
  console.log(library.findBookBy("releaseDate", 1924).name); 

  console.log("Количество книг до выдачи: " + library.books.length); 
  const givenBook = library.giveBookByName("Машина времени");
  console.log("Количество книг после выдачи: " + library.books.length); 
  
  givenBook.state = 20;
  console.log(givenBook.state); 
  
  givenBook.fix();
  console.log(givenBook.state); 
  
  library.addBook(givenBook);
  console.log("Количество книг после возврата: " + library.books.length); // Количество книг после возврата: 4
  


  class Student {
    constructor(name) {
      this.name = name;
      this.marks = {};
    }
  
    addMark(subject, mark) {
      if (mark >= 2 && mark <= 5) {
        if (!this.marks[subject]) {
          this.marks[subject] = [];
        }
        this.marks[subject].push(mark);
      }
    }
  
    getAverageBySubject(subject) {
      if (this.marks[subject]) {
        const sum = this.marks[subject].reduce((total, mark) => total + mark, 0);
        return sum / this.marks[subject].length;
      } else {
        return 0;
      }
    }
  
    getAverage() {
      const subjects = Object.keys(this.marks);
      if (subjects.length === 0) {
        return 0;
      }
  
      const totalAverage = subjects.reduce((total, subject) => {
        const subjectAverage = this.getAverageBySubject(subject);
        return total + subjectAverage;
      }, 0);
  
      return totalAverage / subjects.length;
    }
  }
  
  const student = new Student("Alice");
  
  student.addMark("Math", 4);
  student.addMark("Math", 5);
  student.addMark("History", 3);
  student.addMark("History", 4);
  student.addMark("Science", 5);
  
  console.log(student.getAverageBySubject("Math")); 
  console.log(student.getAverageBySubject("History"));
  console.log(student.getAverageBySubject("Science"));
  
  console.log(student.getAverage());
  
