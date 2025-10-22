
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import type { GanttTask } from '../../types';

interface ScheduleGanttChartProps {
    data: GanttTask[];
}

const ScheduleGanttChart: React.FC<ScheduleGanttChartProps> = ({ data }) => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart
                data={data}
                layout="vertical"
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis type="number" stroke="#94a3b8" />
                <YAxis type="category" dataKey="name" width={100} stroke="#94a3b8" />
                <Tooltip
                    cursor={{fill: 'rgba(148, 163, 184, 0.1)'}}
                    contentStyle={{
                        backgroundColor: '#1e293b',
                        borderColor: '#334155',
                        borderRadius: '0.5rem'
                    }}
                     formatter={(value, name) => [name === 'start' ? null : value, name === 'start' ? null : 'Duration']}
                />
                <Bar dataKey="start" stackId="a" fill="transparent" />
                <Bar dataKey="duration" stackId="a" fill="#0ea5e9" />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default ScheduleGanttChart;
