import React,{useState} from 'react';
//import axios from 'axios';
import { withRouter } from 'react-router-dom';







 function CreateForm(props) {

    const [name, setName]= useState("");
    const [lastName, setLastName]= useState("");
    const [prefPh, setPrefPh]= useState("");
    const [phone, setPhone]=useState("");
    const [typeDoc, setTypeDoc]=useState("");
    const [document, setDocument]=useState("");

 

    async function onSubmit(e){
        e.preventDefault();
        const newForm = {
            name: name,
            lastName: lastName,
            phone: prefPh+phone,
            document: typeDoc+document
        }
       // console.log(newForm);
      props.history.push({
            pathname: 'formList',
            state: newForm
            
        });
        //console.log(props.history);
        //await axios.post('http://localhost:4000/api/formularios', newForm);
    }
    const onInputChange = (name)=>(e)=>{
        const {target} = e;
        const {value} = target;
        //console.log(name + " :" + value);
        switch(name){
            case "name":
                setName(value);
                break;
            case "lastName":
                setLastName(value);
                break;
            case "prefPh":
                setPrefPh(value);
                break;
            case "phone":
                setPhone(value);
                break;
            case "typeDoc":
                setTypeDoc(value);
                break;
            case "document":
                setDocument(value);
                break;
            default:
                break;
        }
        
    }



    return (
        <div className="col-md-6 border offset-md-3 bg-white">
            <form onSubmit={onSubmit} className="">
                <div className="form-row">
                    <div className="form-group col-6">
                        <label htmlFor="" >Nombre</label>
                        <input type="text" className="form-control" onChange={onInputChange("name")}  required/>
                    </div>
                    <div className="form-group col-6">
                    <label htmlFor="" >Apellido</label>
                        <input type="text" className="form-control"  onChange={onInputChange("lastName")} required/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-12">
                        <label htmlFor="">Telefono</label>
                    </div>
                    <div className="form-group col-12 col-md-3">
                        <select  id="prefijoTlf"  className="form-control" onChange={onInputChange("prefPh")} required>
													<option >0414</option>
													<option>0424</option>
													<option>0412</option>
													<option>0416</option>
													<option>0426</option>

					    </select>
                    </div>
                    <div className="form-group col-12 col-md-9">
                        <input type="number" className="form-control" onChange={onInputChange("phone")}  required/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-12">
                        <label htmlFor="">cedula</label>
                    </div>
                    <div className="form-group col-12 col-md-3">
                        <select  id="prefijoTlf"  className="form-control"  onChange={onInputChange("typeDoc")}>
                                                    <option>V</option>
													<option>E</option>
													<option>P</option>

					    </select>
                    </div>
                    <div className="form-group col-12 col-md-9">
                        <input type="number" className="form-control" onChange={onInputChange("document")} required />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary mb-2 col-12" id="boton_enviar"  >Crear Documento</button>
            </form>
        </div>
    )
}
export default withRouter(CreateForm);
