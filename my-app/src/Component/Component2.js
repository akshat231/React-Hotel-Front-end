import React from 'react'
import image1 from '../Images/Chennai.jpg'
import image2 from '../Images/Goa.jpg'
import image3 from '../Images/Mumbai.webp'
import image4 from '../Images/Srinagar.jpg'
import image5 from '../Images/kerala.jpg'
import image6 from '../Images/Kolkata.webp'
import { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'

const images=[image1,image2,image3,image4,image5,image6]

export default function Component1() {
  const autoPlayRef = useRef()
  const[slide,setslide]=useState(2)
  const increment=()=>{
    if(slide===6)
    {
      setslide(1);
    }
    else
    {
      setslide(slide+1)
    }
  }
  useEffect(() => {
    setTimeout(() =>  {
      increment()
  }, 5000);
  })
  return (
    <div>
      {slide===1&&<><img src={images[slide-1]} className="image2"></img><span className="text2">Chennai</span></>}
      {slide===2&&<><img src={images[slide-1]} className="image2"></img><span className="text2"> Goa</span></>}
      {slide===3&&<><img src={images[slide-1]} className="image2"></img><span className="text2">Mumbai</span></>}
      {slide===4&&<><img src={images[slide-1]} className="image2"></img><span className="text2">Srinagar</span></>}
      {slide===5&&<><img src={images[slide-1]} className="image2"></img><span className="text2">kerala</span></>}
      {slide===6&&<><img src={images[slide-1]} className="image2"></img><span className="text2">Kolkata</span></>}
    </div>
  )
}

