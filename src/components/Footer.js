import React from 'react'

export default function Footer() {
  const date = new Date()
  return (
    <footer className="footer">
      <p>{date.getFullYear()}</p>
    </footer>
  )
}
