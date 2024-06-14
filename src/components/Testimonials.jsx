import React from 'react'
import testimonialbg from '../assets/testimonialbg.png'
import testimonialbg2 from '../assets/testimonialbg2.png'
import testimonialbg3 from '../assets/testimonialbg3.png'
import star from '../assets/star.png'
import blur10 from '../assets/blur10.png'
const Testimonials = () => {
  return (
    <div>
      <br /><br /><br /><br />
      <div className='headers'><h1>Testimonials</h1></div>
      <div className='testimonial '>
        <img className='blur10' src={blur10} alt="" />
        <div className="testimonialcontent">
          <div className='testimonialheading1'><b>Osie Sports</b></div>
          <div className='rating'><img src={star} alt="" /></div>
          <div className='testcontent'><p>"Working with Shreyes has been a game-changer for our social media presence. His management of our social media and ad campaigns has significantly boosted our engagement and online visibility. We couldn't be happier with the results!" — Osie Sports Team</p></div>
          <img className="testimonialbg" src={testimonialbg} alt="" />
          <img className="testimonialbg2" src={testimonialbg2} alt="" />
          <img className="testimonialbg3" src={testimonialbg3} alt="" />

        </div>
        <div className="testimonialcontent">
          <div className='testimonialheading'><b> Toolv.io</b></div>
          <div className='rating'><img src={star} alt="" /></div>
          <div className='testcontent'><p>"Shreyes's content writing skills are top-notch. The high-quality, engaging content he creates has greatly enhanced our brand communication. We highly recommend his services to anyone looking to elevate their content strategy." — Toolv.io Marketing Team</p>
          </div>
          <img className="testimonialbg" src={testimonialbg} alt="" />
          <img className="testimonialbg2" src={testimonialbg2} alt="" />
          <img className="testimonialbg3" src={testimonialbg3} alt="" />

        </div> <div className="testimonialcontent">
          <div className='testimonialheading3'><b>NBD diagnostics</b></div>
          <div className='rating'><img src={star} alt="" /></div>
          <div className='testcontent'><p>"Shreyes's expertise in social media management has been invaluable to us. Our online presence and audience engagement have seen remarkable improvements since we started working with him. His dedication and results speak for themselves." — NBD Diagnostic Team</p></div>
          <img className="testimonialbg" src={testimonialbg} alt="" />
          <img className="testimonialbg2" src={testimonialbg2} alt="" />
          <img className="testimonialbg3" src={testimonialbg3} alt="" />

        </div>
  
      </div>
    </div>
  )
}

export default Testimonials