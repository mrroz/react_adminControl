const Sub = (props) => {

    const styleDiv ={
        textAlign:'center',
        width:'50%',
        height:'60%',
        color:'white',
        backgroundColor:'green',
    }


    return ( 
        <div style={styleDiv}>
            <p onClick={props.delete}>پاك كردن</p>
            <h7>{`نام :${props.name}`}</h7>
        </div>
     );
}
 
export default Sub;