
import React,{ useState, useEffect, useContext, useRef } from 'react';
import Context from '@services/context/Context.jsx';

//responsible for fetching data from the given URL, this cacse our backend API
function useFetchData (url){

//Global state
  const {dataState,setDataState } = useContext(Context);
//Hook states
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);



  const fetchData = async () => {

  

    setIsLoading(true)

  
    try {
      const response = await fetch(url,{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json', 
        }});
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const jsonData = await response.json();
      setDataState(jsonData);

    } catch (error) {
      setError(error);
    }finally{
      setIsLoading(false);

    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);



  return { dataState, isLoading, error };
};

export default useFetchData;





