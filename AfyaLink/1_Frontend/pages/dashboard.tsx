import dynamic from 'next/dynamic';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import AIAssistant from '../components/AIAssistant';
import PatientStats from '../components/Charts/PatientStats';
import RevenueChart from '../components/Charts/RevenueChart';
import LabAnalytics from '../components/Charts/LabAnalytics';
import withAuth from '../utils/withAuth';

function DashboardPage(){ const [showAI,setShowAI]=require('react').useState(false); return (<div className='flex min-h-screen bg-gray-50 text-gray-800'><Sidebar /><div className='flex-1 flex flex-col'><Navbar onAIToggle={()=>setShowAI(s=>!s)} /><main className='p-6 space-y-6'><section className='grid grid-cols-1 md:grid-cols-3 gap-6'><div className='md:col-span-2 bg-white rounded-2xl p-4 shadow'><h3 className='text-xl font-semibold mb-4 text-blue-700'>Patient Statistics</h3><PatientStats /></div><div className='bg-white rounded-2xl p-4 shadow'><h3 className='text-xl font-semibold mb-4 text-blue-700'>Revenue Overview</h3><RevenueChart /></div></section><section className='bg-white rounded-2xl p-4 shadow'><h3 className='text-xl font-semibold mb-4 text-blue-700'>Lab Analytics</h3><LabAnalytics /></section></main></div>{showAI && <AIAssistant onClose={()=>setShowAI(false)} />}</div>); }

export default withAuth(DashboardPage, ['Admin','Doctor','Nurse']);
