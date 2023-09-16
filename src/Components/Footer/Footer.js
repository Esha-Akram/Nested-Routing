import './Footer.css';
import { NavLink } from 'react-router-dom';

export const Footer = () => {
    return (
        <>
            <footer id='footer'>
                <div>
                    <span><h1>Kafoor</h1></span>
                    <p>For more than a decade, we have been creating and rethinking online
                        stores around the globe. We advocate the user-centric and mobile-first.</p>
                    <p className='footer'>© Copyright 2023 <span>Kafoor. All right reserved.</span></p>
                </div>
                <ul>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/products'>Products</NavLink></li>
                    <li><NavLink to='/about'>About Us</NavLink></li>
                    <li><NavLink to='/contact'>Contacts</NavLink></li>
                    <li><NavLink to='/blog'>Blogs</NavLink></li>
                </ul>
                <ul>
                    <h3><li><NavLink to='/products'>Products</NavLink></li></h3>
                    <li><NavLink to='/products/jewellery'>Jewellery</NavLink></li>
                    <li><NavLink to='/products/shoes'>Shoes</NavLink></li>
                    <li><NavLink to='/products/makeup'>Makeup</NavLink></li>
                    <li><NavLink to='/products/perfume'>Perfumes</NavLink></li>
                    <li><NavLink to='/products/outfit'>Outfits</NavLink></li>
                </ul>
                <ul>
                    <h3><li><NavLink to='/blog'>Blogs</NavLink></li></h3>
                    <li><NavLink to='/blog/lifestyle'>Lifestyle</NavLink></li>
                    <li><NavLink to='/blog/photography'>Photography</NavLink></li>
                    <li><NavLink to='/blog/finance'>Finance</NavLink></li>
                    <li><NavLink to='/blog/media'>Marketing</NavLink></li>
                    <li><NavLink to='/blog/food'>Food</NavLink></li>
                </ul>
            </footer>

        </>
    )
}