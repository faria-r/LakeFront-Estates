import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AllUsers = () => {
    const users = useLoaderData();
    return (
        <div className='text-black'>
            <h2>Total Users: {users.length}</h2>
        </div>
    );
};

export default AllUsers;