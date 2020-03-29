import React from 'react';
import { Link } from 'react-router-dom';
import categories from '../../api/categories';
import './Categories.scss';

export const Categories = () => (
  <div className="categories">
    <h2>Категории</h2>
    <ul className="categories_list">
      {categories.map((item) => (
        <li className="categories_item">
          <Link className="categories_link" to={item.link} key={item.link}>
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);
