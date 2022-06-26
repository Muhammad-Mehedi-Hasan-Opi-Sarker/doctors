import React from 'react';
import chair from '../../assets/images/chair.png';

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} alt='' className="max-w-sm rounded-lg shadow-2xl" />
                    <div>                        
                        <h1 className="text-5xl font-bold" style={{color:'#000000'}}>Your New Smile Starts Here</h1>                        
                        <p className="py-6">Lorem Ipsum is simply dummy text of the printing and 
                        typesetting industry.
                         Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;