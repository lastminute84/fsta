import items from './data/data'
import React, { Component } from 'react'

const FluencyShapingContext = React.createContext({ ...items })

class FluencyShapingProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      textBlocks: [],
      filteredTextBlocks: [],
      selectedType: '40spm'
    }
  }

  getData = () => {
    // this is where we will get the date from our api
    this.setState({ textBlocks: items }, () => this.filterTextBlocks())
  }

  componentDidMount() {
    this.getData()
  }

  handleChange = event => {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = event.target.name
    console.log('name', name)

    this.setState(
      {
        [name]: value
      },
      this.filterTextBlocks
    )
  }

  filterTextBlocks = () => {
    let { textBlocks, selectedType } = this.state

    let tempTextBlocks = [...textBlocks]

    // filter by type
    tempTextBlocks = tempTextBlocks.filter(tb => tb.type === selectedType)

    this.setState({
      filteredTextBlocks: tempTextBlocks
    })
  }

  render() {
    return (
      <FluencyShapingContext.Provider
        value={{
          ...this.state,
          handleChange: this.handleChange
        }}
      >
        {this.props.children}
      </FluencyShapingContext.Provider>
    )
  }
}

const FluencyShapingConsumer = FluencyShapingContext.Consumer

export { FluencyShapingProvider, FluencyShapingConsumer, FluencyShapingContext }
