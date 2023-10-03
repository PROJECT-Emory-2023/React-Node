import React from 'react'
import {Link} from 'react-router-dom'

export default function Nav_Bar () {
    return <nav className = 'nav'>
        <Link to = "/Home" className='site-title'>Practice</Link>
        <ul>
            <li>
                <Link to='/Login'>Login</Link>
            </li>
            <li>
                <a>Sign up</a>
            </li>
            <li>
                <a>Account</a>
            </li>
        </ul>
    </nav>
}