import React ,{useState} from 'react'
import "../css/generate.css"

 import statics from "../assets/motion video/-static.mp4"
import handheld from "../assets/motion video/handheld.mp4";
import  left  from "../assets/motion video/pan-left.mp4"
import  right  from "../assets/motion video/pan-right.mp4"
import  down  from "../assets/motion video/tilt-down.mp4"
import  up  from "../assets/motion video/tilt-up.mp4"
import  zoomin  from "../assets/motion video/zoom-in.mp4"
import  zoomout  from "../assets/motion video/zoom-out.mp4"

import twod from "../assets/style/2d.mp4"
import threed from "../assets/style/3d.mp4"
import anime from "../assets/style/anime.mp4"
import blackandwhite from "../assets/style/black_and_white.mp4"
import cinematic from "../assets/style/cinematic.mp4"
import claymation from "../assets/style/claymation.mp4"
import fantasy from "../assets/style/fantasy.mp4"

import lineart from "../assets/style/line_art.mp4"
import stopmotion from "../assets/style/stopmotion.mp4"
import vector from "../assets/style/vector_art.mp4"



const Generate = () => {


  const [open, setOpen] = useState(true);
const [cameraOpen, setCameraOpen] = useState(false);
const [styleOpen, setStyleOpen] = useState(false);

  return (
<section className='main-generate'>

      <div className='generate-wrapper'>

    <div className='generate-left' style={{ maxHeight: "700px", overflowY: "auto" }}>

  <div className="card shadow-sm w-100 mb-5" style={{ maxWidth: '350px' }}>
    <div
      className="card-header bg-light fw-bold d-flex justify-content-between align-items-center"
      onClick={() => setOpen(!open)}
      style={{ cursor: 'pointer' }}
    >
      General Settings
<i className={`bi ${open ? 'bi-arrow-up-short' : 'bi-arrow-down-short'}`}></i>

    </div>

    {open && (
      <div className="card-body">
        <div className="mb-3">
          <label className="form-label">Resolution</label>
          <select className="form-select">
            <option>720p</option>
            <option>1080p</option>
            <option>4K</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Aspect Ratio</label>
          <select className="form-select">
            <option>Widescreen (16:9)</option>
            <option>Square (1:1)</option>
            <option>Portrait (9:16)</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Frames per second</label>
          <input className="form-control" value="24 FPS" disabled />
        </div>

        <div className="mb-3">
          <label className="form-label">Duration</label>
          <input className="form-control" value="5 seconds" disabled />
        </div>
      </div>
    )}
          </div>
          
  <div className="card shadow-sm w-100 mb-5" style={{ maxWidth: '350px' }}>
    <div
      className="card-header bg-light fw-bold d-flex justify-content-between align-items-center"
      onClick={() => setCameraOpen(!cameraOpen)}
      style={{ cursor: 'pointer' }}
    >
      Camera
<i className={`bi ${cameraOpen ? 'bi-arrow-up-short' : 'bi-arrow-down-short'}`}></i>

    </div>

    {cameraOpen && (
      <div className="card-body">
        <div className="mb-3">
          <label className="form-label">Shot Size</label>
          <select className="form-select">
            <option>None</option>
            <option>Extreme Close Up</option>
            <option>Close Up Shot</option>
            <option>Medium Shot</option>
            <option>Long Shot</option>
            <option>Extreme Long Shot</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Camera Angle</label>
          <select className="form-select">
            <option>None</option>
            <option>Aerial Shot</option>
            <option>Eye Level Shot</option>
            <option>High Angle Shot</option>
            <option>Low Angle Shot</option>
            <option>Top Down Shot</option>
          </select>
        </div>

        {/* Motion Videos */}
        <div className="mb-3">
          <label className="form-label">Motion</label>
          <div className="d-flex flex-wrap gap-3 p-2">
            {[
              { src: statics, label: "Static" },
              { src: handheld, label: "Handheld" },
              { src: left, label: "Move Left" },
              { src: right, label: "Move Right" },
              { src: down, label: "Tilt Down" },
              { src: up, label: "Tilt Up" },
              { src: zoomin, label: "Zoom In" },
              { src: zoomout, label: "Zoom Out" },
            ].map((motion, i) => (
              <div className="text-center" key={i}>
                <video
                  width="120"
                  muted
                  loop
                  onMouseEnter={e => e.target.play()}
                  onMouseLeave={e => e.target.pause()}
                  style={{ borderRadius: '6px' }}
                >
                  <source src={motion.src} type="video/mp4" />
                </video>
                <p className="mt-1 fw-semibold">{motion.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    )}
  </div>

  <div className="card shadow-sm w-100 mb-5" style={{ maxWidth: '350px' }}>
    <div
      className="card-header bg-light fw-bold d-flex justify-content-between align-items-center"
      onClick={() => setStyleOpen(!styleOpen)}
      style={{ cursor: 'pointer' }}
    >
      Style
<i className={`bi ${styleOpen ? 'bi-arrow-up-short' : 'bi-arrow-down-short'}`}></i>

    </div>

    {styleOpen && (
      <div className="card-body">
        <div className="mb-3">
          <label className="form-label">Style</label>
          <div className="d-flex flex-wrap gap-3 border p-2">
            {[
              { src: twod, label: "2D" },
              { src: threed, label: "3D" },
              { src: anime, label: "Anime" },
              { src: blackandwhite, label: "B&W" },
              { src: cinematic, label: "Cinematic" },
              { src: claymation, label: "Claymation" },
              { src: fantasy, label: "Fantasy" },
              { src: lineart, label: "Line Art" },
              { src: stopmotion, label: "Stop Motion" },
              { src: vector, label: "Vector" }
            ].map((style, index) => (
              <div className="text-center" key={index}>
                <video
                  width="120"
                  muted
                  loop
                  onMouseEnter={(e) => e.target.play()}
                  onMouseLeave={(e) => e.target.pause()}
                  style={{ borderRadius: '6px' }}
                >
                  <source src={style.src} type="video/mp4" />
                </video>
                <p className="mt-1 fw-semibold">{style.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    )}
  </div>
</div>



<div className='generate-right'>


<div className='generate-video-div mb-4'>
  <video width="100%" height="auto" controls>
    <source
      src="https://www.w3schools.com/html/mov_bbb.mp4"
      type="video/mp4"
    />
    Your browser does not support the video tag.
  </video>
</div>



  <div className='generate-text-div'>

  
    <div className='mb-3 prompt-div'>
      <h5 className='fw-bold'>Prompt</h5>
   
      <p className='text-muted'>Describe the video you'd like to generate</p>
    </div>

    <div className='d-flex gap-2 generate-input-box'>
      <input
        type="text"
        className="form-control form-textt"
        placeholder="Enter video prompt here..."
      />
      <button className="btn btn-primary">Generate</button>
    </div>

  </div>
</div>


      </div>





</section>
  )
}

export default Generate