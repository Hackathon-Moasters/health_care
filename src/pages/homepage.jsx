// Due to size limit, the full code cannot fit in one message.
// I will break it into parts — Part 1 below.

import React, { useState } from 'react';
import {
  Calendar,
  FileText,
  Pill,
  Video,
  Bot,
  Search,
  Bell,
  Settings,
  User,
  Eye,
  Check,
  X,
  Download,
  Filter,
  TrendingUp,
  Activity,
  Clock,
  Users,
  Star,
  ArrowRight,
  Zap,
  Heart,
  Shield,
  Menu
} from 'lucide-react';

const DoctorDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedStatus, setSelectedStatus] = useState('All Status');
  const [notifications, setNotifications] = useState(3);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Activity, color: 'text-blue-400' },
    { id: 'appointments', label: 'Appointments', icon: Calendar, color: 'text-green-400' },
    { id: 'prescriptions', label: 'Prescriptions', icon: Pill, color: 'text-purple-400' },
    { id: 'video-call', label: 'Video-Call', icon: Video, color: 'text-red-400' },
    { id: 'ai-assistant', label: 'AI-Assistant', icon: Bot, color: 'text-yellow-400' },
  ];

  const statusCards = [
    {
      title: "Today's Appointments",
      value: 8,
      gradient: 'from-blue-600 to-blue-700',
      icon: Calendar,
      trend: '+12%',
      subtitle: 'vs last week',
      bgPattern: 'bg-blue-50'
    },
    {
      title: 'Pending Certificates',
      value: 14,
      gradient: 'from-amber-500 to-orange-600',
      icon: Shield,
      trend: '+8%',
      subtitle: 'pending review',
      bgPattern: 'bg-amber-50'
    },
    {
      title: 'Active Cases',
      value: 12,
      gradient: 'from-emerald-500 to-teal-600',
      icon: Heart,
      trend: '+24%',
      subtitle: 'recovery rate',
      bgPattern: 'bg-emerald-50'
    },
    {
      title: 'Video Consultations',
      value: 5,
      gradient: 'from-purple-600 to-indigo-600',
      icon: Video,
      trend: '+18%',
      subtitle: 'completed today',
      bgPattern: 'bg-purple-50'
    }
  ];

  const certificateData = [
    {
      id: 'CERT001',
      studentName: 'John Smith',
      studentId: 'STU18045',
      certificateType: 'Medical Fitness',
      issueDate: '2023-04-15',
      expiryDate: '2024-04-15',
      document: 'fitness_cert.pdf',
      status: 'Pending',
      priority: 'High',
      avatar: 'JS'
    },
    {
      id: 'CERT002',
      studentName: 'Emma Johnson',
      studentId: 'STU18078',
      certificateType: 'Vaccination Record',
      issueDate: '2023-04-20',
      expiryDate: '2024-04-20',
      document: 'vacc_record.pdf',
      status: 'Approved',
      priority: 'Normal',
      avatar: 'EJ'
    },
    {
      id: 'CERT003',
      studentName: 'Michael Wang',
      studentId: 'STU18012',
      certificateType: 'Mental Health Clearance',
      issueDate: '2023-04-05',
      expiryDate: '2024-04-05',
      document: 'mh_clearance.pdf',
      status: 'Pending',
      priority: 'Medium',
      avatar: 'MW'
    },
    {
      id: 'CERT004',
      studentName: 'Sarah Miller',
      studentId: 'STU18057',
      certificateType: 'Physical Examination',
      issueDate: '2023-04-28',
      expiryDate: '2024-04-28',
      document: 'physical_exam.pdf',
      status: 'Rejected',
      priority: 'Low',
      avatar: 'SM'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Pending':
        return 'bg-gradient-to-r from-amber-100 to-yellow-100 text-amber-800 border border-amber-200';
      case 'Approved':
        return 'bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-800 border border-emerald-200';
      case 'Rejected':
        return 'bg-gradient-to-r from-red-100 to-rose-100 text-red-800 border border-red-200';
      default:
        return 'bg-gradient-to-r from-gray-100 to-slate-100 text-gray-800 border border-gray-200';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High':
        return 'bg-red-500';
      case 'Medium':
        return 'bg-yellow-500';
      case 'Low':
        return 'bg-green-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex flex-col md:flex-row">
      {/* Mobile Top Bar */}
      <div className="md:hidden bg-white/80 backdrop-blur-xl shadow-sm border-b border-white/20 px-4 py-4 flex items-center justify-between sticky top-0 z-30">
        <h1 className="text-xl font-bold text-blue-900">Arogya Vault</h1>
        <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-gray-700 p-2 rounded-lg hover:bg-gray-100">
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-black bg-opacity-40" onClick={() => setSidebarOpen(false)}></div>
      )}

      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 fixed md:static z-50 md:z-10 w-72 bg-white/80 backdrop-blur-xl shadow-2xl border-r border-white/20 h-screen flex flex-col`}>
        {/* Sidebar content here (same as before) */}
        {/* Sidebar Header */}
        <div className="p-6 border-b border-gray-100 bg-gradient-to-r from-blue-900 to-indigo-900">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
              <Activity className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">Arogya Vault</h1>
              <p className="text-sm text-blue-200">by The chill coders</p>
            </div>
          </div>
        </div>

        {/* Sidebar Navigation */}
        <div className="p-6 flex-1 overflow-y-auto">
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-1">Doctor's Dashboard</h2>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-600">Online</span>
            </div>
          </div>

          <nav className="space-y-2 mb-8">
            {sidebarItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setSidebarOpen(false); // auto-close on mobile
                }}
                className={`w-full flex items-center px-4 py-3 rounded-xl transition-all duration-300 group ${
                  activeTab === item.id
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg transform scale-105'
                    : 'text-gray-700 hover:bg-gray-50 hover:shadow-md hover:scale-102'
                }`}
              >
                <div
                  className={`p-2 rounded-lg mr-3 transition-colors ${
                    activeTab === item.id ? 'bg-white/20' : 'bg-gray-100 group-hover:bg-white'
                  }`}
                >
                  <item.icon className={`w-5 h-5 ${activeTab === item.id ? 'text-white' : item.color}`} />
                </div>
                <span className="font-medium">{item.label}</span>
                {activeTab === item.id && <ArrowRight className="w-4 h-4 ml-auto animate-pulse" />}
              </button>
            ))}
          </nav>
        </div>

        {/* Sidebar Bottom Widgets */}
        <div className="p-6 space-y-4 border-t border-gray-100">
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Update Time Slot</p>
                <p className="text-xs text-green-100">Manage availability</p>
              </div>
              <Clock className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-3">
              <div className="p-2 bg-white/20 rounded-lg mr-3">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white">AI Assistant</h3>
                <div className="flex items-center space-x-1">
                  <Star className="w-3 h-3 text-yellow-300" />
                  <span className="text-xs text-blue-100">Smart & Fast</span>
                </div>
              </div>
            </div>
            <p className="text-xs text-blue-100 mb-3">
              Get instant medical insights and patient recommendations
            </p>
            <button className="w-full bg-white/20 hover:bg-white/30 text-white py-2 px-4 rounded-xl text-sm font-medium transition-all duration-300 flex items-center justify-center space-x-2">
              <Zap className="w-4 h-4" />
              <span>Start Chat</span>
            </button>
          </div>

          <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-3">
              <div className="p-2 bg-white/20 rounded-lg mr-3">
                <Video className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Next Call</h3>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                  <span className="text-xs text-emerald-100">In 15 mins</span>
                </div>
              </div>
            </div>
            <p className="text-sm text-white font-medium">Emma Johnson</p>
            <p className="text-xs text-emerald-100 mb-3">4:30 PM - 5:30 PM</p>
            <button className="w-full bg-white/20 hover:bg-white/30 text-white py-2 px-4 rounded-xl text-sm font-medium transition-all duration-300">
              Join Call
            </button>
          </div>
        </div>
      </div>

      {/* Main content continues below */}
      {/* Main Content */}
      <div className="flex-1 md:ml-72">
        {/* Top Navigation */}
        <div className="hidden md:flex bg-white/80 backdrop-blur-xl shadow-sm border-b border-white/20 px-8 py-6 items-center justify-between">
          <div className="flex items-center space-x-8">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-900 to-indigo-900 bg-clip-text text-transparent">
                Doctor's Dashboard
              </h1>
              <p className="text-gray-600 text-sm">Welcome back, Dr. Sarah</p>
            </div>
            <nav className="flex space-x-6">
              {['Home', 'AI Bot', 'Certificates', 'Appointment', 'Video Call'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors px-3 py-2 rounded-lg hover:bg-blue-50"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search patients..."
                className="pl-12 pr-4 py-3 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/50 backdrop-blur-sm w-64"
              />
            </div>
            <button className="relative p-3 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-2xl transition-all duration-300">
              <Bell className="w-5 h-5" />
              {notifications > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center animate-pulse">
                  {notifications}
                </span>
              )}
            </button>
            <button className="p-3 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-2xl transition-all duration-300">
              <Settings className="w-5 h-5" />
            </button>
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
              DS
            </div>
          </div>
        </div>

        {/* Main Content Container */}
        <div className="p-4 sm:p-6 md:p-8">
          {/* Status Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {statusCards.map((card, index) => (
              <div
                key={index}
                className={`${card.bgPattern} rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden group cursor-pointer`}
              >
                <div className="p-6 relative">
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-14 h-14 bg-gradient-to-r ${card.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <card.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-1 text-emerald-600">
                        <TrendingUp className="w-4 h-4" />
                        <span className="text-sm font-semibold">{card.trend}</span>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{card.value}</h3>
                  <p className="text-gray-700 font-medium text-sm mb-1">{card.title}</p>
                  <p className="text-gray-500 text-xs">{card.subtitle}</p>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/10 to-transparent rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Certificate Verification Table */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
            <div className="px-4 sm:px-8 py-6 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-indigo-50">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-1">Student Certificate Verification</h2>
                  <p className="text-gray-600 text-sm">Manage and review student medical certificates</p>
                </div>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                  <select
                    value={selectedStatus}
                    onChange={(e) => setSelectedStatus(e.target.value)}
                    className="border border-gray-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/50 backdrop-blur-sm"
                  >
                    <option>All Status</option>
                    <option>Pending</option>
                    <option>Approved</option>
                    <option>Rejected</option>
                  </select>
                  <div className="relative">
                    <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Search by ID"
                      className="pl-10 pr-4 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/50 backdrop-blur-sm"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="overflow-auto">
              <table className="min-w-full text-sm">
                <thead className="bg-gradient-to-r from-gray-50 to-gray-100">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold text-gray-600 uppercase tracking-wider">Student</th>
                    <th className="px-6 py-4 text-left font-semibold text-gray-600 uppercase tracking-wider">Certificate Info</th>
                    <th className="px-6 py-4 text-left font-semibold text-gray-600 uppercase tracking-wider">Dates</th>
                    <th className="px-6 py-4 text-left font-semibold text-gray-600 uppercase tracking-wider">Document</th>
                    <th className="px-6 py-4 text-left font-semibold text-gray-600 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-4 text-left font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {certificateData.map((item) => (
                    <tr key={item.id} className="hover:bg-blue-50/50 transition-colors duration-300 group">
                      <td className="px-6 py-5">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-sm shadow-lg">
                            {item.avatar}
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900">{item.studentName}</p>
                            <p className="text-sm text-gray-600">{item.studentId}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-5">
                        <div className="flex items-center space-x-2">
                          <div className={`w-3 h-3 rounded-full ${getPriorityColor(item.priority)}`}></div>
                          <div>
                            <p className="font-medium text-gray-900">{item.id}</p>
                            <p className="text-sm text-gray-600">{item.certificateType}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-5">
                        <p className="text-gray-900">Issue: {item.issueDate}</p>
                        <p className="text-gray-600">Expiry: {item.expiryDate}</p>
                      </td>
                      <td className="px-6 py-5">
                        <a href="#" className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors group">
                          <div className="p-2 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                            <Download className="w-4 h-4" />
                          </div>
                          <span className="text-sm font-medium">{item.document}</span>
                        </a>
                      </td>
                      <td className="px-6 py-5">
                        <span className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${getStatusColor(item.status)}`}>
                          {item.status}
                        </span>
                      </td>
                      <td className="px-6 py-5">
                        <div className="flex items-center space-x-2">
                          <button className="p-2 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-lg transition-all duration-300">
                            <Eye className="w-4 h-4" />
                          </button>
                          {item.status === 'Pending' && (
                            <>
                              <button className="p-2 text-green-600 hover:text-green-800 hover:bg-green-50 rounded-lg transition-all duration-300">
                                <Check className="w-4 h-4" />
                              </button>
                              <button className="p-2 text-red-600 hover:text-red-800 hover:bg-red-50 rounded-lg transition-all duration-300">
                                <X className="w-4 h-4" />
                              </button>
                            </>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;
