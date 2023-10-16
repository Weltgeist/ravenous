import React from 'react'

function Business (){
    return (<article>
        <header>
            <img 
            src = 'https://lh3.googleusercontent.com/p/AF1QipPqcs0_etT7F4R2KHThAMGEjyZfOcZcZjpO86qn=s1360-w1360-h1020'
            alt = 'african food, multiple plates, plantain, beef kebabs, chicken and fries, rices & plaintains, Tillapia with red pepper sauce and onions'
            />
            <h1 className='business-name'>Samoha African Cuisine</h1>
        </header>
        <section>
            <article>
                <p className='business-adress'></p>
                <p className='business-city'></p>
                <p className='business-state'></p>
                <p className='business-zipcode'></p>
            </article>
            <aside>
                <p className='business-category'>West African</p>
                <p className='business-rating'>4.5 Stars</p>
                <p className='business-review'>165 Reviews</p>
            </aside>
        </section>
    </article>);

}

export default Business;