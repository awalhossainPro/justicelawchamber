import React, { useEffect } from 'react';
import './Module.Home.css';
import person from '../../../images/person.png';
import Services from './Services';
import 'aos/dist/aos.css';
import Aos from 'aos';
<script src="../../Animation/scrollanimation.js"></script>

const Home = () => {

    useEffect( () => {
        Aos.init({duration: 1000});
    }, []);

    return (
        <div>
            <body></body>

            <div className='banner-text'>
                <h4>Welcome to Justice Law Chamber</h4>
                <h1>We are fighting for</h1>
                <h1>Your Cutody</h1>
                <p>We have helped thousands of people to get relief from national wide fights wrongfull denials. Now they tursed us. There is no lorem ipsum text</p>
                <br />
                <button>Get Legal Advice</button>
            </div>

            <div data-aos='fade-up' className='why-us'>
                <div className='why-text-section'>
                    <h4>Services</h4>
                    <h2>Why Select Us?</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem unde vitae, odio, labore nulla perspiciatis harum quia beatae minima, minus neque illum ametlabore nulla perspiciatis harum quia beatae minima </p>
                    <button>Free Consultation</button>
                </div>
                <div className='why-skill-section'>
                    <div className='design-background'></div>

                    <div className='why-skills'>
                        <div>
                            <img src={person} width={50} alt="" />
                            <h3>Fight For Justice</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque suscipit ipsa optio ducimus dignissimos deleniti!</p>
                        </div>
                        <div>
                            <img src={person} width={50} alt="" />
                            <h3>Best Case Strategy</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque suscipit ipsa optio ducimus dignissimos deleniti!</p>
                        </div>
                        <div>
                            <img src={person} width={50} alt="" />
                            <h3>Experienced Attorney</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque suscipit ipsa optio ducimus dignissimos deleniti!</p>
                        </div>
                    </div>
                </div>
            </div>

            <h1 data-aos='flip-left' style={{color:'#fff', textAlign:'center', padding:'5px 0', background:'#ab9a03', margin:'0 7%', fontWeight:'400'}}>Practice Areas (Services)</h1>
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