const BASE_URL = 'http://localhost:3000';

function removeBook(id) {
    const URL = `${BASE_URL}/books/${id}`;
    const options = {
        method: 'DELETE',
    }

    return fetch(URL, options).then(r =>r.json())
}

removeBook(7)