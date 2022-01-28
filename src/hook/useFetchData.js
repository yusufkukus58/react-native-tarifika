
import axios from "axios";
import { useState, useEffect } from "react";
export default function useFetchData(url){

    const [data,setData] = useState([])
    const [loading, setLoading] = useState(true) 
    const [error, setError] = useState(false)
    const fetchData= async () =>{
        try {
            const {data} = await axios.get(url)
            setData(data)
            setLoading(false) 
            // burası sayesinden istek yapmayı durduruyor, burda veri geldikten sonra duruyor
            // yani sürekli istek yapmayı şimdilik engelledik gibi
            
        } catch (error) {
            setError(true)
        }
    }

  
    
    useEffect(()=>{
        fetchData()

    }, [loading]) 
    // loadinge bağlandı, ilk değeri true istek yapıyor, 

    return {data,loading,error}
 

}