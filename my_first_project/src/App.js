import React , {useState} from 'react'
import Navbar from "./Components/navbar";
import Banner from "./Components/banner";
import Second_navbar from "./Components/second_navbar";
import Content_section from './Components/content_section';


function App() {
let nav_elementz = ["Home", "All Locations","Services" , "Promotions" , "Franchising","Membership","More"];
// nav_elementz = [];
const [new_element_add,setnav_new_element]=useState(["Home", "All Locations","Services" , "Promotions" , "Franchising","Membership","More"]);
const add_ele=(eele)=> {
  setnav_new_element([...new_element_add, eele])
}
  return (
    
    <>
    <Navbar nav_element={nav_elementz} />
    <Second_navbar nav_new_element={new_element_add} add_ele={add_ele}  />
    <Banner/>
    <Content_section/>
    
    </>
  );
}

export default App;
