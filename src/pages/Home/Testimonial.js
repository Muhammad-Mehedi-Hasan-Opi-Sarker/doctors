import React from 'react';
import quote from '../../assets/icons/quote.svg';

const Testimonial = () => {
    return (
        <section className='mt-24'>
            <div className='flex justify-between'>
                <div>
                    <h4 className='text-primary text-2xl font-bold'>Testimonial</h4>
                    <h1 className='text-4xl'>What Our Patients Says</h1>
                </div>
                <div>
                    <img src={quote} className='w-48' alt="" />
                </div>
            </div>
            <div>

            </div>
        </section>
    );
};

export default Testimonial;