import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { RecallData } from '../../types/types';
import moment from 'moment';

type GraphProps = {
    recalls: RecallData[];
}

const Graph:React.FC<GraphProps> = ({recalls}) => {
  return (
    <ResponsiveContainer width="100%" height={400} style={{marginTop:50}}>
      <LineChart
        data={recalls}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" tickFormatter={(tick) => moment(tick).format('YYYY-MM-DD')} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="recall" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Graph;