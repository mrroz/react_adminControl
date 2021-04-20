import React from 'react';
import Person from './camponents/person/person';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ToastContainer,toast} from 'react-toastify';
import Button from 'react-bootstrap/Button';
import { ArrowRight } from 'react-bootstrap-icons';

import {Alert,Badge,Dropdown,ButtonGroup} from 'react-bootstrap'
import newPerson from './camponents/person/newPerson';
import simpleContext from './simpleContextApi';
import Handel from '../src/camponents/person/newPerson';


class App extends React.Component {
  
  state={

    persons:[],
    person:""

  }



  deleteHandler=(id)=>{
    const newPerson =  [...this.state.persons]
    const filterPersons= newPerson.filter(item=>item.id !== id)
    this.setState({
      persons:filterPersons
    })
    toast.error('شخص با موفقيت حذف شد',{
      position:'bottom-right',
      closeButton:true,
      closeOnClick:true
    })
  }

  addAdmin=()=>{
    console.log("cliked !!!");
   const newPerson = [...this.state.persons]
    const admin = {
      id:Math.floor(Math.random()*100),
      name:this.state.person
    }

    newPerson.push(admin)
    this.setState({
      persons:newPerson,
      person:"",
    })
    toast.success('شخص با موفقيت افزوده شد',{
      position:'bottom-right',
      closeButton:true,
      closeOnClick:true
    })
  }

  setPerson=(Event)=>{
    this.setState({
      person:Event.target.value
    })
  }

 
   
  
  render() { 
    const{persons}=this.state


    return (  

      <simpleContext.Provider
      value={{
        state:this.state,
        addAdmin:this.addAdmin,
        setPerson:this.setPerson,
        deleteHandler:this.deleteHandler

      }}
      >

<div className="rtl text-center">
        <Alert variant="primary">

            <h6> <span class="badge badge-pill badge-danger"> {persons.length}</span>     : تعداد اشخاص</h6>

        </Alert>

        <Handel/>


    

        <Person persons={persons} delete={this.deleteHandler}/>
      </div>
      </simpleContext.Provider>

    )
  }
}
 
export default App;


