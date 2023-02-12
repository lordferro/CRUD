const BASE_URL = 'http://localhost:3000';

const newBook = {
  title: 'CSS',
  author: 'me',
  genres: ['js'],
  rating: 8.52,
};

function addBook(book) {
  const options = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(book),
  };

  return fetch(`${BASE_URL}/books`, options).then(r => r.JSON());
}


addBook(newBook);