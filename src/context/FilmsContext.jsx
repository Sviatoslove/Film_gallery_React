import { BASE_URL } from 'constants/urls';
import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

const FilmsContext = createContext({});

export function useFilmsContext() {
  const context = useContext(FilmsContext);
  return context;
}

export const FilmsContextProvider = ({ children }) => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(false);

  const sleep = () => new Promise((res) => setTimeout(res, 1000));

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await sleep();
      const response = await fetch(BASE_URL);
      const data = await response.json();
      setFilms(formatResponse(data));
      setLoading(false);
    };
    try {
      fetchData();
    } catch (err) {
      console.log('Fetch data error: ', err);
    }
  }, []);

  const handleLike = useCallback(
    (id) => {
      setFilms((prevState) =>
        prevState.map((film) => {
          if (film.id === id)
            return {
              ...film,
              liked: !film.liked,
            };
          return film;
        })
      );
    },
    [setFilms]
  );

  const contextValue = useMemo(
    () => ({
      films,
      handleLike,
      loading,
    }),
    [films, handleLike, loading]
  );

  return <FilmsContext.Provider value={contextValue}>{children}</FilmsContext.Provider>;
};

function formatResponse(data) {
  return data.Search.map((film) => ({
    id: film.imdbID,
    title: film.Title,
    poster: film.Poster,
    year: film.Year,
    liked: false,
  }));
}
