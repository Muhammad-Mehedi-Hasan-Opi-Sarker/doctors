import React, { useState } from 'react';
import chair from '../../assets/images/chair.png';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AppointmentBanner = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse gap-32">
                <div className='flex-1'><img src={chair} alt='' className="sm:w-fit rounded-lg shadow-2xl" /></div>
                <div className='flex-1'>
                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;