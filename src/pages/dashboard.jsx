import React, { useState } from 'react';
import { Search, Bell, Upload, FileText, Calendar, Bot, Plus, Menu, X } from 'lucide-react';

const StudentHealthDashboard = () => {
  const [activeLink, setActiveLink] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsSidebarOpen(false);
  };

  const sidebarLinks = [
    { id: 'dashboard', label: 'Dashboard', section: 'main' },
    { id: 'rewards', label: 'Rewards', section: 'main' },
    { id: 'appointments', label: 'Appointments', section: 'main' },
    { id: 'health-records', label: 'Health Records', section: 'main' },
    { id: 'certificate-generator', label: 'Certificate Generator', section: 'main' },
    { id: 'leave-concern', label: 'Leave Concern', section: 'ai' },
    { id: 'health-record-concern', label: 'Health Record Concern', section: 'ai' },
    { id: 'ai-diagnosis', label: 'AI Diagnosis', section: 'ai' },
  ];

  const dashboardCards = [
    {
      id: 'health-records',
      title: 'Health Records',
      icon: FileText,
      buttonText: 'Upload Health Record',
      buttonColor: 'bg-gradient-to-r from-blue-500 to-blue-400',
      cardColor: 'bg-gradient-to-br from-blue-50 to-blue-100',
      iconBg: 'bg-gradient-to-br from-blue-500 to-blue-400',
      info: 'Last uploaded: Blood Test Report - 10th March 2025'
    },
    {
      id: 'leave-applications',
      title: 'Leave Applications',
      icon: FileText,
      buttonText: 'Apply for Leave',
      buttonColor: 'bg-gradient-to-r from-green-500 to-green-400',
      cardColor: 'bg-gradient-to-br from-green-50 to-green-100',
      iconBg: 'bg-gradient-to-br from-green-500 to-green-400',
      info: 'Last leave applied: 5th March 2025 (Medical Leave)'
    },
    {
      id: 'appointments',
      title: 'Appointments',
      icon: Calendar,
      buttonText: 'Book Appointment',
      buttonColor: 'bg-gradient-to-r from-purple-500 to-purple-400',
      cardColor: 'bg-gradient-to-br from-purple-50 to-purple-100',
      iconBg: 'bg-gradient-to-br from-purple-500 to-purple-400',
      info: 'Next appointment: May 1, 2025, 08:00 AM - Dr. Mufaddal'
    },
    {
      id: 'ai-diagnosis',
      title: 'AI Diagnosis',
      icon: Bot,
      buttonText: 'AI Diagnosis',
      buttonColor: 'bg-gradient-to-r from-orange-500 to-orange-400',
      cardColor: 'bg-gradient-to-br from-orange-50 to-orange-100',
      iconBg: 'bg-gradient-to-br from-orange-500 to-orange-400',
      info: "Last query: 'Best home remedies for fever?'"
    }
  ];

  const handleCardClick = (cardId) => {
    console.log(`${cardId} clicked`);
    // Add your navigation logic here
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <nav className="bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <Plus className="w-6 h-6 text-blue-600" />
              </div>
              <span className="text-xl font-bold">ArogyaVault</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="hover:bg-white/20 px-3 py-2 rounded-full transition-all duration-300">Home</a>
              <a href="#ai-bot" className="hover:bg-white/20 px-3 py-2 rounded-full transition-all duration-300">AI Bot</a>
              <a href="#certificates" className="hover:bg-white/20 px-3 py-2 rounded-full transition-all duration-300">Certificates</a>
              <a href="#appointment" className="hover:bg-white/20 px-3 py-2 rounded-full transition-all duration-300">Appointment</a>
              <a href="#video-call" className="hover:bg-white/20 px-3 py-2 rounded-full transition-all duration-300">Video Call</a>
            </div>

            {/* Right Side */}
            <div className="flex items-center space-x-4">
              {/* Search Bar */}
              <div className="relative hidden sm:block">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-blue-600" />
                </div>
                <input
                  type="text"
                  placeholder="Search..."
                  className="block w-64 pl-10 pr-3 py-2 border border-transparent rounded-full bg-white/90 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
                />
              </div>

              {/* Notification Bell */}
              <div className="relative">
                <Bell className="h-6 w-6 text-white hover:text-blue-200 cursor-pointer" />
                <span className="absolute -top-2 -right-2 h-5 w-5 bg-orange-500 rounded-full flex items-center justify-center text-xs font-bold">
                  1
                </span>
              </div>

              {/* Logout Button */}
              <button className="bg-white/20 hover:bg-white hover:text-blue-600 px-4 py-2 rounded-full border-2 border-white transition-all duration-300">
                Logout
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="md:hidden p-2 rounded-md hover:bg-white/20"
              >
                {isSidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex">
        {/* Sidebar */}
        <aside className={`${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 fixed md:static inset-y-0 left-0 z-50 w-72 bg-white shadow-lg transform transition-transform duration-300 ease-in-out`}>
          <div className="p-6 space-y-6">
            {/* Student Dashboard Section */}
            <div>
              <h3 className="text-lg font-semibold text-blue-600 mb-4">Student Dashboard</h3>
              <nav className="space-y-2">
                {sidebarLinks.filter(link => link.section === 'main').map((link) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={() => handleLinkClick(link.id)}
                    className={`block px-4 py-3 rounded-lg transition-all duration-300 border-l-4 ${
                      activeLink === link.id
                        ? 'bg-blue-50 text-blue-600 border-blue-500'
                        : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600 border-transparent hover:border-blue-300'
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* AI Features Section */}
            <div>
              <h3 className="text-lg font-semibold text-blue-600 mb-4">AI Features</h3>
              <nav className="space-y-2">
                {sidebarLinks.filter(link => link.section === 'ai').map((link) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={() => handleLinkClick(link.id)}
                    className={`block px-4 py-3 rounded-lg transition-all duration-300 border-l-4 ${
                      activeLink === link.id
                        ? 'bg-blue-50 text-blue-600 border-blue-500'
                        : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600 border-transparent hover:border-blue-300'
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8 md:ml-0">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-blue-800 mb-2">Dashboard</h1>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full"></div>
          </div>

          {/* Dashboard Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {dashboardCards.map((card) => {
              const IconComponent = card.icon;
              return (
                <div
                  key={card.id}
                  className={`${card.cardColor} rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer`}
                >
                  {/* Card Header */}
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-14 h-14 ${card.iconBg} rounded-xl flex items-center justify-center shadow-md`}>
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">{card.title}</h3>
                  </div>

                  {/* Action Button */}
                  <button
                    onClick={() => handleCardClick(card.id)}
                    className={`w-full ${card.buttonColor} text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-2 mb-4`}
                  >
                    <IconComponent className="w-5 h-5" />
                    <span>{card.buttonText}</span>
                  </button>

                  {/* Card Info */}
                  <div className="text-sm text-gray-600">
                    <span className="font-medium text-blue-600">
                      {card.info.split(':')[0]}:
                    </span>
                    <span className="ml-1">
                      {card.info.split(':').slice(1).join(':').trim()}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Navigation */}
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            <a href="#leave-applications" className="text-blue-600 hover:text-blue-800 hover:bg-blue-50 px-4 py-2 rounded-full transition-all duration-300 font-medium">
              Leave Applications
            </a>
            <a href="#my-appointments" className="text-blue-600 hover:text-blue-800 hover:bg-blue-50 px-4 py-2 rounded-full transition-all duration-300 font-medium">
              My Appointments
            </a>
            <a href="#health-records" className="text-blue-600 hover:text-blue-800 hover:bg-blue-50 px-4 py-2 rounded-full transition-all duration-300 font-medium">
              Health Records
            </a>
            <a href="#ai-diagnosis" className="text-blue-600 hover:text-blue-800 hover:bg-blue-50 px-4 py-2 rounded-full transition-all duration-300 font-medium">
              AI Diagnosis
            </a>
          </div>
        </main>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default StudentHealthDashboard;