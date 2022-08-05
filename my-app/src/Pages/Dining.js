import React from 'react'

import image1 from '../Images/Din.jpg'


export default function dining() {
  return (
    <>
      <img src={image1} height="1100px" className='back1' alt="bgimage"/>
      <span className='likh'>Welcome to Midnight Wonders</span>
      <span className='likhde'>A Crazy place for crazy foody - Heart of Perfect Food Hangout!</span>
      <button className='bookatable'>Book A Table</button>
    </>
  )
}
