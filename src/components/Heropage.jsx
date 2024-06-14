import React from 'react'
import blur1 from '../assets/blur1.svg'
import line1 from '../assets/line1.png'
import line2 from '../assets/line2.png'
const Heropage = () => {
  return (
    <div className='heropage'>
      <div className='herocontainer'>
      <img className="line1" src={line1} alt="" />  
      <img className='line2' src={line2} alt="" />
      <img className='blur1' src={blur1} alt="" />
      <div>
      <h1>Elevate Your Digital Presence</h1><br />
      </div>
      <div>
      <p> Expert SEO, content, and Social Media Solutions</p><br />
      </div>
      <div>
      <button> Book a Call</button></div>
      </div>
      <br /><br /><br /><br /><br /><br />
    </div>
  )
}

export default Heropage