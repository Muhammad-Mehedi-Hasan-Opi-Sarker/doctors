import React from 'react';
import Appointment from './Appointment';
import Banner from './Banner';
import Child from './Child';
import Contract from './Contract';
import Footer from '../Shared/Footer';
import Info from './Info';
import Services from './Services';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Child></Child>
            <Appointment></Appointment>
            <Testimonial></Testimonial>
            <Contract></Contract>
        </div>
    );
};

export default Home;