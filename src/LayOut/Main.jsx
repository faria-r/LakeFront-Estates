import React from 'react';
import Navber from '../Shared/Navber/Navber';
import Footer from '../Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';
import WorkWithAuthor from '../Components/WorkWithAuthor/WorkWithAuthor';

const Main = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <WorkWithAuthor></WorkWithAuthor>
            <Footer></Footer>
        </div>
    );
};

export default Main;