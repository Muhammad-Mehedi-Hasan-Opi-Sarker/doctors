import React from 'react';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import white from '../../assets/images/whitening.png';
import Service from './Service';

const Services = () => {
    const services = [
        {
            _id: 1,
            name: 'Fluoride Treatment',
            img: fluoride,
            describe: ''
        },
        {
            _id: 2,
            name: 'Cavity Filling',
            img: cavity,
            describe: ''

        },
        {
            id: 3,
            name: 'Teeth Whitening',
            img: white,
            describe: ''
        }
    ]
    return (
        <div className='my-24'>
            <h1 className='text-primary font-bold text-2xl'>OUR SERVICES</h1>
            <h1 className='font-bold text-4xl' style={{ color: '#000000' }}>Services We Provide</h1>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-5'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;