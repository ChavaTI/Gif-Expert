import React, { useState } from 'react';
import AddCategory from './components/AddCategory';

const GifExpertApp = () => {
  const initialState = ['Vikings', 'Peacky Bliders', 'The last air bender'];
  const [categories, setCategory] = useState(initialState);
  const addCategory = (newCategory) => {
    setCategory((cats) => [...cats, newCategory]);
  };
  return (
    <div>
      <h2>Gif Expert App </h2>
      <hr />
      <AddCategory addCategory={addCategory} />
      <ol>
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ol>
    </div>
  );
};

export default GifExpertApp;
