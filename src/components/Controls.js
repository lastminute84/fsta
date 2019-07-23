import React, { Component } from 'react'

export default class Controls extends Component {
  state = {
    seconds: 0,
    isStarted: false,
    intervalId: 0
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId)
  }

  render() {
    const btnClass = this.state.isStarted
      ? 'btn btn-primary'
      : 'btn btn-success'
    return (
      <div className="controls--container">
        <button
          className={btnClass}
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
        <div className="controls--counter">
          {this.state.seconds < 10
            ? `00:0${this.state.seconds}`
            : this.state.seconds < 60
            ? `00:${this.state.seconds}`
            : '01:00'}
        </div>
      </div>
    )
  }
}
