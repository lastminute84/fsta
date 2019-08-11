import React, { useContext } from 'react'
import { FluencyShapingContext } from '../context'

const getUnique = (items, value) => {
  return items ? [...new Set(items.map(i => i[value]))] : []
}

export default function TextBlockFilter() {
  const context = useContext(FluencyShapingContext)
  const { selectedType, textBlocks, handleChange } = context

  let types = getUnique(textBlocks, 'type')

  types = types
    ? types.map((item, index) => {
        return (
          <option value={item} key={index}>
            {item}
          </option>
        )
      })
    : null

  return (
    <section className="filter-container">
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
