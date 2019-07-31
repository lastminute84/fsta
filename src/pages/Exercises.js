import React, { useContext, useState } from 'react'
import { FluencyShapingContext } from '../context'
import TextBlock from '../components/TextBlock'
import TextBlockFilter from '../components/TextBlockFilter'
import Title from '../components/Title'
import '../App.css'
import Modal from '../components/Modal'
import MessageBox from '../components/MessageBox'

export default function Exercises() {
  const context = useContext(FluencyShapingContext)
  const [isFirstRun, setIsFirstRun] = useState(true)

  const { filteredTextBlocks } = context
  const content = filteredTextBlocks.map((item, index) => {
    return <TextBlock key={item.id}>{item.text}</TextBlock>
  })

  return (
    <>
      <div className="container">
        <Title title="Exercises" />
        <TextBlockFilter />
        <div className="text-block-grid-container">{content}</div>
      </div>
      <Modal show={isFirstRun} modalClosedHandler={() => setIsFirstRun(false)}>
        <MessageBox
          title="Warning"
          message="We recommend you warm up before exercising."
        />
      </Modal>
    </>
  )
}
