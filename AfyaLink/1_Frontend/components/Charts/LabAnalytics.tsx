import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
const data = [{ name: 'Blood Tests', value: 400 },{ name: 'X-rays', value: 300 },{ name: 'Scans', value: 200 },{ name: 'Other', value: 100 }];
const COLORS = ['#2563eb','#16a34a','#f59e0b','#ef4444'];
export default function LabAnalytics(){ return (<ResponsiveContainer width='100%' height={200}><PieChart><Pie data={data} dataKey='value' nameKey='name' outerRadius={70}>{data.map((entry,i)=>(<Cell key={i} fill={COLORS[i%COLORS.length]}/>))}</Pie><Tooltip/></PieChart></ResponsiveContainer>); }
