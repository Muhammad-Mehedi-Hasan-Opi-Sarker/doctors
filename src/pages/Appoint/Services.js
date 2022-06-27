import React from 'react';

const Services = ({service}) => {
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
                    <button disabled={slots.length===0} className="btn btn-primary">Book Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default Services;