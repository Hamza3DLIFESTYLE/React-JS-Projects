import React,{useState} from 'react'
import "./style.css";
function Banner() {
const [hamza, setHeading]= useState ("Doctor Led, Medical");
const [counter, setCounter] = useState(1);
const updateHeading =() => {
        setHeading("pakistan");
        setCounter(counter+1);
    }


    return (
        <div className='bg_image'>
         <div className='banner_con'>
            <p>{hamza}{counter}</p>
            <h2>WEIGHT LOSS</h2>
            <p>Program</p>
            <button onClick={updateHeading}>LEARN MORE</button> 
            <button>Text Change</button>
         </div>
        </div>
    )
}

export default Banner
