import React, { useState } from 'react';
import {Element} from 'react-scroll';
import { DiHtml5, DiGithubBadge, DiNodejsSmall, DiPython, DiReact, DiPostgresql, DiDjango, DiDocker, DiCss3 } from "react-icons/di";
import { SiRedux } from "react-icons/si";

const Badges = () => {
    let [badgeText, setBadgeText] = useState('Skills')

    const handleBadgeHover = (text) => {
        setBadgeText(text);
    }

    let svgs = [
        {
            src: (<DiGithubBadge />),
            text: 'Github'
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

    let numsvgs = svgs.length;
    let hasMid = 0; /* 0 if there's no item in the middle, 1 otherwise */
    let m = numsvgs - hasMid; /* how many are ON the circle */
    let tan = Math.tan(Math.PI/m); /* tangent of half the base angle */

    return (
        <Element name='skills-section'>
            <div className='badges-container detail-container'>
                <div className='badges-circle-container' style={{width: '30vw', height: '30vw', '--m': m, '--tan': tan.toFixed(2)}}>
                    <h1>{badgeText}</h1>
                    {svgs.map((svg, i) => (
                        <div onMouseOver={() => handleBadgeHover(svg.text)} style={{'--i': i}} className='badges-icon-container'>
                            {svg.src}
                        </div>
                    ))}
                </div>
            </div>
        </Element>
    )
}

export default Badges;
