import React from 'react'
import HighlightedText from './HighlightedText'
import Controls from './Controls'
import '../App.css'

export default function Layout(props) {
  return (
    <>
      <div className="container">
        <HighlightedText started={props.started}>
          When it's cold outside, why not warm up the children with a
          traditional farmhouse soup? Nothing is more welcome or tasty. Served
          with whole meal bread, it's the perfect meal.
        </HighlightedText>
        <div />
      </div>
      {/* <button onClick={props.startButtonClickHandler}>Start</button> */}
      <Controls startButtonClicked={props.startButtonClickHandler} />
    </>
  )
}
