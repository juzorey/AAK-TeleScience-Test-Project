import React, {useState, useContext, useEffect} from 'react';
import Context from './Context.jsx';

const ContextProvider = ({children}) => {




  const [dataState, setDataState] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true)
  const [error, setError] = useState()
  const [maleArray, setMaleArray] = useState([])
  const [malePercentArray, setMalePercentArray] = useState([])
  const [femaleArray, setFemaleArray] = useState([])
  const [femalePercentArray, setFemalePercentArray] = useState([])
  const [ageGroupArray, setAgeGroupArray] = useState([])

  useEffect(()=>{
    console.log(dataState,'dataState')
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
      console.log(femalePercentArray,'femalePercentArray')  
    }

  },[dataState])


  const contextDataObj = {
    setDataState: setDataState,
    isLoaded: isLoaded,
    dataState: dataState,
    ageGroupArray: ageGroupArray,
    maleArray: maleArray,
    malePercentArray: malePercentArray,
    femaleArray: femaleArray,
    femalePercentArray: femalePercentArray
  }


  return( 
    <Context.Provider value={{contextDataObj}}>
      {children}
    </Context.Provider>)
}
export default ContextProvider;