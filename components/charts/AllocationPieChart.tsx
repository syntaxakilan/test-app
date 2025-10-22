
import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import type { Resource } from '../../types';

interface AllocationPieChartProps {
    data: Resource[];
}

const AllocationPieChart: React.FC<AllocationPieChartProps> = ({ data }) => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <PieChart>
                <Tooltip
                    contentStyle={{
                        backgroundColor: '#1e293b',
                        borderColor: '#334155',
                        borderRadius: '0.5rem',
                    }}
                    labelStyle={{ color: '#cbd5e1' }}
                    itemStyle={{ color: '#cbd5e1' }}
                />
                <Legend iconType="circle" wrapperStyle={{color: '#94a3b8'}}/>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    nameKey="name"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    );
};

export default AllocationPieChart;
