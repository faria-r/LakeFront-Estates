import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Navber from '../../Shared/Navber/Navber';

const DashBoard = () => {
    return (
        <div className='w-auto min-h-[100vh] bg-sky-950 '>
             <div className=''>
             <Navber></Navber>
             </div>
              <div className='flex text-white'>
             
            {/* sidebar content */}
            <div className='w-64 min-h-[100vh] bg-sky-950 mt-28'>
                <ul className='menu p-4'>
                    <li className='rounded-none bg-white mt-4 text-xl'><NavLink to='/dashboard/homes' > Homes</NavLink></li>
                    <li className='rounded-none bg-white mt-4 text-xl'><NavLink to='/dashboard/homes' > Bookings</NavLink></li>
                    <li className='rounded-none bg-white mt-4 text-xl'><NavLink to='/dashboard/homes' > Schedules</NavLink></li>
                </ul>
            </div>
            <div className='flex mt-28 bg-white w-full'>
              
                <Outlet></Outlet>
            </div>
            
        </div>
        </div>
      
    );
};

export default DashBoard;