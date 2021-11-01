import React, { useEffect, useState } from 'react';
import OneService from './OneServices/OneService';

const Services = () => {

    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            <h1 class="sm:text-4xl text-gray-800 mt-20 text-6xl font-medium font-bold title-font mb-2 text-gray-900">Our Services</h1>

            <div className="grid grid-cols-3 ">
                {
                    services.map(service => <OneService
                        key={service.budget}
                        service={service}

                    ></OneService>)
                }
            </div>

        </div>
    );
};

export default Services;