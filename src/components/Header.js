import React from 'react';
import {Link} from 'react-router-dom'
import bannerImg from '../images/food1.avif'
const Header = () =>{
    return(
        <div className='header'>
            <section>
                <div className='banner'>
                    <h2>Little Lemon</h2>
                    <h3>Omaha</h3>
                    <p>We are a traditional, family owned Mediterranean restaurant, focused on home made recipes served 
                    with a twist!</p>
                    <Link to="/booking"><button aria-label='On Click'>Reserve Table</button></Link>
                </div>

                <div className='banner-img'>
                    <img src={bannerImg} alt=''></img>
                </div>
            </section>
        </div>
    )
}

export default Header;