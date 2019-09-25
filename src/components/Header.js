import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <nav className="blue">
        <div className="nav-wrapper" className="blue-text text-darken-2">
            <Link to={'/'} className="brand-logo hide-on-small-only">Web Development Courses</Link>
            <ul id="nav-mobile" className="right">
                <li><Link to={'/shop'}>Shop</Link></li>
                <li><Link to={'/about'}>About Chatbot</Link></li>
            </ul>
        </div>
    </nav>
)

export default Header;