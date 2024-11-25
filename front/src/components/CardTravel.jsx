import React from 'react';

const CardTravel = ({ title, image, price, description }) => {
    return (
        <div className='cardtr_container'>
            <div className="cardtr_container_img">
                <img src={image} alt="img card travel" />
            </div>

            <div className="cardtr_content">
                <h3>{title}</h3>
                <p>{price} $</p>
                <div className="cardtr_des">
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default CardTravel;