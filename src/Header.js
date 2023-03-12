import React from 'react';
import banner from './images/banner.jpg'
import logo from './images/logo.png'

export default function Header () {
    return (
        <div className="header">
            <img className="banner" src={banner} alt="colourful symbols on pink background"/>
            <img className="logo" src={logo} alt="logo for kat designs" />
        </div>
    )
}