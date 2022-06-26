import React from 'react';
import quote from '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import Reviews from './Reviews';

const Testimonial = () => {
    const patients =[
        {
            _id:1,
            name:'Hasan',
            ad:'Sirajgonj',
            des:'',
            img:people1
        },
        {
            _id:2,
            name:'Ali',
            ad:'Rajshahi',
            des:'',
            img:people2
        },
        {
            _id:3,
            name:'Ar Rohman',
            ad:'Pabna',
            des:'',
            img:people3
        }
    ]
    return (
        <section className='mt-24'>
            <div className='flex justify-between'>
                <div>
                    <h4 className='text-primary text-2xl font-bold'>Testimonial</h4>
                    <h1 className='text-4xl' style={{color:'#000000'}}>What Our Patients Says</h1>
                </div>
                <div>
                    <img src={quote} className='w-48' alt="" />
                </div>
            </div>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-5'>
                {
                    patients.map(patient=><Reviews
                    key={patient._id}
                    patient={patient}
                    ></Reviews>)
                }
            </div>
        </section>
    );
};

export default Testimonial;