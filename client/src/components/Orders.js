import React from 'react'
import Order1 from './Order1';
import Order2 from './Order2';


const Orders = () => {
    return (
        <div className="container-fluid xl-container d-flex flex-wrap justify-content-around my-5 flex-lg-row flex-column">
            <Order1 />
            <Order2 />
        </div>
    )
}

export default Orders