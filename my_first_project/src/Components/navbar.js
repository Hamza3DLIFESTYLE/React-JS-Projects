import React from 'react'
import "./style.css";

function Navbar() {
    return (
        <div>
            <nav className='nabar_s'>
            <img src="logo-3d-lifestyle-012-370x108.png"></img>
                <ul>
                    <li>Home</li>
                    <li>All Locations</li>
                    <li>Services</li>
                    <li>Promotions</li>
                    <li>Franchising</li>
                    <li>Membership</li>
                    <li>More</li>
                    <button className='signIn_btn'> SIGN IN</button>
                    <button className='signUp_btn'>SIGN UP </button>
                </ul>

            </nav>
            
        </div>
    )
}

export default Navbar
