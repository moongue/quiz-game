import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import CategoryQuizzes from './pages/CategoryQuizzes/CategoryQuizzes';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Route exact path="/">
          <Header />
          <div className="wrapper-small">
            <Home />
          </div>
        </Route>
        <Route exact path="/:category">
          <Header />
          <CategoryQuizzes />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
