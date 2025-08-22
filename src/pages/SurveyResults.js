import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';
import { Bar, Pie } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

function SurveyResults() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedDate, setSelectedDate] = useState('all');
  const [selectedShift, setSelectedShift] = useState('all');
  const [clearingData, setClearingData] = useState(false);

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

  const clearAllData = async () => {
    const password = window.prompt('Please enter the admin password to clear data:');
    if (!password) {
      return; // User cancelled the prompt
    }
    
    if (password !== 'usfoods') {
      alert('Incorrect password. Access denied.');
      return;
    }

    if (!window.confirm('Are you sure you want to clear all survey data? This cannot be undone.')) {
      return;
    }
    
    setClearingData(true);
    try {
      const response = await fetch('/api/clear-survey-data', {
        method: 'DELETE'
      });
      if (!response.ok) {
        throw new Error('Failed to clear survey data');
      }
      await fetchResults(); // Refresh the data
      alert('All survey data has been cleared successfully.');
    } catch (error) {
      console.error('Error clearing survey data:', error);
      alert('Failed to clear survey data. Please try again.');
    } finally {
      setClearingData(false);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Data processing functions
  const getQuestionStatsByDivision = () => {
    const stats = {};
    results.forEach(response => {
      const divisionCode = response.divisionCode || 'Unknown';
      if (!stats[divisionCode]) {
        stats[divisionCode] = {};
      }
      
      Object.entries(response.questions).forEach(([question, data]) => {
        if (!stats[divisionCode][question]) {
          stats[divisionCode][question] = { checked: 0, total: 0, comments: [] };
        }
        if (data.checked) {
          stats[divisionCode][question].checked++;
        }
        if (data.comment) {
          stats[divisionCode][question].comments.push({
            comment: data.comment,
            date: response.timestamp,
            shift: response.shift,
            divisionCode: response.divisionCode,
            intervieweeEmail: response.intervieweeEmail
          });
        }
        stats[divisionCode][question].total++;
      });
    });
    return stats;
  };

  const getShiftDistribution = () => {
    const distribution = { day: 0, night: 0 };
    results.forEach(response => {
      distribution[response.shift]++;
    });
    return distribution;
  };

  const getDivisionCodeDistribution = () => {
    const distribution = {};
    results.forEach(response => {
      const code = response.divisionCode;
      distribution[code] = (distribution[code] || 0) + 1;
    });
    // Sort by number of responses
    return Object.entries(distribution)
      .sort(([,a], [,b]) => b - a)
      .reduce((obj, [key, value]) => ({
        ...obj,
        [key]: value
      }), {});
  };

  // Chart data
  const questionChartData = {
    labels: [],
    datasets: []
  };

  // Process data by division and category
  const statsByDivision = getQuestionStatsByDivision();
  Object.entries(statsByDivision).forEach(([divisionCode, questions], index) => {
    const data = Object.entries(questions).map(([question, stats]) => ({
      question,
      checked: stats.checked
    }));

    // Sort by number of issues
    data.sort((a, b) => b.checked - a.checked);

    // Add to chart data
    if (index === 0) {
      questionChartData.labels = data.map(d => d.question);
    }

    questionChartData.datasets.push({
      label: divisionCode,
      data: data.map(d => d.checked),
      backgroundColor: `hsla(${index * 30}, 70%, 50%, 0.5)`,
      borderColor: `hsla(${index * 30}, 70%, 50%, 1)`,
      borderWidth: 1,
    });
  });

  const shiftChartData = {
    labels: ['Day Shift', 'Night Shift'],
    datasets: [
      {
        data: Object.values(getShiftDistribution()),
        backgroundColor: [
          'rgba(255, 206, 86, 0.5)',
          'rgba(153, 102, 255, 0.5)',
        ],
        borderColor: [
          'rgba(255, 206, 86, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
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

  const stats = getQuestionStatsByDivision();

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Warehouse Survey Results</h1>
          
          {/* Summary Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Shift Distribution</h2>
              <div className="h-64">
                <Pie data={shiftChartData} options={{ maintainAspectRatio: false }} />
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Division Code Distribution</h2>
              <div className="h-64">
                <Bar
                  data={{
                    labels: Object.keys(getDivisionCodeDistribution()),
                    datasets: [{
                      label: 'Responses',
                      data: Object.values(getDivisionCodeDistribution()),
                      backgroundColor: 'rgba(153, 102, 255, 0.5)',
                      borderColor: 'rgba(153, 102, 255, 1)',
                      borderWidth: 1,
                    }]
                  }}
                  options={{
                    maintainAspectRatio: false,
                    scales: {
                      y: {
                        beginAtZero: true,
                        ticks: {
                          stepSize: 1
                        }
                      }
                    },
                    plugins: {
                      legend: {
                        display: false
                      }
                    }
                  }}
                />
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 md:col-span-2 lg:col-span-1">
              <h2 className="text-xl font-semibold mb-4">Division Code and Issues by Category</h2>
              <div className="h-96">
                <Bar 
                  data={questionChartData} 
                  options={{
                    maintainAspectRatio: false,
                    indexAxis: 'y',
                    scales: {
                      x: {
                        beginAtZero: true,
                        stacked: true,
                        ticks: {
                          stepSize: 1
                        }
                      },
                      y: {
                        stacked: true,
                        ticks: {
                          callback: function(value) {
                            // Truncate long labels
                            const label = this.getLabelForValue(value);
                            return label.length > 50 ? label.substr(0, 47) + '...' : label;
                          },
                          font: {
                            size: 11
                          }
                        }
                      }
                    },
                    plugins: {
                      legend: {
                        display: true,
                        position: 'right',
                        title: {
                          display: true,
                          text: 'Division Codes'
                        }
                      },
                      tooltip: {
                        callbacks: {
                          title: function(context) {
                            // Show full text in tooltip
                            return context[0].label;
                          },
                          label: function(context) {
                            return `${context.dataset.label}: ${context.parsed.x} issues`;
                          }
                        }
                      }
                    }
                  }} 
                />
              </div>
            </div>
          </div>

          {/* Admin Controls */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Admin Controls</h2>
              <button
                onClick={clearAllData}
                disabled={clearingData}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {clearingData ? 'Clearing...' : 'Clear All Survey Data'}
              </button>
            </div>
          </div>

          {/* Detailed Results */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-6">Detailed Results</h2>
            
            {Object.entries(stats).map(([divisionCode, questions]) => (
              <div key={divisionCode} className="mb-12">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Division Code: {divisionCode}</h3>
                {Object.entries(questions).map(([question, data]) => (
                  <div key={question} className="mb-8 border-b pb-6">
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="text-lg font-medium text-gray-900">{question}</h4>
                      <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded">
                        {data.checked} / {data.total} reported
                      </span>
                    </div>
                    
                    {data.comments.length > 0 && (
                      <div className="space-y-4">
                        <h5 className="text-md font-medium text-gray-700">Comments:</h5>
                        {data.comments.map((comment, index) => (
                          <div key={index} className="bg-gray-50 rounded-lg p-4">
                            <p className="text-gray-800 mb-2">{comment.comment}</p>
                            <div className="flex flex-col space-y-2 text-sm text-gray-500">
                              <div className="flex justify-between">
                                <span>{formatDate(comment.date)}</span>
                                <span className="capitalize">{comment.shift} Shift</span>
                              </div>
                              <div className="flex justify-between">
                                <span><strong>Division Code:</strong> {comment.divisionCode}</span>
                                <span><strong>Interviewee:</strong> {comment.intervieweeEmail}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default SurveyResults;