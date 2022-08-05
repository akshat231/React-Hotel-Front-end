import React, { Component } from "react";

import Video from '../Images/Video.mp4'
import Logo from '../Images/Logoto.png'
import { Link } from "react-router-dom";
import { Routes } from "react-router-dom";
import Home from '../Pages/Home'
import Dining from '../Pages/Dining'
import home from "../Pages/Home";
import { NavLink } from "react-router-dom";

export default class Navbar extends Component {

  render() {
    return (
    <>
    <nav classname="nav1">
        <Link to="/" Component={Home}><span className="hotel">Our Hotels</span></Link>
        <Link to="/rooms/"><span className="rooms">Rooms</span></Link>
        <Link to="/"><span className="log"><img src={Logo} className="img1" alt="Logo"></img></span></Link>
        <Link to='/dining/'><span className="dining">Dining</span></Link>
        <Link to="/signing/"><span className="signing">Sign-in/Sign-up</span></Link>
        
    </nav>
    </>
    )
  }
}