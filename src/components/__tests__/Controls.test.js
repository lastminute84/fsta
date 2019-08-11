import React from 'react'
import { shallow } from 'enzyme'
import Controls from '../Controls'

describe('Controls', () => {
  it('should render without crashing', () => {
    shallow(<Controls />)
  })
})
