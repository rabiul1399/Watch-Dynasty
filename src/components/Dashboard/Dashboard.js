import React, { useEffect, useState } from 'react';
import Rechart from '../Rechart/Rechart';
import { Area, Bar, BarChart, CartesianGrid, ComposedChart, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import './Dashboard.css';

const Dashboard = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])


    return (
        <div className='chart-container'>
            <div className='chart'>
                <div>
                    <h2>Month Wise Sell</h2>
                    <LineChart width={450} height={350} data={data} >
                        <Line type="monotone" dataKey={'investment'} stroke="#8884d8" />
                        <Line type="monotone" dataKey={'revenue'} stroke="#8884d8" />
                        <XAxis dataKey="month" />
                        <YAxis></YAxis>
                        <Tooltip></Tooltip>
                    </LineChart>
                </div>
                <div>
                    <h2>Invest Vs Revenue</h2>
                    <BarChart
                        width={500}
                        height={400}
                        data={data}

                    >
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="investment" stackId="a" fill="#8884d8" />
                        <Bar dataKey="revenue" stackId="a" fill="#82ca9d" />
                    </BarChart>
                </div>
            </div>

            <div className='chart'>
                <div>
                    <h2>Invest Vs Revenue</h2>
                    <PieChart width={450} height={450}>
                        <Pie data={data} dataKey="investment" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
                        <Pie data={data} dataKey="revenue" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
                        <Tooltip></Tooltip>
                    </PieChart>
                </div>
                <div>
                    <h2>Sell With Invest Vs Revenue</h2>
                    
                    <ComposedChart
                        width={500}
                        height={400}
                        data={data}
                        margin={{
                            top: 20,
                            right: 20,
                            bottom: 20,
                            left: 20,
                        }}
                    >
                        <CartesianGrid stroke="#f5f5f5" />
                        <XAxis dataKey="month" scale="band" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Area type="monotone" dataKey="sell" fill="#8884d8" stroke="#8884d8" />
                        <Bar dataKey="investment" barSize={20} fill="#413ea0" />
                        <Line type="monotone" dataKey="revenue" stroke="#ff7300" />
                    </ComposedChart>
                 
                </div>

            </div>
        </div>
    );
};

export default Dashboard;