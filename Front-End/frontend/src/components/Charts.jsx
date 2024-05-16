
import Context from '@services/context/Context.jsx';
import Chart from 'react-apexcharts'
import React,{useContext,useState,useEffect} from 'react'; 
import ReactApexChart from 'react-apexcharts';
import ApexCharts from 'react-apexcharts';


// Responsible for rendering the stacked bar chart

const ChartDisplay = ({})=>{
  
//Global state
  const {contextChartData} = useContext(Context); 


//Local chart state
  const[chartData,setChartData] = useState({
    
          
      series: [{
        name: 'Males',
        data: [0]
      },
      {
        name: 'Females',
        data: [0]

      }
      ],
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
          text: 'Mauritius population pyramid 2011'
        },
        xaxis: {
          categories: ['85+', '80 to 84', '75 to 79', '70 to 74', '65 to 69', '60 to 64', '55 to 59', '50 to 54', '45 to 49', '40 to 44', '35 to 39', '30 to 34', '25 to 29', '20 to 24', '15 to 19', '10 to 14', '5 to 9', '0 to 5'],
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



// Renders chartdata when the global state has recevied data from API
  useEffect(()=>{
    setChartData(prevState => ({
      ...prevState,
      series: [
        {
          name: 'Males',
          data: [...contextChartData.malePercentArray]
        },
        {
          name: 'Females',
          data: [...contextChartData.femalePercentArray]
        }
      ]
    }));
  

    return ()=>{
      setChartData({})
    }
        console.log('data loaded into chart from context')
  },[contextChartData.malePercentArray])
  
  


return(
  <div id="chart">
    {chartData && chartData?.series && <ReactApexChart options={chartData?.options} series={chartData?.series} type="bar" height={440} width={600}/>
    }
  </div>

)
}

export default ChartDisplay;