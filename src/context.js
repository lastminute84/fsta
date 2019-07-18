import items from './data/data'
import React, { Component } from 'react'

const FluencyShapingContext = React.createContext()

class FluencyShapingProvider extends Component {
  state = {
    textBlocks: []
  }

  getData = () => {
    // this is where we will get the date from our api
    this.setState({ textBlocks: items })
    console.log(this.state.items)
  }

  componentDidMount() {
    this.getData()
  }

  render() {
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

export function withFluencyShapingConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <FluencyShapingConsumer>
        {value => <Component {...props} context={value} />}
      </FluencyShapingConsumer>
    )
  }
}

export { FluencyShapingProvider, FluencyShapingConsumer, FluencyShapingContext }
