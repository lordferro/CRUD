const BASE_URL = 'http://localhost:3000';

function fetchBooks() {
   return   fetch('http://localhost:3000/books')
        .then(r => r.json())
        
}
  
fetchBooks()