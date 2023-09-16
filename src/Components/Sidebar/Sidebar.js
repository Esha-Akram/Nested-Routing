import './Sidebar.css';
import React, { useEffect } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';

export const Sidebar = () => {
    const location = useLocation();
    const category = location.pathname;
    useEffect(() => {
        if (category !== '/products') {
            document.querySelector('.side-menu a').classList.remove('active');
            //this selecting the first element and remove active class
        }
    }, [category]);
    return (
        <>
            <nav>
                <ul className='side-menu'>
                    <li><NavLink to='/products'>All</NavLink></li>
                    <li><NavLink to='/products/jewellery'>Jewellery</NavLink></li>
                    <li><NavLink to='/products/shoes'>Shoes</NavLink></li>
                    <li><NavLink to='/products/makeup'>Makeup</NavLink></li>
                    <li><NavLink to='/products/perfume'>Perfumes</NavLink></li>
                    <li><NavLink to='/products/outfit'>Outfits</NavLink></li>
                </ul>
            </nav>
            <Outlet />
        </>
    );
};
