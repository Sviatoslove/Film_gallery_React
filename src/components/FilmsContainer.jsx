import React from 'react';
import cn from 'classnames';

const FilmsContainer = ({ children, filmDetail }) => {
  return (
    <div className={cn('films-container', { 'films-container--filmDetails': filmDetail })}>
      {children}
    </div>
  );
};

export default FilmsContainer;
