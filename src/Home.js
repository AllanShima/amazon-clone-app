import React from 'react'
import "./Home.css"
import Product from "./Product"

function Home() {
  return (
    <div className='home'>
        {/* BEM Convention */}

      <div className='home__container'>
        <img className="home__image" src="https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg" alt='Books'/>

        <div className='home__row'>
          <Product 
          id="12345"
          title='The Lean Startup' 
          price={29.99} 
          image="https://m.media-amazon.com/images/I/71sxTeZIi6L.jpg" 
          rating={5}/>

          <Product 
          id="123"
          title='CyberPowerPC Gamer Xtreme VR Gaming PC, Intel Core i7-14700F 2.1GHz, GeForce RTX 5060 Ti 16GB, 16GB DDR5, 1TB PCIe 4.0 SSD, WiFi Ready & Windows 11 Home (GXiVR8040A17)' 
          price={1359.99} 
          image="https://m.media-amazon.com/images/I/711P2GOadBL._AC_UL480_FMwebp_QL65_.jpg" 
          rating={4}/>
        </div>

        <div className='home__row'>
          <Product 
          id="235"
          title='Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones' 
          price={11.93} 
          image="https://m.media-amazon.com/images/I/419CqGgAdZL._SY445_SX342_.jpg" 
          rating={5}/>

          <Product 
          id="653"
          title='BERIBES Bluetooth Headphones Over Ear, 65H Playtime and 6 EQ Music Modes Wireless Headphones with Microphone, HiFi Stereo Foldable Lightweight Headsets, Deep Bass for Home Office Cellphone PC Ect.' 
          price={19.99} 
          image="https://m.media-amazon.com/images/I/71F2ccIPPLL._AC_UY327_FMwebp_QL65_.jpg" 
          rating={4}/>
              
          <Product 
          id="677"
          title='Elden Ring Official Strategy Guide, Vol. 1: The Lands Between' 
          price={11.93} 
          image="https://m.media-amazon.com/images/I/61cIdzclx-L._SY342_.jpg" 
          rating={3}/>
        </div>

        <div className='home__row'>
          <Product 
          id="677"
          title='Xbox Series X 1TB SSD Console - Includes Xbox Wireless Controller - Up to 120 frames per second - 16 GB RAM - 1 TB SSD Storage - Experience True 4K Gaming - Xbox Velocity Architecture' 
          price={681.96} 
          image="https://m.media-amazon.com/images/I/616klipzdtL._AC_UL480_QL65_.jpg" 
          rating={5}/>
        </div>
      </div>
    </div>
  )
}

export default Home