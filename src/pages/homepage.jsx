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
  Filter
} from 'lucide-react';

const DoctorDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedStatus, setSelectedStatus] = useState('All Status');

  const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Calendar, active: true },
    { id: 'appointments', label: 'Appointments', icon: Calendar },
    { id: 'prescriptions', label: 'Prescriptions', icon: Pill },
    { id: 'video-call', label: 'Video-Call', icon: Video },
    { id: 'ai-assistant', label: 'AI-Assistant', icon: Bot },
  ];

  const statusCards = [
    { title: 'Today\'s Appointments', value: 8, color: 'bg-blue-600', icon: Calendar },
    { title: 'Pending Certificates', value: 14, color: 'bg-yellow-600', icon: FileText },
    { title: 'Active Cases', value: 12, color: 'bg-green-600', icon: User },
    { title: 'Video Consultations', value: 5, color: 'bg-purple-600', icon: Video },
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
      status: 'Pending'
    },
    {
      id: 'CERT002',
      studentName: 'Emma Johnson',
      studentId: 'STU18078',
      certificateType: 'Vaccination Record',
      issueDate: '2023-04-20',
      expiryDate: '2024-04-20',
      document: 'vacc_record.pdf',
      status: 'Approved'
    },
    {
      id: 'CERT003',
      studentName: 'Michael Wang',
      studentId: 'STU18012',
      certificateType: 'Mental Health Clearance',
      issueDate: '2023-04-05',
      expiryDate: '2024-04-05',
      document: 'mh_clearance.pdf',
      status: 'Pending'
    },
    {
      id: 'CERT004',
      studentName: 'Sarah Miller',
      studentId: 'STU18057',
      certificateType: 'Physical Examination',
      issueDate: '2023-04-28',
      expiryDate: '2024-04-28',
      document: 'physical_exam.pdf',
      status: 'Rejected'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'Approved':
        return 'bg-green-100 text-green-800';
      case 'Rejected':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 w-64 h-full bg-white shadow-lg border-r border-gray-200 z-10">
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-xl font-bold text-blue-900">Arogya Vault</h1>
          <p className="text-sm text-gray-600">by The chill coders</p>
        </div>
        
        <div className="p-4">
          <h2 className="text-lg font-semibold text-blue-900 mb-4">Doctor's Dashboard</h2>
          <nav className="space-y-2">
            {sidebarItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center px-4 py-3 rounded-lg transition-colors ${
                  activeTab === item.id
                    ? 'bg-blue-900 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <item.icon className="w-5 h-5 mr-3" />
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </nav>
        </div>

        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-green-500 text-white p-3 rounded-lg text-center">
            <p className="text-sm font-medium">Update Time Slot</p>
          </div>
          
          <div className="mt-4 p-3 bg-blue-50 rounded-lg">
            <div className="flex items-center mb-2">
              <Bot className="w-5 h-5 text-blue-600 mr-2" />
              <h3 className="font-semibold text-blue-900">AI Assistant</h3>
            </div>
            <p className="text-xs text-gray-600 mb-3">
              Get quick assistance with diagnoses, medical references, and patient recommendations.
            </p>
            <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
              Start Conversation
            </button>
          </div>

          <div className="mt-4 p-3 bg-green-50 rounded-lg">
            <div className="flex items-center mb-2">
              <Video className="w-5 h-5 text-green-600 mr-2" />
              <h3 className="font-semibold text-green-900">Upcoming Video Call</h3>
            </div>
            <p className="text-sm text-gray-700">Emma Johnson</p>
            <p className="text-xs text-gray-500">Today, 4:30 PM - 5:30 PM</p>
            <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg text-sm font-medium mt-2 hover:bg-green-700 transition-colors">
              Join Call
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64">
        {/* Top Navigation */}
        <div className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <h1 className="text-2xl font-bold text-blue-900">Doctor's Dashboard</h1>
              <nav className="flex space-x-8">
                <a href="#" className="text-gray-700 hover:text-blue-900">Home</a>
                <a href="#" className="text-gray-700 hover:text-blue-900">AI Bot</a>
                <a href="#" className="text-gray-700 hover:text-blue-900">Certificates</a>
                <a href="#" className="text-gray-700 hover:text-blue-900">Appointment</a>
                <a href="#" className="text-gray-700 hover:text-blue-900">Video Call</a>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="w-5 h-5 text-gray-400 absolute left-3 top-3" />
                <input
                  type="text"
                  placeholder="Search patients..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <Bell className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <Settings className="w-5 h-5" />
              </button>
              <div className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center text-white font-medium">
                D
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="p-6">
          {/* Status Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {statusCards.map((card, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <div className={`w-12 h-12 ${card.color} rounded-lg flex items-center justify-center mb-4`}>
                      <card.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{card.value}</h3>
                    <p className="text-sm text-gray-600">{card.title}</p>
                    <p className="text-xs text-gray-500 mt-1">Today</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Tabs */}
          <div className="mb-6">
            <nav className="flex space-x-8 border-b border-gray-200">
              {[
                'Certificate Verification',
                'Appointment Approval',
                'Prescription Verification',
                'Video Consultations'
              ].map((tab, index) => (
                <button
                  key={index}
                  className={`py-2 px-1 border-b-2 font-medium text-sm ${
                    index === 0
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>

          {/* Certificate Verification Table */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900">Student Certificate Verification</h2>
                <div className="flex items-center space-x-4">
                  <select
                    value={selectedStatus}
                    onChange={(e) => setSelectedStatus(e.target.value)}
                    className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option>All Status</option>
                    <option>Pending</option>
                    <option>Approved</option>
                    <option>Rejected</option>
                  </select>
                  <div className="relative">
                    <Search className="w-4 h-4 text-gray-400 absolute left-3 top-2" />
                    <input
                      type="text"
                      placeholder="Search by ID"
                      className="pl-9 pr-4 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Certificate Type</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Issue Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Expiry Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Document</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {certificateData.map((item) => (
                    <tr key={item.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.studentName}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.studentId}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.certificateType}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.issueDate}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.expiryDate}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 hover:text-blue-900">
                        <a href="#" className="flex items-center">
                          <Download className="w-4 h-4 mr-1" />
                          {item.document}
                        </a>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(item.status)}`}>
                          {item.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div className="flex items-center space-x-2">
                          <button className="text-blue-600 hover:text-blue-900">
                            <Eye className="w-4 h-4" />
                          </button>
                          {item.status === 'Pending' && (
                            <>
                              <button className="text-green-600 hover:text-green-900">
                                <Check className="w-4 h-4" />
                              </button>
                              <button className="text-red-600 hover:text-red-900">
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