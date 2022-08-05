
import {BsChevronLeft} from "react-icons/bs"
import {BsChevronRight} from 'react-icons/bs'
import im1 from '../Images/Hon.jpg'
import im2 from '../Images/Jungle.webp'
import im3 from '../Images/Modern.jfif'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsYoutube} from 'react-icons/bs'
import Component1 from "../Component/Component1"
import Component2 from "../Component/Component2"
import Component3 from "../Component/Component3"
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Navbar from '../Component/Navbar'
import Video from '../Images/Video.mp4'


export default function home() {
  return (
    <>
      <video autoPlay muted loop id="video">
      <source src={Video} type="video/mp4" autoplay="true"></source>
      </video>
    <div className='ho'>
    <div className='choose'>
      <span className="choose1">Choose Us to Get</span></div>
      <span className='choose2'>Best Service</span>
      <span className='choose3'>MemberShip Perks</span>
      <span className='choose4'>24-Hour Internet</span>
      <span className='choose5'>24/7 Service</span>
    <div className='train'>
      <span className='train1'>Safety Measures taken</span>
    </div>
    <span className='train2'>Trained Professionals</span>
    <span className='train3'>Sanitized Rooms</span>
    <span className='train4'>Contactless Payment</span>
    <span className='train5'>Vaccinated Staff</span>
    <div className='getaway'>
    <span className='getaway1'>Popular Get-Aways</span>
    <Component1/>
    <Component2/>
    <Component3/>
    </div>
    <div className="dinpal">
      <span className="dinpal1">Dining Palaces</span>
      <img src={im1} className="im1"></img>
      <img src={im2} className="im2"></img>
      <img src={im3} className="im3"></img>
      <span className="t1">Royal Rasoi</span>
      <span className="t2">Jungle Safari</span>
      <span className="t3">Modern Paradise</span>
    </div>
    </div>
    </>
  )
}
