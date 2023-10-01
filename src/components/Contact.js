import React from 'react'

export default function Contact(props) {
  return (
    <div className='container mx-3' style={{backgroundColor:props.mode==='light'?'white':'#13aba5',color:props.mode==='light'?'black':'white' }}>

      <h5> you can Contact us at:</h5>

       <span> Gmail: </span>

      <a href="mailto:rajeshboddu333@gmail.com? subject=subject text"> rajeshboddu333@gmail.com</a>

     <p>  Mobile Number: 9348651300  </p>

    </div>
  )
}
