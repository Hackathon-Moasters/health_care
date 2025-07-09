import React, { useState } from 'react';
import { Calendar } from 'lucide-react';

export default function AddTimeSlots() {
  const [selectedDate, setSelectedDate] = useState('');
  const [addedDates, setAddedDates] = useState([]);

  const handleAddDate = () => {
    if (selectedDate && !addedDates.includes(selectedDate)) {
      setAddedDates([...addedDates, selectedDate]);
      setSelectedDate('');
    }
  };

  const handleSaveTimeSlots = () => {
    if (addedDates.length > 0) {
      console.log('Saving time slots for dates:', addedDates);
      // Add save logic here
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        {/* Form Title */}
        <div className="flex items-center space-x-3 mb-8">
          <Calendar className="text-green-600" size={24} />
          <h2 className="text-2xl font-semibold text-gray-800">Add Available Time Slots</h2>
        </div>

        {/* Date Selection Section */}
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Select Date
            </label>
            <div className="flex space-x-3">
              <div className="relative flex-1">
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="dd-mm-yyyy"
                />
                <Calendar className="absolute right-3 top-3.5 text-gray-400 pointer-events-none" size={20} />
              </div>
              <button
                onClick={handleAddDate}
                disabled={!selectedDate}
                className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors font-medium"
              >
                Add Date
              </button>
            </div>
          </div>

          {/* Added Dates Display */}
          {addedDates.length > 0 && (
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="text-sm font-medium text-gray-700 mb-3">Added Dates:</h3>
              <div className="flex flex-wrap gap-2">
                {addedDates.map((date, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800"
                  >
                    {new Date(date).toLocaleDateString('en-GB')}
                    <button
                      onClick={() => setAddedDates(addedDates.filter((_, i) => i !== index))}
                      className="ml-2 text-blue-600 hover:text-blue-800"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Save Button */}
          <div className="pt-4">
            <button
              onClick={handleSaveTimeSlots}
              disabled={addedDates.length === 0}
              className="w-full px-6 py-3 bg-gray-400 text-white rounded-lg hover:bg-gray-500 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors font-medium"
            >
              Save Time Slots
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}