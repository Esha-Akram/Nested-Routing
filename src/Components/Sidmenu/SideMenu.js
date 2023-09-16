import React, { useEffect } from 'react';
import { NavLink, useLocation, Outlet } from "react-router-dom";

export const SideMenu = () => {
    const location = useLocation();
    const category = location.pathname;
    useEffect(() => {
        if (category !== '/blog') {
            document.querySelector('.side-menu a').classList.remove('active');
            //this selecting the first element and remove active class
        }
    }, [category]);
    return (
        <>
            <ul className='side-menu'>
                <li><NavLink to='/blog'>All Blogs</NavLink></li>
                <li><NavLink to='/blog/lifestyle'>Lifestyle</NavLink></li>
                <li><NavLink to='/blog/photography'>Photography</NavLink></li>
                <li><NavLink to='/blog/finance'>Finance</NavLink></li>
                <li><NavLink to='/blog/media'>Marketing</NavLink></li>
                <li><NavLink to='/blog/food'>Food</NavLink></li>
            </ul>
            <Outlet />
        </>
    )
}