import React from 'react';
import categories from '../../api/categories';
import { Categories } from '../../components/Categories/Categories';
import CategoriesCard from '../../components/CategoriesCard/CategoriesCard';
import PlayerDay from '../../components/PlayerDay/PlayerDay';
import Faq from '../../components/FAQ/Faq';
import TableScore from '../../components/ScoreTable/TableScore';
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
      <div className="col">
        <PlayerDay />
        <Faq />
      </div>
      <TableScore />
    </div>
  </>
);

export default Home;
