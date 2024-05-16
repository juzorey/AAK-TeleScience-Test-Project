import React, {useState, useContext, useEffect} from 'react';
import Context from './Context.jsx';
// Global State Mangament
const ContextProvider = ({children}) => {



//States
  const [dataState, setDataState] = useState([])
  const [contextChartData, setContextChartData] = useState({
    ageGroupArray: [],
    maleArray: [],  
    malePercentArray: [],
    femaleArray: [],
    femalePercentArray: [],
  })


//if there is data from the API then it will load into the states and be accessible globally
  useEffect(()=>{

    if(dataState.length !== 0 || dataState[0] !== undefined){
      console.log('loading data into contextChart')  

      setContextChartData({
        ageGroupArray: dataState?.map(data => data.Age_Group).reverse(),
        maleArray: dataState?.map(data => data.Male_Estimate).reverse(),
        malePercentArray: dataState?.map(data => data.Percent_Male_Estimate * 100 ).reverse(),
        femaleArray: dataState?.map(data =>data.Female_Estimate).reverse(),
        femalePercentArray: dataState?.map(data =>data.Percent_Female_Estimate * -100 ).reverse()

      })
  
    }

  },[dataState])


  







  return( 
    <Context.Provider value={{contextChartData, dataState, setDataState}}>
      {children}
    </Context.Provider>)
}
export default ContextProvider;