import React from 'react'
import image1 from '../Images/Mountain.webp'
import image2 from '../Images/Beach.jpg'
import image3 from '../Images/Amazon.jpg'
import image4  from '../Images/Smoke.jpg'
import { useState } from 'react'
import { useEffect } from 'react'
import room1 from '../Images/Room1.jfif'
import room2 from '../Images/Room2.jpeg'
import room3 from '../Images/Room3.webp'
import room4 from '../Images/Room4.webp'
import room5 from '../Images/Room5.jpg'
import room6 from '../Images/Room6.jpg'




const images=[image1,image2.image3]


export default function Rooms() {
  const[sho,setsho]=useState(1)
  const increment=()=>{
    if(sho===3)
    {
      setsho(1)
    }
    else
    {
      setsho(sho+1)
    }
  }
useEffect(()=>{
    setTimeout(() => {
      increment()
    }, 4000);
  })
  return (
    <>
    {sho===1&&<><img src={image1} className="roomphoto1"></img></>}
    {sho===2&&<><img src={image2} className="roomphoto2"></img></>}
    {sho===3&&<><img src={image3} className="roomphoto3"></img></>}
    {sho===1&&<><div className='roomwrite1'>Relax in the Mountains</div></>}
    {sho===2&&<><div className='roomwrite2'>Play in the Beach</div></>}
    {sho===3&&<><div className='roomwrite3'>Get Lost in the Woods</div></>}
    <img src={room1} className='roomphoto4'></img>
    <img src={room2} className='roomphoto5'></img>
    <img src={room3} className='roomphoto6'></img>
    <img src={room4} className='roomphoto7'></img>
    <img src={room5} className='roomphoto8'></img>
    <img src={room6} className='roomphoto9'></img>
    <span className='roomtype1'>Villa Room</span>
    <span className='roomtype2'>King Room</span>
    <span className='roomtype3'>Double Edged Sword Room</span>
    <span className='roomtype4'>Work Heaven Room</span>
    <span className='roomtype5'>Queen Room</span>
    <span className='roomtype6'>Wood Room</span>
    <button className='pricetype1'>Price</button>
    <button className='pricetype2'>Price</button>
    <button className='pricetype3'>Price</button>
    <button className='pricetype4'>Price</button>
    <button className='pricetype5'>Price</button>
    <button className='pricetype6'>Price</button>
    <button className='tourtype1'>Take a Tour</button>
    <button className='tourtype2'>Take a Tour</button>
    <button className='tourtype3'>Take a Tour</button>
    <button className='tourtype4'>Take a Tour</button>
    <button className='tourtype5'>Take a Tour</button>
    <button className='tourtype6'>Take a Tour</button>

    </>
  )
}
