const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  checked: {
    type: Boolean,
    default: false
  },
  comment: {
    type: String,
    default: ''
  }
});

const surveyResponseSchema = new mongoose.Schema({
  shift: {
    type: String,
    required: true,
    enum: ['day', 'night']
  },
  divisionCode: {
    type: String,
    required: true
  },
  interviewerEmail: {
    type: String,
    required: true
  },
  questions: {
    type: Object
  },
  emailsSentTo: {
    individual: String,
    summary: String
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

const SurveyResponse = mongoose.model('SurveyResponse', surveyResponseSchema);

module.exports = SurveyResponse;
