  
import React, { useEffect, useState } from 'react';
import axios from 'axios';
//import { withRouter } from 'react-router-dom';

export default function ProductsList() {
    const [items, setItems]= useState();

    useEffect( ()=>{
         function SearchProducts(){
        axios.get('https://pz8cvzu4sl.execute-api.us-east-1.amazonaws.com/dev/product-ms/product/getProductByIdCompany?id=5e8d08fafd3f3d2eb89c5063')
          .then(res => {    
            setItems(res.data);          
            })
          .catch(err => console.log(err)); 
            }
        
        SearchProducts();
       
    },[]);

  
    return (
       <div className="row">
            {items !== undefined ? items.map((product) => {
                    return (
                        
                        <div className="col-4 p-2" key={product._id}>
                            <div className="card h-100">
                                <div className=" cdHProduct card-header ">
                                     
                                     <img src={product.Children[0].Imgs[0].Path}  className="  card-img-top imgProduct" alt={product.Children[0].Imgs[0].Alt}/>
                                    
                                     {/*console.log(product)*/}
                                </div>
                                <div className="card-body text-center">
                                <p >{product.Name}</p>
                                <p className="font-weight-bold">Price: {product.Children[0].Price} $</p>
                                <button className="btn btn-success">Agg a Carrito</button>
                                </div>
                            </div>
                        </div>
                    )
                }) : <p>Please go back to home page and write correct address...</p>
                }
       </div>
      
    )
}
