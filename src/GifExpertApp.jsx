import React, { useState } from 'react';

const GifExpertApp = () => {
  const initialState = ['Vikings', 'Peacky Bliders', 'The last air bender'];
  const [categories, setCategory] = useState(initialState);
  const handleAdd = () => {
    setCategory((cats) => [...cats, 'new Serie']);
  };
  return (
    <div>
      <h2>Gif Expert App </h2>
      <hr />
      <button onClick={handleAdd}> Agregar </button>
      <ol>
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ol>
    </div>
  );
};

export default GifExpertApp;
