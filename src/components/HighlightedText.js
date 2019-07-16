import styled from 'styled-components'

const HighlightedText = styled.p`
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0) 50%,
    rgba(22, 160, 133, 1) 50%
  );
  background-size: 200%;
  font-size: 1.3rem;
  display: inline;
  transition: 60s linear;
  font-family: raleway, arial, sans-serif;
  text-transform: uppercase;
  background-position: ${props => (props.started ? '-100% 0' : '0 0')};
`

export default HighlightedText
