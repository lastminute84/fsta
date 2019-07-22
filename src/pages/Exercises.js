import React, { useContext } from 'react'
import { FluencyShapingContext } from '../context'
import TextBlock from '../components/TextBlock'
import '../App.css'
import TextBlockFilter from '../components/TextBlockFilter'

export default function Exercises() {
  const context = useContext(FluencyShapingContext)

  console.log(context)
  const { filteredTextBlocks } = context
  const content = filteredTextBlocks.map((item, index) => {
    return <TextBlock key={index}>{item.text}</TextBlock>
  })
  return (
    <>
      <TextBlockFilter />
      {content}
    </>
  )
}
