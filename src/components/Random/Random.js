import React from 'react';

const Random = ({ random }) => {
    return (
        <div className='text-start'>
            <h3>{random.title}</h3>
            <img src={random.image} alt={random.title} className='img-thumbnail'/>
            <h2>Price: $ {random.pricePerServing}</h2>
            {random.instructions && <div>
                <h4>Instructions</h4> <p>{random.instructions}</p>
            </div>}
            {random.dishTypes &&
                random.dishTypes.map(item => <p>{item}</p>)}
            <h6> Go to <a target="_blank" href={random.sourceUrl}>Foodista.com</a> for Full Recipe</h6>

        </div>
    );
}

export default Random;