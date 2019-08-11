import React from 'react'
import { shallow } from 'enzyme'
import Hero from '../Hero'

describe('Hero', () => {
  it('should render without crashing', () => {
    shallow(<Hero />)
  })
})
