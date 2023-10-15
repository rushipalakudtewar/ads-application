// AdsInsights.js
import React, { useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from 'react-chartjs-2';
import './AdsInsights.css'
import ChartTable from './ChartTable';

ChartJS.register(ArcElement, Tooltip, Legend);



function AdsInsights() {
    const chartData1 = [
        { Campaigns: 'Male', Clicks: 348, Cost: 'USD 12,528' , Conversions:42, Revenue: 'USD 62,118' },
        { Campaigns: 'Female', Clicks: 692, Cost: 'USD 24,912', Conversions:35, Revenue: 'USD 5,175' },
        { Campaigns: 'Unknown', Clicks: 105, Cost: 'USD 3,943', Conversions:3, Revenue: 'USD 4,489' },
      ];
  const [selectedMetric, setSelectedMetric] = useState('Clicks');
  const [toggleButton,setToogleButton] = useState(true)
  const data = {
    labels: ['40% Male ', '35% Female ', '25% Unknown '],
    datasets: [
      {
        data: [40, 35, 25],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };
  const options = {
    maintainAspectRatio: false,
    responsive: true,
    aspectRatio: 1,
    legend: {
        display: true,
        position: 'right', // Set the position to 'right' to display labels on the right side
      },
      scales: {},
  };
  const handleMetricChange = (event) => {
    setSelectedMetric(event.target.value);
  };

  const changeTable =() =>{
    console.log('clicked');
  }

  return (
    <div className='relative'>
        <div className='flex justify-between items-center p-2 border-b border-gray-300 '>
            <h1 className='font-bold'>Ads Insights</h1>
            <select value={selectedMetric} onChange={handleMetricChange} className='border-2'>
                <option value="Clicks">Clicks</option>
                <option value="Impressions">Impressions</option>
                <option value="Conversions">Conversions</option>
            </select>
            </div>
            {
                toggleButton ?   (
                    <div className='w-80px h-80 m-8'>
                        <Doughnut data={data} options={options}/>
                    </div>
                    ):(<div className='w-80px h-80 mt-8 mb-8'> 
                    <ChartTable data={chartData1}/>
                    </div>)
            }   

         
        <div className='absolute bottom-0 right-1'>
            <input type="checkbox" className='input1' onClick={()=>setToogleButton(!toggleButton)}/>
	    </div>
        
    </div>
  );
}

export default AdsInsights;
