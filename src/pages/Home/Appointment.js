import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';

const Appointment = () => {
    return (
        <section 
        style={{background:`url(${appointment})`}}
        className='flex mt-40 justify-center items-center'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-120px]' src={doctor} alt="" />
            </div>
            <div className='text-white flex-1'>
                <h4 className='lg:font-bold text-2xl text-accent mb-5'>Appointment</h4>
                <h1 className='lg:text-4xl font-bold mb-5'>Make an appointment Today</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem recusandae 
                    distinctio eveniet quae, delectus mollitia aspernatur in praesentium voluptate
                     placeat soluta nihil beatae rerum cumque laboriosam porro vero dolorem culp
                     a illo nulla 
                    quas maiores voluptas est! Quas veniam beatae possimus.</p>
            </div>
        </section>
    );
};

export default Appointment;