import { useState, useEffect } from 'react';

export const useFetchGifs = (category) => {
  const [state, setState] = useState({
    images: [],
    loading: true
  });

  useEffect(() => {
    const getGifs = () => {
      const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
        category
      )}&limit=10&api_key=JPU3y1rQZlxJnnGfKadNjHIRkWjX14XG`;
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
          setState({
            images: [...imgObject],
            loading: false
          });
        })
        .catch((error) => error);
    };
    getGifs();
  }, [category]);
  return state;
};
