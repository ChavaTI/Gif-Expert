import React, { useState } from 'react';

const AddCategory = ({ addCategory }) => {
  const [newCategory, setNewCategory] = useState('');
  const changeCategory = (e) => {
    setNewCategory(e.target.value);
  };
  const handleAdd = (e) => {
    e.preventDefault();
    addCategory(newCategory);
    setNewCategory('');
  };
  return (
    <form onSubmit={handleAdd}>
      <input type="text" onChange={changeCategory} value={newCategory} />
    </form>
  );
};

export default AddCategory;
