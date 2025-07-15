import React from 'react'
import "../css/Hero.css"
import mainvideo from  "../assets/video/homepage-placeholder.webm"
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div>
      
    <div className="hero-container">
   
      <video
        className="hero-video"
        src={mainvideo}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="blur-overlay" />

   
    <div className="hero-content">
         <p className="hero-subtext">Generate images, audio, and now — video.</p>
         <h1 className="hero-title">Explore new ways to create</h1>

       <div className="hero-input-box">
          <select className="hero-select">
           <option>Image</option>
           <option>Audio</option>
           <option>Video</option>
         </select>
         <input
           type="text"
           className="hero-input"
           placeholder="Describe the image you want to generate"
         />
            
            
            <Link to='/generate' className="hero-button"> Generate  </Link>
      </div>
       </div>
    </div>


 </div>

  );
};

export default Hero


