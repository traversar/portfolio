import React from 'react';
import { projects } from './projectDetails';
import Nav from './components/Nav';
import EmptyNav from './components/EmptyNav';
import BioDetail from './components/BioDetail';
import ProjectDetail from './components/ProjectDetail';
import Badges from './components/Badges'
import Connect from './components/Connect';
import { BiMenu } from "react-icons/bi"
import { IconContext } from "react-icons";


function App() {

  const toggleNav = () => {
    let navBarContainer = document.getElementById('nav');
    let navBar = document.getElementById('nav-container')
    let toggleBtn = document.querySelector('.nav-container-togglebtn')
    let content = document.getElementById('content');
    if(navBarContainer.classList.contains('nav-container-fixed-show')) {
        navBarContainer.classList.remove('nav-container-fixed-show')
        navBar.classList.remove('nav-container-show')
        toggleBtn.classList.remove('nav-container-togglebtn-active')
        content.classList.remove('content-shift')
      } else {
        navBarContainer.classList.add('nav-container-fixed-show')
        navBar.classList.add('nav-container-show')
        toggleBtn.classList.add('nav-container-togglebtn-active')
        content.classList.add('content-shift')
    }
}

  return (
    <div className="portfolio-container">
      <div>
        <Nav projects={projects} />
      </div>
      <IconContext.Provider value={{ size: '8vw' }}>
        <div className='nav-container-togglebtn' onClick={toggleNav}>
            <BiMenu />
        </div>
      </IconContext.Provider>
      <div id='content' className='content'>
        <BioDetail />
        <ProjectDetail projects={projects}/>
        <Badges />
        <Connect />
      </div>
      <div>
        <EmptyNav />
      </div>
    </div>
  );
}

export default App;
