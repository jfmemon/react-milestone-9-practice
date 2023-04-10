import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='bg-lime-400 p-4'>
            <Link to='/' className='m-5'>Home</Link>
            <Link to='/about' className='m-5'>About</Link>
            <Link to='/chart'>Chart</Link>
        </nav>
    );
};

export default Header;