import React from 'react';
import logo from './logo.svg';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

import './App.css';

function App(props) {
  console.log(logo)
  return (
  <Container className="p-3">
    <Jumbotron>
      <h1 className="header">Welcome To {props.name}</h1>
    </Jumbotron>
  </Container>
  );

}

export default App;
