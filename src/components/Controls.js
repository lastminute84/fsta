import React from 'react'
import { PrimaryButton, DangerButton } from './buttons/Buttons'

export default function Controls(props) {
  return (
    <>
      <PrimaryButton onClick={props.startButtonClicked}>Start</PrimaryButton>
      <DangerButton>Stop</DangerButton>
    </>
  )
}
