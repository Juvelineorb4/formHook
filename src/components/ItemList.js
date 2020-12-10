import React from 'react'


function ItemList(props) {
    return (
        <div className="col-4 p-2" key={props.id}>
                            <div className="card h-100">
                                <div className=" cdHProduct card-header ">
                                     
                                     <img src={props.img}  className="  card-img-top imgProduct" alt={props.Alt}/>
                                   
                                </div>
                                <div className="card-body text-center">
                                <p >{props.name}</p>
                                <p className="font-weight-bold">Price: {props.price} $</p>
                                <button className="btn btn-success">Agg a Carrito</button>
                                </div>
                            </div>
                        </div>
    )
}

export default ItemList
