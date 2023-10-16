import React from 'react'
import './Business.css'
import business from './BusinessData' 

function Business (){
    return (<article className = 'business'>
        <header>
            <img 
            src = {business.src}
            alt = {business.alt}
            />
            <h3 className='business-name'>{business.name.toUpperCase()}</h3>
        </header>
        <section className='business-details flex-container'>
            <article>
                <p className='business-adress'>{business.address}</p>
                <p className='business-city'>{business.city}</p>
                <p><span className='business-state'>{business.state}</span> <span className='business-zipcode'>{business.zipCode}</span></p>
            </article>
            <aside>
                <p className='business-category'>{business.category.toUpperCase()}</p>
                <p className='business-rating'>{business.rating} Star</p>
                <p className='business-review'>{business.reviewCount} Reviews</p>
            </aside>
        </section>
    </article>);

}

export default Business;