import React, { useState } from 'react';
import { Menu, X, User, Calendar, Clock, MapPin, Star, Search, Filter, Heart, Shield, Award, Users } from 'lucide-react';

const PrescriptoApp = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedSpecialty, setSelectedSpecialty] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('grid');

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
      reviews: 245,
      experience: '8 years',
      location: 'New York',
      price: '$150',
      nextAvailable: 'Today',
      verified: true
    },
    {
      id: 2,
      name: 'Dr. Emily Larson',
      specialty: 'Gynecologist',
      image: '/api/placeholder/300/300',
      available: true,
      rating: 4.9,
      reviews: 189,
      experience: '12 years',
      location: 'Los Angeles',
      price: '$200',
      nextAvailable: 'Tomorrow',
      verified: true
    },
    {
      id: 3,
      name: 'Dr. Sarah Patel',
      specialty: 'Dermatologist',
      image: '/api/placeholder/300/300',
      available: true,
      rating: 4.7,
      reviews: 156,
      experience: '10 years',
      location: 'Chicago',
      price: '$180',
      nextAvailable: 'Today',
      verified: true
    },
    {
      id: 4,
      name: 'Dr. Christopher Lee',
      specialty: 'Pediatricians',
      image: '/api/placeholder/300/300',
      available: true,
      rating: 4.9,
      reviews: 298,
      experience: '15 years',
      location: 'Houston',
      price: '$160',
      nextAvailable: '2 days',
      verified: true
    },
    {
      id: 5,
      name: 'Dr. Maria Rodriguez',
      specialty: 'Neurologist',
      image: '/api/placeholder/300/300',
      available: true,
      rating: 4.8,
      reviews: 167,
      experience: '11 years',
      location: 'Miami',
      price: '$250',
      nextAvailable: 'Today',
      verified: true
    },
    {
      id: 6,
      name: 'Dr. James Wilson',
      specialty: 'Gastroenterologist',
      image: '/api/placeholder/300/300',
      available: true,
      rating: 4.6,
      reviews: 134,
      experience: '9 years',
      location: 'Seattle',
      price: '$220',
      nextAvailable: 'Tomorrow',
      verified: true
    },
    {
      id: 7,
      name: 'Dr. Lisa Chen',
      specialty: 'General physician',
      image: '/api/placeholder/300/300',
      available: true,
      rating: 4.7,
      reviews: 201,
      experience: '7 years',
      location: 'San Francisco',
      price: '$140',
      nextAvailable: 'Today',
      verified: true
    },
    {
      id: 8,
      name: 'Dr. Michael Brown',
      specialty: 'Dermatologist',
      image: '/api/placeholder/300/300',
      available: true,
      rating: 4.8,
      reviews: 178,
      experience: '13 years',
      location: 'Boston',
      price: '$190',
      nextAvailable: '3 days',
      verified: true
    }
  ];

  const filteredDoctors = doctors.filter(doctor => {
    const matchesSpecialty = selectedSpecialty === '' || doctor.specialty === selectedSpecialty;
    const matchesSearch = doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSpecialty && matchesSearch;
  });

  const DoctorCard = ({ doctor }) => (
    <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200">
      <div className="relative">
        <div className="w-full h-48 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center">
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
            <User className="w-12 h-12 text-blue-600" />
          </div>
        </div>
        
        {doctor.available && (
          <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center backdrop-blur-sm">
            <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
            Available
          </div>
        )}
        
        {doctor.verified && (
          <div className="absolute top-4 right-4 bg-blue-500 text-white p-2 rounded-full">
            <Shield className="w-4 h-4" />
          </div>
        )}
        
        <button className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-sm hover:bg-white text-gray-600 hover:text-red-500 p-2 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100">
          <Heart className="w-4 h-4" />
        </button>
      </div>
      
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">{doctor.name}</h3>
            <p className="text-blue-600 font-medium text-sm">{doctor.specialty}</p>
          </div>
          <div className="text-right">
            <p className="text-xl font-bold text-gray-900">{doctor.price}</p>
            <p className="text-xs text-gray-500">per session</p>
          </div>
        </div>
        
        <div className="flex items-center mb-4">
          <div className="flex items-center mr-4">
            <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
            <span className="font-medium text-sm">{doctor.rating}</span>
            <span className="text-gray-500 text-sm ml-1">({doctor.reviews})</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Clock className="w-4 h-4 mr-1" />
            <span>{doctor.experience}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-1" />
            <span>{doctor.location}</span>
          </div>
          <div className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
            Next: {doctor.nextAvailable}
          </div>
        </div>
        
        <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium py-3 px-4 rounded-xl transition-all duration-200 flex items-center justify-center group-hover:shadow-lg">
          <Calendar className="w-4 h-4 mr-2" />
          Book Appointment
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mr-3 shadow-lg">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                Prescripto
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative group">
                HOME
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative group">
                ALL DOCTORS
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative group">
                ABOUT
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative group">
                CONTACT
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </nav>

            {/* Create Account Button */}
            <div className="hidden md:block">
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium py-2 px-6 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl">
                Create account
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100">
            <div className="px-4 py-4 space-y-2">
              <a href="#" className="block py-3 px-4 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-medium transition-all">HOME</a>
              <a href="#" className="block py-3 px-4 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-medium transition-all">ALL DOCTORS</a>
              <a href="#" className="block py-3 px-4 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-medium transition-all">ABOUT</a>
              <a href="#" className="block py-3 px-4 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-medium transition-all">CONTACT</a>
              <button className="w-full mt-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium py-3 px-4 rounded-xl transition-all shadow-lg">
                Create account
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Find Your Perfect Doctor
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Connect with verified healthcare professionals and book appointments instantly
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <div className="flex items-center bg-white rounded-2xl shadow-lg overflow-hidden">
                <Search className="w-6 h-6 text-gray-400 ml-4" />
                <input
                  type="text"
                  placeholder="Search doctors, specialties, or locations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 px-4 py-4 text-gray-700 focus:outline-none"
                />
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 transition-colors">
                  <Search className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <p className="text-2xl font-bold text-gray-900">500+</p>
              <p className="text-gray-600">Verified Doctors</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                <Calendar className="w-6 h-6 text-green-600" />
              </div>
              <p className="text-2xl font-bold text-gray-900">10k+</p>
              <p className="text-gray-600">Appointments</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                <Star className="w-6 h-6 text-yellow-600" />
              </div>
              <p className="text-2xl font-bold text-gray-900">4.9</p>
              <p className="text-gray-600">Average Rating</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                <Award className="w-6 h-6 text-purple-600" />
              </div>
              <p className="text-2xl font-bold text-gray-900">50+</p>
              <p className="text-gray-600">Specialties</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-72 flex-shrink-0">
            <div className="bg-white rounded-2xl shadow-sm p-6 sticky top-32 border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-900">Filter by Specialty</h2>
                <Filter className="w-5 h-5 text-gray-400" />
              </div>
              <div className="space-y-1">
                <button
                  onClick={() => setSelectedSpecialty('')}
                  className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-200 ${
                    selectedSpecialty === '' 
                      ? 'bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 shadow-sm border-l-4 border-blue-600' 
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  All Specialists
                </button>
                {specialties.map((specialty) => (
                  <button
                    key={specialty}
                    onClick={() => setSelectedSpecialty(specialty)}
                    className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-200 ${
                      selectedSpecialty === specialty 
                        ? 'bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 shadow-sm border-l-4 border-blue-600' 
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
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {selectedSpecialty ? `${selectedSpecialty} Doctors` : 'All Doctors'}
                  </h2>
                  <p className="text-gray-600">
                    {filteredDoctors.length} doctor{filteredDoctors.length !== 1 ? 's' : ''} available
                  </p>
                </div>
                
                <div className="flex items-center space-x-2">
                  <button className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors text-sm">
                    Sort by Rating
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
              {filteredDoctors.map((doctor) => (
                <DoctorCard key={doctor.id} doctor={doctor} />
              ))}
            </div>

            {filteredDoctors.length === 0 && (
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No doctors found</h3>
                <p className="text-gray-600">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mr-3 shadow-lg">
                  <span className="text-white font-bold text-xl">P</span>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                  Prescripto
                </span>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Connect with trusted healthcare professionals and book appointments easily. 
                Your health, our priority - providing quality care when you need it most.
              </p>
              <div className="flex space-x-4">
                <button className="w-10 h-10 bg-blue-100 hover:bg-blue-200 rounded-full flex items-center justify-center transition-colors">
                  <span className="text-blue-600 font-semibold">f</span>
                </button>
                <button className="w-10 h-10 bg-blue-100 hover:bg-blue-200 rounded-full flex items-center justify-center transition-colors">
                  <span className="text-blue-600 font-semibold">t</span>
                </button>
                <button className="w-10 h-10 bg-blue-100 hover:bg-blue-200 rounded-full flex items-center justify-center transition-colors">
                  <span className="text-blue-600 font-semibold">in</span>
                </button>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
              <div className="space-y-3">
                <a href="#" className="block text-gray-600 hover:text-blue-600 transition-colors">Home</a>
                <a href="#" className="block text-gray-600 hover:text-blue-600 transition-colors">About</a>
                <a href="#" className="block text-gray-600 hover:text-blue-600 transition-colors">Doctors</a>
                <a href="#" className="block text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
                <a href="#" className="block text-gray-600 hover:text-blue-600 transition-colors">Privacy Policy</a>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Get in Touch</h3>
              <div className="space-y-3 text-gray-600">
                <p className="flex items-center">
                  <span className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-blue-600 text-xs">📞</span>
                  </span>
                  +1 (555) 123-4567
                </p>
                <p className="flex items-center">
                  <span className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-blue-600 text-xs">✉️</span>
                  </span>
                  info@prescripto.com
                </p>
                <p className="flex items-start">
                  <span className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-blue-600 text-xs">📍</span>
                  </span>
                  123 Healthcare St, Medical City, MC 12345
                </p>
              </div>
            </div>
          </div>
          
          <div className="border-t pt-8 mt-8 text-center text-gray-600">
            <p>&copy; 2024 Prescripto. All rights reserved. Made with ❤️ for better healthcare.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PrescriptoApp; 