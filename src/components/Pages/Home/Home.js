import React, { useEffect } from 'react';
import './Module.Home.css';
import person from '../../../images/person.png';
import Services from './Services';
import 'aos/dist/aos.css';
import Aos from 'aos';
<script src="../../Animation/scrollanimation.js"></script>

const Home = () => {

    useEffect( () => {
        Aos.init({
            offset: 150,
            duration: 1000
        });
    }, []);

    return (
        <div>
            <body></body>

            <div className='banner-text'>
                <h4 data-aos='fade-right' >Welcome to Justice Law Chamber</h4>
                <h1 data-aos='fade-right' >We are fighting for</h1>
                <h1 data-aos='fade-right' >Your Cutody</h1>
                <p data-aos='fade-right' >I have helped thousands of people to get relief from national wide fights wrongfull denials. Now they tursed us. There is no lorem ipsum text</p>
                <br />
                <button data-aos='fade-left' >Get Legal Advice</button>
            </div>

            <div data-aos='zoom-in' className='why-us'>
                <div className='why-text-section'>
                    <h4>Services</h4>
                    <h2>Why Select Me?</h2>
                    <p>
                        Thirty years of experinece and 1000+ successful cases completion is my main strength and testimony. 
                    </p>
                    <button>Free Consultation</button>
                </div>
                <div data-aos='fade-up'  className='why-skill-section'>
                    <div data-aos='fade-up'  className='design-background'></div>

                    <div data-aos='fade-up' className='why-skills'>
                        <div data-aos='fade-up' >
                            <img data-aos='fade-up' src={person} width={50} alt="" />
                            <h3 data-aos='fade-up' >Fight For Justice</h3>
                            <p data-aos='fade-up' >
                                I always fight for justice and its my motto. I do what I belive and never give-up is my power.
                            </p>
                        </div>
                        <div data-aos='fade-up' >
                            <img data-aos='fade-up' src={person} width={50} alt="" />
                            <h3 data-aos='fade-up' >Best Case Strategy</h3>
                            <p data-aos='fade-up' >
                                Amongst the 1000+ cases, 95 percent cases were favor to me. I always belive and depend best strategic plan.
                            </p>
                        </div>
                        <div data-aos='fade-up' >
                            <img data-aos='fade-up' src={person} width={50} alt="" />
                            <h3 data-aos='fade-up' >Experienced Attorney</h3>
                            <p data-aos='fade-up' >
                                I have experinece of more than thirty years.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <h1 data-aos='flip-down' className='practice-area-heading' style={{}}>Practice Areas (Services)</h1>
            <Services></Services>

            <div data-aos='flip-up' className='subscribe-us'>
                <form>
                    <span>Subscribe Our Newsletter</span>
                    <input type="email" name="email-subscribe" id="" placeholder='Enter Your Emaill Address' />
                    <button className='btn-subscribe'>Subscribe</button>
                </form>
            </div>
        </div>
    );
};

export default Home;