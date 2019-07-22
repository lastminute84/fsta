import React, { useContext } from 'react'
import { FluencyShapingContext } from '../context'
import Title from './Title'

const getUnique = (items, value) => {
  return [...new Set(items.map(i => i[value]))]
}
export default function TextBlockFilter() {
  const context = useContext(FluencyShapingContext)
  const { selectedType, textBlocks, handleChange } = context

  let types = getUnique(textBlocks, 'type')

  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    )
  })

  return (
    <section className="filter-container">
      <Title title="Filter" />
      <form className="fitler-form">
        <div className="form-group">
          <label htmlFor="type">type</label>
          <select
            name="selectedType"
            id=""
            value={selectedType}
            className="form-control"
            onChange={handleChange}
          >
            {types}>
          </select>
        </div>
      </form>
    </section>
  )
}
