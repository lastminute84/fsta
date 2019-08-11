import React from 'react'
import { shallow } from 'enzyme'
import Exercises from '../Exercises'

describe('Exercises', () => {
  it('should render without crashing', () => {
    shallow(<Exercises />)
  })
})
