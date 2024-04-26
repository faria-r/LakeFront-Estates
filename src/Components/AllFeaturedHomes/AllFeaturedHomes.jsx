import React from 'react';
import useAxios from '../../Hooks/useAxios';
import FeaturedHomes from '../FeaturedSell/FeaturedHomes';
import ImgsBanner from '../ReUsable/imgBanner/ImgsBanner';

const AllFeaturedHomes = () => {
    const {data} = useAxios('homeList');
    const featuredHomes = data.slice(2,12);
    return (
        <div>
            <ImgsBanner name={'All Featured Homes'} img={'https://i.ibb.co/jwJWFZf/one.jpg'}></ImgsBanner>
              <div className="w-[90vw] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-36 lg:gap-8 h-auto p-8 py-16">
            {
                featuredHomes.map(home => <FeaturedHomes home={home} key={home._id}></FeaturedHomes>)
            }
        </div>
        </div>
      
    );
};

export default AllFeaturedHomes;