import React from 'react';

const FoodInfo = ({ item }) => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='d-inline-flex p-2 flex-wrap '>
            <div className='card img-thumbnail mx-2 mt-2'>
                <img src={item.image} alt={item.title} className="card-img-top" />
                <div className="card-body text-center">
                <h1 className="card-text">{item.restaurantChain}</h1>
                <p className="card-text">{item.title}</p>
                </div>
                
            </div>
        </div>
            </div>
        </div>
        
    );
}

export default FoodInfo;