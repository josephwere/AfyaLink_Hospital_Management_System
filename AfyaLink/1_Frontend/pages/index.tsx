import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 text-gray-800">
      <header className="flex justify-between items-center px-8 py-5 shadow">
        <h1 className="text-2xl font-bold text-gold-600">AfyaLink</h1>
        <nav className="space-x-4">
          <Link href="/login">Login</Link>
          <Link href="/register">Register</Link>
          <Link href="/support">Support</Link>
        </nav>
      </header>

      <main className="text-center py-24 px-6">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">Smart Hospital Management for a Healthier Africa 🌍</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">AfyaLink connects patients, doctors, and hospitals seamlessly through one secure, intelligent health ecosystem.</p>
        <Link href="/register" className="px-6 py-3 bg-gold-600 text-white rounded-xl shadow hover:bg-gold-700 transition">Get Started</Link>
      </main>

      <footer className="text-center py-4 text-gray-500 text-sm">© {new Date().getFullYear()} AfyaLink — GoldEdge Labs</footer>
    </div>
  );
}
