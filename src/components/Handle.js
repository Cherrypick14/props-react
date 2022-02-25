import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import React from 'react'

export default function handle(props) 
{
  const verdict ="Tell me about yourself";
  return (
    <div className='handle'> 
        <p>My name is {props.name} and I am a software developer</p>
        <p>I am aged {props.age} currently living in {props.location}</p>
          <div className="aboutbio">
               <h1>{verdict}</h1>
                 <form className='formbio'>
                     Name: <input className="formname"type="text" placeholder="your name..." />
                    Email: <input className="formmail"type="email" placeholder=" your email address" />
                        <textarea className="formtextarea" placeholder="Tell us something..."name="" id="" cols="30" rows="10"></textarea>
                        <p>Wanna keep, in touch, follow us on our social media handles</p>
                        <div className="social-icons">
                          <span style={{padding:10, cursor:'pointer'}}><FontAwesomeIcon icon={faFacebook} style={{ color: '#0F4289' }} size="2x" /></span> 
                       <span style={{padding:10, cursor:'pointer'}}><FontAwesomeIcon icon={faInstagram} style={{ color: '#310D20' }} size="2x"/></span>  
                        <span style={{padding:10, cursor:'pointer'}}><FontAwesomeIcon icon={faTwitter} style={{ color: '#2685D8' }} size="2x"/></span> 
                        <span style={{padding:10, cursor:'pointer'}}><FontAwesomeIcon icon={faLinkedin} style={{ color: '#0F4289' }} size="2x"/></span> 

                        </div>
                 </form>
          </div>
        </div>
  )
}
