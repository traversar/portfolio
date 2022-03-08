import React from 'react';
import icon from '../images/me.jpg';

const BioDetail = () => {

    return (
        <div id='welcome-section' className='biodetail-container'>
            <div className='biodetail-details'>
                <img className='biodetail-icon-img' src={icon} alt='Profile Icon'></img>
                <div className='detail-container-pane2'>
                    <h1>Andrew Travers</h1>
                    <h2>Full Stack Software Engineer</h2>
                </div>
            </div>
        </div>
    )
}

export default BioDetail;
