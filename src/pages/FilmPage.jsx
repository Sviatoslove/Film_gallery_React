import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useFilmsContext } from 'context/FilmsContext';
import FilmItem from 'components/FilmItem';
import FilmsContainer from 'components/FilmsContainer';

const FilmPage = () => {
  const { films, handleLike, loading } = useFilmsContext();
  const { filmId } = useParams();
  const filmDetails = useMemo(() => films.find((film) => film.id === filmId), [films, filmId]);

  return (
    <FilmsContainer filmDetail>
      {loading && <h2>Loading...</h2>}
      {!loading && !filmDetails && <h2>Film with {filmId} not found</h2>}
      {!loading && filmDetails && (
        <>
          <FilmItem
            id={filmDetails.id}
            poster={filmDetails.poster}
            title={filmDetails.title}
            year={filmDetails.year}
            onLike={handleLike}
            liked={filmDetails.liked}
            fullTitle
          />
        </>
      )}
    </FilmsContainer>
  );
};

export default FilmPage;
