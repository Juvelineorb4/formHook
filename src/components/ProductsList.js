  
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ItemList from './ItemList'
//import { withRouter } from 'react-router-dom';

export default function ProductsList() {
    const [items, setItems]= useState();
    const [arrayProducts, setArrayProducts] = useState();
    const [view, setView] = useState(true);
    let newArray = [];
    
    useEffect( ()=>{
         function SearchProducts(){
        axios.get(process.env.REACT_APP_API_URL)
          .then(res => {    
            setItems(res.data);     
            setArrayProducts(res.data);     
            })
          .catch(err => console.log(err)); 
            }
        SearchProducts();
    },[]);
 
const allProducts = ()=>{
     newArray = items.map(product =>{
        console.log(product);
        return product;
    })
  setArrayProducts(newArray);
}

   const filterBtn = (name) =>{
    
        newArray = items.filter(product => product.Name.indexOf(name)===0).map(product =>{
           console.log(product);
           return product;
       })
     setArrayProducts(newArray);
   }

   const deleteProducts = (e) =>{
      
       if (e.target.value === "true"){
            e.target.value = "false";
            e.target.innerText = "MOSTRAR";
            setView(false);
           
       }else {
            e.target.value = "true";
             e.target.innerText = "NO MOSTRAR";
             setView(true);
           
       }
   }
    return (
        
       <div className="row">
           <div className="col-12 d-flex justify-content-center">
               <button className="btn btn-primary m-2" onClick={()=>filterBtn("B")}  >filter B </button>
               <button className="btn btn-primary m-2" onClick={()=>allProducts()}  >All</button>
               <button className="btn btn-primary m-2" onClick={()=>filterBtn("M")} >filter M </button>
               <button className="btn btn-primary m-2" onClick={deleteProducts} value="true" >No Mostrar</button>
           </div>
            {arrayProducts !== undefined && view === true ? arrayProducts.map(product => {
                    return (
                        <ItemList key={product._id} id={product._id } img ={product.Children[0].Imgs[0].Path} 
                        Alt={product.Children[0].Imgs[0].Alt}
                        name = {product.Name}
                        price ={product.Children[0].Price}/>
                        
                    )
                }) : <p>Please go back to home page and write correct address...</p>
                }
       </div>
      
    )
}
