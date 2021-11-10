
import React, { useEffect, useState } from 'react';
import HomeService from './HomeService/HomeService';

const ServiceHome = () => {

    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://calm-beach-10483.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    const sixServices = services.slice(0, 6)
    return (
        <div>
            <h1 class="sm:text-4xl text-gray-800 mt-10 text-6xl font-medium font-bold title-font mb-2 text-gray-900">Our Services</h1>

            <div className="grid grid-cols-3 ">
                {
                    sixServices.map(service => <HomeService
                        key={service.budget}
                        service={service}

                    ></HomeService>)
                }
            </div>

        </div>
    );
};

export default ServiceHome;