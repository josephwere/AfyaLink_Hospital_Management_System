import withAuth from '../utils/withAuth';
export default withAuth(function Support(){ return (<div className='p-6'><h1 className='text-2xl font-bold text-gold-600 mb-4'>Support</h1><div className='bg-white p-6 rounded-2xl shadow'>Content for Support page.</div></div>); }, ['Admin','Doctor','Nurse']);
