import React from 'react';
import tretment from '../../assets/images/treatment.png';

const Child = () => {
    return (
        <div className="lg:card-side bg-base-100 lg:px-36 px-12 lg:flex">
            <figure className='flex-1'><img 
            className='h-96 w-96'
             src={tretment} alt="Album"/></figure>
            <div className="card-body flex-1">
                <h1 className="card-title lg:text-5xl lg:font-bold" style={{ color: '#000000' }}>Exceptional Dental 
                Care, on Your Terms</h1>
                <p>It is a long established fact that a reader will be distracted by the readable content 
                    of a page when looking at its layout. 
                    The point of using Lorem Ipsumis that it has a more-or-less normal distribution of
                     letters,as opposed to using 'Content here, content here', making it look like
                      readable English. Many desktop publishing packages and web page</p>
                <div className="card-actions justify-start">
                    <button className="btn btn-primary">GET STARTED</button>
                </div>
            </div>
        </div>
    );
};

export default Child;