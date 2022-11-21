import React from 'react';
import myProfileImage from '../../../images/MyImage.jpg';
import './Module.About.css';

const About = () => {
    return (
        <div className='about'>
            <img src={myProfileImage} alt="" />
            <div className='info-text'>
                <h1>Md. Awal Hossain</h1>
                <h2>Web Developer</h2>
                <h3>React JS, Express, Mongo, JavaScript, HTML, CSS, Bootstrap, Tailwind CSS, Firebase, </h3>
                <p>
                    &#8667; &nbsp;  I want to be a full-stack web developer & its my firm decision and my ambition.
                    <br />

                    &#8667; &nbsp; Currently, I am trying to spend at least 3 hours every day, but I want to increase this time in future as I am doing a full time job.
                    <br />

                    &#8667; &nbsp; My first plan is to complete the Programming Hero course by this year.
                    <br />

                    &#8667; &nbsp; Then I want to complete several projects from youtube and from my local collection.
                    <br />

                    &#8667; &nbsp; My final goal is to be a freelancer or remote job holder in this sector.
                    <br /><br />
                    <small style={{color:'yellow'}}>Email: awalrmg@gmail.com</small>
                </p>
            </div>
        </div>
    );
};

export default About;