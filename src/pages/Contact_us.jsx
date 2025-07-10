import React, { useState } from 'react';
import { MapPin, Phone, Mail, Users, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ModernContactSection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-white/20 mb-6">
            <Sparkles className="w-4 h-4 text-indigo-600" />
            <span className="text-sm font-medium text-gray-600">Get in Touch</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent mb-4">
            CONTACT US
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to transform your healthcare experience? We're here to help.
          </p>
          {/* Example navigation links using Link */}
          <div className="flex justify-center gap-6 mt-8">
            <Link to="/" className="text-blue-600 hover:underline font-semibold">Home</Link>
            <Link to="/about" className="text-blue-600 hover:underline font-semibold">About</Link>
            <Link to="/login" className="text-blue-600 hover:underline font-semibold">Login</Link>
            <Link to="/booking" className="text-blue-600 hover:underline font-semibold">Book Slot</Link>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=800&q=80" 
                alt="Medical consultation" 
                className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              
              {/* Floating elements */}
              <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700">Available 24/7</span>
                </div>
              </div>
              
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-blue-600" />
                  <span className="text-sm font-medium text-gray-700">Expert Team</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Office Card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">OUR OFFICE</h2>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold text-gray-900">00000 Willms Station</p>
                    <p className="text-gray-600">Suite 000, Washington, USA</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200">
                  <Phone className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <a href="tel:(000)000-0000" className="font-medium text-gray-900 hover:text-blue-600 transition-colors">
                    (000) 000-0000
                  </a>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200">
                  <Mail className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <a href="mailto:greatstackdev@gmail.com" className="font-medium text-gray-900 hover:text-blue-600 transition-colors">
                    greatstackdev@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Careers Card */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 shadow-xl text-white overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
              
              <div className="relative">
                <h2 className="text-2xl font-bold mb-4">CAREERS AT PRESCRIPTO</h2>
                <p className="text-blue-100 mb-8 text-lg">
                  Learn more about our teams and job openings. Join our mission to revolutionize healthcare.
                </p>
                
                <button 
                  className="group inline-flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-50 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <span>Explore Jobs</span>
                  <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
                <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-sm text-gray-600">Doctors</div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
                <div className="text-3xl font-bold text-indigo-600 mb-2">10K+</div>
                <div className="text-sm text-gray-600">Patients</div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
                <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}