import React from 'react';
import './Header.scss';
import search from './search.svg';

const Header = () => (
  <header className="header">
    <div className="logo">
      <h1>Викторины</h1>
      <p>Играй становись умней</p>
    </div>
    <div className="search">
      <input
        type="text"
        className="search_input"
        placeholder="Поиск по викторинам"
      />
      <button className="search_btn" type="button">
        <img className="search_img" src={search} alt="Search" />
      </button>
    </div>
    <div className="user-form">
      <button className="default-btn" type="button">
        Войти
      </button>
      <button className="default-btn" type="button">
        Зарегестрироваться
      </button>
    </div>
  </header>
);

export default Header;
