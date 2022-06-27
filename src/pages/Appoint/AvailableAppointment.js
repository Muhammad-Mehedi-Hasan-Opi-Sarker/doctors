import React, { useEffect, useState } from 'react';
import Services from './Services';

const AvailableAppointment = () => {
    const [services,setServices] = useState([]);
    useEffect(()=>{
        fetch('service.json').then(res=>res.json()).then(data=>setServices(data))
    },[])
    return (
        <div>
            <h1 className='text-primary font-bold text-2xl'>
                Available Services on April 30, 2022</h1>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-20'>
                {
                    services.map(service=><Services
                    key={service._id}
                    service={service}
                    ></Services>)
                }
                </div>
        </div>
    );
};

export default AvailableAppointment;