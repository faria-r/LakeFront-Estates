import React from 'react';

const HomeCard = ({home}) => {
    const {name} = home;
    return (
        <div className='border p-8 '>
            <h2 className='text-red-900'>{name}</h2>
        </div>
    );
};

export default HomeCard;