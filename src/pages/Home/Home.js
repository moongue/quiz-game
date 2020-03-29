import React from 'react';
import categories from '../../api/categories';
import { Categories } from '../../components/Categories/Categories';
import CategoriesCard from '../../components/CategoriesCard/CategoriesCard';
import PlayerDay from '../../components/PlayerDay/PlayerDay';
import './Home.scss';

const Home = () => (
  <>
    <div className="home-top row">
      <Categories />
      <CategoriesCard
        title="Популярное"
        data={[categories[0], categories[2]]}
      />
      <CategoriesCard title="Новое" data={[categories[5], categories[6]]} />
    </div>
    <div className="home-bottom row">
      <PlayerDay />
    </div>
  </>
);

export default Home;
