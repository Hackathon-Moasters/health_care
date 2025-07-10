import React, { useState } from 'react';
import { ArrowLeft, Shield, Info, Calendar, Clock } from 'lucide-react';

export default function DoctorBookingPage() {
  const [selectedDate, setSelectedDate] = useState('WED');
  const [selectedTime, setSelectedTime] = useState('');

  const weekDays = [
    { day: 'WED', date: 4, active: true },
    { day: 'THU', date: 5, active: false },
    { day: 'FRI', date: 6, active: false },
    { day: 'SAT', date: 7, active: false },
    { day: 'SUN', date: 8, active: false },
    { day: 'MON', date: 9, active: false },
    { day: 'TUE', date: 10, active: false },
  ];

  const timeSlots = [
    '05:00 pm', '06:00 pm', '06:30 pm', '07:00 pm', 
    '07:30 pm', '08:00 pm', '08:30 pm'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 mr-2 sm:mr-4 cursor-pointer hover:text-blue-600" />
              <div className="flex items-center">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-sm"></div>
                </div>
                <span className="ml-2 text-lg sm:text-xl font-bold text-gray-900">Prescripto</span>
              </div>
            </div>
            
            <nav className="hidden lg:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">HOME</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">ALL DOCTORS</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">ABOUT</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">CONTACT</a>
            </nav>
            
            <button className="bg-blue-600 text-white px-3 py-1.5 sm:px-6 sm:py-2 rounded-full hover:bg-blue-700 transition-colors font-medium text-sm sm:text-base">
              <span className="hidden sm:inline">Create account</span>
              <span className="sm:hidden">Join</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Doctor Profile Card */}
          <div className="xl:col-span-1 order-2 xl:order-1">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 sm:p-8 text-center">
                <img 
                  src="https://randomuser.me/api/portraits/men/40.jpg" 
                  alt="Dr. Richard James" 
                  className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mx-auto mb-4 border-4 border-white shadow-lg object-cover"
                />
              </div>
              <div className="p-4 sm:p-6">
                <div className="flex items-center justify-center mb-2">
                  <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Dr. Richard James</h1>
                  <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 ml-2" />
                </div>
                <p className="text-gray-600 text-center mb-4 text-sm sm:text-base">MBBS - General physician</p>
                <div className="flex items-center justify-center text-sm text-gray-500 mb-6">
                  <span>4 Years</span>
                </div>
                
                <div className="border-t pt-6">
                  <div className="flex items-start mb-4">
                    <Info className="w-5 h-5 text-gray-400 mt-0.5 mr-2 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">About</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, 
                        early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering 
                        comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment 
                        strategies.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-base sm:text-lg font-semibold text-gray-900">
                      Appointment fee: <span className="text-blue-600">$50</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Section */}
          <div className="xl:col-span-2 order-1 xl:order-2">
            <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8">Booking slots</h2>
              
              {/* Date Selection */}
              <div className="mb-6 sm:mb-8">
                <div className="flex space-x-2 overflow-x-auto pb-4 scrollbar-hide">
                  {weekDays.map((day) => (
                    <button
                      key={day.day}
                      onClick={() => setSelectedDate(day.day)}
                      className={`flex-shrink-0 w-14 h-16 sm:w-16 sm:h-20 rounded-full flex flex-col items-center justify-center transition-all duration-300 ${
                        selectedDate === day.day
                          ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      <span className="text-xs font-medium">{day.day}</span>
                      <span className="text-sm sm:text-lg font-bold">{day.date}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Selection */}
              <div className="mb-6 sm:mb-8">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-7 gap-2 sm:gap-3">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`px-2 py-2 sm:px-4 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                        selectedTime === time
                          ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:scale-105'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              {/* Book Appointment Button */}
              <div className="text-center">
                <button className="w-full sm:w-auto bg-blue-600 text-white px-8 sm:px-12 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Book an appointment
                </button>
              </div>

              {/* Additional Info */}
              <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-blue-50 rounded-xl">
                <div className="flex items-center text-blue-800 mb-2">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  <span className="font-semibold text-sm sm:text-base">Next Available</span>
                </div>
                <p className="text-blue-700 text-xs sm:text-sm">
                  Dr. Richard James has availability today at 5:00 PM. Book now to secure your appointment.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Doctors Section */}
        <div className="mt-8 sm:mt-12">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Related Doctors</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {[
              { name: 'Dr. Sarah Wilson', specialty: 'General physician', image: 'https://randomuser.me/api/portraits/women/44.jpg' },
              { name: 'Dr. Michael Chen', specialty: 'General physician', image: 'https://randomuser.me/api/portraits/men/45.jpg' },
              { name: 'Dr. Lisa Anderson', specialty: 'General physician', image: 'https://randomuser.me/api/portraits/women/46.jpg' },
              { name: 'Dr. James Miller', specialty: 'General physician', image: 'https://randomuser.me/api/portraits/men/47.jpg' },
            ].map((doctor, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <img className="w-full h-40 sm:h-48 object-cover" src={doctor.image} alt={doctor.name} />
                <div className="p-3 sm:p-4">
                  <div className="flex items-center mb-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-xs sm:text-sm text-green-600 font-medium">Available</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 text-sm sm:text-base">{doctor.name}</h4>
                  <p className="text-xs sm:text-sm text-gray-600">{doctor.specialty}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}