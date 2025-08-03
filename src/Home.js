import React, { useState, useEffect } from 'react';
import "./Home.css"
import Product from "./Product"

function Home() {
  const [slideIndex, setSlideIndex] = useState(1);
  const slides = [
    "https://m.media-amazon.com/images/I/619geyiQI5L._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/71qcoYgEhzL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/61Yx5-N155L._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/81hIlE5xocL._SX3000_.jpg",
    "https://m.media-amazon.com/images/I/71xHyqBwdcL._SX3000_.jpg"
  ];

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex(prevIndex => 
        prevIndex === slides.length ? 1 : prevIndex + 1
      );
    }, 10000);
    return () => clearInterval(interval);
  }, [slides.length]); // Dependência mais estável

  const plusSlides = (n) => {
    let newIndex = slideIndex + n;
    if (newIndex > slides.length) {
      newIndex = 1;
    } else if (newIndex < 1) {
      newIndex = slides.length;
    }
    setSlideIndex(newIndex);
  };


  return (
    <div className='home'>
      <div className='home__container'>
        <div className="home__slideshowContainer">
          {slides.map((slide, index) => (
            <img 
              key={index}
              className="home__slideImage" 
              src={slide} 
              alt={`Slide ${index + 1}`}
              style={{ display: index + 1 === slideIndex ? 'block' : 'none' }}
            />
          ))}
          
          {/* Buttons to pass the images - Corrigido para React */}
          <button className="prev" onClick={() => plusSlides(-1)}>&#10094;</button>
          <button className="next" onClick={() => plusSlides(1)}>&#10095;</button>
        </div>
        

        <div className='home__row'>
          <Product 
          id="12345"
          title='The Lean Startup' 
          price={29.99} 
          image="https://m.media-amazon.com/images/I/71sxTeZIi6L.jpg" 
          rating={5}
          quantity={0}/>

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
          rating={3}/>
              
          <Product 
          id="677"
          title='Elden Ring Official Strategy Guide, Vol. 1: The Lands Between' 
          price={11.93} 
          image="https://m.media-amazon.com/images/I/61cIdzclx-L._SY342_.jpg" 
          rating={3}/>
        </div>

        <div className='home__row'>
          <Product 
          id="654"
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