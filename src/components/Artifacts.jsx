import React, { useState } from 'react';
import './Artifacts.css';

const Artifacts = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [artifacts] = useState([
    {
      id: 1,
      name: 'Presentation.pdf',
      type: 'pdf',
      size: '2.4 MB',
      date: '2024-04-17',
    },
    {
      id: 2,
      name: 'CustomerSummary.xlsx',
      type: 'excel',
      size: '1.8 MB',
      date: '2024-04-16',
    },
    {
      id: 3,
      name: 'Persona.png',
      type: 'image',
      size: '756 KB',
      date: '2024-04-15',
    },
  ]);

  const filteredArtifacts = artifacts.filter((artifact) =>
    artifact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getFileIcon = (type) => {
    switch (type) {
      case 'pdf':
        return '📄';
      case 'excel':
        return '📊';
      case 'image':
        return '🖼️';
      default:
        return '📁';
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const handleDownload = (artifact) => {
    // In a real application, this would trigger a file download
    console.log(`Downloading ${artifact.name}`);
  };

  return (
    <div className="artifacts-container">
      <div className="artifacts-header">
        <h1>Artifacts</h1>
        <p className="subtitle">
          Access and download your sales resources, presentations, and data insights.
        </p>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search artifacts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <span className="search-icon">🔍</span>
        </div>
      </div>

      <div className="artifacts-grid">
        {filteredArtifacts.map((artifact) => (
          <div key={artifact.id} className="artifact-card">
            <div className="artifact-icon">{getFileIcon(artifact.type)}</div>
            <div className="artifact-info">
              <h3>{artifact.name}</h3>
              <div className="artifact-meta">
                <span>{artifact.size}</span>
                <span>•</span>
                <span>{formatDate(artifact.date)}</span>
              </div>
            </div>
            <button
              className="download-button"
              onClick={() => handleDownload(artifact)}
            >
              Download
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Artifacts; 