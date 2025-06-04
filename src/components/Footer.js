import React from 'react';
import BookingForm from './BookingForm';
import logo from '../images/Logo .svg'
const Footer = () =>{
    return(
        <footer>
            <section>
                <div className='company-info'>
                    <img src={logo} alt=''/>
                    <p>We are a traditional, family owned Mediterranean restaurant, focused on home made recipes served with a twist!</p>
                </div>

                <div>
                    <h3>Links</h3>
                    <ul>
                        <li><a href='/'>Home</a></li>
                        <li><a href='/'>About</a></li>
                        <li><a href='/'>Menu</a></li>
                        <li><a href='/'>Reservations</a></li>
                        <li><a href='/'>Order Online</a></li>
                        <li><a href='/'>Login</a></li>
                    </ul>
                </div>

                <div>
                    <h3>Contact</h3>
                    <ul>
                        <li>Address: <br/> 308 Negra Oroyale Lane, USA</li>
                        <li>Phone: <br/> 123 123-1231</li>
                        <li>Email: <br/> emailemail@gmail.com</li>
                    </ul>
                </div>

                <div>
                    <h3>Social Media</h3>
                    <ul>
                        <li><a href='/'>Twitter</a></li>
                        <li><a href='/'>Youtube</a></li>
                        <li><a href='/'>Instagram</a></li>
                    </ul>
                </div>
            </section>
        </footer>
    )
}

export default Footer;