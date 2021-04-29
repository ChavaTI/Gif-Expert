import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({ addCategory }) => {
  const [newCategory, setNewCategory] = useState('');
  const [error, errorHandle] = useState(false);
  const changeCategory = (e) => {
    setNewCategory(e.target.value);
  };
  const handleAdd = (e) => {
    e.preventDefault();
    if (newCategory === '') {
      errorHandle(true);
    } else {
      errorHandle(false);
      addCategory(newCategory);
      setNewCategory('');
    }
  };
  return (
    <form onSubmit={handleAdd}>
      <input type="text" onChange={changeCategory} value={newCategory} />
      {error ? (
        <span className="error"> Error: La caja de texto esta vacia </span>
      ) : null}
    </form>
  );
};

AddCategory.propTypes = {
  addCategory: PropTypes.func.isRequired
}
export default AddCategory;
