import React from 'react';

const Services = ({service, setTreatment}) => {
    const {name, slots} = service;
    return (
        <div className="card w-max-fit bg-base-100 shadow-xl">
            <div className="card-body mt-5">
                <h2 className="card-title text-primary">{name}</h2>
                <p>
                    {slots.length ? <span>{slots[0]}</span> : <span className='text-red-500'>No Slot Available</span>}
                </p>
                <p>{slots.length} {slots.length>1 ? 'Space' : 'No Available'}</p>
                <div className="card-actions justify-center">
                     <label 
                     htmlFor="bookingModal" 
                     disabled={slots.length===0}
                     onClick={()=>setTreatment(service)}
                     className="btn btn-primary modal-button">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Services;