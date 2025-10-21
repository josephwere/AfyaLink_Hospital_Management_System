import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
const data = [{ month: 'Jan', patients: 220 },{ month: 'Feb', patients: 280 },{ month: 'Mar', patients: 340 },{ month: 'Apr', patients: 290 },{ month: 'May', patients: 370 }];
export default function PatientStats(){ return (<ResponsiveContainer width='100%' height={200}><LineChart data={data}><XAxis dataKey='month'/><YAxis/><Tooltip/><Line type='monotone' dataKey='patients' stroke='#2563eb' strokeWidth={3}/></LineChart></ResponsiveContainer>); }
