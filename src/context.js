import items from './data/data'
import React, { Component } from 'react'

const FluencyShapingContext = React.createContext({ ...items })

class FluencyShapingProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      textBlocks: []
    }
  }

  getData = () => {
    // this is where we will get the date from our api
    console.log(`items: ${items}`)
    this.setState({ textBlocks: items })
  }

  componentDidMount() {
    this.getData()
  }

  render() {
    console.log('rendering context')
    return (
      <FluencyShapingContext.Provider
        value={{
          ...this.state
        }}
      >
        {this.props.children}
      </FluencyShapingContext.Provider>
    )
  }
}

const FluencyShapingConsumer = FluencyShapingContext.Consumer

export { FluencyShapingProvider, FluencyShapingConsumer, FluencyShapingContext }
