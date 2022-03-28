

import Navbar from './Components/Navbar';
import './App.css';
import React, { Component } from 'react'

import Home from "./Components/Home"
import About from "./Components/About"
import NoteState from "./Context/notes/NoteState"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Alert } from './Components/Alert';
import Signup from './Components/Signup';
import Login from './Components/Login';
export default class App extends Component {
  render() {

    return (
      <>
        <NoteState>
          <Router>
            <Navbar />
            <Alert message="this is amazing react course" />
            <div className='container'>
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>

                <Route exact path="/about">
                  <About />
                </Route>

                <Route exact path="/login">
                  <Login />
                </Route>

                <Route exact path="/signup">
                  <Signup />
                </Route>

              </Switch>
            </div>
          </Router>
        </NoteState>
      </ >
    )
  }
}

