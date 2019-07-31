import React, { Component } from 'react'
import Backdrop from './Backdrop'

export default class Modal extends Component {
  constructor({ show, modalClosedHandler }) {
    super({ show, modalClosedHandler })
  }

  render() {
    return (
      <div>
        <Backdrop
          show={this.props.show}
          backdropClickHandler={this.props.modalClosedHandler}
        />
        <div
          className="modal"
          style={{
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.show ? '1' : '0'
          }}
        >
          {this.props.children}
        </div>
      </div>
    )
  }
}
