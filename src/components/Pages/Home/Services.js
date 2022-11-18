import React, { useEffect } from 'react';
import familyLawIcon from '../../../images/icons/practice-area/family-care.png';
import businessLawIcon from '../../../images/icons/practice-area/businessLaw.png';
import insuranceLawIcon from '../../../images/icons/practice-area/insurance-law.png';
import criminalLawIcon from '../../../images/icons/practice-area/criminal-law.png';
import propertyLawIcon from '../../../images/icons/practice-area/property-law.png';
import employmentLawIcon from '../../../images/icons/practice-area/employement-law.png';
import fireAccidentLawIcon from '../../../images/icons/practice-area/fire-accident.png';
import financialLawIcon from '../../../images/icons/practice-area/financial-laws.png';
import drugOffencesLawIcon from '../../../images/icons/practice-area/drugs-offences.png';
import sexualOffencesLawIcon from '../../../images/icons/practice-area/sexual-offences.png';
import './Module.Services.css';
import 'aos/dist/aos.css';
import Aos from 'aos';

const Services = () => {
    useEffect( () => {
        Aos.init({duration: 1000});
    } ,[]);
    return (
        <div className='practice-area'>
            <div data-aos='fade-up' className='practice'>
                <img src={familyLawIcon} alt="" />
                <h3>Family Law</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis nostrum reprehenderit quibusdam non explicabo eum nihil beatae molestiae tenetur officia.
                </p>
                <button>Pricing & Process</button>
            </div>
            <div data-aos='fade-up' className='practice'>
                <img src={businessLawIcon} alt="" />
                <h3>Business Law</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis nostrum reprehenderit quibusdam non explicabo eum nihil beatae molestiae tenetur officia.
                </p>
                <button>Pricing & Process</button>
            </div>
            <div data-aos='fade-up' className='practice'>
                <img src={insuranceLawIcon} alt="" />
                <h3>Insurance Law</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis nostrum reprehenderit quibusdam non explicabo eum nihil beatae molestiae tenetur officia.
                </p>
                <button>Pricing & Process</button>
            </div>
            <div data-aos='fade-up' className='practice'>
                <img src={criminalLawIcon} alt="" />
                <h3>Criminal Law</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis nostrum reprehenderit quibusdam non explicabo eum nihil beatae molestiae tenetur officia.
                </p>
                <button>Pricing & Process</button>
            </div>
            <div data-aos='fade-up' className='practice'>
                <img src={propertyLawIcon} alt="" />
                <h3>Property Law</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis nostrum reprehenderit quibusdam non explicabo eum nihil beatae molestiae tenetur officia.
                </p>
                <button>Pricing & Process</button>
            </div>
            <div data-aos='fade-up' className='practice'>
                <img src={employmentLawIcon} alt="" />
                <h3>Employment Law</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis nostrum reprehenderit quibusdam non explicabo eum nihil beatae molestiae tenetur officia.
                </p>
                <button>Pricing & Process</button>
            </div>
            <div data-aos='fade-up' className='practice'>
                <img src={fireAccidentLawIcon} alt="" />
                <h3>Fire Accident</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis nostrum reprehenderit quibusdam non explicabo eum nihil beatae molestiae tenetur officia.
                </p>
                <button>Pricing & Process</button>
            </div>
            <div data-aos='fade-up' className='practice'>
                <img src={financialLawIcon} alt="" />
                <h3>Financial Law</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis nostrum reprehenderit quibusdam non explicabo eum nihil beatae molestiae tenetur officia.
                </p>
                <button>Pricing & Process</button>
            </div>
            <div data-aos='fade-up' className='practice'>
                <img src={drugOffencesLawIcon} alt="" />
                <h3>Drug Offences</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis nostrum reprehenderit quibusdam non explicabo eum nihil beatae molestiae tenetur officia.
                </p>
                <button>Pricing & Process</button>
            </div>
            <div data-aos='fade-up' className='practice'>
                <img src={sexualOffencesLawIcon} alt="" />
                <h3>Sexual Offences</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis nostrum reprehenderit quibusdam non explicabo eum nihil beatae molestiae tenetur officia.
                </p>
                <button>Pricing & Process</button>
            </div>
        </div>
    );
};

export default Services;