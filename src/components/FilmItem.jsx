import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

const FilmItem = ({ id, poster, title, year, liked, onLike, fullTitle }) => {
  const imgName = liked ? 'like.png' : 'unLike.png';
  return (
    <div className="film-card" id={id}>
      <div className="film-card__img-wrp">
        <img className="film-card__img" src={poster} />
      </div>
      <Link
        className={cn('film-card__title', { 'film-card__title--full': fullTitle })}
        to={'/film/' + id}>
        {title}
      </Link>
      <span className="film-card__year">{year}</span>
      <button className="film-card__btn" onClick={() => onLike(id)}>
        <img className="film-card__btn-img" src={`/assets/img/${imgName}`} />
      </button>
      {fullTitle && (
        <Link to="/" className="films-container__switch-btn" style={{ marginTop: '10px' }}>
          All Films
        </Link>
      )}
    </div>
  );
};

export default FilmItem;
