import React from 'react'

import './style.css'
const Menucard = ({ detailsCard }) => {
    // console.log(detailsCard);
    return (
        
        <>
            <section className='main-card--cointainer'>
                {
                    detailsCard.map((CurrElement) => {
                        const{id,name,image,description}=CurrElement;
                        return (
                            <div className='card-container' key={id}>
                                <div className='card'>
                                    <div className='card-body'>
                                        <span className='card-number card-circle subtle'>{id}</span>
                                        <span className='card-author subtle' style={{ color: 'red' }}>{name}</span>
                                        <h2 className='card-title'>{CurrElement.name}</h2>
                                        <span className='card-description subtle'>{description}</span>
                                        <div className="card-read">Read</div>

                                    </div>
                                    <img src={image} alt="kaam" className='card-media'/>
                                    <span className='card-tag subtle'>Order now</span>
                                </div>
                            </div>)
                    })
                }
            </section>
        </>
    )
}

export default Menucard
