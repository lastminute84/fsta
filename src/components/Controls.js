import React, { useState } from 'react'

export default function Controls(props) {
  return (
    <>
      <button className="start-btn" onClick={props.startButtonClicked}>
        Start
      </button>
    </>
  )
}
