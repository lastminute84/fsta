import React from 'react'
import Title from './Title'

export default function MessageBox({ title, message }) {
  return (
    <div>
      <Title title={title} />
      <div className="message">
        <h6>{message}</h6>
        <button className="btn btn-primary">Show me</button>
      </div>
    </div>
  )
}
