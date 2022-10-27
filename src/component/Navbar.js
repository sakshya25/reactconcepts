import React from 'react'
import Menu from './Menuapi.js'
import Menucard from './Menucard.js';
const Navbar = ({detailsCard}) => {
    const filterBreakfast=(pata)=>{
        const updatedData=Menu.filter((currElem)=>{
           if( currElem.category=== pata)
           return currElem;
        });
        let x =true;
        {
            x?<Menucard detailsCard={updatedData}/>:<Menucard />
        }

    }
  return (
   <>
        <nav className='navbar'>
            <div className="btn-group">
                <button className="btn-group__item" onClick={()=>filterBreakfast('Breakfast')}>breakfast</button>
                <button className="btn-group__item" >lunch</button>
                <button className="btn-group__item" >Evening</button>
                <button className="btn-group__item" >Dinner</button>
                <button className="btn-group__item" >Pelampel</button>
            </div>
        </nav>
   </>
  )
}

export default Navbar
