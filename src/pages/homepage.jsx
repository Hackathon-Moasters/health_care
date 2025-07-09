import React from "react";

const DoctorDashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        <div className="p-6 font-bold text-xl border-b">Doctor's Dashboard</div>
        <nav className="p-4 space-y-4">
          <a href="#" className="block text-gray-700 hover:text-blue-500">Dashboard</a>
          <a href="#" className="block text-gray-700 hover:text-blue-500">Appointments</a>
          <a href="#" className="block text-gray-700 hover:text-blue-500">Prescriptions</a>
          <a href="#" className="block text-gray-700 hover:text-blue-500">Video-Call</a>
          <a href="#" className="block text-gray-700 hover:text-blue-500">AI Assistant</a>
        </nav>
        <div className="p-4">
          <button className="w-full bg-green-500 text-white py-2 rounded">Update Time Slot</button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Top Cards */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          {[
            { label: "Today's Appointments", count: 8, color: "bg-blue-100 text-blue-600" },
            { label: "Pending Certificates", count: 14, color: "bg-yellow-100 text-yellow-600" },
            { label: "Active Cases", count: 12, color: "bg-green-100 text-green-600" },
            { label: "Video Consultations", count: 5, color: "bg-purple-100 text-purple-600" }
          ].map((card, index) => (
            <div key={index} className={`p-6 rounded-lg ${card.color} shadow`}>
              <div className="text-xl font-semibold">{card.count}</div>
              <div>{card.label}</div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex space-x-6 mb-4 border-b pb-2">
          <button className="font-semibold text-blue-600">Certificate Verification</button>
          <button>Appointment Approval</button>
          <button>Prescription Verification</button>
          <button>Video Consultations</button>
        </div>

        {/* Certificate Table */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-4">Student Certificate Verification</h2>
          <table className="w-full table-auto text-left">
            <thead>
              <tr className="text-gray-600 border-b">
                <th className="py-2">ID</th>
                <th>Student Name</th>
                <th>Student ID</th>
                <th>Certificate Type</th>
                <th>Issue Date</th>
                <th>Expiry Date</th>
                <th>Document</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  id: "CERT001",
                  name: "John Smith",
                  studentId: "STU10045",
                  type: "Medical Fitness",
                  issue: "2025-02-15",
                  expiry: "2026-02-15",
                  doc: "fitness_cert.pdf",
                  status: "Pending"
                },
                {
                  id: "CERT002",
                  name: "Emma Johnson",
                  studentId: "STU10078",
                  type: "Vaccination Record",
                  issue: "2025-01-20",
                  expiry: "2026-01-20",
                  doc: "vacc_record.pdf",
                  status: "Approved"
                }
              ].map((cert, idx) => (
                <tr key={idx} className="border-b">
                  <td className="py-2">{cert.id}</td>
                  <td>{cert.name}</td>
                  <td>{cert.studentId}</td>
                  <td>{cert.type}</td>
                  <td>{cert.issue}</td>
                  <td>{cert.expiry}</td>
                  <td>
                    <a href="#" className="text-blue-600 underline">{cert.doc}</a>
                  </td>
                  <td>
                    <span className={`px-2 py-1 rounded text-sm ${
                      cert.status === "Pending" ? "bg-yellow-200 text-yellow-800"
                      : cert.status === "Approved" ? "bg-green-200 text-green-800"
                      : "bg-red-200 text-red-800"
                    }`}>
                      {cert.status}
                    </span>
                  </td>
                  <td className="space-x-2">
                    <button className="text-blue-500 hover:underline">View</button>
                    {cert.status === "Pending" && (
                      <>
                        <button className="text-green-500 hover:underline">Approve</button>
                        <button className="text-red-500 hover:underline">Reject</button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default DoctorDashboard;

