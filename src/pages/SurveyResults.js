import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function SurveyResults() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchResults();
  }, []);

  const fetchResults = async () => {
    try {
      const response = await fetch('/api/survey-results');
      if (!response.ok) {
        throw new Error('Failed to fetch survey results');
      }
      const data = await response.json();
      setResults(data.responses || []);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching survey results:', error);
      setError('Failed to load survey results');
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString();
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">Loading survey results...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-red-600">{error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Warehouse Survey Results</h1>
          
          {results.length === 0 ? (
            <p className="text-gray-600">No survey responses yet.</p>
          ) : (
            <div className="space-y-8">
              {results.map((response, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-6"
                >
                  <div className="border-b pb-4 mb-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h2 className="text-xl font-semibold text-gray-900">
                          Response #{results.length - index}
                        </h2>
                        <p className="text-gray-500">
                          {response.shift ? `${response.shift.charAt(0).toUpperCase() + response.shift.slice(1)} Shift` : 'Shift not specified'}
                        </p>
                      </div>
                      <p className="text-sm text-gray-500">
                        {formatDate(response.timestamp)}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {Object.entries(response.questions).map(([id, data]) => (
                      data.checked && (
                        <div key={id} className="border-l-4 border-blue-500 pl-4">
                          <h3 className="font-medium text-gray-900">
                            {id.replace(/([A-Z])/g, ' $1').trim()}
                          </h3>
                          {data.comment && (
                            <p className="mt-2 text-gray-600 whitespace-pre-wrap">
                              {data.comment}
                            </p>
                          )}
                        </div>
                      )
                    ))}
                  </div>

                  <div className="mt-6 pt-4 border-t">
                    <h3 className="text-sm font-medium text-gray-500">Notifications sent to:</h3>
                    <div className="mt-2 text-sm text-gray-600">
                      <p>Individual Reports: {response.emailsSentTo?.individual || 'Not specified'}</p>
                      <p>Summary Report: {response.emailsSentTo?.summary || 'Not specified'}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}

export default SurveyResults;
