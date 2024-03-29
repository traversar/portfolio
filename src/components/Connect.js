import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib';

const Contact = () => {
    return (
        <div id='connect-section' className='contact-container detail-container'>
            <div className='contact-p'>
                <h3>
                You can find my work and contact information below at LinkedIn and Github. I look forward to connecting with you!
                </h3>
            </div>
            <div className='contact-links'>
                <IconContext.Provider value={{ size: '8em' }}>
                    <div>
                        <a style={{color: 'white'}} href='https://www.linkedin.com/in/andrew-travers-8273761bb/' target='_blank' rel="noreferrer">
                            <FaLinkedin />
                        </a>
                    </div>
                    <div>
                        <a style={{color: 'white'}} href='https://www.github.com/traversar' target='_blank' rel="noreferrer">
                            <FaGithub />
                        </a>
                    </div>
                </IconContext.Provider>
            </div>
        </div>
    )
}

export default Contact;
