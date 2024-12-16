import React, { useEffect, useState } from 'react';
import Table from './components/Table.js';
import './styles.css';

const App = () => {
  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await fetch(
        'https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json'
      );
      const data = await response.json();
      setProjects(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handlePageChange = (direction) => {
    if (direction === 'next' && currentPage * recordsPerPage < projects.length) {
      setCurrentPage(currentPage + 1);
    } else if (direction === 'prev' && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const startIndex = (currentPage - 1) * recordsPerPage;
  const currentRecords = projects.slice(startIndex, startIndex + recordsPerPage);

  return (
    <div id="app">
      <h1>Highly Rated Kickstarter Projects</h1>
      <Table data={currentRecords} startIndex={startIndex} />
      <div id="pagination">
        <button id="prev" onClick={() => handlePageChange('prev')} disabled={currentPage === 1}>
          Previous
        </button>
        <span id="page-info">
          Page {currentPage} of {Math.ceil(projects.length / recordsPerPage)}
        </span>
        <button
          id="next"
          onClick={() => handlePageChange('next')}
          disabled={currentPage * recordsPerPage >= projects.length}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
