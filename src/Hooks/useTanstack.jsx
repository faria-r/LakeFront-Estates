import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from './useAxiosPublic/useAxiosSecure';

const useTanstack = () => {
    const axiosSecure = useAxiosSecure();
    const {data: users=[]} = useQuery({
        queryKey:['user'],
        queryFn:async ()=>{
            const res = await axiosSecure.get('/users')
            return res.data
        } 

    })
    return [users]
    
};

export default useTanstack;