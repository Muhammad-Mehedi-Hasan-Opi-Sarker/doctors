import React from 'react';

const Reviews = ({ patient }) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias ac
                    cusamus sit itaque ut a facere reprehenderit natus veniam ,
                    architecto esse nemo nihil nisi
                    tempore consectetur molestiae. Ratione, temporibus?</p>
                <div className="card-actions justify-start items-center mt-8">
                    <div className="avatar">
                        <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={patient.img} alt=''/>
                        </div>
                    </div>
                   <div className='ml-3'>
                   <h2 className="card-title">{patient.name}</h2>
                    <p>{patient.ad}</p>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;