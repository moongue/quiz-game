import React from 'react';
import { Link } from 'react-router-dom';
import './CategoriesCard.scss';

const CategoriesCard = ({ data, title }) => (
  <div className="categories-card col">
    <h2>{title}</h2>
    <ul className="categories-card_list">
      {data.map((item) => (
        <li key={item.link} className="categories-card_item">
          <Link
            className="categories-card_link"
            key={item.title}
            to={item.link}
          >
            <p className="categories-card_title">{item.title}</p>
            <img className="categories-card_img" src={item.img} alt={item.title} />
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default CategoriesCard;
