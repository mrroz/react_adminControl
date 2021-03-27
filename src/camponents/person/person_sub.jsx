import {Alert,Badge,Dropdown,ButtonGroup} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'

const Sub = (props) => {

    const styleDiv ={
        textAlign:'center',
        width:'55%',
        height:'55px',
        //color:'white',
        //backgroundColor:'green',
        //padding:"1px",
        // marginTop:"1%",
        direction:'rtl'
        
    }


    return ( 
        <div style={styleDiv} className="input-group-prepend">
            <Alert variant="success">
            <h7>{`نام :${props.name}`}</h7>

            </Alert>
            <Button style={{height:"38px"}} variant="danger" size="sm" onClick={props.delete}>حذف</Button>


        </div>
     );
}
 
export default Sub;