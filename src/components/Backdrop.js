import React from 'react'

export default function Backdrop(props) {
  return props.show ? (
    <div className="backdrop" onClick={props.backdropClickHandler} />
  ) : null
}
