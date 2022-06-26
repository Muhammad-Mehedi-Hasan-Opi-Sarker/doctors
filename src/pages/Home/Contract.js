import React from 'react';
import apo from '../../assets/images/appointment.png';

const Contract = () => {
    return (
        <div style={{ background: `url(${apo})` }} className='mt-36'>
            <div className='mt-16'>
                <h1 className='text-2xl font-bold text-white mb-3'>Contact Us</h1>

                <h1 className='text-4xl font-bold text-white mb-11'>Stay connected with us</h1>
                <div>
                    <input type="text" placeholder="Type here" className="input w-full max-w-xs mb-5" /><br />
                    <input type="text" placeholder="Type here" className="input w-full max-w-xs mb-5" /><br />
                    <input type="text" placeholder="Type here" className="input input-bordered input-lg w-full h-32 max-w-xs mb-5" /><br />
                    <button className="btn btn-primary">Submit</button>
                </div>
            </div>
        </div>
    );
};

export default Contract;