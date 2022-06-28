import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Services from './Services';

const AvailableAppointment = () => {
    const [services,setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);
    useEffect(()=>{ 
        fetch('http://localhost:5000/service').then(res=>res.json()).then(data=>setServices(data))
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
                    setTreatment={setTreatment}
                    ></Services>)
                }
                </div>
                {treatment && <BookingModal 
                treatment={treatment}
                setTreatment={setTreatment}
                ></BookingModal>}
        </div>
    );
};

export default AvailableAppointment;