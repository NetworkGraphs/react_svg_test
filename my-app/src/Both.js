import React from 'react';
import App from './App';
import Example from './Example';
import List from './List';

function Both() {
    return (
        <a>
            <Example/>
            <App name="The big World"/>
            <List/>
        </a>
    )
  }
  
  export default Both;