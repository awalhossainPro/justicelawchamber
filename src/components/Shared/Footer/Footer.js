import 'aos/dist/aos.css';
import Aos from 'aos';
import React, { useEffect } from 'react';
import logo from '../../../images/logo-white.png';
import facebookIcon from '../../../images/icons/social-icons/facebook.png';
import linkedinIcon from '../../../images/icons/social-icons/linkedin.png';
import githubIcon from '../../../images/icons/social-icons/github.png';
import './Module.Footer.css';

const Footer = () => {

    useEffect( () => {
        Aos.init({duration: 1000});
    }, []);

    return (
        <div data-aos='fade-up' className='footer-section'>
            <div data-aos='fade-up' className='footer-main'>
                <div data-aos='fade-up' className='logo-social-link'>
                    <img data-aos='fade-up' src={logo} width={160} className='footer-top' alt="" />
                    <p data-aos='fade-up' >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe amet ut earum est quos tempora voluptatem repudiandae rem, eveniet tempore error pariatur blanditiis officia possimus itaque vel, quia expedita veniam!
                    </p>
                    <div data-aos='fade-up' className='social-icon'>
                        <img data-aos='fade-up' src={facebookIcon} width={50} alt="" />
                        <img data-aos='fade-up' src={linkedinIcon} width={50} alt="" />
                        <img data-aos='fade-up' src={githubIcon} width={50} alt="" />
                    </div>
                </div>

                <div data-aos='fade-up' className='practice-area-list'>
                    <h3 data-aos='fade-up' className='footer-top'>Practice Area</h3>
                    <p data-aos='fade-up' >&#8667; Family Law</p>
                    <p data-aos='fade-up' >&#8667; Business Law</p>
                    <p data-aos='fade-up' >&#8667; Insurance Law</p>
                    <p data-aos='fade-up' >&#8667; Criminal Law</p>
                    <p data-aos='fade-up' >&#8667; Drug Offence</p>
                    <p data-aos='fade-up' >&#8667; Fire Accident</p>
                    <p data-aos='fade-up' >&#8667; Employment Law</p>
                    <p data-aos='fade-up' >&#8667; Propoerty Law</p>
                </div>

                <div data-aos='fade-up' className='question-address'>
                    <h3 data-aos='fade-up' className='footer-top'>Have A Question?</h3>
                    <p data-aos='fade-up' >
                        99, Sample Street, Mountain Hill, Top Notch, USA
                    </p>
                    <p data-aos='fade-up' >
                        +2 88 0011223
                    </p>
                    <p data-aos='fade-up' >
                        sample_email@email.com
                    </p>
                </div>

                <div data-aos='fade-up' className='business-time'>
                    <h3 data-aos='fade-up' className='footer-top'>Business Hours</h3>
                    <div>
                        <p data-aos='fade-up' >Opening Days:</p>
                        <span data-aos='fade-up' className='time'>
                            Sunday - Thursday: 09:00 AM - 08:00 PM
                            <br />
                            Sturday: 4:00 PM - 08:00 PM
                        </span>
                        <p data-aos='fade-up' className='vacation-text'>Vacations:</p>
                        <span data-aos='fade-up' >
                            All Friday's All Official Holidays
                        </span>
                    </div>
                </div>
            </div>
            <div className='copyright-area'>
                Copyright &copy;2022 All rights reserved 
                <br /><br />
                Developer: Awal Hossain
                <br />
                Email: awalrmg@gmail.com
            </div>
        </div>
    );
};

export default Footer;