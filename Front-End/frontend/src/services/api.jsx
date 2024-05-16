
// wrote an inteceproters to handle the request and response so it writes the correct headers

import axios from 'axios';
import { useEffect, useState , useContext} from 'react';
import Context from '../services/Context.jsx';

export const BASE_URL = 'http://localhost:8000/api/data';


const Api = ()=>{

  const {contextDataObj} = useContext(Context);

  const [isLoading, setIsLoading] = useState(false)

  const[error, setError] = useState()

  useEffect(()=>{
    const fetchData = async ()=>{
      setIsLoading(true)
      try{
        const response = await fetch(BASE_URL,{
          method: 'GET',
          headers: {
            'Content-Type': 'application/json', 
          }
        })
        let data = await response.json()//gets data and puts into state
        contextDataObj.setDataState(data)
        console.log(data)

      } catch(error){
        setError(error)

      }

      setIsLoading(false)

     
      }
    
    fetchData()

  },[])

  if(isLoading){
    return <div>Loading...</div>
  }
  if (error){
    alert('Error')
    return <div>Error Please Try Again</div>
  }

}


export default Api
