import React from 'react';
import Header from '../Shared/Header/Header';
import img from '../../images/002.jpg';

const About = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className='col-md-6 about-us'>
                    <div className='about-header'>
                        <img src={img} alt="" className='img-fluid' />
                        <h2 className=''> Name: SAKIB AHMED SARON</h2>
                    </div>
                </div>
                <div className='col-md-6 about-us'>
                    <div className='about-header mt-4'>
                        <h2>My Goal : First of all I have to finish Programming hero MERN Stack full course and get a chance to SCIC then I have to finish ACC All contents. After that i wanna do minimum 50+ projects on React . When I feel I am a good developer then I apply on some company for a job or intern. It would be Remote or any type of job. My first target is learing properly then make a good skill on this fuild and after that.I apply for international job on Canada , USA or any Europe country as a full time Web Developer. Thanks</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;