import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = ({ title, switchBtnOne, switchBtnTwo, pathOne, pathTwo }) => {
  return (
    <>
      <h1 className="films-container__title">{title}</h1>
      <div className="films-container__actions">
        <NavLink
          className="films-container__switch-btn"
          activeClassName="active"
          exact
          to={pathOne}>
          {switchBtnOne}
        </NavLink>
        <NavLink className="films-container__switch-btn" activeClassName="active" to={pathTwo}>
          {switchBtnTwo}
        </NavLink>
      </div>
    </>
  );
};

export default Header;
