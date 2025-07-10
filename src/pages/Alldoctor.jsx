import React, { useState } from 'react';
import { Menu, X, User, Calendar, Clock, MapPin, Star } from 'lucide-react';

const PrescriptoApp = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedSpecialty, setSelectedSpecialty] = useState('');

  const specialties = [
    'General physician',
    'Gynecologist',
    'Dermatologist',
    'Pediatricians',
    'Neurologist',
    'Gastroenterologist'
  ];

  const doctors = [
    {
      id: 1,
      name: 'Dr. Richard James',
      specialty: 'General physician',
      image: '/api/placeholder/300/300',
      available: true,
      rating: 4.8,
      experience: '8 years',
      location: 'New York'
    },
    {
      id: 2,
      name: 'Dr. Emily Larson',
      specialty: 'Gynecologist',
      image: '/api/placeholder/300/300',
      available: true,
      rating: 4.9,
      experience: '12 years',
      location: 'Los Angeles'
    },
    {
      id: 3,
      name: 'Dr. Sarah Patel',
      specialty: 'Dermatologist',
      image: '/api/placeholder/300/300',
      available: true,
      rating: 4.7,
      experience: '10 years',
      location: 'Chicago'
    },
    {
      id: 4,
      name: 'Dr. Christopher Lee',
      specialty: 'Pediatricians',
      image: '/api/placeholder/300/300',
      available: true,
      rating: 4.9,
      experience: '15 years',
      location: 'Houston'
    },
    {
      id: 5,
      name: 'Dr. Maria Rodriguez',
      specialty: 'Neurologist',
      image: '/api/placeholder/300/300',
      available: true,
      rating: 4.8,
      experience: '11 years',
      location: 'Miami'
    },
    {
      id: 6,
      name: 'Dr. James Wilson',
      specialty: 'Gastroenterologist',
      image: '/api/placeholder/300/300',
      available: true,
      rating: 4.6,
      experience: '9 years',
      location: 'Seattle'
    },
    {
      id: 7,
      name: 'Dr. Lisa Chen',
      specialty: 'General physician',
      image: '/api/placeholder/300/300',
      available: true,
      rating: 4.7,
      experience: '7 years',
      location: 'San Francisco'
    },
    {
      id: 8,
      name: 'Dr. Michael Brown',
      specialty: 'Dermatologist',
      image: '/api/placeholder/300/300',
      available: true,
      rating: 4.8,
      experience: '13 years',
      location: 'Boston'
    }
  ];

  const filteredDoctors = selectedSpecialty 
    ? doctors.filter(doctor => doctor.specialty === selectedSpecialty)
    : doctors;

  const DoctorCard = ({ doctor }) => (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100">
      <div className="relative">
        <div className="w-full h-64 bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
          <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-lg">
            <User className="w-16 h-16 text-blue-600" />
          </div>
        </div>
        {doctor.available && (
          <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
            <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
            Available
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{doctor.name}</h3>
        <p className="text-blue-600 font-medium mb-4">{doctor.specialty}</p>
        
        <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 mr-1" />
            <span className="font-medium">{doctor.rating}</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            <span>{doctor.experience}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-1" />
            <span>{doctor.location}</span>
          </div>
        </div>
        
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center">
          <Calendar className="w-4 h-4 mr-2" />
          Book Appointment
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <span className="text-2xl font-bold text-gray-900">Prescripto</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">HOME</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">ALL DOCTORS</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">ABOUT</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">CONTACT</a>
            </nav>

            {/* Create Account Button */}
            <div className="hidden md:block">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-full transition-colors duration-200">
                Create account
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-2 space-y-2">
              <a href="#" className="block py-2 text-gray-700 hover:text-blue-600 font-medium">HOME</a>
              <a href="#" className="block py-2 text-gray-700 hover:text-blue-600 font-medium">ALL DOCTORS</a>
              <a href="#" className="block py-2 text-gray-700 hover:text-blue-600 font-medium">ABOUT</a>
              <a href="#" className="block py-2 text-gray-700 hover:text-blue-600 font-medium">CONTACT</a>
              <button className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full">
                Create account
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Browse through the doctors specialist.</h2>
              <div className="space-y-2">
                <button
                  onClick={() => setSelectedSpecialty('')}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-colors duration-200 ${
                    selectedSpecialty === '' 
                      ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600' 
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  All Specialists
                </button>
                {specialties.map((specialty) => (
                  <button
                    key={specialty}
                    onClick={() => setSelectedSpecialty(specialty)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors duration-200 ${
                      selectedSpecialty === specialty 
                        ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600' 
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {specialty}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Doctors Grid */}
          <div className="flex-1">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                {selectedSpecialty ? `${selectedSpecialty} Doctors` : 'All Doctors'}
              </h1>
              <p className="text-gray-600">
                {filteredDoctors.length} doctor{filteredDoctors.length !== 1 ? 's' : ''} available
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredDoctors.map((doctor) => (
                <DoctorCard key={doctor.id} doctor={doctor} />
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-xl">P</span>
                </div>
                <span className="text-2xl font-bold text-gray-900">Prescripto</span>
              </div>
              <p className="text-gray-600 mb-4">
                Connect with trusted healthcare professionals and book appointments easily. 
                Your health, our priority.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
              <div className="space-y-2">
                <a href="#" className="block text-gray-600 hover:text-blue-600 transition-colors">Home</a>
                <a href="#" className="block text-gray-600 hover:text-blue-600 transition-colors">About</a>
                <a href="#" className="block text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
                <a href="#" className="block text-gray-600 hover:text-blue-600 transition-colors">Privacy Policy</a>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Contact</h3>
              <div className="space-y-2 text-gray-600">
                <p>+1 (555) 123-4567</p>
                <p>info@prescripto.com</p>
                <p>123 Healthcare St, Medical City, MC 12345</p>
              </div>
            </div>
          </div>
          
          <div className="border-t pt-8 mt-8 text-center text-gray-600">
            <p>&copy; 2024 Prescripto. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PrescriptoApp;