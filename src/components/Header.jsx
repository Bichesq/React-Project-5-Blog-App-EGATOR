import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai'

const Header = () => {
    const [isNavShowing, setIsNavShowing] = useState(window.innerWidth > 800 ? true : false)
    
    const closeNavHandler = () => {
        if (window.innerWidth < 800) {
            setIsNavShowing(false);
        } else {
            setIsNavShowing(true)
        }
    }
    return (
        <>
            <nav>
                <div className="container nav__container">
                    <Link to='/' className='nav__logo' onClick={closeNavHandler}>
                        <img src={logo} alt="Logo" />
                    </Link>
                    {isNavShowing && <ul className='nav__menu' onClick={closeNavHandler}>
                        <li><Link to='/profile/hgfc'>Ernest Achiever</Link></li>
                        <li><Link to='/create'>Create Post</Link></li>
                        <li><Link to='/authors'>Authors</Link></li>
                        <li><Link to='/logout'>Logout</Link></li>                        
                    </ul>}
                    <button className="nav__toggle-btn" onClick={() => setIsNavShowing(!isNavShowing)}>
                        {isNavShowing ? <AiOutlineClose/> : <FaBars/>}
                    </button>
                </div>

           </nav>
        </>
    )
}

export default Header
