import React from 'react'
import { shallow } from 'enzyme'
import TextBlockFilter from '../TextBlockFilter'

describe('TextBlockFilter', () => {
  it('should render without crashing', () => {
    shallow(<TextBlockFilter />)
  })
})
