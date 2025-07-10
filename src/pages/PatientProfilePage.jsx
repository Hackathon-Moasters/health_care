import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Calendar, Edit3, Menu, X, Heart, Shield, Clock, FileText, Star, Activity } from 'lucide-react';

const PrescriptoPatientProfile = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-lg border-b-4 border-blue-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">🏥</span>
              </div>
              <span className="text-2xl font-bold text-gray-800">Prescripto</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">HOME</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">FIND DOCTORS</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">APPOINTMENTS</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">HEALTH RECORDS</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">CONTACT</a>
            </nav>

            {/* Profile & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-white" />
              </div>
              
              {/* Mobile Menu Button */}
              <button 
                onClick={toggleMobileMenu}
                className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden pb-4 border-t border-gray-200">
              <nav className="flex flex-col space-y-2 pt-4">
                <a href="#" className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">HOME</a>
                <a href="#" className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">FIND DOCTORS</a>
                <a href="#" className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">APPOINTMENTS</a>
                <a href="#" className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">HEALTH RECORDS</a>
                <a href="#" className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">CONTACT</a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-blue-100">
          {/* Profile Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
              {/* Profile Image */}
              <div className="relative">
                <div className="w-32 h-32 sm:w-40 sm:h-40 bg-white rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                  <img 
                    src="/api/placeholder/160/160" 
                    alt="Sarah Johnson" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>

              {/* Profile Info */}
              <div className="text-center sm:text-left">
                <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">Sarah Johnson</h1>
                <p className="text-blue-100 text-lg">Patient ID: PT-2024-001</p>
                <div className="flex justify-center sm:justify-start mt-3 space-x-2">
                  <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Active Patient
                  </span>
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Insurance Verified
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Details */}
          <div className="p-6 sm:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Personal Information */}
              <div className="space-y-6">
                <div className="flex items-center space-x-2 mb-4">
                  <User className="w-6 h-6 text-blue-600" />
                  <h2 className="text-xl font-bold text-gray-800">PERSONAL INFORMATION</h2>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                    <Mail className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-600">Email Id:</p>
                      <p className="text-blue-600 font-medium">sarah.johnson@email.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                    <Phone className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-600">Phone:</p>
                      <p className="text-gray-800 font-medium">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                    <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-600">Address:</p>
                      <p className="text-gray-800 font-medium">123 Main Street<br />San Francisco, CA 94102</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Medical Information */}
              <div className="space-y-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Heart className="w-6 h-6 text-blue-600" />
                  <h2 className="text-xl font-bold text-gray-800">MEDICAL INFORMATION</h2>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                    <Calendar className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-600">Date of Birth:</p>
                      <p className="text-gray-800 font-medium">March 15, 1990</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                    <User className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-600">Gender:</p>
                      <p className="text-gray-800 font-medium">Female</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                    <Activity className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-600">Blood Type:</p>
                      <p className="text-gray-800 font-medium">A+</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                    <Shield className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-600">Insurance:</p>
                      <p className="text-gray-800 font-medium">Blue Cross Blue Shield</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="mt-8 bg-red-50 border border-red-200 rounded-lg p-6">
              <h3 className="text-lg font-bold text-red-800 mb-4 flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                Emergency Contact
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-red-600">Name:</p>
                  <p className="text-red-800 font-medium">Michael Johnson (Spouse)</p>
                </div>
                <div>
                  <p className="text-sm text-red-600">Phone:</p>
                  <p className="text-red-800 font-medium">+1 (555) 987-6543</p>
                </div>
              </div>
            </div>

            {/* Edit Button */}
            <div className="mt-8 flex justify-center">
              <button className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-3 rounded-full hover:from-blue-700 hover:to-blue-900 transition-all duration-300 transform hover:scale-105 shadow-lg">
                <Edit3 className="w-5 h-5" />
                <span className="font-medium">Edit Profile</span>
              </button>
            </div>
          </div>
        </div>

        {/* Additional Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {/* Appointment History */}
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-800">Appointments</h3>
              <Clock className="w-6 h-6 text-blue-600" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Total Visits</span>
                <span className="font-bold text-blue-600">24</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">This Year</span>
                <span className="font-bold text-green-600">8</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Upcoming</span>
                <span className="font-bold text-orange-600">2</span>
              </div>
            </div>
          </div>

          {/* Health Records */}
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-800">Health Records</h3>
              <FileText className="w-6 h-6 text-blue-600" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Lab Reports</span>
                <span className="font-bold text-blue-600">12</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Prescriptions</span>
                <span className="font-bold text-green-600">18</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">X-Rays</span>
                <span className="font-bold text-gray-800">3</span>
              </div>
            </div>
          </div>

          {/* Health Score */}
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-800">Health Score</h3>
              <Star className="w-6 h-6 text-blue-600" />
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">85</div>
              <p className="text-gray-600 text-sm">Good Health</p>
              <div className="mt-3 w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full w-4/5"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-2xl shadow-lg border border-blue-100 p-6 mt-8">
          <h3 className="text-xl font-bold text-gray-800 mb-6">Recent Activity</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-gray-800 font-medium">Appointment completed with Dr. Smith</p>
                <p className="text-gray-600 text-sm">July 8, 2025 - 2:30 PM</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-gray-800 font-medium">New lab results uploaded</p>
                <p className="text-gray-600 text-sm">July 5, 2025 - 10:15 AM</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg">
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              <div className="flex-1">
                <p className="text-gray-800 font-medium">Prescription renewed</p>
                <p className="text-gray-600 text-sm">July 3, 2025 - 9:00 AM</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">🏥</span>
              </div>
              <span className="text-xl font-bold">Prescripto</span>
            </div>
            <p className="text-gray-400">Your trusted healthcare partner</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PrescriptoPatientProfile;