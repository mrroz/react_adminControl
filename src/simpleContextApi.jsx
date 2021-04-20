import {createContext} from 'react';

const simpleContext = createContext({
    state:{},
    addAdmin:()=>{},
    setPerson:()=>{},
    deleteHandler:()=>{}

})

export default simpleContext;