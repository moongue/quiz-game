import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Route path="/">
          <Header />
          <div className="wrapper-small">
            <Home />
          </div>
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
