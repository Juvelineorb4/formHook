  
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ItemList from './ItemList';
import { withRouter } from 'react-router-dom';

 function ProductsList(props) {
    const [items, setItems]= useState();
    const [arrayProducts, setArrayProducts] = useState();
    const [view, setView] = useState(true);
    const [addCandy, setAddCandy] = useState([]);
    const [addDrink, setAddDrink] = useState([]);
    const [addAlcohol, setAddAlcohol] = useState([]);
    const [footerCard, setfooterCard] = useState(true);
    let newArray = [];
    
    useEffect( ()=>{
         function SearchProducts(){
        axios.get(process.env.REACT_APP_API_URL)
          .then(res => {    
            setItems(res.data);     
            setArrayProducts(res.data);  
           // console.log(res.data[0]);  
            })
          .catch(err => console.log(err)); 
            }
        SearchProducts();
    },[]);
 
const allProducts = ()=>{
    setfooterCard(true);
  newArray = items.map(product =>{
        //console.log(product);
        return product;
    })
  setArrayProducts(newArray);
}

   const filterBtn = (name) =>{
       
        
          // estoy filtrando por letraaa
          newArray = items.filter(product => product.Name.toUpperCase().indexOf(name)===0).map(product =>{
            // console.log(product);
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

   const handleItem = (index)=>(e) =>{
     const {target} = e;
     const {value} = target;
     //console.log(value);

     switch(value){
         case "candy":
          // console.log("AQUI ESTOY ")
            setAddCandy([...addCandy, items[index]]);
             break;
         case "drink":
             setAddDrink([...addDrink, items[index]]);
             break;
         case "alcohol":
            setAddAlcohol([...addAlcohol, items[index]]);
             break;
          default:
            break;
     }
     
     items.splice(index,1);
     allProducts();
   }

   const btnCategory= (e)=>{
    const {target} = e;
    const {value} = target;
    let arrayCategory = [];
    setfooterCard(false);
    switch(value){
        case "CANDYS":
          arrayCategory = addCandy.map(product =>{
          return product;});
            break;
        case "DRINKS":
          arrayCategory = addDrink.map(product =>{
            return product;});
            break;
        case "ALCOHOLS":
          arrayCategory = addAlcohol.map(product =>{
            return product;});
            break;
         default:
           break;
    }
    
     setArrayProducts(arrayCategory);
   }
  
   const btnDespcriton =(product)=>{
     const pdpProduct = product;
      props.history.push({
        pathname: 'PdpProducts',
        state: pdpProduct
        
      });
      
   }

    return (

        
       <div className="row">
           <div className="col-12 mb-2 ">
             <div className="row m-0 p-0 d-flex justify-content-center ">
           
               <div className="col-12 col-md-2 mb-1 ">
               <button className=" btn-block  btn btn-primary " onClick={()=>filterBtn("B")}  >FILTER B </button>
               </div>
               <div className="col-12 col-md-2 mb-1">
               <button className="btn-block btn btn-primary " onClick={()=>allProducts()}  >ALL</button>
               </div>
               <div className="col-12 col-md-2 mb-1">
               <button className="btn-block btn btn-primary " onClick={()=>filterBtn("M")} >FILTER M </button>
               </div>
               <div className="col-12 col-md-2 mb-1">
               <button className="btn-block btn btn-primary " onClick={deleteProducts} value="true" >NO MOSTRAR</button>
               </div>
               <div className="col-12 col-md-4 mb-1 ">
               <input className="form-control" type="text" placeholder="Search" aria-label="Search"></input>
               </div>
               <div className="col-12  m-1  " >
             <div className="btn-group d-flex justify-content-center" role="group" aria-label="Basic example">
                  <button type="button" className="btn btn-info" value="CANDYS" onClick={btnCategory} >CANDYS</button>
                  <button type="button" className="btn btn-info" value="DRINKS" onClick={btnCategory}>DRINKS</button>
                  <button type="button" className="btn btn-info" value="ALCOHOLS"onClick={btnCategory}>ALCOHOLS</button>
              </div>
             
           </div>
             </div>
              
              
               
           </div>
          
            {arrayProducts !== undefined && view === true ? arrayProducts.map((product,index) => {
                    
                    return (
                        <ItemList key={product._id} id={product._id } img ={product.Children[0].Imgs[0].Path} 
                        Alt={product.Children[0].Imgs[0].Alt}
                        name = {product.Name}
                        price ={product.Children[0].Price}
                        handleItem ={handleItem(index)}
                        ToDescription = {()=>btnDespcriton(product)}
                        footer = {footerCard}/>
                        
                    )
                }) : <p>Please go back to home page and write correct address...</p>
                }
       </div>
      
    )
}

export default withRouter(ProductsList);