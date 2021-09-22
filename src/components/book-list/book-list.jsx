import React from 'react';
import PropTypes from 'prop-types';

import BookListItem from './bool-list-item/book-list-item';

import './book-list.scss';

function BookList({books, deleteBook}) {

  const items = books.map((item) => <li className="book-list__item" key={item.id}><BookListItem item={item} deleteBook={deleteBook} /></li>);

  return (
    <ul className="book-list" data-testid="book-list">{items}</ul>
  );
}

BookList.defaultProps = {
  books: [],
};

BookList.propTypes = {
  books: PropTypes.array,
  deleteBook: PropTypes.func,
};

export default BookList;
