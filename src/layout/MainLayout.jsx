import React from 'react';
import Navbar from '../components/shared/Navbar';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <>

            <Navbar></Navbar>

            <div className='pt-12'>
                <Outlet></Outlet>
            </div>

        </>
    );
};

export default MainLayout;