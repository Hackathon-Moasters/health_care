import React, { useState } from 'react';

import { Menu, X } from 'lucide-react';
import Login from '../../pages/Login';
import { useNavigate } from 'react-router-dom';


const Header = () => {
      const [isMenuOpen, setIsMenuOpen] = useState(false);
      const Navigate = useNavigate()
  return (
    <div>
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
              <a href="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative group">
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
              <button onClick={()=>Navigate('/login')} className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium py-2 px-6 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl">
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
    </div>
  )
}

export default Header
