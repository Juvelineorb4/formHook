import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import './style/PdpProducts.css';



function PdpProducts(props) {
const [descriptionProduct, setDescriptionPage] = useState('Lo mejor en productos Nacionales e Internacionales, con toda la variedades que deseas, COMPRA YA');
const [titleProduct, setTitleProduct] = useState('');
const [priceProduct, setPriceProduct] = useState("");
const [imgProduct,setImgProduct] = useState("");
const [brandProduct, setBrandProduct]= useState("");
const [cntProduct, setCntProduct]  = useState("");
    useEffect(() => {
        if (props.location.state) {
            const estado = props.location.state;
            setImgProduct(estado.Children[0].Imgs[0].Path);
            setTitleProduct(estado.Name);
            setBrandProduct(estado.Brand);
            setPriceProduct(estado.Children[0].Price + " $");
            setCntProduct(estado.Unit);
            console.log(estado);
        }else{
            alert('error');
        }
        
    }, [props.location.state]);


    return (
        
    <div className="row bg-white ">
    <div className="col-12 col-md-6 d-flex justify-content-center">
    <img src={imgProduct}  className=" imgPbproduct " />
    </div>
    <div className="col-12 col-md-6  container-right-details">
  <h1>   {titleProduct.toUpperCase()} ({brandProduct.toUpperCase()})</h1> 
  <p className="price-product-normal"> {priceProduct} / {cntProduct} </p>
  <p className="descriptionPage">{descriptionProduct}</p>

      <button className="add-to-cart-button"> Agregar al carro</button>
    </div>
  </div>

   
    )
}

export default  withRouter(PdpProducts);
