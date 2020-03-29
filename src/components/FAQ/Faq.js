import React from 'react';
import faq from './question.svg';
import './Faq.scss';

const Faq = () => (
  <div className="faq">
    <h2>FAQ</h2>
    <div className="faq-block">
      <div className="faq-block_img">
        <img src={faq} alt="faq" />
      </div>
      <div className="col">
        <div className="faq-block_text">По вопросам обращайтесь сюда</div>
        <button className="faq-block_btn" type="button">
          Перейти
        </button>
      </div>
    </div>
  </div>
);

export default Faq;
