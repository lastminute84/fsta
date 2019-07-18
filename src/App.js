import React, { Component } from 'react'
import Layout from './components/Layout'
import './App.css'

export default class App extends Component {
  state = {
    animationStarted: false
  }

  componentDidMount() {}

  startButtonClickHandler = () => {
    console.log('start button was clicked')
    this.setState({ animationStarted: true })
  }

  render() {
    return (
      <Layout
        started={this.state.animationStarted}
        startButtonClickHandler={this.startButtonClickHandler}
      />
    )
  }
}
