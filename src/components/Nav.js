import React from 'react';
import { scroller } from 'react-scroll'

const Nav = ({
    projects
}) => {
    // let [showProjects, setShowProjects] = useState(false);

    const goTo = (destination) => {
        // setShowProjects(false)
        scroller.scrollTo(destination, {
            duration: 800,
            smooth: true,
            delay: 0,
        });
    }

    // const handleProjects = () => {
    //     setShowProjects(true)
    // }

    return (
        <div id='nav' className='nav-container-fixed'>
            <div id='nav-container' className='nav-container'>
                <div style={{backgroundColor: 'var(--bio-color)'}} onMouseOver={() => goTo("welcome-section")} onClick={() => goTo("welcome-section")}><div style={{paddingRight: '2vw'}}>Welcome</div></div>
                <div style={{backgroundColor: 'var(--projects-color)'}} onMouseOver={() => goTo("projects-section")} onClick={() => goTo("projects-section")}><div style={{paddingRight: '2vw'}}>Projects</div></div>
                <div style={{backgroundColor: 'var(--skills-color)'}} onMouseOver={() => goTo("skills-section")} onClick={() => goTo("skills-section")}><div style={{paddingRight: '2vw'}}>Skills</div></div>
                <div style={{backgroundColor: 'var(--contact-color)'}} onMouseOver={() => goTo("connect-section")} onClick={() => goTo("connect-section")}><div style={{paddingRight: '2vw'}}>Connect</div></div>
            </div>
            {/* <div>
            {showProjects &&
                        Object.keys(projects).map(project => (
                            <div>{project}</div>
                        ))
            }
            </div> */}
            {/* <div className='nav-container-togglebtn' onClick={toggleMenu}>
                <BiMenu />
            </div> */}
        </div>
    )
}

export default Nav;
