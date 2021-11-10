import React, { useEffect, useState } from 'react';
import Manage from './Manage';

const ManageServices = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://calm-beach-10483.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])


    //
    return (
        <div>
            <div>
                {
                    services.map(service => <Manage
                        key={service.name}
                        service={service}
                    ></Manage>)
                }
            </div>

        </div>
    );
};

export default ManageServices;