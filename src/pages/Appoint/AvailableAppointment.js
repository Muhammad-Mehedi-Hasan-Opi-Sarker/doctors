import React, { useEffect, useState } from 'react';

const AvailableAppointment = () => {
    const [services,setServices] = useState([]);
    useEffect(()=>{
        fetch('service.json').then(res=>res.json()).then(data=>setServices(data))
    },[])
    return (
        <div>
            <h1 className='text-primary font-bold text-2xl'>
                Available Services on April 30, 2022</h1>
        </div>
    );
};

export default AvailableAppointment;