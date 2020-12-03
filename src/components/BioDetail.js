import React from 'react';
import {Element} from 'react-scroll';
import icon from '../images/me.jpg';

const BioDetail = () => {

    return (
        <Element name='welcome-section'>
            <div className='biodetail-container'>
                <div className='biodetail-details'>
                    <div className='detail-container-pane1'>
                        <img className='biodetail-icon-img' src={icon}></img>
                    </div>
                    <div className='detail-container-pane2'>
                        <h1>Hi, I'm Andrew</h1>
                        <h2>Full Stack Software Engineer</h2>
                    </div>
                </div>
            </div>
        </Element>
    )
}

export default BioDetail;
