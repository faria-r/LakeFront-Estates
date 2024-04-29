import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const DashBoard = () => {
    return (
        <div className='flex text-white'>
            {/* sidebar content */}
            <div className='w-64 min-h-full bg-sky-950'>
                <ul className='menu'>
                    <li><NavLink to='/dashboard/homes'> Homes</NavLink></li>
                </ul>
            </div>
            <div className='flex'>
                <Outlet></Outlet>
            </div>
            
        </div>
    );
};

export default DashBoard;