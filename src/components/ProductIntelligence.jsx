import React, { useState } from 'react';
import './ProductIntelligence.css';

const ProductIntelligence = () => {
  const [productOverview, setProductOverview] = useState('');
  const [customerProfile, setCustomerProfile] = useState('');
  const [activeTab, setActiveTab] = useState('write');

  const handleSubmitOverview = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Product Overview:', productOverview);
  };

  const handleSubmitProfile = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Customer Profile:', customerProfile);
  };

  const handleFileUpload = (e, type) => {
    const file = e.target.files[0];
    // Here you would typically handle file upload
    console.log(`Uploading ${type}:`, file);
  };

  const handleUrlSubmit = (e) => {
    e.preventDefault();
    const url = e.target.url.value;
    // Here you would typically handle URL processing
    console.log('Processing URL:', url);
  };

  return (
    <div className="product-intelligence">
      <div className="product-section">
        <h2>PRODUCT OVERVIEW</h2>
        <div className="input-tabs">
          <button
            className={`tab ${activeTab === 'write' ? 'active' : ''}`}
            onClick={() => setActiveTab('write')}
          >
            Write
          </button>
          <button
            className={`tab ${activeTab === 'upload' ? 'active' : ''}`}
            onClick={() => setActiveTab('upload')}
          >
            Upload Document
          </button>
          <button
            className={`tab ${activeTab === 'url' ? 'active' : ''}`}
            onClick={() => setActiveTab('url')}
          >
            Provide URL
          </button>
        </div>

        {activeTab === 'write' && (
          <form onSubmit={handleSubmitOverview}>
            <textarea
              value={productOverview}
              onChange={(e) => setProductOverview(e.target.value)}
              placeholder="Enter your product overview here..."
            />
            <button type="submit">Submit</button>
          </form>
        )}

        {activeTab === 'upload' && (
          <div className="upload-section">
            <input
              type="file"
              onChange={(e) => handleFileUpload(e, 'overview')}
              accept=".pdf,.doc,.docx,.txt"
            />
          </div>
        )}

        {activeTab === 'url' && (
          <form onSubmit={handleUrlSubmit}>
            <input type="url" name="url" placeholder="Enter URL" required />
            <button type="submit">Process URL</button>
          </form>
        )}
      </div>

      <div className="customer-section">
        <h2>IDEAL CUSTOMER PROFILE</h2>
        <div className="input-options">
          <div className="option">
            <h3>Write</h3>
            <form onSubmit={handleSubmitProfile}>
              <textarea
                value={customerProfile}
                onChange={(e) => setCustomerProfile(e.target.value)}
                placeholder="Enter your ideal customer profile here..."
              />
              <button type="submit">Submit</button>
            </form>
          </div>
          <div className="option">
            <h3>Upload Document</h3>
            <input
              type="file"
              onChange={(e) => handleFileUpload(e, 'profile')}
              accept=".pdf,.doc,.docx,.txt"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductIntelligence; 