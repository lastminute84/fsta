import React, { useContext } from 'react'
import { FluencyShapingContext } from '../context'
import TextBlock from './TextBlock'
import '../App.css'

export default function Layout() {
  const context = useContext(FluencyShapingContext)

  const items = Object.values(context)

  const textBlocks = items.map((item, index) => {
    return <TextBlock key={index}>{item.text}</TextBlock>
  })
  return <>{textBlocks}</>
}
