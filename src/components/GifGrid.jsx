import React, { useState, useEffect } from 'react';
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    const getGifs = () => {
      const url = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=10&api_key=JPU3y1rQZlxJnnGfKadNjHIRkWjX14XG`;
      fetch(url)
        .then((req) => req.json())
        .then((res) => res.data)
        .then((gifs) =>
          gifs.map((gif) => ({
            id: gif.id,
            title: gif.title,
            url: gif.images?.downsized_medium.url
          }))
        )
        .then((imgObject) => {
          setImages([...imgObject]);
        })
        .catch((error) => error);
    };
    getGifs();
  }, [category]);
  return (
    <div className='card-grid'>
      {images.map((image) => (
        <GifGridItem key={image.id} {...image} />
      ))}
    </div>
  );
};

export default GifGrid;
