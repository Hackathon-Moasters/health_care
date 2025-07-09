import React from 'react';
import { Phone, Share2, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import Homepage from './Homepage'

export default function ArogyaVaultHomepage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white text-blue-900 font-sans">
      {/* Header */}
      <header className="w-full bg-white border-b border-blue-200 fixed top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="text-xl font-bold text-blue-800">Lvda Coders</div>

          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="hover:text-blue-600 transition" onClick={() => navigate('/home')}>Home</a>
            <a href="#" className="hover:text-blue-600 transition">AI Bot</a>
            <a href="#" className="hover:text-blue-600 transition">Certificates</a>
            <a href="#" className="hover:text-blue-600 transition">Appointment</a>
            <a href="#" className="hover:text-blue-600 transition">Video Call</a>
          </nav>

          <div className="flex items-center space-x-3">
            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">Sign Up</button>
            <Clock className="w-5 h-5 text-blue-700" />
            <Share2 className="w-5 h-5 text-blue-700" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-28 md:pt-32 pb-16 px-6 md:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left Side */}
          <div>
            <span className="text-sm text-blue-400 mb-2 inline-block">Home / Contact</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              <span className="bg-blue-600 text-white px-3 py-1 rounded inline-block mb-3">AROGYA VAULT:</span><br />
              Healthcare Management System <br />for Educational Institutes
            </h1>
            <p className="text-lg text-blue-700 mb-6">
              जीवितकावत्, योगत्; आयुर्वेदत्; विज्ञानस्य संगम।
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition">
              Start Your Health Journey
            </button>
          </div>

          {/* Right Side */}
          <div className="flex items-center justify-center relative">
            {/* Decorative Concentric Circles */}
            <div className="relative w-64 h-64">
              <div className="absolute inset-0 border-4 border-blue-100 rounded-full animate-ping-slow"></div>
              <div className="absolute inset-4 border-4 border-blue-200 rounded-full"></div>
              <div className="absolute inset-8 border-4 border-blue-400 rounded-full flex items-center justify-center">
                <div className="w-10 h-10 bg-blue-600 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer or bottom bar */}
      <footer className="text-center py-4 text-sm text-blue-500">
        © 2025 Arogya Vault | All rights reserved.
      </footer>
    </div>
  );
}