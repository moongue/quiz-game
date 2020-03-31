import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import CategoryQuiz from './pages/CategoryQuiz/CategoryQuiz';
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
        <Route exact path="/:id">
          <Header />
          <CategoryQuiz />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
