import React, { useState } from 'react'
import Controls from './Controls'

export default function TextBlock(props) {
  const [started, setStarted] = useState(0)

  return (
    <>
      <div className="text-block-container">
        <p className={started ? 'started' : null}>{props.children}</p>
      </div>
      <Controls
        startButtonClicked={() => {
          console.log('Start button was clicked')
          setStarted(!started)
          console.log(`Started: ${started}`)
        }}
      />
    </>
  )
}
