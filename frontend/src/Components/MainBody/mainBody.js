import React from 'react'
import './mainBody.css'
import About from '../About/about'
import Projects from '../Project/projects'
import Contacs from '../Contacts/contact'

function MainBody() {
  return (
    <div id='mainBodyContainer'>
        <About/>
        <Projects/>
        <Contacs/>
    </div>
  )
}

export default MainBody