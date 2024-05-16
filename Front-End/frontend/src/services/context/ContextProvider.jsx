import React, {useState, useContext, useEffect} from 'react';
import Context from './Context.jsx';
// Global State Mangament
const ContextProvider = ({children}) => {



//States
  const [dataState, setDataState] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true)
  const [maleArray, setMaleArray] = useState([])
  const [malePercentArray, setMalePercentArray] = useState([])
  const [femaleArray, setFemaleArray] = useState([])
  const [femalePercentArray, setFemalePercentArray] = useState([])
  const [ageGroupArray, setAgeGroupArray] = useState([])




//if there is data from the API then it will load into the states and be accessible globally
  useEffect(()=>{

    setIsLoaded(true)
    if(dataState.length !== 0 || dataState[0] !== undefined){
      const ageGroupArray = dataState.map(data => data.Age_Group).reverse();
      const maleArray = dataState.map(data => data.Male_Estimate).reverse();
      const malePercentArray = dataState.map(data => data.Percent_Male_Estimate * 100 ).reverse();
      const femalArray = dataState.map(data => data.Female_Estimate).reverse();
      const femalePercentArray = dataState.map(data => data.Percent_Female_Estimate * -100 ).reverse();

      setAgeGroupArray(ageGroupArray)
      setMaleArray(maleArray)
      setMalePercentArray(malePercentArray)
      setFemaleArray(femalArray)
      setFemalePercentArray(femalePercentArray)
      console.log(femalePercentArray,'Data Loaded in context from API')  
    }

  },[dataState])

//Organized the data into an object to be passed down to the children components
  const contextDataObj = {
    isLoaded: isLoaded,
    ageGroupArray: ageGroupArray,
    maleArray: maleArray,
    malePercentArray: malePercentArray,
    femaleArray: femaleArray,
    femalePercentArray: femalePercentArray
  }


  return( 
    <Context.Provider value={{contextDataObj, dataState, setDataState}}>
      {children}
    </Context.Provider>)
}
export default ContextProvider;