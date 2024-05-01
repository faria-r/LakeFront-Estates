import axios from 'axios';
const axiosPublic = axios.create({
    baseURL:'https://lake-front-estates-server.vercel.app'
})
const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;