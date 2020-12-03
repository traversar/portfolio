import React, { useState } from 'react';
import {Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const EmptyNav = ({
    projects
}) => {
    let [showProjects, setShowProjects] = useState(false);
console.log(projects)
    const goTo = (destination) => {
        setShowProjects(false)
        scroller.scrollTo(destination, {
            duration: 800,
            smooth: true,
            delay: 0,
        });
    }

    const handleProjects = () => {
        setShowProjects(true)
    }

    return (
        <div className='nav-container-fixed emptynav-container'>
            <div className='nav-container'>
                <div style={{backgroundColor: 'var(--contact-color)'}} onMouseOver={() => goTo("connect-section")} onClick={() => goTo("connect-section")}></div>
                <div style={{backgroundColor: 'var(--skills-color)'}} onMouseOver={() => goTo("skills-section")} onClick={() => goTo("skills-section")}></div>
                <div style={{backgroundColor: 'var(--projects-color)'}} onMouseOver={() => goTo("projects-section")} onClick={() => goTo("projects-section")}></div>
                <div style={{backgroundColor: 'var(--bio-color)'}} onMouseOver={() => goTo("welcome-section")} onClick={() => goTo("welcome-section")}></div>
            </div>
            <div>
            {showProjects &&
                        Object.keys(projects).map(project => (
                            <div>{project}</div>
                        ))
            }
            </div>
        </div>
    )
}

export default EmptyNav;
