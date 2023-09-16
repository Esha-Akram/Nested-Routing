import './Navbar.css';
import { Link, NavLink, Outlet } from "react-router-dom";

export const Navbar = () => {
    return (
        <>
            <nav>
                <ul id='menu'>
                    <h1><Link to='/'>Kafoor</Link></h1>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/products'>Products</NavLink></li>
                    <li><NavLink to='/about'>About Us</NavLink></li>
                    <li><NavLink to='/contact'>Contacts</NavLink></li>
                    <li><NavLink to='/blog'>Blogs</NavLink></li>
                    <button>Login</button>
                </ul>
            </nav>
            <Outlet />
        </>
    )
}