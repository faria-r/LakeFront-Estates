import React from 'react';
import useAxios from './useAxios';

const useFindHome = (homeName) => {
    const {data} = useAxios('homeList');
    const findHomes = data.filter( item => item.name === homeName)
    return {findHomes};
};

export default useFindHome;