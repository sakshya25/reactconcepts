import React, { useState } from 'react'
import Menu from './Menuapi.js'
import Menucard from './Menucard'
import Navbar from './Navbar.js';
import {updatedData} from '../component/Navbar'
import Newcomponent from './Newcomponent.js';
const Restaurant = () => {
    const[menuData,setmenuData]=useState(Menu);
    // const[breakfast,setBreakfast]=useState(false);
    
    return (
        <>
            <Navbar setmenuData={setmenuData} menuData={menuData}/>
            <Menucard detailsCard={menuData} />
            {/* <Newcomponent/> */}
        </>
    )
}

export default Restaurant
    