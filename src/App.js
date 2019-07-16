import React, { Component } from 'react'
import HighlightedText from './components/HighlightedText'
import './App.css'

export default class App extends Component {
  state = {
    animationStarted: false
  }

  startButtonClickHandler = () => {
    console.log('start button was clicked')
    this.setState({ animationStarted: true })
  }

  render() {
    return (
      <>
        <HighlightedText started={this.state.animationStarted}>
          Enim laborum id laboris officia ipsum ut cupidatat anim ex pariatur
          reprehenderit Lorem aliqua excepteur. Mollit tempor magna in nisi anim
          sunt commodo qui proident id aliquip enim fugiat ex. Laborum laborum
          reprehenderit aute consequat enim. Eu id excepteur culpa id deserunt
          ad cupidatat sunt non aute quis aliquip Lorem. Laborum esse commodo
          sint officia do aute non pariatur. Nostrud est consectetur quis
          eiusmod eiusmod nisi exercitation irure nulla id.
        </HighlightedText>
        <button onClick={this.startButtonClickHandler}>Start</button>
      </>
    )
  }
}
