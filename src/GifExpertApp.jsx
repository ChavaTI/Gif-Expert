import React, { useState } from 'react';
import AddCategory from './components/AddCategory';

const GifExpertApp = () => {
  const initialState = ['The last air bender'];
  const [categories, setCategory] = useState(initialState);
  const addCategory = (newCategory) => {
    setCategory((cats) => [...cats, newCategory]);
  };
  return (
    <div>
      <h2>Gif Expert App </h2>
      <AddCategory addCategory={addCategory} />
      <hr />
      <ol>
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ol>
    </div>
  );
};

export default GifExpertApp;
