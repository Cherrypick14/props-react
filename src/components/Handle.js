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
                     Name: <input type="text" placeholder="enter your name" />
                    Email: <input type="email" placeholder="enter your emailaddress" />
                      <p>Wanna keep, in touch, folow us in our socila media handles</p>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                 </form>
          </div>
        </div>
  )
}
