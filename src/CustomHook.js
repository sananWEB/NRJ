import React,{useState, useEffect} from 'react'

function useCustomHook() {

    let [value, setvalue] = useState({
        a1:"",
        a2:"",
        a3:"",
        a4:"",
        a5:"",
        a6:"",
    });
    
    let [value2,value2n]=useState(null);
      
    return [value,setvalue,value2,value2n]
}

export default useCustomHook
