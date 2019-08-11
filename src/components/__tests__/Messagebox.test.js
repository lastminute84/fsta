import React from 'react'
import { shallow } from 'enzyme'
import Messagebox from '../Messagebox'

describe('Messagebox', () => {
  it('should render without crashing', () => {
    shallow(<Messagebox />)
  })
})
