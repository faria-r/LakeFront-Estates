import React, { useEffect, useState } from "react";
import axios from "axios";
import HomeCard from "./HomeCard";
const LakeOHomes = () => {
  const [homes, setHomes] = useState([]);
  //     axios.get('https://example.com')
  //   .then(response => {console.log(response.data)})
  //   .catch(error => {console.log(error)})

  const getHomes = async () => {
    await axios
      .get("homes.json")
      .then((response) => {
        console.log(response.data);
        setHomes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getHomes();
  }, []);
console.log(homes)
  return (
    <div className="grid grid-cols-2">
        {
            homes.map(home => <HomeCard key={home._id} home={home}></HomeCard>)
        }
    </div>
);
};

export default LakeOHomes;
