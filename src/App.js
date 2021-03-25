import React from 'react';

import './App.css';
import Person from './camponents/person/person';

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
      person:""
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
      <div style={{textAlign:'center'}}>
        <h2>{persons.length}  : تعداد اشخاص</h2>
        <div className="add">

      <input value={this.state.person} onChange={this.setPerson} type="text" placeholder="نام ادمين وارد شود" style={{direction:'rtl'}} />

      <button onClick={this.addAdmin} style={{color:'white',backgroundColor:'blue'}}>ثبت</button>

        </div>
        <Person persons={persons} delete={this.deleteHandler}/>
      </div>
    )
  }
}
 
export default App;


