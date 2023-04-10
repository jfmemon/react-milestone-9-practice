import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const LoadChartData = () => {
    const data = useLoaderData();
    return (
        <div>
            <h1>This is chart area.</h1>
            <LineChart width={1300} height={300} data={data} margin={{ top: 5, left: 30 }}>
                <Line type="monotone" dataKey="area" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="fifa" />
                <YAxis/>
                <Tooltip></Tooltip>
            </LineChart>
        </div>
    );
};

export default LoadChartData;