import React from 'react';

const InfoCard = ({img, cardTitle, bgColor}) => {
    return (
        <div>
            <div className={`card lg:card-side shadow-xl text-white ${bgColor}`}>
                <figure><img src={img} alt="Album"/></figure>
                <div className="card-body">
                    <h2 className="card-title">{cardTitle}</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                    
                </div>
            </div>
        </div>
    );
};

export default InfoCard;