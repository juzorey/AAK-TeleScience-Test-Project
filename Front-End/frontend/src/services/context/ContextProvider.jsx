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

  

  const[chartData,setChartData] = useState({})

  useEffect(()=>{
    setChartData(
      {
        series: [{
          name: 'Males',
          data: [...contextChartData.malePercentArray]
        },
        {
          name: 'Females',
          data: [...contextChartData.femalePercentArray]
        }
        ]
      ,
          options: {
            chart: {
              type: 'bar',
              height: 440,
              stacked: true
            },
            colors: ['#008FFB', '#FF4560'],
            plotOptions: {
              bar: {
                borderRadius: 5,
                borderRadiusApplication: 'end', // 'around', 'end'
                borderRadiusWhenStacked: 'all', // 'all', 'last'
                horizontal: true,
                barHeight: '80%',
              },
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              width: 1,
              colors: ["#fff"]
            },
            
            grid: {
              xaxis: {
                lines: {
                  show: false
                }
              }
            },
            yaxis: {
              stepSize: 1
            },
            tooltip: {
              shared: false,
              x: {
                formatter: function (val) {
                  return val
                }
              },
              y: {
                formatter: function (val) {
                  return Math.abs(Math.round(val)) + "%"
                }
              }
            },
            title: {
              text: 'United States Population by Age Group (2022)',
            },
            xaxis: {
              categories: [...contextChartData.ageGroupArray],
              title: {
                text: 'Percent'
              },
              labels: {
                formatter: function (val) {
                  return Math.abs(Math.round(val)) + "%"
                }
              }
            },
          },
        
        
        })
        return ()=>{
          setChartData({})
        }
        console.log('data loaded into chart from context')
  },[contextChartData.malePercentArray])
  







  return( 
    <Context.Provider value={{contextChartData, dataState, setDataState, chartData}}>
      {children}
    </Context.Provider>)
}
export default ContextProvider;