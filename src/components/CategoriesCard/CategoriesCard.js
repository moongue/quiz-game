import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './CategoriesCard.scss';
import { filterQuizzesByCategory } from '../../store/actions/displayQuizesAction';

const CategoriesCard = (props) => (
  <div className="categories-card col">
    <h2>{props.title}</h2>
    <ul className="categories-card_list">
      {props.data.map((item) => (
        <li key={item.link} className="categories-card_item">
          <Link
            className="categories-card_link"
            key={item.title}
            to={item.link}
            onClick={props.filterQuizzes.bind(this, item.link)}
          >
            <p className="categories-card_title">{item.title}</p>
            <img
              className="categories-card_img"
              src={item.img}
              alt={item.title}
            />
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

function mapDispatchToProps(dispatch) {
  return {
    filterQuizzes: (type) => dispatch(filterQuizzesByCategory(type)),
  };
}

export default connect(null, mapDispatchToProps)(CategoriesCard);
