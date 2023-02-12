const BASE_URL = 'http://localhost:3000';

function updateBook(update, id) {
    const options = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(update)
    }
   return fetch(`${BASE_URL}/books/${id}`, options).then(r => r.json()).then(console.log)
}

updateBook({ title: 'big book' }, 7);
updateBook({rating: 1, author: 'me'}, 6);