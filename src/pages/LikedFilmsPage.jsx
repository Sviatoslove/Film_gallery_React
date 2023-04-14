import React, { useMemo } from 'react';
import { useFilmsContext } from 'context/FilmsContext';
import FilmItem from 'components/FilmItem';
import FilmsContainer from 'components/FilmsContainer';
import Header from 'components/Header';
import FilmCards from 'components/FilmCards';

const LikedFilmsPage = () => {
  const { films, handleLike, loading } = useFilmsContext();

  const filteredFilms = useMemo(() => films.filter((film) => film.liked), [films]);

  return (
    <FilmsContainer>
      {loading && (
        <FilmsContainer filmDetail>
          <h2>Loading...</h2>
        </FilmsContainer>
      )}
      {!loading && (
        <>
          <Header
            title="All Films"
            switchBtnOne="See all films"
            pathOne="/"
            switchBtnTwo="See liked films"
            pathTwo="/liked"
          />
          <FilmCards>
            {filteredFilms.length ? (
              filteredFilms.map((film) => {
                return (
                  <FilmItem
                    key={film.id}
                    id={film.id}
                    poster={film.poster}
                    title={film.title}
                    year={film.year}
                    onLike={handleLike}
                    liked={film.liked}
                  />
                );
              })
            ) : (
              <h2>Liked films list is empty</h2>
            )}
          </FilmCards>
        </>
      )}
    </FilmsContainer>
  );
};

export default LikedFilmsPage;
