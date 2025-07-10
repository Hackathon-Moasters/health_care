const mongoose = require('mongoose');

const prescriptionSchema = new mongoose.Schema({
    doctorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    symptoms: String,
    diagnosis: String,
    medications: [String],
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Prescription', prescriptionSchema);
