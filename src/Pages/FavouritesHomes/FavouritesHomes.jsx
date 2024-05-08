import React, { useContext } from 'react';
import useAxiosPublic from '../../Hooks/useAxiosPublic/useAxiosPublic';
import { AuthContext } from '../../Context/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

const FavouritesHomes = () => {
  const {user} = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();

    const {refetch, data: favourites =[] } = useQuery({
      queryKey:['favourite'],
      queryFn: async ()=>{
          const res = await axiosPublic.get(`/favourites/${user?.email}`)
          console.log(res.data,'f')
          return res.data;
      }
    })
    

 
    return (
        <div className='text-black'>
            <h2 className='text-center mt-4 mb-8 text-sky-950 text-xl'>Your Favourites Homes</h2>
            <div className='grid lg:grid-cols-3 gap-4 mt-4'>
{
    favourites.map(favourite => <div key={favourite._id} favourite={favourite} className="border lg:mx-12 mb-8 w-[20vw]  h-auto relative shadow-xl">
    <div>
      <img src={favourite.homeImg} alt="" className="lg:h-[20vh] lg:w-[20vw]" />
    </div>
    <div className=" py-2  text-center  font-bold font-sans">
      <p className=" uppercase">{favourite.homeName}</p>
      <p className=" text-xs mt-2 text-red-800">Please pay to confirm your booking</p>
    </div>
   <div className='p-4 text-end'>
    <Link to='/dashboard/payment'><button className='btn border border-red-700 bg-transparent py-0 w-24 justify-end' >Pay Now</button></Link>
   </div>
    <div className="absolute top-0 left-0">
      {" "}
      <p className="bg-sky-900 px-2 py-[2px] text-xs text-white">${favourite.price}</p>
    </div>
  </div> )
}
</div>
        </div>
    );
};

export default FavouritesHomes;