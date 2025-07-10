import React from 'react';
import { Search, ChevronRight, Users, Calendar, Shield, Star } from 'lucide-react';

export default function PrescriptoWebsite() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                <span className="ml-2 text-xl font-bold text-gray-900">Prescripto</span>
              </div>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-900 hover:text-blue-600 font-medium">HOME</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">ALL DOCTORS</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">ABOUT</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">CONTACT</a>
            </nav>
            
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
              Create account
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Book Appointment<br />
                With Trusted Doctors
              </h1>
              
              <div className="flex items-center mb-6">
                <div className="flex -space-x-2">
                  <img className="w-10 h-10 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/men/1.jpg" alt="Doctor" />
                  <img className="w-10 h-10 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/women/2.jpg" alt="Doctor" />
                  <img className="w-10 h-10 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/men/3.jpg" alt="Doctor" />
                </div>
                <p className="ml-4 text-blue-100">
                  Simply browse through our extensive list of trusted doctors,<br />
                  schedule your appointment hassle-free.
                </p>
              </div>
              
              <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors flex items-center">
                Book appointment
                <ChevronRight className="ml-2 w-4 h-4" />
              </button>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-4">
                  <img className="w-full h-48 object-cover rounded-lg shadow-lg" src="https://randomuser.me/api/portraits/men/10.jpg" alt="Doctor" />
                  <img className="w-full h-32 object-cover rounded-lg shadow-lg" src="https://randomuser.me/api/portraits/women/11.jpg" alt="Doctor" />
                  <img className="w-full h-28 object-cover rounded-lg shadow-lg" src="https://randomuser.me/api/portraits/men/12.jpg" alt="Doctor" />
                </div>
                <div className="space-y-4 mt-8">
                  <img className="w-full h-64 object-cover rounded-lg shadow-lg" src="https://randomuser.me/api/portraits/women/13.jpg" alt="Doctor" />
                  <img className="w-full h-24 object-cover rounded-lg shadow-lg" src="https://randomuser.me/api/portraits/men/14.jpg" alt="Doctor" />
                  <img className="w-full h-32 object-cover rounded-lg shadow-lg" src="https://randomuser.me/api/portraits/women/15.jpg" alt="Doctor" />
                  <img className="w-full h-24 object-cover rounded-lg shadow-lg" src="https://randomuser.me/api/portraits/men/16.jpg" alt="Doctor" />
                </div>
                <div className="space-y-4">
                  <img className="w-full h-40 object-cover rounded-lg shadow-lg" src="https://randomuser.me/api/portraits/women/17.jpg" alt="Doctor" />
                  <img className="w-full h-48 object-cover rounded-lg shadow-lg" src="https://randomuser.me/api/portraits/men/18.jpg" alt="Doctor" />
                  <img className="w-full h-28 object-cover rounded-lg shadow-lg" src="https://randomuser.me/api/portraits/women/19.jpg" alt="Doctor" />
                  <img className="w-full h-32 object-cover rounded-lg shadow-lg" src="https://randomuser.me/api/portraits/men/20.jpg" alt="Doctor" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Find by Specialty Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Find by Specialty</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Simply browse through our extensive list of trusted doctors.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: 'General physician', icon: '👨‍⚕️' },
              { name: 'Gynecologist', icon: '👩‍⚕️' },
              { name: 'Dermatologist', icon: '🔬' },
              { name: 'Pediatricians', icon: '👶' },
              { name: 'Neurologist', icon: '🧠' },
              { name: 'Gastroenterologist', icon: '🫀' },
            ].map((specialty) => (
              <div key={specialty.name} className="text-center p-6 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer">
                <div className="text-4xl mb-3">{specialty.icon}</div>
                <h3 className="text-sm font-medium text-gray-900">{specialty.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Doctors Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Top Doctors to Book</h2>
            <p className="text-gray-600">Simply browse through our extensive list of trusted doctors.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: 'Dr. Richard James', specialty: 'General physician', image: 'https://randomuser.me/api/portraits/men/30.jpg' },
              { name: 'Dr. Emily Walker', specialty: 'Gynecologist', image: 'https://randomuser.me/api/portraits/women/31.jpg' },
              { name: 'Dr. Sarah Patel', specialty: 'Dermatologist', image: 'https://randomuser.me/api/portraits/women/32.jpg' },
              { name: 'Dr. Christopher Lee', specialty: 'Pediatricians', image: 'https://randomuser.me/api/portraits/men/33.jpg' },
            ].map((doctor) => (
              <div key={doctor.name} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <img className="w-full h-48 object-cover" src={doctor.image} alt={doctor.name} />
                <div className="p-4">
                  <div className="flex items-center mb-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-sm text-green-600">Available</span>
                  </div>
                  <h3 className="font-semibold text-gray-900">{doctor.name}</h3>
                  <p className="text-sm text-gray-600">{doctor.specialty}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors">
              more
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                <span className="ml-2 text-xl font-bold">Prescripto</span>
              </div>
              <p className="text-gray-400">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">COMPANY</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">About us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Privacy policy</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">GET IN TOUCH</h3>
              <ul className="space-y-2 text-gray-400">
                <li>+1-212-456-7890</li>
                <li>greatstackdev@gmail.com</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>Copyright 2024 @ Prescripto - All Right Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}