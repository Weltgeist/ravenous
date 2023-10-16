import React from 'react'
import './Business.css'

function Business (){
    return (<article className = 'business'>
        <header>
            <img 
            src = 'https://lh3.googleusercontent.com/p/AF1QipPqcs0_etT7F4R2KHThAMGEjyZfOcZcZjpO86qn=s1360-w1360-h1020'
            alt = 'african food, multiple plates, plantain, beef kebabs, chicken and fries, rices & plaintains, Tillapia with red pepper sauce and onions'
            />
            <h3 className='business-name'>{'Samoha African Cuisine'.toUpperCase()}</h3>
        </header>
        <section className='business-details flex-container'>
            <article>
                <p className='business-adress'>602 W Sugar Creek Rd #4</p>
                <p className='business-city'>Charlotte</p>
                <p><span className='business-state'>NC</span> <span className='business-zipcode'>28213</span></p>
            </article>
            <aside>
                <p className='business-category'>{'West African'.toUpperCase()}</p>
                <p className='business-rating'>4.5 Stars</p>
                <p className='business-review'>165 Reviews</p>
            </aside>
        </section>
    </article>);

}

export default Business;