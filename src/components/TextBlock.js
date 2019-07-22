import React, { useState } from 'react'
import Controls from './Controls'

export default function TextBlock(props) {
  const [started, setStarted] = useState(false)

  return (
    <div className="text-block-container">
      <div>
        <p className={started ? 'started' : null}>{props.children}</p>
      </div>
      <div>
        <Controls startButtonClicked={isStarted => setStarted(isStarted)} />
      </div>
    </div>
  )
}
