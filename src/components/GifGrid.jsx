import React from 'react';
import GifGridItem from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

const GifGrid = ({ category }) => {
  const { images, loading } = useFetchGifs(category);
  return (
    <>
      <h4>{category}</h4>
      {loading ? (
        'Loading...'
      ) : (
        <div className="card-grid">
          {images.map((image) => (
            <GifGridItem key={image.id} {...image} />
          ))}
        </div>
      )}
    </>
  );
};

export default GifGrid;
