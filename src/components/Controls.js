import React, { useState } from 'react'

export default function Controls(props) {
  const [started, setStarted] = useState(0)

  return (
    <>
      <button className="start-btn" onClick={props.startButtonClicked}>
        Start
      </button>
    </>
  )
}
