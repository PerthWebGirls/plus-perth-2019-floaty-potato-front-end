import React from 'react';
import AppContainer from './containers/AppContainer';
import { BrowserRouter as Router } from 'react-router-dom';
// import './style.css';

function App() {
  return (
    <Router>
      <AppContainer className="style" />
    </Router>
  );
}

export default App;
