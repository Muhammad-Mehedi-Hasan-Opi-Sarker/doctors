import React from 'react';

const Reviews = ({ patient }) => {
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias ac
                    cusamus sit itaque ut a facere reprehenderit natus veniam ,
                    architecto esse nemo nihil nisi
                    tempore consectetur molestiae. Ratione, temporibus?</p>
                <div class="card-actions justify-start items-center mt-8">
                    <div class="avatar">
                        <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={patient.img} alt=''/>
                        </div>
                    </div>
                   <div className='ml-3'>
                   <h2 class="card-title">{patient.name}</h2>
                    <p>{patient.ad}</p>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;