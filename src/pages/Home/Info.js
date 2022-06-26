import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';

const Info = () => {
    return (
        <div className='grid lg:grid-cols-3 grid-cols-1 gap-5'>
            <InfoCard cardTitle={'Opening Time'} bgColor={'bg-primary'} img={clock}></InfoCard>
            <InfoCard cardTitle={'Our Location'} bgColor={'bg-secondary'} img={marker}></InfoCard>
            <InfoCard cardTitle={'Contract Us'} bgColor={'bg-primary'} img={phone}></InfoCard>
        </div>
    );
};

export default Info;