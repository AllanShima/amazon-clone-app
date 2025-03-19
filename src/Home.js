import React from 'react'
import "./Home.css"

function Home() {
  return (
    <div className='home'>
        {/* BEM Convention */}
      <div className='home__container'>
        <video src='https://m.media-amazon.com/images/I/A1QjE1HXwoL.mp4' autoPlay="true"/>
      </div>
    </div>
  )
}

export default Home
