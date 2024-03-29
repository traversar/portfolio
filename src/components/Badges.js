import React, { useState } from 'react';
import { DiHtml5, DiGit, DiNodejsSmall, DiPython, DiReact, DiPostgresql, DiDjango, DiDocker, DiCss3 } from "react-icons/di";
import { SiRedux } from "react-icons/si";

const Badges = () => {
    let [badgeText, setBadgeText] = useState('Skills')

    const handleBadgeHover = (text) => {
        setBadgeText(text);
    }

    let svgs = [
        {
            src: (<DiGit />),
            text: 'Git'
        },
        {
            src: (<DiNodejsSmall />),
            text: 'NodeJS'
        },
        {
            src: (<DiPython />),
            text: 'Python'
        },
        {
            src: (<DiReact />),
            text: 'React'
        },
        {
            src: (<SiRedux />),
            text: 'Redux'
        },
        {
            src: (<DiPostgresql />),
            text: 'PostgreSQL'
        },
        {
            src: (<DiDjango />),
            text: 'Django'

        },
        {
            src: (<DiDocker />),
            text: 'Docker'

        },
        {
            src: (<DiCss3 />),
            text: 'CSS3'
        },
        {
            src: (<DiHtml5 />),
            text: 'HTML5'
        },
    ]

    let numSvgs = svgs.length;
    let hasMid = 0;
    let m = numSvgs - hasMid;
    let tan = Math.tan(Math.PI/m);

    return (
        <div id='skills-section' className='badges-container detail-container'>
            <div className='badges-circle-container' style={{'--m': m, '--tan': tan.toFixed(2)}}>
                <h1>{badgeText}</h1>
                {svgs.map((svg, i) => (
                    <div key={i} onMouseOver={() => handleBadgeHover(svg.text)} style={{'--i': i}} className='badges-icon-container'>
                        {svg.src}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Badges;
