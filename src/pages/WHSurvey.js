import React, { useState } from 'react';
import { motion } from 'framer-motion';

function WHSurvey() {
  const [formData, setFormData] = useState({
    shift: '',
    divisionCode: '',
    intervieweeEmail: '',
    questions: {
      weakWifi: { checked: false, comment: '' },
      deadZones: { checked: false, comment: '' },
      deviceConnectivity: { checked: false, comment: '' },
      equipmentFunction: { checked: false, comment: '' },
      syncDelays: { checked: false, comment: '' },
      outdatedEquipment: { checked: false, comment: '' },
      staffIssues: { checked: false, comment: '' },
      workarounds: { checked: false, comment: '' },
      trainingGaps: { checked: false, comment: '' },
      physicalObstructions: { checked: false, comment: '' },
      environmentalFactors: { checked: false, comment: '' },
      workedWell: { checked: false, comment: '' },
      improvements: { checked: false, comment: '' }
    }
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ success: false, message: '' });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleCheckboxChange = (questionId) => {
    setFormData({
      ...formData,
      questions: {
        ...formData.questions,
        [questionId]: {
          ...formData.questions[questionId],
          checked: !formData.questions[questionId].checked
        }
      }
    });
  };

  const handleCommentChange = (questionId, value) => {
    setFormData({
      ...formData,
      questions: {
        ...formData.questions,
        [questionId]: {
          ...formData.questions[questionId],
          comment: value
        }
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ success: false, message: '' });

    try {
      // Get the question text for each ID
      const getQuestionText = (id) => {
        for (const section of questions) {
          const question = section.items.find(item => item.id === id);
          if (question) return question.text;
        }
        return '';
      };

      // Send individual emails for each checked item
      const checkedQuestions = Object.entries(formData.questions)
        .filter(([_, value]) => value.checked);

      for (const [id, value] of checkedQuestions) {
        await fetch('/api/send-inquiry', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            to: 'r.whitehair@magicalvacationplanner.com',
            subject: getQuestionText(id),
            formData: {
              inquiryType: 'Warehouse Issue Alert',
              shift: formData.shift,
              divisionCode: formData.divisionCode,
              intervieweeEmail: formData.intervieweeEmail,
              question: getQuestionText(id),
              comment: value.comment
            }
          }),
        });
      }

      // Send summary email
      const summaryResponse = await fetch('/api/send-inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: 'rob.whitehair@usfoods.com',
          subject: 'We have issues',
          formData: {
            inquiryType: 'Warehouse Survey Summary',
            shift: formData.shift,
            divisionCode: formData.divisionCode,
            intervieweeEmail: formData.intervieweeEmail,
            issues: checkedQuestions.map(([id, value]) => ({
              question: getQuestionText(id),
              comment: value.comment
            }))
          }
        }),
      });

      if (summaryResponse.ok) {
        setSubmitStatus({
          success: true,
          message: 'Survey submitted successfully! Thank you for your feedback.'
        });
        setFormData({
          shift: '',
          divisionCode: '',
          intervieweeEmail: '',
          questions: Object.keys(formData.questions).reduce((acc, key) => ({
            ...acc,
            [key]: { checked: false, comment: '' }
          }), {})
        });
      } else {
        throw new Error('Failed to submit survey');
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: 'There was an error submitting the survey. Please try again.'
      });
      console.error('Survey submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const questions = [
    {
      section: 'Connectivity & Coverage',
      items: [
        { id: 'weakWifi', text: 'Were there any areas with weak or dropped Wi-Fi signal?' },
        { id: 'deadZones', text: 'Did you encounter any dead zones or inconsistent coverage?' },
        { id: 'deviceConnectivity', text: 'Did specific devices (e.g., handhelds, forklifts, printers) struggle to stay connected?' }
      ]
    },
    {
      section: 'Equipment Performance',
      items: [
        { id: 'equipmentFunction', text: 'Did all equipment (scanners, tablets, printers, etc.) function as expected?' },
        { id: 'syncDelays', text: 'Were there any delays or errors when syncing data or accessing systems?' },
        { id: 'outdatedEquipment', text: 'Did you observe any equipment that seemed outdated or in need of maintenance?' }
      ]
    },
    {
      section: 'User Interaction',
      items: [
        { id: 'staffIssues', text: 'Did warehouse staff mention any recurring tech issues?' },
        { id: 'workarounds', text: 'Were there any workarounds in use to deal with connectivity or equipment problems?' },
        { id: 'trainingGaps', text: 'Did you notice any training gaps or misuse of equipment?' }
      ]
    },
    {
      section: 'Infrastructure & Environment',
      items: [
        { id: 'physicalObstructions', text: 'Were there physical obstructions (e.g., racking, walls, machinery) affecting signal?' },
        { id: 'environmentalFactors', text: 'Did environmental factors (e.g., temperature, moisture) impact equipment performance?' }
      ]
    },
    {
      section: 'General Observations',
      items: [
        { id: 'workedWell', text: 'What worked well during your visit?' },
        { id: 'improvements', text: 'What would you recommend to improve connectivity or equipment reliability?' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">DST Technician Checklist</h1>
            <p className="text-gray-600 mb-8">During Warehouse Visit</p>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Basic Information */}
              <div className="space-y-6">
                {/* Shift Selection */}
                <div className="space-y-4">
                  <label className="block text-lg font-semibold text-gray-700">Select Shift</label>
                  <div className="flex space-x-4">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="shift"
                        value="day"
                        checked={formData.shift === 'day'}
                        onChange={handleInputChange}
                        className="form-radio h-4 w-4 text-blue-600"
                      />
                      <span className="ml-2">Day Shift</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="shift"
                        value="night"
                        checked={formData.shift === 'night'}
                        onChange={handleInputChange}
                        className="form-radio h-4 w-4 text-blue-600"
                      />
                      <span className="ml-2">Night Shift</span>
                    </label>
                  </div>
                </div>

                {/* Division Code */}
                <div className="space-y-2">
                  <label className="block text-lg font-semibold text-gray-700">Division Code</label>
                  <select
                    name="divisionCode"
                    value={formData.divisionCode}
                    onChange={handleInputChange}
                    required
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  >
                    <option value="">Select Division Code</option>
                    {[
                      '2G', '2I', '2J', '2L', '2N', '2O', '2R', '2Z',
                      '3D', '3F', '3J', '3K', '3L', '3M', '3V', '3W', '3Y', '3Z',
                      '4C', '4H', '4I', '4J', '4O', '4P', '4Q', '4R', '4U', '4V',
                      '5D', '5E', '5G', '5I', '5O', '5T', '5Y', '5Z',
                      '6A', '6B', '6D', '6F', '6G', '6H', '6I', '6J', '6N', '6U', '6V', '6W', '6Y', '6Z',
                      '8A', '8B', '8E', '8L', '8N', '8O', '8S', '8T', '8U', '8V',
                      '9A', '9B', '9D', '9I', '9J', '9L', '9O', '9P', '9Q', '9U'
                    ].map(code => (
                      <option key={code} value={code}>{code}</option>
                    ))}
                  </select>
                </div>

                {/* Interviewer Email */}
                <div className="space-y-2">
                  <label className="block text-lg font-semibold text-gray-700">Interviewee Email</label>
                  <input
                    type="email"
                    name="intervieweeEmail"
                    value={formData.intervieweeEmail}
                    onChange={handleInputChange}
                    required
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              {/* Issues Found Checklist */}
              <div className="mb-6">
                <h3 className="text-lg font-medium text-red-600 mb-4">Check Box of Issues Found</h3>
              </div>

              {/* Questions */}
              {questions.map((section) => (
                <div key={section.section} className="space-y-6">
                  <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">
                    {section.section}
                  </h2>
                  <div className="space-y-4">
                    {section.items.map((question) => (
                      <div key={question.id} className="space-y-2">
                        <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input
                              type="checkbox"
                              checked={formData.questions[question.id].checked}
                              onChange={() => handleCheckboxChange(question.id)}
                              className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                            />
                          </div>
                          <label className="ml-3 text-gray-700">
                            {question.text}
                          </label>
                        </div>
                        {formData.questions[question.id].checked && (
                          <div className="ml-7">
                            <textarea
                              value={formData.questions[question.id].comment}
                              onChange={(e) => handleCommentChange(question.id, e.target.value)}
                              placeholder="Please provide details..."
                              rows="3"
                              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Survey'}
                </button>
              </div>

              {/* Status Message */}
              {submitStatus.message && (
                <div
                  className={`mt-4 p-4 rounded-md ${
                    submitStatus.success ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default WHSurvey;
