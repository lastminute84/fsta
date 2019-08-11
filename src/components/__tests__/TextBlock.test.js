import React from 'react'
import { shallow } from 'enzyme'
import TextBlock from '../TextBlock'

describe('TextBlock', () => {
  it('should render without crashing', () => {
    shallow(<TextBlock />)
  })
})
TextBlock
