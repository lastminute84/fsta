import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import About from '../components/About'
import Title from '../components/Title'
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <>
      <Hero>
        <Banner title="Fluency Shaping" subtitle="Speak easy">
          <Link to="/exercises" className="btn btn-primary">
            Exercises
          </Link>
        </Banner>
      </Hero>
      <div className="about">
        <Title title="What is fluency shaping?" />
        <About />
      </div>
    </>
  )
}
