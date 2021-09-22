import React, {useState} from 'react';
import PropTypes from 'prop-types';

import './add-form.scss';

function AddForm({addBook}) {

  const [formData, setFormData] = useState({
    title: '',
    author: '',
  });

  const handleChange = (evt) => {
    const {value, name} = evt.target;

    setFormData((state) => ({
      ...state,
      [name]: value,
    }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    addBook(formData);

    setFormData({
      title: '',
      author: '',
    });
  };

  const {title, author} = formData;

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <label htmlFor="book-title">Название книги
        <input type="text" id="book-title" name="title" value={title} onChange={handleChange} required />
      </label>
      <label htmlFor="book-author">Автор
        <input type="text" id="book-author" name="author" value={author} onChange={handleChange} required />
      </label>
      <button type="submit" className="add-form__button">Добавить на полку</button>
    </form>
  );
}

AddForm.propTypes = {
  addBook: PropTypes.func,
};

export default AddForm;
