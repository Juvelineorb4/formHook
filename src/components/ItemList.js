import React from 'react'


function ItemList(props) {
    const {handleItem} = props
    const {ToDescription} = props
    //console.log(props.footer);
    return (
        
        <div className="col-12 col-md-4 p-2 " key={props.id}>
                            <div className="card h-100">
                                <div className=" cdHProduct card-header ">
                                     
                                     <img src={props.img}  className="  card-img-top imgProduct" alt={props.Alt}/>
                                   
                                </div>
                                <div className="card-body text-center">
                                <p >{props.name}</p>
                                <p className="font-weight-bold">Price: {props.price} $</p>
                                <button className="btn btn-success" onClick={ToDescription}>Ver Mas</button>
                                </div>
                                {props.footer? 
                                <div className="card-footer " >
                                    <div className="btn-group d-flex justify-content-center">
                                    <button className="btn btn-dark btn-sm " onClick={handleItem} value="candy">CANDY</button>
                                    <button className="btn btn-dark btn-sm  " onClick={handleItem} value="drink">DRINK</button>
                                    <button className="btn btn-dark  btn-sm " onClick={handleItem} value="alcohol">ALCOHOL</button>
                                    </div>
                                </div>:<div></div>}
                                
                                
                            </div>
                        </div>
    )
}

export default ItemList
