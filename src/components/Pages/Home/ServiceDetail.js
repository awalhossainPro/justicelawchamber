import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Module.Services.css';

const ServiceDetail = () => {
    const {serviceId} = useParams();

    
    return (
        <div className='selected-service'>
            <h1>Service Id :  {serviceId}</h1>
        </div>
    );
};

export default ServiceDetail;