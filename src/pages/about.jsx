import React from 'react';
import { Users, Clock, Heart, Star, ChevronRight } from 'lucide-react';

const PrescriptoWebsite = () => {
  return (
    <div className="min-h-screen bg-white">


      {/* About Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">ABOUT US</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="flex justify-center space-x-4 mb-6">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <Users className="w-10 h-10 text-blue-600" />
                    </div>
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <Heart className="w-10 h-10 text-blue-600" />
                    </div>
                  </div>
                  <p className="text-blue-700 font-semibold">Healthcare Professionals</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div className="prose prose-lg">
                <p className="text-gray-700 leading-relaxed">
                  Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and 
                  efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling 
                  doctor appointments and managing their health records.
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance 
                  our platform, integrating the latest advancements to improve user experience and deliver superior 
                  service. Whether you're booking your first appointment or managing ongoing care, Prescripto is 
                  here to support you every step of the way.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">Our Vision</h3>
                <p className="text-gray-700">
                  Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to 
                  bridge the gap between patients and healthcare providers, making it easier for you to access the 
                  care you need, when you need it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">WHY CHOOSE US</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Efficiency */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-4">EFFICIENCY:</h3>
              <p className="text-gray-700">
                Streamlined appointment scheduling that fits into your busy lifestyle.
              </p>
            </div>

            {/* Convenience */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-4">CONVENIENCE:</h3>
              <p className="text-gray-700">
                Access to a network of trusted healthcare professionals in your area.
              </p>
            </div>

            {/* Personalization */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-blue-800 mb-4">PERSONALIZATION:</h3>
              <p className="text-gray-700">
                Tailored recommendations and reminders to help you stay on top of your health.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of patients who trust Prescripto for their healthcare needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
              Book Appointment
              <ChevronRight className="ml-2 w-5 h-5" />
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-blue-400 mb-4">Prescripto</h3>
              <p className="text-gray-300">
                Your trusted partner in healthcare management.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Book Appointments</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Health Records</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Prescriptions</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-blue-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-300">
                <p>📧 info@prescripto.com</p>
                <p>📞 +1 (555) 123-4567</p>
                <p>📍 123 Health St, Medical City</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Prescripto. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PrescriptoWebsite;