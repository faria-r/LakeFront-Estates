import React from 'react';
import useAxios from './useAxios';

const useFindHome = (homeName) => {
    const {data} = useAxios();
//     const checkHomes = (name) =>{
// return name
//     }
    const findHomes = data.filter( item => item.name === homeName)
    return {findHomes};
};

export default useFindHome;