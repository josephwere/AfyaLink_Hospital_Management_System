import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
const data = [{ name: 'Pharmacy', revenue: 2400 },{ name: 'Consultation', revenue: 1398 },{ name: 'Lab', revenue: 980 },{ name: 'Radiology', revenue: 1200 }];
export default function RevenueChart(){ return (<ResponsiveContainer width='100%' height={200}><BarChart data={data}><XAxis dataKey='name'/><YAxis/><Tooltip/><Bar dataKey='revenue' fill='#16a34a'/></BarChart></ResponsiveContainer>); }
