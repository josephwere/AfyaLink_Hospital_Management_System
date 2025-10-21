import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import api from '../utils/api';

export type User = { id: string; name: string; email: string; role: 'Admin'|'Doctor'|'Patient'|'Nurse'|'Pharmacist'|'Lab Technician'|'Receptionist' };

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    if (!token) {
      setLoading(false);
      return;
    }
    api.get('/v1/auth/me').then(res => { setUser(res.data.user); }).catch(()=>{ localStorage.removeItem('token'); }).finally(()=>setLoading(false));
  }, []);

  const login = async (email: string, password: string) => {
    const res = await api.post('/v1/auth/login', { email, password });
    const token = res.data.token;
    if (token) localStorage.setItem('token', token);
    if (res.data.user) setUser(res.data.user);
    return res.data;
  };

  const register = async (payload: { name: string; email: string; password: string; role: string }) => {
    const res = await api.post('/v1/auth/register', payload);
    return res.data;
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    router.push('/login');
  };

  const isAuthorized = (roles: string[] = []) => {
    if (!user) return false;
    if (roles.length === 0) return true;
    return roles.includes(user.role);
  };

  return { user, loading, login, register, logout, isAuthorized };
}
