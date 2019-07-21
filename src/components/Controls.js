import React, { Component } from 'react'

export default class Controls extends Component {
  state = {
    seconds: 0,
    isStarted: false,
    intervalId: 0
  }
  render() {
    return (
      <>
        <button
          className="start-btn"
          onClick={() => {
            this.setState({ isStarted: !this.state.isStarted }, () => {
              this.props.startButtonClicked(this.state.isStarted)

              if (this.state.isStarted) {
                this.setState({
                  intervalId: setInterval(() => {
                    this.setState({ seconds: this.state.seconds + 1 })
                    if (this.state.seconds >= 60) {
                      clearInterval(this.state.intervalId)
                    }
                  }, 1000)
                })
              } else {
                clearInterval(this.state.intervalId)
                this.setState({ seconds: 0 })
              }
            })
          }}
        >
          {this.state.isStarted ? 'Reset' : 'Start'}
        </button>
        <span>
          {this.state.seconds < 10
            ? `00:0${this.state.seconds}`
            : this.state.seconds < 60
            ? `00:${this.state.seconds}`
            : '01:00'}
        </span>
      </>
    )
  }
}
