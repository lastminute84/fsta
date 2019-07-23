import React, { Component } from 'react'
import Controls from './Controls'

export default class TextBlock extends Component {
  state = {
    started: false
  }

  render() {
    return (
      <div className="text-block-container">
        <div>
          <p className={this.state.started ? 'started' : null}>
            {this.props.children}
          </p>
        </div>
        <div>
          <Controls
            startButtonClicked={isStarted =>
              this.setState({ started: isStarted })
            }
          />
        </div>
      </div>
    )
  }
}
