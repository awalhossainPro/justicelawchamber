import React, { useEffect } from 'react';
import './Module.Services.css';
import 'aos/dist/aos.css';
import Aos from 'aos';
import { useNavigate } from 'react-router-dom';

const Service = ({singleService}) => {
    const {image, id, name, description} = singleService;
    useEffect( () => {
        Aos.init({duration: 1000});
    }, []);
    const navigate = useNavigate();
    const navigateToServiceDetail = id => {
        navigate(`/service/${id}`)
    }

    return (
        <div data-aos='fade-up' className='practice'>
            <img data-aos='fade-up' src={image} alt="" />
            <h3 data-aos='fade-up'>{name}</h3>
            <p data-aos='fade-up'>
                {description}
            </p>
            <button onClick={()=>navigateToServiceDetail(id)} data-aos='fade-up'>Checkout</button>
        </div>
    );
};

export default Service;