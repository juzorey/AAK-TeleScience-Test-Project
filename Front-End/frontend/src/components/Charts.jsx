
import Context from '@services/context/Context.jsx';
import Chart from 'react-apexcharts'
import React,{useContext,useState,useEffect} from 'react'; 
import ReactApexChart from 'react-apexcharts';


// Responsible for rendering the stacked bar chart

const ChartDisplay = ({option})=>{
  
//Global state
  const {contextDataObj} = useContext(Context); 
  console.log(contextDataObj.malePercentArray,'Data is loaded in global from API')


//Local chart state
  const[chartData,setChartData] = useState({})
  console.log(chartData,'Data is loaded in chart from global state')

// Renders chartdata when the global state has recevied data from API
  useEffect(()=>{
    setChartData(
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
    {chartData && chartData?.series && <ReactApexChart options={chartData?.options} series={chartData?.series} type="bar" height={440} width={600}/>
      }
  </div>

)
}

export default ChartDisplay;