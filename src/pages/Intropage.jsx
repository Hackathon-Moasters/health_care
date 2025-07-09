// import React from 'react';
// import { Phone, Share2, Clock } from 'lucide-react';

// export default function ArogyaVaultHomepage() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 text-blue-900 font-sans relative overflow-hidden">
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0 opacity-20">
//         <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full animate-pulse"></div>
//         <div className="absolute top-40 right-20 w-24 h-24 bg-indigo-200 rounded-full animate-bounce" style={{animationDelay: '1s', animationDuration: '3s'}}></div>
//         <div className="absolute bottom-40 left-20 w-20 h-20 bg-cyan-200 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
//         <div className="absolute bottom-20 right-40 w-28 h-28 bg-blue-100 rounded-full animate-ping" style={{animationDelay: '0.5s', animationDuration: '4s'}}></div>
//       </div>
//       {/* Header */}
//       <header className="w-full bg-white/80 backdrop-blur-sm border-b border-blue-200 fixed top-0 z-50">
//         <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
//           <div className="text-xl font-bold text-blue-800">Arogya Vault by The Chill Coders</div>

//           <div className="flex items-center space-x-3">
//             <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">Sign Up</button>
//             <Clock className="w-5 h-5 text-blue-700" />
//             <Share2 className="w-5 h-5 text-blue-700" />
//           </div>
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="pt-28 md:pt-32 pb-16 px-6 md:px-10 relative z-10">
//         <div className="max-w-7xl mx-auto">
//           {/* Centered Content with Faded Circles Behind */}
//           <div className="relative flex flex-col items-center justify-center min-h-[60vh] text-center">
//             {/* Faded Concentric Circles Behind Content */}
//             <div className="absolute inset-0 flex items-center justify-center opacity-30">
//               <div className="relative w-80 h-80">
//                 <div className="absolute inset-0 border-2 border-blue-200 rounded-full animate-ping" style={{animationDuration: '3s'}}></div>
//                 <div className="absolute inset-8 border-2 border-blue-300 rounded-full animate-pulse" style={{animationDuration: '2s'}}></div>
//                 <div className="absolute inset-16 border-3 border-blue-400 rounded-full animate-ping" style={{animationDuration: '4s'}}></div>
//                 <div className="absolute inset-24 border-2 border-blue-500 rounded-full flex items-center justify-center">
//                   <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full animate-pulse"></div>
//                 </div>
//               </div>
//             </div>
            
//             {/* Main Content */}
//             <div className="relative z-10">
//               <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-wide">
//                 <span className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-4 py-2 rounded-lg inline-block mb-4 shadow-lg transform hover:scale-105 transition-transform duration-300">AROGYA VAULT</span><br />
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-indigo-900 font-serif">Healthcare Management System</span><br />
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-800 font-serif text-3xl md:text-4xl">for Educational Institutes</span>
//               </h1>
//               <p className="text-xl text-blue-700 mb-8 font-serif italic max-w-2xl">
//                 जीवितकावत्, योगत्; आयुर्वेदत्; विज्ञानस्य संगम।
//               </p>
//               <button className="bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-bold px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg text-lg">
//                 Start Your Health Journey
//               </button>
//             </div>
//           </div>
//         </div>
//       </main>

//       {/* Footer or bottom bar */}
//       <footer className="text-center py-4 text-sm text-blue-500">
//         © 2025 Arogya Vault | All rights reserved.
//       </footer>
//     </div>
//   );
// }
import React from 'react';
import { Clock, Share2 } from 'lucide-react';

export default function ArogyaVaultHomepage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white font-sans relative overflow-hidden">
      {/* Dynamic Background Animation */}
      <div className="absolute inset-0 opacity-30">
        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-cyan-400 rounded-full animate-ping"></div>
        <div className="absolute top-32 right-20 w-6 h-6 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-48 left-1/4 w-3 h-3 bg-indigo-400 rounded-full animate-bounce"></div>
        <div className="absolute top-64 right-1/3 w-5 h-5 bg-purple-400 rounded-full animate-ping"></div>
        
        <div className="absolute bottom-20 left-20 w-4 h-4 bg-teal-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 right-32 w-6 h-6 bg-cyan-400 rounded-full animate-bounce"></div>
        <div className="absolute bottom-48 left-1/3 w-3 h-3 bg-blue-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-64 right-1/4 w-5 h-5 bg-indigo-400 rounded-full animate-pulse"></div>
        
        <div className="absolute top-1/3 left-1/2 w-4 h-4 bg-emerald-400 rounded-full animate-bounce"></div>
        <div className="absolute bottom-1/3 right-1/2 w-6 h-6 bg-rose-400 rounded-full animate-ping"></div>
        
        {/* Geometric Shapes */}
        <div className="absolute top-16 right-16 w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-500 rotate-45 animate-spin" style={{animationDuration: '8s'}}></div>
        <div className="absolute bottom-16 left-16 w-6 h-6 bg-gradient-to-br from-purple-400 to-pink-500 rotate-45 animate-spin" style={{animationDuration: '6s'}}></div>
        
        {/* Medical Symbols */}
        <div className="absolute top-1/4 left-1/4 text-emerald-400 text-2xl animate-pulse opacity-40">+</div>
        <div className="absolute bottom-1/4 right-1/4 text-cyan-400 text-3xl animate-bounce opacity-30">+</div>
        <div className="absolute top-3/4 right-3/4 text-blue-400 text-2xl animate-pulse opacity-35">⚕</div>
        
        {/* Gradient Overlays */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-blue-500/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-indigo-500/10 to-transparent"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-purple-500/10 to-transparent"></div>
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-cyan-500/10 to-transparent"></div>
      </div>

      {/* Header */}
      <header className="w-full bg-white/10 backdrop-blur-lg border-b border-white/20 fixed top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Arogya Vault by The Chill Coders
          </div>
          <div className="flex items-center space-x-4">
            <button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
              Sign Up
            </button>
            <Clock className="w-5 h-5 text-cyan-400" />
            <Share2 className="w-5 h-5 text-cyan-400" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-32 pb-16 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Centered Content with Background Circles */}
          <div className="relative flex flex-col items-center justify-center min-h-[70vh] text-center">
            {/* Background Circle Animation */}
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <div className="relative">
                <div className="w-96 h-96 border-2 border-cyan-400 rounded-full animate-ping" style={{animationDuration: '4s'}}></div>
                <div className="absolute inset-8 w-80 h-80 border-2 border-blue-400 rounded-full animate-pulse" style={{animationDuration: '3s'}}></div>
                <div className="absolute inset-16 w-64 h-64 border-2 border-indigo-400 rounded-full animate-ping" style={{animationDuration: '5s'}}></div>
                <div className="absolute inset-24 w-48 h-48 border-2 border-purple-400 rounded-full animate-pulse" style={{animationDuration: '2s'}}></div>
                <div className="absolute inset-32 w-32 h-32 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full animate-pulse flex items-center justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-white to-cyan-200 rounded-full animate-spin" style={{animationDuration: '6s'}}></div>
                </div>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="relative z-10 max-w-4xl">
              <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 text-white px-6 py-3 rounded-2xl inline-block mb-6 shadow-2xl transform hover:scale-105 transition-all duration-300">
                  AROGYA VAULT
                </span>
                <br />
                <span className="bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent font-serif text-4xl md:text-5xl">
                  Healthcare Management System
                </span>
                <br />
                <span className="bg-gradient-to-r from-cyan-200 to-blue-300 bg-clip-text text-transparent font-serif text-3xl md:text-4xl">
                  for Educational Institutes
                </span>
              </h1>
              
              <p className="text-2xl text-cyan-200 mb-10 font-serif italic opacity-90">
                जीवितकावत्, योगत्; आयुर्वेदत्; विज्ञानस्य संगम।
              </p>
              
              <button className="bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-700 hover:from-cyan-600 hover:via-blue-700 hover:to-indigo-800 text-white font-bold px-12 py-5 rounded-full text-xl transition-all duration-300 transform hover:scale-110 hover:shadow-2xl shadow-cyan-500/25 border border-cyan-400/30">
                <span className="flex items-center space-x-2">
                  <span>Start Your Health Journey</span>
                  <span className="text-2xl">→</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-6 text-cyan-300/70 relative z-10">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent mb-4"></div>
        © 2025 Arogya Vault | All rights reserved.
      </footer>
    </div>
  );
}