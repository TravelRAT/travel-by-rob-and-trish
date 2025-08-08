import React, { useState } from 'react';
import { 
  getActivePages, 
  getExpiredPages, 
  getPagesExpiringSoon, 
  formatExpirationDate, 
  getDaysUntilExpiration,
  pageConfig 
} from '../utils/pageExpiration';

function PageExpirationAdmin() {
  const [activeTab, setActiveTab] = useState('active');
  
  const activePages = getActivePages();
  const expiredPages = getExpiredPages();
  const expiringSoon = getPagesExpiringSoon(7);

  const renderPageList = (pages, type) => {
    return (
      <div className="space-y-4">
        {Object.entries(pages).map(([path, config]) => {
          const daysUntilExpiration = getDaysUntilExpiration(config.expirationDate);
          const isExpiringSoon = daysUntilExpiration !== null && daysUntilExpiration <= 7;
          
          return (
            <div 
              key={path} 
              className={`p-4 rounded-lg border ${
                type === 'active' 
                  ? 'border-green-200 bg-green-50' 
                  : type === 'expired'
                  ? 'border-red-200 bg-red-50'
                  : 'border-yellow-200 bg-yellow-50'
              }`}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-900">{config.displayName}</h3>
                  <p className="text-sm text-gray-600">Path: {path}</p>
                  <p className="text-sm text-gray-600">
                    Expires: {formatExpirationDate(config.expirationDate)}
                  </p>
                  {daysUntilExpiration !== null && (
                    <p className={`text-sm ${
                      daysUntilExpiration <= 0 
                        ? 'text-red-600' 
                        : daysUntilExpiration <= 7 
                        ? 'text-yellow-600' 
                        : 'text-green-600'
                    }`}>
                      {daysUntilExpiration <= 0 
                        ? 'Expired' 
                        : `${daysUntilExpiration} days remaining`
                      }
                    </p>
                  )}
                </div>
                <div className="flex space-x-2">
                  {type === 'active' && isExpiringSoon && (
                    <span className="px-2 py-1 text-xs bg-yellow-100 text-yellow-800 rounded-full">
                      Expiring Soon
                    </span>
                  )}
                  {type === 'active' && (
                    <span className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">
                      Active
                    </span>
                  )}
                  {type === 'expired' && (
                    <span className="px-2 py-1 text-xs bg-red-100 text-red-800 rounded-full">
                      Expired
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Page Expiration Management</h1>
        <p className="text-gray-600">
          Monitor and manage page expiration dates. Pages with expiration dates will automatically be hidden from navigation when they expire.
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => setActiveTab('active')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'active'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Active Pages ({Object.keys(activePages).length})
          </button>
          <button
            onClick={() => setActiveTab('expiring')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'expiring'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Expiring Soon ({Object.keys(expiringSoon).length})
          </button>
          <button
            onClick={() => setActiveTab('expired')}
            className={`py-2 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'expired'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Expired Pages ({Object.keys(expiredPages).length})
          </button>
        </nav>
      </div>

      {/* Tab Content */}
      <div className="min-h-[400px]">
        {activeTab === 'active' && (
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Active Pages</h2>
            {Object.keys(activePages).length > 0 ? (
              renderPageList(activePages, 'active')
            ) : (
              <p className="text-gray-500">No active pages found.</p>
            )}
          </div>
        )}

        {activeTab === 'expiring' && (
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Pages Expiring Soon (Next 7 Days)</h2>
            {Object.keys(expiringSoon).length > 0 ? (
              renderPageList(expiringSoon, 'expiring')
            ) : (
              <p className="text-gray-500">No pages are expiring in the next 7 days.</p>
            )}
          </div>
        )}

        {activeTab === 'expired' && (
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Expired Pages</h2>
            {Object.keys(expiredPages).length > 0 ? (
              renderPageList(expiredPages, 'expired')
            ) : (
              <p className="text-gray-500">No expired pages found.</p>
            )}
          </div>
        )}
      </div>

      {/* Instructions */}
      <div className="mt-8 p-4 bg-blue-50 rounded-lg">
        <h3 className="font-semibold text-blue-900 mb-2">How to Set Expiration Dates</h3>
        <p className="text-blue-800 text-sm">
          To set expiration dates for pages, edit the <code className="bg-blue-100 px-1 rounded">pageConfig</code> object in{' '}
          <code className="bg-blue-100 px-1 rounded">src/utils/pageExpiration.js</code>. Set the <code className="bg-blue-100 px-1 rounded">expirationDate</code> property to{' '}
          a date in 'YYYY-MM-DD' format, or set it to <code className="bg-blue-100 px-1 rounded">null</code> for pages that should never expire.
        </p>
        <div className="mt-2 text-blue-800 text-sm">
          <strong>Example:</strong>
          <pre className="bg-blue-100 p-2 rounded mt-1 text-xs">
{`'/exclusive-deals': { 
  component: 'ExclusiveDeals', 
  expirationDate: '2024-12-31', // Expires Dec 31, 2024
  displayName: 'Exclusive Deals'
}`}
          </pre>
        </div>
      </div>
    </div>
  );
}

export default PageExpirationAdmin;
