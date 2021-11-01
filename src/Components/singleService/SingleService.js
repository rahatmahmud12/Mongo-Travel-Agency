import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const SingleService = (props) => {
    const { serviceId } = useParams()

    const [service, setService] = useState({})


    useEffect(() => {
        fetch(`http://localhost:5000/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div className="mt-24">


            <section class="relative pt-12 bg-blueGray-50">
                <div class="items-center flex flex-wrap">
                    <div class="w-full md:w-4/12 ml-auto mr-auto px-4">
                        <img alt="..." class="max-w-full rounded-lg shadow-lg" src={service.img} />
                    </div>
                    <div class="w-full md:w-5/12 ml-auto mr-auto px-4">
                        <div class="md:pr-12">
                            <div class="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300 mt-8">
                                <i class="fas fa-rocket text-xl"></i>
                            </div>
                            <h3 class="text-3xl font-semibold">{service.name}</h3>
                            <p class="mt-4 text-lg leading-relaxed text-blueGray-500">
                                {service.Description}
                            </p>
                            <ul class="list-none mt-6">
                                <li class="py-2">
                                    <div class="flex items-center">
                                        <div>
                                            <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"><i class="fas fa-fingerprint"></i></span>
                                        </div>
                                        <div>
                                            <h4 class="text-blueGray-500"> Budget-
                                                {service.budget}
                                            </h4>
                                        </div>
                                    </div>
                                </li>
                                <li class="py-2">
                                    <div class="flex items-center">
                                        <div>
                                            <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"><i class="fab fa-html5"></i></span>
                                        </div>
                                        <div>
                                            <h4 class="text-blueGray-500">{serviceId}</h4>
                                        </div>
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>

            </section>



        </div>
    );
};

export default SingleService;