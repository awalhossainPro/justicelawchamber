import React, { useEffect, useState } from 'react';
import Service from './Service';
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
                    <Service
                        key={singleService.id}
                        singleService={singleService}
                    ></Service>
                )
            }
        </div>
    );
};

export default Services;