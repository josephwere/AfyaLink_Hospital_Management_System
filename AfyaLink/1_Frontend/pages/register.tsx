import { useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../hooks/useAuth';

export default function Register() {
  const router = useRouter();
  const { register } = useAuth() as any;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('Patient');
  const [err, setErr] = useState('');

  const handle = async (e:any) => {
    e.preventDefault();
    setErr('');
    try {
      await register({ name, email, password, role });
      router.push('/login');
    } catch (error:any) {
      setErr(error?.response?.data?.message || 'Registration failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handle} className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md space-y-4">
        <h2 className="text-2xl font-bold text-center text-gold-600">Create an AfyaLink Account</h2>
        {err && <div className="text-red-500 text-center">{err}</div>}
        <input value={name} onChange={(e)=>setName(e.target.value)} placeholder="Full name" required className="w-full border rounded-xl px-4 py-2"/>
        <input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" required className="w-full border rounded-xl px-4 py-2"/>
        <input value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" type="password" required className="w-full border rounded-xl px-4 py-2"/>
        <select value={role} onChange={(e)=>setRole(e.target.value)} className="w-full border rounded-xl px-4 py-2">
          <option>Patient</option>
          <option>Doctor</option>
          <option>Admin</option>
          <option>Nurse</option>
          <option>Pharmacist</option>
        </select>
        <button type="submit" className="w-full bg-gold-600 text-white py-2 rounded-xl hover:bg-gold-700 transition">Register</button>
      </form>
    </div>
  );
}
