import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useAxios = () => {
    const [data, setData] = useState([]);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);

    const getHomes = async () => {
        setLoading(true);
        await axios
          .get("homes.json")
          .then((response) => {
            setData(response.data);
            setLoading(false);
          })
          .catch((error) => {
           setError(error);
           setLoading(false)
          });
      };
    
      useEffect(() => {
        getHomes();
      }, []);
    return {data,loading,error,getHomes};
};

export default useAxios;