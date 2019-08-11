import React, { Component } from 'react'
import Home from './Home'
import Exercises from './Exercises'
import Error from './Error'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import { Switch, Route } from 'react-router-dom'

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
