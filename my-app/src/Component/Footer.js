import React, { Component } from 'react'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsYoutube} from 'react-icons/bs'


export default class footer extends Component {
  render() {
    return (
      <>
    <div className="footer">
      <span className="foot1">Accomodation Information</span>
      <span className="foot2">Rooms Experience</span>
      <span className="foot3">About Us</span>
      <span className="foot4">Photo Gallery</span>
      <span className="foot5">Know on Map</span>
      <span className="foot6">Contact Center</span>
      <span className="foot7">+91-xxxxxxxxx</span>
      <span className="foot8">+91-xxxxxxxxx</span>
      <span className="foot9">+91-xxxxxxxxx</span>
      <span className="foot10">abc@gmail.com</span>
      <span className="foot11">xyz@hr.com</span>
      <span className="foot12">Find Us</span>
      <BsFacebook className="fb"></BsFacebook>
      <BsInstagram className="ig"></BsInstagram>
      <BsYoutube className="yt"></BsYoutube>
    </div>
      </>
    )
  }
}
