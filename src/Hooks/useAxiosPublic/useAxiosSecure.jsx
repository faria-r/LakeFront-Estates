import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const axiosSecure = axios.create({
    baseURL: 'https://lake-front-estates-server.vercel.app/'
});

const useAxiosSecure = () => {
    const navigate = useNavigate();
    const { logOut } = useContext(AuthContext);

    useEffect(() => {
        // request interceptor to add authorization header for every secure call to the api
        axiosSecure.interceptors.request.use(function (config) {
            const token = localStorage.getItem('access-token');
            config.headers.authorization = `Bearer ${token}`;
            return config;
        }, function (error) {
            return Promise.reject(error);
        });

        // intercepts 401 and 403 status
        axiosSecure.interceptors.response.use(function (response) {
            return response;
        }, async (error) => {
            const status = error.response.status;
            console.log('status error in the interceptor', status);
            // for 401 or 403 logout the user and move the user to the login
            if (status === 401 || status === 403) {
                await logOut();
                navigate('/login');
            }
            return Promise.reject(error);
        });
    }, [navigate, logOut]);

    return axiosSecure;
};

export default useAxiosSecure;



















// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// import { useContext } from "react";
// import { AuthContext } from "../../Context/AuthProvider";

// const axiosSecure = axios.create({
//     baseURL: 'https://lake-front-estates-server.vercel.app'
// })
// const useAxiosSecure = () => {
//     const navigate = useNavigate();
//     const { logOut } = useContext(AuthContext);

//     // request interceptor to add authorization header for every secure call to teh api
//     axiosSecure.interceptors.request.use(function (config) {
//         const token = localStorage.getItem('access-token')
//         // console.log('request stopped by interceptors', token)
//         config.headers.authorization = `Bearer ${token}`;
//         return config;
//     }, function (error) {
//         // Do something with request error
//         return Promise.reject(error);
//     });


//     // intercepts 401 and 403 status
//     axiosSecure.interceptors.response.use(function (response) {
//         return response;
//     }, async (error) => {
//         const status = error.response.status;
//         console.log('status error in the interceptor', status);
//         // for 401 or 403 logout the user and move the user to the login
//         if (status === 401 || status === 403) {
//             await logOut();
//             navigate('/login');
//         }
//         return Promise.reject(error);
//     })


//     return axiosSecure;
// };

// export default useAxiosSecure;