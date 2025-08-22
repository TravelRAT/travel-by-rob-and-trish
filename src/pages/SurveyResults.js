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
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Data processing functions
  const getQuestionStats = () => {
    const stats = {};
    results.forEach(response => {
      Object.entries(response.questions).forEach(([question, data]) => {
        if (!stats[question]) {
          stats[question] = { checked: 0, total: 0, comments: [] };
        }
        if (data.checked) {
          stats[question].checked++;
        }
        if (data.comment) {
          stats[question].comments.push({
            comment: data.comment,
            date: response.timestamp,
            shift: response.shift
          });
        }
        stats[question].total++;
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

  // Chart data
  const questionChartData = {
    // Reverse arrays to show most reported issues at top
    labels: Object.keys(getQuestionStats()).reverse(),
    datasets: [
      {
        label: 'Issues Reported',
        data: Object.values(getQuestionStats()).map(stat => stat.checked).reverse(),
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

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

  const stats = getQuestionStats();

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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Response Distribution</h2>
              <div className="h-64">
                <Pie data={shiftChartData} options={{ maintainAspectRatio: false }} />
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Issues by Category</h2>
              <div className="h-96">
                <Bar 
                  data={questionChartData} 
                  options={{
                    maintainAspectRatio: false,
                    indexAxis: 'y',
                    scales: {
                      x: {
                        beginAtZero: true,
                        ticks: {
                          stepSize: 1
                        }
                      },
                      y: {
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
                        display: false
                      },
                      tooltip: {
                        callbacks: {
                          title: function(context) {
                            // Show full text in tooltip
                            return context[0].label;
                          }
                        }
                      }
                    }
                  }} 
                />
              </div>
            </div>
          </div>

          {/* Detailed Results */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-6">Detailed Results</h2>
            
            {Object.entries(stats).map(([question, data]) => (
              <div key={question} className="mb-8 border-b pb-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-medium text-gray-900">{question}</h3>
                  <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded">
                    {data.checked} / {data.total} reported
                  </span>
                </div>
                
                {data.comments.length > 0 && (
                  <div className="space-y-4">
                    <h4 className="text-md font-medium text-gray-700">Comments:</h4>
                    {data.comments.map((comment, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-4">
                        <p className="text-gray-800 mb-2">{comment.comment}</p>
                        <div className="flex justify-between text-sm text-gray-500">
                          <span>{formatDate(comment.date)}</span>
                          <span className="capitalize">{comment.shift} Shift</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default SurveyResults;