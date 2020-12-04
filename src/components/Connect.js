import React from 'react';
import {Element} from 'react-scroll';
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib';

const Contact = () => {
    return (
        <Element name='connect-section'>
            <div className='contact-container detail-container'>
                <div className='contact-p'>
                    <h3>
                    You can find my work and contact information below at LinkedIn and Github. I look forward to connecting with you!
                    </h3>
                </div>
                <div className='contact-links'>
                    <IconContext.Provider value={{ size: '8vw' }}>
                        <div>
                            <FaLinkedin />
                        </div>
                        <div>
                            <FaGithub />
                        </div>
                    </IconContext.Provider>
                </div>
            </div>
        </Element>
    )
}

export default Contact;
