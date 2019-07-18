import React from 'react'
import HighlightedText from './HighlightedText'
import Controls from './Controls'

export default function Layout(props) {
  return (
    <>
      <HighlightedText started={props.started}>
        When it's cold outside, why not warm up the children with a traditional
        farmhouse soup? Nothing is more welcome or tasty. Served with whole meal
        bread, it's the perfect meal.
      </HighlightedText>
      {/* <button onClick={props.startButtonClickHandler}>Start</button> */}
      <Controls />
    </>
  )
}
