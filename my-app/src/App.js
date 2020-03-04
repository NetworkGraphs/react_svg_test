import React from 'react';
import logo from './logo.svg';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import './App.css';

function App() {
  console.log(logo)
  return (
  <Container className="p-3">
    <Jumbotron>
      <h1 className="header">Welcome To React-Bootstrap</h1>
    </Jumbotron>
  </Container>
  );

}

export default App;