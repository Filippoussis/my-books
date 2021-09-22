import React, {useState} from 'react';
import BookList from '../book-list/book-list';
import AddForm from '../add-form/add-form';

import './app.scss';

let id = 100;

function App() {

  const booksData = JSON.parse(localStorage.getItem('books')) ?? [];

  const [books, updateBooks] = useState(booksData);

  const addBook = (formData) => {

    const newBook = {
      id: id++,
      ...formData,
    };

    updateBooks((state) => {

      const newState = [
        ...state,
        newBook,
      ];

      localStorage.removeItem('books');
      localStorage.setItem('books', JSON.stringify(newState));

      return newState;
    });
  };

  const deleteBook = (bookId) => {
    const idx = books.findIndex((item) => item.id === bookId);

    updateBooks((state) => {

      const newState = [
        ...state.slice(0, idx),
        ...state.slice(idx + 1),
      ];

      localStorage.removeItem('books');
      localStorage.setItem('books', JSON.stringify(newState));

      return newState;
    });
  };

  return (
    <div className="page-content">
      <h1 className="page-title">Моя книжная полка</h1>
      <BookList books={books} deleteBook={deleteBook} />
      <AddForm addBook={addBook} />
    </div>
  );
}

export default App;
