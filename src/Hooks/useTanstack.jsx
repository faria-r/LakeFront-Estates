import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from './useAxiosPublic/useAxiosSecure';

const useTanstack = () => {
    const axiosSecure = useAxiosSecure();
    const {refetch,data: users=[]} = useQuery({
        queryKey:['user'],
        queryFn:async ()=>{
            const res = await axiosSecure.get('/users',{
                headers:{
                    authorization: `Bearer ${localStorage.getItem('access-token')}`
                }
            })
            return res.data
        } 

    })
    return [users,refetch]
    
};

export default useTanstack;