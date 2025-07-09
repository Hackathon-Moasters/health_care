import React from 'react';
import { Phone, Share2, Clock } from 'lucide-react';

export default function ArogyaVaultHomepage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 text-blue-900 font-sans relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-indigo-200 rounded-full animate-bounce" style={{animationDelay: '1s', animationDuration: '3s'}}></div>
        <div className="absolute bottom-40 left-20 w-20 h-20 bg-cyan-200 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-40 w-28 h-28 bg-blue-100 rounded-full animate-ping" style={{animationDelay: '0.5s', animationDuration: '4s'}}></div>
      </div>
      {/* Header */}
      <header className="w-full bg-white/80 backdrop-blur-sm border-b border-blue-200 fixed top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="text-xl font-bold text-blue-800">Arogya Vault by The Chill Coders</div>

          <div className="flex items-center space-x-3">
            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">Sign Up</button>
            <Clock className="w-5 h-5 text-blue-700" />
            <Share2 className="w-5 h-5 text-blue-700" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-28 md:pt-32 pb-16 px-6 md:px-10 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Centered Content with Faded Circles Behind */}
          <div className="relative flex flex-col items-center justify-center min-h-[60vh] text-center">
            {/* Faded Concentric Circles Behind Content */}
            <div className="absolute inset-0 flex items-center justify-center opacity-30">
              <div className="relative w-80 h-80">
                <div className="absolute inset-0 border-2 border-blue-200 rounded-full animate-ping" style={{animationDuration: '3s'}}></div>
                <div className="absolute inset-8 border-2 border-blue-300 rounded-full animate-pulse" style={{animationDuration: '2s'}}></div>
                <div className="absolute inset-16 border-3 border-blue-400 rounded-full animate-ping" style={{animationDuration: '4s'}}></div>
                <div className="absolute inset-24 border-2 border-blue-500 rounded-full flex items-center justify-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="relative z-10">
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-wide">
                <span className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-4 py-2 rounded-lg inline-block mb-4 shadow-lg transform hover:scale-105 transition-transform duration-300">AROGYA VAULT</span><br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-indigo-900 font-serif">Healthcare Management System</span><br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-800 font-serif text-3xl md:text-4xl">for Educational Institutes</span>
              </h1>
              <p className="text-xl text-blue-700 mb-8 font-serif italic max-w-2xl">
                जीवितकावत्, योगत्; आयुर्वेदत्; विज्ञानस्य संगम।
              </p>
              <button className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-bold px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg text-lg">
                Start Your Health Journey
              </button>
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