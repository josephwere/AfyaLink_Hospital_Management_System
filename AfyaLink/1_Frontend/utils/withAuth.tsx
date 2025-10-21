import React from 'react';
import { useAuth } from '../hooks/useAuth';
import Router from 'next/router';

export default function withAuth<P>(WrappedComponent: React.ComponentType<P>, roles: string[] = []) {
  return function Protected(props: P) {
    const { user, loading, isAuthorized } = useAuth() as any;

    if (loading) return <div className="p-6">Loading...</div>;
    if (!user) {
      if (typeof window !== 'undefined') Router.replace('/login');
      return null;
    }
    if (roles.length && !isAuthorized(roles)) {
      if (typeof window !== 'undefined') Router.replace('/dashboard');
      return null;
    }
    return <WrappedComponent {...props} />;
  };
}
