import React from 'react'
import HeroSection from './HeroSection'
import AboutInfo from './AboutInfo'
import Recipe from './Recipe'
import Move from './Move'
import Sub from './Sub'
import LocationSection from './LocationSection'

function Home() {
  return (
    <div>
      <HeroSection></HeroSection>
      <AboutInfo></AboutInfo>
      <Recipe/>
      <Move/>
      <Sub/>
      <LocationSection/>
    </div>
  )
}

export default Home