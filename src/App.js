import "./App.css";
import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Modal from './User/Modal/Modal';
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Groomers</h1>
        <Link to='/merchant'><input type="button" className="homeButton" value="Merchant" /></Link>
        <Link to='/login'><input type="button" className="homeButton" value="Sign In" /></Link>
        <Switch>
          <Route path='/login' exact><Modal /></Route>
        </Switch>
        {/* <Switch>
          <Route path='/merchant' exact></Route>
          <Route path='/login' exact><Modal /></Route>
          <Route path='/' exact><Ap p /></Route>
        </Switch> */}
      </div>
    );
  }
}
export default App;
