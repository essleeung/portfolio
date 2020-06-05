import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Content from './Content';
import NavBottom from './navigation/Nav';


function App() {
  return (
    <Router>
      <Content />
      <NavBottom />
    </Router>
  );
}

export default App;
