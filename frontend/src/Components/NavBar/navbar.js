import React from 'react'
import './navbar.css';

function Navbar() {
  return (
    <div id='navBarContainer'>
        <div id='imgContainer'>
            <img alt='img' src="./logo.png"/>
        </div>
        <div id='optionsContainer'>
            <div className='optionss' id='aboutContainer'>
                About
            </div>
            <div className='optionss' id='projectContainer'>
                Projects
            </div>
            <div className='optionss' id='contactConatainer'>
                Contact
            </div>
        </div>
        <div id='dummyContainer'>
            dummy
        </div>
    </div>
  )
}

export default Navbar   