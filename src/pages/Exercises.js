import React, { useContext } from 'react'
import { FluencyShapingContext } from '../context'
import TextBlock from '../components/TextBlock'
import '../App.css'

export default function Exercises() {
  const context = useContext(FluencyShapingContext)

  console.log(context)
  const { textBlocks } = context
  const content = textBlocks.map((item, index) => {
    return <TextBlock key={index}>{item.text}</TextBlock>
  })
  return <>{content}</>
}
