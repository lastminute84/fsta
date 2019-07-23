import React, { useContext } from 'react'
import { FluencyShapingContext } from '../context'
import TextBlock from '../components/TextBlock'
import TextBlockFilter from '../components/TextBlockFilter'
import Title from '../components/Title'
import '../App.css'

export default function Exercises() {
  const context = useContext(FluencyShapingContext)

  const { filteredTextBlocks } = context
  const content = filteredTextBlocks.map((item, index) => {
    return <TextBlock key={item.id}>{item.text}</TextBlock>
  })

  return (
    <div className="container">
      <Title title="Exercises" />
      <TextBlockFilter />
      <div className="text-block-grid-container">{content}</div>
    </div>
  )
}
