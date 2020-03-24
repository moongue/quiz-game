import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Route path="/" component={Home} />
      </div>
    </BrowserRouter>
  );
}

export default App;
