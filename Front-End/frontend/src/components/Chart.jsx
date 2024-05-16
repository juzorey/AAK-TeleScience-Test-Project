
import Context from '../services/Context.jsx';
import Chart from 'react-apexcharts'
import React,{useContext,useState,useEffect} from 'react'; 
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';



const Stacked = ({option})=>{


  

  const {contextDataObj} = useContext(Context); 

console.log(contextDataObj.malePercentArray,'contextDataObj')

const[data,setData] = useState({})



  useEffect(()=>{

    setData(

      {
        series: [{
          name: 'Males',
          data: [...contextDataObj.malePercentArray]
        },
        {
          name: 'Females',
          data: [...contextDataObj.femalePercentArray]
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
              categories: [...contextDataObj.ageGroupArray],
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

  },[contextDataObj.malePercentArray])
  
  




return(
  <div id="chart">
    {data && data?.series && <ReactApexChart options={data?.options} series={data?.series} type="bar" height={440} width={600}/>

      }

   

</div>




)
}

export default Stacked;