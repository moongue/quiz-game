import React from 'react';
import './PlayerDay.scss';
import user from './user.svg';

const PlayerDay = () => (
  <div className="player-day">
    <h2>Игрок дня</h2>
    <div className="player-block">
      <div className="player-block_img">
        <img src={user} alt="User" />
      </div>
      <div className="col">
        <p className="player-block_name">moonGue</p>
        <p className="player-block_description">
          Очков за день: <span>100</span>
        </p>
        <p className="player-block_description">
          Очков за все время: <span>500</span>
        </p>
      </div>
    </div>
  </div>
);

export default PlayerDay;
