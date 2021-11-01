import React from 'react';
import Services from '../Services/Services';
import Banner from './Banner/Banner';
import PartOne from './Part-one/PartOne';
import PartTwo from './Part-two/PartTwo';
import ServiceHome from './ServiceHome/ServiceHome';

const Home = () => {
    return (
        <div className="">

            <Banner></Banner>
            <ServiceHome></ServiceHome>
            <PartOne></PartOne>
            <PartTwo></PartTwo>
        </div>
    );
};

export default Home;