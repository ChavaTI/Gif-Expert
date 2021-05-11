import React from 'react';
import GifGridItem from './GifGridItem';
import useFetchGifs from '../hooks/useFetchGifs';
import PropTypes from 'prop-types';

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

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
};

export default GifGrid;
