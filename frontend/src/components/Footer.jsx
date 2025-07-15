import React from 'react'
import '../css/footer.css'
import fb from "../assets/images/icon-fb.svg"
import linkdin from "../assets/images/icon-in.svg"
import youtube from "../assets/images/icon-yt.svg"
import insta from "../assets/images/icon-snap.svg"
import twitter from "../assets/images/icon-twitter.svg"

const Footer = () => {


  return (
    <div>
          <div className='main-footer'>
      
  <div className='footer-box'>
    <h6>Company</h6>
    <span>About Us</span>
    <span>Careers</span>
    
    <h6>Find Us On</h6>
    <span>Instagram</span>
    <span>LinkedIn</span>
    <span>YouTube</span>
  </div>


      
  <div className='footer-box'>
    <h6>Resources</h6>
    <span>Blog</span>
    <span>FAQs</span>
    <span>Privacy Policy</span>
    <span>Terms of Service</span>
  </div>


      
  <div className='footer-box'>
    <h6>Contact</h6>
    <span>Live Chat 24/7</span>
    <span>Email Support</span>
    <span>Help Center</span>
  </div>

 
      
  <div className='footer-box box-4'>
    <div className='footer-section'>
      <h6>Help</h6>
      <span>Live Chat 24/7</span>
      <span>Email Us</span>
    </div>

    <div className='footer-section'>
      <h6>Tutorials</h6>
      <span>Blog</span>
      <span>Community</span>
    </div>

    <div className='footer-section'>
      <h6>Company</h6>
      <span>Affiliate Program</span>
    </div>

    <div className='footer-section'>
      <h6>Pricing</h6>
      <span>InVideo AI</span>
    </div>
      </div>
      
 
      
</div>


<div className='footer-last'>
  <div className='footer-last-box'>
    <a href="#"><img src={fb} alt="Facebook" /></a>
    <a href="#"><img src={linkdin} alt="LinkedIn" /></a>
    <a href="#"><img src={twitter} alt="Twitter" /></a>
    <a href="#"><img src={insta} alt="Instagram" /></a>
    <a href="#"><img src={youtube} alt="YouTube" /></a>
  </div>

  <div className='footer-last-box last-2'>
    <span>Privacy Policy • Terms & Conditions</span>
    <span>© 2025 InVideo</span>
  </div>
</div>


</div>

  )
}

export default Footer

