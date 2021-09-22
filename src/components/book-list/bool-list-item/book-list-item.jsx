import React from 'react';
import PropTypes from 'prop-types';

import './book-list-item.scss';

function BookListItem({item, deleteBook}) {

  const {id, title, author} = item;

  return (
    <article className="book">
      <div className="book__cover"></div>
      <div className="book__info">
        <h3 className="book__title">{title}</h3>
        <h3 className="book__author">{author}</h3>
        <button type="button" className="book__button" onClick={() => deleteBook(id)}>Удалить</button>
      </div>
    </article>
  );
}

BookListItem.defaultProps = {
  item: {},
};

BookListItem.propTypes = {
  item: PropTypes.object,
  deleteBook: PropTypes.func,
};

export default BookListItem;
