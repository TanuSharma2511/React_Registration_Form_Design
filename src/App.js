import React, { Component } from 'react';
import { UserForm } from './components/UserForm';
import {Link} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserForm />
      </div>
    );
  }
}

export default App;
