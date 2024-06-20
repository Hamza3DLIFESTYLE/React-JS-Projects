import React from 'react'
import "./style.css";
function Second_navbar({nav_new_element,add_ele}) {
    return (
        <div>
        <nav className='nabar_s' id='berger_menue'>
        <img src="logo-3d-lifestyle-012-370x108.png"></img>
        
            <ul>
            {nav_new_element.map((navs,index)=> {
                return <li key={index}> {index + 1 + " " + navs}</li>;
            })}
            {/*logical AND &&*/}
            {nav_new_element.length>0 && <><button className='signIn_btn' onClick={()=>{add_ele("Jpan");}}>SIGN IN</button><button className='signUp_btn'>SIGN UP</button></> }
            </ul>
        </nav>
    </div>
    )
}

export default Second_navbar
