import React from 'react';

const Manage = (props) => {
    const { service } = props

    const handleDelete = id => {
        const url = `http://localhost:5000/services/${id}`;
        fetch(url, {
            method: 'DELETE'

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }
    return (
        <div className="border-4 rounded-md mb-2 mt-10 w-50 p-4 mx-auto">

            <h2>{service.name}</h2>
            <button className="bg-blue-800 p-2 rounded-lg" onClick={() => handleDelete(service._id)}>Delete</button>

        </div>
    );
};

export default Manage;