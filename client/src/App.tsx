import React from 'react';
import { useRoutes } from 'react-router-dom';
import Home from './components/Home';
import './App.css';

const App = () => {
  let elements = useRoutes([{ path: '/', element: <Home /> }]);
  return elements;
};

export default App;
