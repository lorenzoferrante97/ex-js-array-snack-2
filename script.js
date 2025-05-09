const books = [
  {
    title: 'React Billionaire',
    pages: 250,
    author: {
      name: 'Alice',
      age: 35,
    },
    available: false,
    price: '101€',
    tags: ['advanced', 'js', 'react', 'senior'],
  },
  {
    title: 'Advanced JS',
    pages: 500,
    author: {
      name: 'Bob',
      age: 20,
    },
    available: true,
    price: '25€',
    tags: ['advanced', 'js', 'mid-senior'],
  },
  {
    title: 'CSS Secrets',
    pages: 320,
    author: {
      name: 'Alice',
      age: 17,
    },
    available: true,
    price: '8€',
    tags: ['html', 'css', 'junior'],
  },
  {
    title: 'HTML Mastery',
    pages: 200,
    author: {
      name: 'Charlie',
      age: 50,
    },
    available: false,
    price: '48€',
    tags: ['html', 'advanced', 'junior', 'mid-senior'],
  },
];

// start code

// SNACK 1 ----------------------------------------

const somma = (num1, num2) => num1 + num2;

const longBooks = books.filter((book) => book.pages > 300);
const longBooksTitles = longBooks.map((book) => book.title);
// console.log(longBooksTitles);

// SNACK 2 ----------------------------------------

const isFullPrice = (book) => {
  const dotIndex = book.price.indexOf('.');
  const decimals = book.price.substring(dotIndex + 1);

  return decimals == '00€';
};

const availableBooks = books.filter((book) => book.available);
const discountedBooks = availableBooks.map((book) => {
  const discountedPrice = parseFloat(book.price.replace('€', '') * 0.8);
  const updatedPrice = discountedPrice.toFixed(2).toString() + '€';

  return { ...book, price: updatedPrice };
});
// console.log('discountedBooks: ', discountedBooks);

const fullPricedBook = discountedBooks.find((book) => isFullPrice(book));
// console.log('full price book: ', fullPricedBook);

// SNACK 3 ---------------------------------------

const sortAuthors = (allAdults, authors) => {
  // let sortedAuthors = [...authors];
  allAdults ? authors.sort((auth1, auth2) => auth1.age - auth2.age) : authors.sort((auth1, auth2) => auth2.age - auth1.age);

  // return sortedAuthors;
  return authors;
};

const authors = books.map((book) => book.author);
// console.log('authors: ', authors);

const areAuthorsAdults = authors.every((author) => author.age >= 18);
// console.log('all authors are adults? ', areAuthorsAdults);

const sortedAuthors = sortAuthors(areAuthorsAdults, authors);
// console.log('sortedAuthors: ', sortedAuthors);

// SNACK 4 ---------------------------------------

const ages = authors.map((author) => author.age);
console.log('ages: ', ages);

const agesAmount = ages.reduce((acc, age) => acc + age, 0);
const averageAge = agesAmount / ages.length;
console.log('averageAge: ', averageAge);
