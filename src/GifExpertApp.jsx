import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {
  const initialState = ['The last air bender'];
  const [categories, setCategory] = useState(initialState);
  const addCategory = (newCategory) => {
    setCategory((cats) => [newCategory, ...cats]);
  };
  return (
    <div>
      <h2>Gif Expert App </h2>
      <AddCategory addCategory={addCategory} />
      <hr />
      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </div>
  );
};

export default GifExpertApp;
