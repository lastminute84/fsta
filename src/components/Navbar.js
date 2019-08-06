import React, { Component } from 'react'
import { FiAlignJustify, FiX } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import logo from '../images/speech-bubble.svg'

export default class Navbar extends Component {
  state = {
    isOpen: false
  }

  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }
  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img src={logo} alt="logo" className="logo" />
            </Link>
            <button
              className="nav-btn"
              type="button"
              onClick={this.handleToggle}
            >
              {this.state.isOpen ? (
                <FiX className="nav-icon" />
              ) : (
                <FiAlignJustify className="nav-icon" />
              )}
            </button>
          </div>
          <ul
            className={this.state.isOpen ? 'nav-links show-nav' : 'nav-links'}
          >
            <li onClick={this.handleToggle}>
              <Link to="/">Home</Link>
            </li>
            <li onClick={this.handleToggle}>
              <Link to="/exercises">Exercises</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
