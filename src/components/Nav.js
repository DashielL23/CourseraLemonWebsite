import React, {useState} from "react";
import logo from "../images/Logo .svg"
const Nav = () =>{
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () =>{
        setMenuOpen(!menuOpen)
    }

    return(
        <nav className={'navbar ${menuOpen ? "open" : ""}'}>
            <div>
                <a href = '/'>
                    <img src={logo} alt = 'logo'/>
                </a>

                <div className="menu-icon" onClick={toggleMenu}>
                    <div className='bar'></div>
                    <div className='bar'></div>
                    <div className='bar'></div>
                </div>

                <ul className='nav-links ${menuOpen ? "visible" : ""}'>
                    <li>
                        <a href='/'>Home</a>
                    </li>
                    <li>
                        <a href='/'>About</a>
                    </li>
                    <li>
                        <a href='/'>Services</a>
                    </li>
                    <li>
                        <a href='/'>Menu</a>
                    </li>
                    <li>
                        <a href='/'>Reservations</a>
                    </li>
                    <li>
                        <a href='/'>Order Online</a>
                    </li>
                    <li>
                        <a href='/'>Login</a>
                    </li>
                </ul>
            </div>
        </nav>
        
    );
}

export default Nav;