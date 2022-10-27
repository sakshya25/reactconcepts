import React from 'react'

import './style.css'
const Menucard = ({ detailsCard }) => {
    // console.log(detailsCard);
    return (

        <>
            <section className='main-card--cointainer'>
                {
                    detailsCard.map((CurrElement) => {
                        return (
                            <div className='card-container' key={CurrElement.id}>
                                <div className='card'>
                                    <div className='card-body'>
                                        <span className='card-number card-circle subtle'>{CurrElement.id}</span>
                                        <span className='card-author subtle' style={{ color: 'red' }}>{CurrElement.name}</span>
                                        <h2 className='card-title'>{CurrElement.category}</h2>
                                        <span className='card-description subtle'>{CurrElement.description}</span>
                                        <div className="card-read">Read</div>

                                    </div>
                                    <img src={CurrElement.image} alt="kaam" className='card-media'/>
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
