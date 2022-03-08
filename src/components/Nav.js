import React from 'react';

const Nav = ({
    projects
}) => {
    // let [showProjects, setShowProjects] = useState(false);


    const goTo = (destination) => {
        const destinationEl = document.getElementById(destination);
        destinationEl.scrollIntoView({behavior: 'smooth'})
    }

    // const handleProjects = () => {
    //     setShowProjects(true)
    // }

    return (
        <div id='nav' className='nav-container-fixed'>
            <div id='nav-container' className='nav-container'>
                <div style={{backgroundColor: 'var(--bio-color)'}} onMouseOver={() => goTo("welcome-section")} onClick={() => goTo("welcome-section")}>
                    <div className='nav-text'>Welcome</div>
                </div>
                <div style={{backgroundColor: 'var(--projects-color)'}} onMouseOver={() => goTo("projects-section")} onClick={() => goTo("projects-section")}>
                    <div className='nav-text'>Projects</div>
                </div>
                <div style={{backgroundColor: 'var(--skills-color)'}} onMouseOver={() => goTo("skills-section")} onClick={() => goTo("skills-section")}>
                    <div className='nav-text'>Skills</div>
                </div>
                <div style={{backgroundColor: 'var(--contact-color)'}} onMouseOver={() => goTo("connect-section")} onClick={() => goTo("connect-section")}>
                    <div className='nav-text'>Connect</div>
                </div>
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
