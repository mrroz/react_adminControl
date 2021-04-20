import React,{useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ToastContainer,toast} from 'react-toastify';
import Button from 'react-bootstrap/Button';
import { ArrowRight } from 'react-bootstrap-icons';
import simpleContext from '../../simpleContextApi';

// import Person from './camponents/person/person';


const Handel =()=>{
    const context = useContext(simpleContext) 
    return(
        
        <div >
          <form action="#">
            <div className="input-group justify-content-center">
            <input type="text" onChange={context.setPerson}  value={context.state.person} style={{direction:'rtl'}}  placeholder="نام ادمين وارد شود" />
            <div className="input-group-prepend">
            <Button  type="submit" variant="success" size="sm" onClick={context.addAdmin}>ثبت</Button>
            </div>
            <ToastContainer/>

            </div>


          </form>

          


        </div>
    )
}

export default Handel;