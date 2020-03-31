import React from 'react';
import { Link, useParams } from 'react-router-dom';
import quizzes from '../../api/quizzes';
import './CategoryQuizzes.scss';

export const CategoryQuizzes = () => {
  const { category } = useParams();
  const filteredQuizzes = quizzes.filter((item) => item.category === category);
  return (
    <div className="quizzes">
      {filteredQuizzes.map((item) => (
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
};

export default CategoryQuizzes;
