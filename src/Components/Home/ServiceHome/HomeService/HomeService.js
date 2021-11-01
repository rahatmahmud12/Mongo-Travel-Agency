import React from 'react';
import { Link } from 'react-router-dom';
import './HomeService.css'

const HomeService = (props) => {
    const { _id, img, name, budget, Description } = props.service;
    return (
        <div>
            <div>
                <section className="text-gray-600 body-font ">
                    <div className="container px-4 py-4 mx-auto ">

                        <div className="">

                            <div className=" p-4 ">
                                <div className="bg-gray-600 p-3 rounded-lg wid-heg">
                                    <img className="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72 rounded w-full object-cover object-center mb-6" src={img} alt="Image Size 720x400" />
                                    <h3 className="tracking-widest text-indigo-300 text-2xl font-medium title-font">{name}</h3>
                                    <h2 className="text-lg text-white font-medium title-font mb-4">Budget- {budget} </h2>
                                    <p className="leading-relaxed text-white">{Description}</p>
                                    <Link to={`/service/${_id}`}><button className="bg-blue-600 text-white p-2 rounded-md">Book This Tour</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default HomeService;