import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app/app';

import {mockBooksData} from './mocks/mock-books-data';
import './index.scss';

const isLocalStorage = localStorage.getItem('books') ?? null;
if (isLocalStorage === null) {
  localStorage.setItem('books', JSON.stringify(mockBooksData));
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
