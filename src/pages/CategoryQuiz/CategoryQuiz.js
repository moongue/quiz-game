import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './CategoryQuiz.scss';

export const CategoryQuiz = (props) => (
  <div className="quizzes">
    {props.data.map((item) => (
      <Link to={`/quiz/${item.id}`} key={item.id} className="quiz-card">
        <div className="quiz-card_wrap-img">
          <img className="quiz-card_img" src={item.img} alt="Quiz" />
        </div>
        <p className="quiz-card_name">{item.title}</p>
        <p className="quiz-card_author">{item.author}</p>
      </Link>
    ))}
  </div>
);

function mapStateToProps(state) {
  return {
    data: state.quizzes.data,
  };
}

export default connect(mapStateToProps)(CategoryQuiz);
