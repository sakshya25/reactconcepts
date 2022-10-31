import React, { useState } from 'react'

const Newcomponent = () => {
    const[count,setcount]=useState(0);
    const countingNumber=()=>{
        
        setcount((count)=>count +1);
    }
  return (
    <>
    <h1>{count}</h1>
    <button className="counter" onClick={()=>countingNumber()}> onClick</button>
    </>
  )
}

export default Newcomponent
