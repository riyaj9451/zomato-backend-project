import React, { useState } from 'react'

const Order2 = () => {

    // Controle input data for handle api
    const [input_data_controler, setInput_data_controler] = useState({
        limit: 0,
        offset: 0,
    });

    // loader for handle lading time when do we fetch orders from API
    const [loader, setLoader] = useState(true);
    const [order, setOrder] = useState([]);

    // click handler
    const orderHandler = () => {
        setLoader(false)
        const { limit, offset } = input_data_controler;
        fetch(`https://zomato-backend-project-rampawara99.onrender.com/api/orders/${limit}/${offset}`, {
        })
            .then(res => res.json())
            .then(data => {
                setOrder(data);
                setLoader(true)
            })
            .catch((err) => {
                alert("Error accured from server");
                console.log(err)
                setLoader(true);
            });
    }

    return (
        <div className="conten2 form-control mt-5">
            <p className="py-2 px-2 rounded btn w-100 bg-warning d-flex justify-content-between">
                <span className="btn btn-danger" onClick={orderHandler}>See targeted orders</span>
                <input
                    type="number"
                    name="age"
                    className="btn bg-info"
                    title="limit of orders"
                    min="1"
                    max="100"
                    step="1"
                    value={input_data_controler.limit}
                    onChange={(e) => setInput_data_controler({ ...input_data_controler, limit: e.target.value })}></input>
                <input
                    type="number"
                    name="age"
                    className="btn bg-info"
                    title="Skip orders from starting"
                    min="1"
                    max="100"
                    step="1"
                    value={input_data_controler.offset}
                    onChange={(e) => setInput_data_controler({ ...input_data_controler, offset: e.target.value })}></input>
            </p>
            <ol type="number">
                {order.length >0 &&
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
               ${!loader ? 'd-block' : 'd-none'}`}>
                Loading...
            </div>
            {order.length===0 ? <h4 className="h5 text-center mt-5">Get orders using limit and skip options</h4> : ""}
        </div>
    )
}

export default Order2