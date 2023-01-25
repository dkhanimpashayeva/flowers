import React from 'react'
import Events from '../companents/Events'
import Flowerspricing from '../companents/Flowerspricing'
import Mission from '../companents/Mission'
import Swiperhero from '../companents/Swiperhero'
import Team from '../companents/Team'

const Home = () => {
  return (
    <div>
      <Swiperhero/>
      <Mission/>
      <Flowerspricing/>
      <Team/>
      <Events/>
    </div>
  )
}

export default Home
