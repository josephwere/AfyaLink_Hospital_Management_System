import { useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../hooks/useAuth';

export default function Login() {
  const router = useRouter();
  const { login } = useAuth() as any;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState('');

  const handle = async (e:any) => {
    e.preventDefault();
    setLoading(true); setErr('');
    try {
      await login(email, password);
      router.push('/dashboard');
    } catch (error:any) {
      setErr(error?.response?.data?.message || 'Login failed');
    } finally { setLoading(false); }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handle} className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md space-y-6">
        <h2 className="text-2xl font-bold text-center text-gold-600">Login to AfyaLink</h2>
        {err && <div className="text-red-500 text-center">{err}</div>}
        <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} required className="w-full border border-gray-300 rounded-xl px-4 py-2"/>
        <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} required className="w-full border border-gray-300 rounded-xl px-4 py-2"/>
        <button type="submit" disabled={loading} className="w-full bg-gold-600 text-white py-2 rounded-xl hover:bg-gold-700 transition">{loading ? 'Logging in...' : 'Login'}</button>
      </form>
    </div>
  );
}
