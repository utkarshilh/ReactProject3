

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
export default class App extends Component {
  render() {

    return (
      <>
        <NoteState>
          <Router>
            <Navbar />
            <div className='container'>
              <Switch>
                <Route exact path="/"><Home /></Route>
                <Route exact path="/about"><About /></Route>

              </Switch>
            </div>
          </Router>
        </NoteState>
      </ >
    )
  }
}

