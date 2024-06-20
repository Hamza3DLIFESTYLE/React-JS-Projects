import React, {useState} from 'react'
import "./style.css";
// let nav_elementz = ["Home", "All Locations","Services" , "Promotions" , "Franchising","Membership","More"];
// nav_elementz = [];
function Navbar({nav_element}) {
    return (
        <div cal>
            <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <div className='container'>
                {/* <a class="navbar-brand" href="#">Navbar</a> */}
                <a class="navbar-brand" href="#">
      <img src="logo-3d-lifestyle-012-370x108.png" alt="" width="140" height="40"/>
    </a>

               <button className='navbar-toggler' type="button" data-bs-toggle='collapse' data-bs-target='#toggle_navbar' aria-controls='navbarSupportedContent' aria-expanded="false" aria-label="Toggle navigation">
                <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id ="toggle_navbar">
                <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                {nav_element.map((navs,index)=> {
                                return <li className="nav-item" key={index}><a href='#' className="nav-link active">{index + 1 + " " + navs}</a></li>;
                            })}
                </ul>

                {nav_element.length>0 &&<><button type="button" className ='btn btn-primary pr-1'>Sign In</button></>}
                <button type="button" className ='btn btn-secondary'>Sign Up</button>
                </div>
            </div>
</nav>
        </div>

    )
}
export default Navbar
