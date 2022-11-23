import React, { useEffect, useState } from 'react';
import Service from './Service';
import './Module.Services.css';
import 'aos/dist/aos.css';
import Aos from 'aos';
import ServiceDetail from './ServiceDetail';

const Services = () => {
    useEffect( () => {
        Aos.init({duration: 1000});
    }, []);

    const [service, setService] = useState([]);

    useEffect( () =>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setService(data))
    }, []);

    return (
        <div className='practice-area'>
            {
                service.map(singleService =>
                    <Service
                        key={singleService.id}
                        singleService={singleService}
                    ></Service>
                )
            }
            {
                service.map(singleService =>
                    <ServiceDetail
                        key={singleService.id}
                        singleService={singleService}
                    ></ServiceDetail>
                )
            }
        </div>
    );
};

export default Services;