import axios from 'axios';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
 const axiosSecure = axios.create({
    baseURL:'https://lake-front-estates-server.vercel.app'
})
const useAxiosSecure = () => {
    const navigate = useNavigate();
    const {logOut}= useContext(AuthContext)
    //request interceptor to add authorization for every call to the api 
    axiosSecure.interceptors.request.use(function(config){
        const token = localStorage.getItem('access-token')
        console.log('request stoped by interceptors')
        config.headers.authorization = `Bearer ${token}`
        return config;
    },function (error){
        return Promise.reject(error);
    });
    //intercepts 401 and 403 status
    axiosSecure.interceptors.response.use(function(response){
        return response;
    }, async (error) =>{
        const status = error.response.status;
        console.log('error in interceptor',error);
        if(status === 401 || status === 403){
            await logOut();
            navigate('/login')
        }
        return Promise.reject(error);
    }
)
    return axiosSecure;
};

export default useAxiosSecure;