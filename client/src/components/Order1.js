import React, { useState } from 'react'

const Order1 = () => {

    // define usestate variable
    const [order, setOrder] = useState([]);
    const [loader, setLoader] = useState(true);

    // click handler for get data from server
    const orderHandler = () => {
        setLoader(false)
        fetch('https://zomato-backend-project-rampawara99.onrender.com/api/orders', {
        })
            .then(res => res.json())
            .then(data => {
                setOrder(data);
                setLoader(true);
                console.log(data)
            })
            .catch((err) => {
                alert("Error accured from server");
                setLoader(true);
                console.log(err)
            });
    }

    return (
        <div
            className="conten1 form-control mt-5">
            <p
                className="py-2 px-2 rounded w-100 bg-warning">
                <span
                    className="btn text-light btn-danger"
                    onClick={orderHandler}> See First 10 Orders
                </span>
            </p>
            <ol type="number">
                {order.length > 0 &&
                    order.map((elem, index) => (
                        <li key={index}>
                            <div className="content-controler">
                                <p>
                                    <span className="fw-bolder">Title: </span>
                                    <small> {elem.title}</small>
                                </p>
                                <p>
                                    <span className="fw-bolder">Description: </span>
                                    <small>{elem.description}</small>
                                </p>
                            </div>
                        </li>
                    ))
                }
            </ol>
            <div
                className={`
                w-100 h-100 
                position-absolute 
                left-0 top-0 
                d-flex 
                align-items-center 
                justify-content-center 
                fs-2 bg-secondary 
               ${!loader?'d-block':'d-none'}`}>
                Loading...
            </div>
            {order.length === 0 ? <h4 className="h5 text-center mt-5">See order clicking above button</h4> : ""}
        </div>
    )
}

export default Order1