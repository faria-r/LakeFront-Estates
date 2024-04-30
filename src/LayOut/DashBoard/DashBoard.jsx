import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import Navber from '../../Shared/Navber/Navber';
import { FaHome } from 'react-icons/fa';
import { AiFillHome } from 'react-icons/ai';

const DashBoard = () => {
    return (
        <div className='w-auto min-h-[100vh] bg-sky-950 '>
             <div className=''>
             <Navber></Navber>
             </div>
              <div className='flex text-white'>
             
            {/* sidebar content */}
            <div className='w-64 min-h-[100vh] bg-sky-600 mt-28'>
                <ul className='menu p-4'>
                <Link to='/dashboard/homes'> <li className='rounded-none mt-4 text-black text-xl'>  Home's</li> </Link>
                   <Link to='/dashboard/users'> <li className='rounded-none mt-4 text-xl'>User's</li></Link>
 
                   <Link to='/dashboard/users'> <li className='rounded-none mt-4 text-xl'>Booking's</li></Link>
                   <Link to='/dashboard/users'> <li className='rounded-none mt-4 text-xl'>Schedule's</li></Link>
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