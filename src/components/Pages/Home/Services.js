import React, { useEffect, useState } from 'react';
import familyLawIcon from '../../../images/icons/practice-area/family-care.png';
import './Module.Services.css';
import 'aos/dist/aos.css';
import Aos from 'aos';

const Services = () => {
    useEffect( () => {
        Aos.init({duration: 1000});
    } ,[]);

    const [service, setService] = useState([]);
    // console.log(service[0]);

    useEffect( () =>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setService(data))
    }, []);
    return (
        <div className='practice-area'>
            {
                service.map(singleService =>
                    <div data-aos='zoom-in-up' className='practice'>
                        <img src={singleService.image} alt="" />
                        <h3>{singleService.name}</h3>
                        <p>
                            {singleService.description}
                        </p>
                        <button>Pricing & Process</button>
                    </div>
                )
            }
        </div>
    );
};

export default Services;