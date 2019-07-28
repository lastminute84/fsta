import React, { Component } from 'react'
import Home from './pages/Home'
import Exercises from './pages/Exercises'
import Error from './pages/Error'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import { Switch, Route } from 'react-router-dom'
import './App.css'

export default class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/exercises" component={Exercises} />
          <Route component={Error} />
        </Switch>
        <Footer />
      </>
    )
  }
}
