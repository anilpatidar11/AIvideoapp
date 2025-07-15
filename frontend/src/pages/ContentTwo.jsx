import React from 'react'
import "../css/contenttwo.css"

import fish from "../assets/video/fish.mp4"
const ContentTwo = () => {
  return (

    
     <section className="full-width-section">
      <div className="content-wrapper">
        <div className="text-box1">
          <div className='text-inner'>
             <h2>Go further with
Photoshop on the web</h2>
          <p>
     Photoshop on the web delivers powerful editing tools in a streamlined interface. Preview the app now - no sign in or download required.
          </p>
         </div>
        </div>

        <div className="video-box">
       <video  src={fish}
               autoPlay
               loop
               muted
               playsInline/>
        </div>
      </div>
    </section>
  );
};

export default ContentTwo