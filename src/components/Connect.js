import React from 'react';
import { Link } from 'react-router-dom';
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
                        <Link to='https://www.linkedin.com/in/andrew-travers-8273761bb/'>
                            <div>
                                <FaLinkedin />
                            </div>
                        </Link>
                        <Link to='https://github.com/traversar/'>
                            <div>
                                <FaGithub />
                            </div>
                        </Link>
                    </IconContext.Provider>
                </div>
            </div>
        </Element>
    )
}

export default Contact;
