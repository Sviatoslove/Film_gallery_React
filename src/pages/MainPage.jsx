import React from 'react';
import { useFilmsContext } from 'context/FilmsContext';
import FilmItem from 'components/FilmItem';
import Header from 'components/Header';
import FilmsContainer from 'components/FilmsContainer';
import FilmCards from 'components/FilmCards';

const MainPage = () => {
  const { films, handleLike, loading } = useFilmsContext();

  return (
    <>
      {loading && <h2>Loading...</h2>}
      {!loading && (
        <FilmsContainer>
          <Header
            title="All Films"
            switchBtnOne="See all films"
            pathOne="/"
            switchBtnTwo="See liked films"
            pathTwo="/liked"
          />
          <FilmCards>
            {films.map((film) => (
              <FilmItem
                key={film.id}
                id={film.id}
                poster={film.poster}
                title={film.title}
                year={film.year}
                onLike={handleLike}
                liked={film.liked}
              />
            ))}
          </FilmCards>
        </FilmsContainer>
      )}
    </>
  );
};

export default MainPage;
