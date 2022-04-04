import React from 'react';
import { Bar, BarChart, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import './Rechart.css';
const Rechart = ({data}) => {
     const {month,investment,sell,revenue}=data
 console.log(data)
    return (
        <div>
            <div className='chart'>
           <div>
               <h2>Month Wise Sell</h2>
                <LineChart width={550} height={400} data={data} >
                
                    <Line type="monotone" dataKey={'pv'} stroke="#8884d8" />
                    <XAxis dataKey="month"></XAxis>
                    <YAxis></YAxis>
                    <Tooltip></Tooltip>
                </LineChart>
            </div>
            <div>
                <h2>Invest vs Revenue</h2>
            <BarChart width={550} height={400} data={data}>
          <Bar dataKey="pv" fill="#8884d8" />
          <XAxis dataKey="name" />
          <YAxis />
        
          <Legend />
          <Tooltip></Tooltip>
        </BarChart>
            </div>
           </div>
        </div>
    );
};

export default Rechart;