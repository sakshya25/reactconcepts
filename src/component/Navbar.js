import React, { useState } from 'react'
import Menu from './Menuapi.js'
// import Menucard from './Menucard.js';
export let updatedData;
const Navbar = ({ setmenuData }) => {
    const uniqueList = [
        ...new Set(Menu.map((currElem) => {
        return currElem.category;
    })
    ),
]

    const [menulist,setmnulist] = useState(uniqueList)
    // console.log(uniqueList)
    const filterItem = (pata) => {
        // setBreakfast(true);
        updatedData = Menu.filter((currElem) => {

            return currElem.category === pata;
        })
        setmenuData(updatedData);
    }
    return (
        <>
            <nav className='navbar'>
                <div className="btn-group">{
                    menulist.map((currElem) => {
                        return (<button className="btn-group__item" onClick={() => filterItem(currElem)}>{currElem}</button>)
                    })
                }
                </div>
            </nav>
        </>
    )
}

export default Navbar
