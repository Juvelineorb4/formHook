import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
//import Welcome from './CreateForm';
 function FromList(props) {
    const [fName, setFName] = useState('');
    const [fLastName, setFLastName] = useState('');
    const [fPhone, setfPhone] = useState('');
    const [fDocument, setFDocument] = useState('');

    useEffect(() => {
        if (props.location.state) {
            const estado = props.location.state;
            setFName(estado.name);
            setFLastName(estado.lastName);
            setfPhone(estado.phone);
            setFDocument(estado.document);
            console.log(estado);
        }else{
            alert('error');
        }
        
    }, [props.location.state]);


    const backForm = () => {
        props.history.goBack();
    }
    return (
        <div className="row d-flex justify-content-center" >
            <div className="col-6">
              <div className="card">
                  <div className="  card-header d-flex justify-content-between" >
                        <h5 >User: {fName + " "+fLastName}</h5>
                        <button className="btn btn-danger" onClick={() => backForm()}>  
                                            Back
                                    </button>
                  </div>
                   <div className="card-body">
                        <p>Phone: {fPhone}</p>
                        <p>Document: {fDocument}</p>
                    </div> 
              </div>
            </div>
        </div>
    )
}
export default withRouter(FromList);