import React from 'react';
import FindHome from '../ReUsable/FindHome/FindHome';

const HomeSearch = () => {
    return (
        <div className='w-[90vw] mx-auto lg:flex justify-evenly items-center gap-3 mb-24'>
            <FindHome imgLinks={'https://i.ibb.co/FmF4PHs/lkeH.jpg'} tittle={'Home Search'}></FindHome>
            <FindHome imgLinks={'https://i.ibb.co/jwJWFZf/one.jpg'} tittle={'Home Valuation'}></FindHome>
            <FindHome imgLinks={'https://i.ibb.co/gj375r4/r.jpg'} tittle={`Let's Connect`}></FindHome>
        </div>
    );
};

export default HomeSearch;