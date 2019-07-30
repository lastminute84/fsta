import React from 'react'

export default function Footer() {
  const date = new Date()
  return (
    <footer className="footer">
      <p>Created by Csaba Farkas</p>
      <p>{date.getFullYear()}</p>
    </footer>
  )
}
