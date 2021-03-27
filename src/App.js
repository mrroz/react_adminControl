import React from 'react';
import Person from './camponents/person/person';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ToastContainer,toast} from 'react-toastify';
import Button from 'react-bootstrap/Button';
import { ArrowRight } from 'react-bootstrap-icons';

import {Alert,Badge,Dropdown,ButtonGroup} from 'react-bootstrap'


class App extends React.Component {
  
  state={

    persons:[],
    person:""

  }

  // deleteHandler=(id)=>{

  //   const newPerson = [...this.state.persons]
  //   newPerson.splice(id,1)
  //   this.setState({
  //     persons:newPerson
  //   })

  // }

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
      <div className="rtl text-center">
        <Alert variant="primary">

            <h2>{persons.length}  : تعداد اشخاص</h2>

        </Alert>

        <div >
          <Button  type="submit" variant="success" size="sm" onClick={this.addAdmin}>ثبت</Button>
          
          <input type="text" onChange={this.setPerson}  value={this.state.person} style={{direction:'rtl'}}  placeholder="نام ادمين وارد شود" />
          <ToastContainer/>

        </div>

        {/* <div  className="input-group-w-25" style={{width:"30%" ,textAlign:"center",}}>
        <input  className="form-control" value={this.state.person} onChange={this.setPerson} type="text" placeholder="نام ادمين وارد شود" style={{direction:'rtl'}} />
        </div>

        <div className="input-group-prepend">
        <Button  type="submit" variant="success " size="sm" onClick={this.addAdmin}>+</Button>
        </div> */}

        <Person persons={persons} delete={this.deleteHandler}/>
      </div>
    )
  }
}
 
export default App;


