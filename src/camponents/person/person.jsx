import Sub from "./person_sub";

const Person = (props) => {

  
    return ( 
        <div style={{textAlign:'center',  marginTop:"5%",}}>
            {
                props.persons.map((item,index)=>(
                    console.log(index),
                    <Sub name={item.name} lastName={item.lastName} age={item.age} delete={()=>props.delete(item.id)}/>
                ))
            }
        </div>
     );
}
 
export default Person;