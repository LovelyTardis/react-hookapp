import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css';

export const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink className='link' to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink className='link' to='./about'>About</NavLink>
                </li>
                <li>
                    <NavLink className='link' to='./login'>Login</NavLink>
                </li>
            </ul>
        </nav>
    )
}
