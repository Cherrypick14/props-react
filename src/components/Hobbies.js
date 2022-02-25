import React from 'react'

export default function Hobbies(props) {
  return (
    <div className='hobbies'>
       <p>Hi, am {props.user.name}</p>
       <p>I'm aged {props.user.age} and I live in {props.user.location}</p>
        <h1 style={{color:"#310D20"}}>My hobbies</h1>
         <ul>
           {props.user.hobbies.map((hobby,i) => <li key ={i}>{hobby}</li> )}
         </ul>
        </div>
  )
}
