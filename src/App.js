import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import Content from './Content';
import NavBottom from './navigation/Nav';
import SocialMedia from './navigation/SocialMedia'


function App() {
  return (
    <Router>
      <SocialMedia />
      <Content />
      <NavBottom />
    </Router>
  );
}

export default App;
