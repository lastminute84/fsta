import React from 'react'
import { shallow } from 'enzyme'
import Backdrop from '../Backdrop'

describe('Backdrop', () => {
  it('should render without crashing', () => {
    shallow(<Backdrop />)
  })
})
