import React from 'react';

const About = () => {
    return (
        <div>
            <div className="container tw-mx-auto mt-12">
                <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
                    <div className="max-h-96 md:h-screen">
                        <img className="w-screen h-screen object-cover object-top" src="https://64.media.tumblr.com/70dff713cc413448966136289c8bf17e/9c755f10583d0cc2-27/s500x750/5a337ade84bf89443a916f320effbed81c52c1b9.png" alt="" />
                    </div>
                    <div className="flex bg-gray-100  ps-5">
                        <div className="mb-auto mt-auto max-w-lg">
                            <h1 className="text-4xl uppercase">Mongo Travel Agency</h1>
                            <p className="tw-font-semibold mb-5 pt-2">Travel and Booking Service</p>
                            <p>What are travel services?
                                Travel services are services offered by travel agents, including passenger transport services, air travel services, car hire services, road transport services, rail transport services, sea transport services, booking.</p>

                            <h4 className="pt-3 text-2xl">Mongo Travel Agency, Kolabaga, Dhaka 1000</h4>
                            <button className="bg-black rounded-md py-3 px-7 mt-6 px-3 text-white">Email Us</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;