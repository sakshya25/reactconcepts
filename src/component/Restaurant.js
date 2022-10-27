import React, { useState } from 'react'
import Menu from './Menuapi.js'
import Menucard from './Menucard'
import Navbar from './Navbar.js';
const Restaurant = () => {
    const[menuData,setmenuData]=useState(Menu);
    
    return (
        <>
            <Navbar />
           <Menucard detailsCard={menuData} /> 
        </>
    )
}

export default Restaurant
    