import styled from 'styled-components'

const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid black;
  border-radius: 3px;
`

const PrimaryButton = styled(Button)`
  color: darkolivegreen;
  border-color: darkolivegreen;
`

const DangerButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`

export { Button, PrimaryButton, DangerButton }
