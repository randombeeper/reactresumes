import { useState } from 'react'

import './App.css'
import "@docsearch/css"; // Import DocSearch CSS
import { DocSearch } from "@docsearch/react";

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import DirectoryPage from '/src/pages/Directory';
import Resume from './components/Resume'
import { resumes } from "./resume_data";


function App() {

  return (
    <Router>
      
      {/* The entire app top to bottom */}
      <div className="app-container">

        {/* DocSearch! */}
        <div className="search-container">
          <DocSearch
            appId="9IZVEP21NM"
            apiKey="dcc39695f720810bceaef26385fed4e4"
            indexName="reactresumes"
            insights="true"
          />
        </div>

        {/* Navigation Links */}
        <nav className="navbar">
          <a href="/" className="nav-link">Home</a>
          <a href="/directory" className="nav-link">Resume Directory</a>
        </nav>


        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/directory" element={<DirectoryPage resumes={resumes} />} />
          <Route
            path="/resume/:id"
            element={<ResumeDetail resumes={resumes} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

const ResumeDetail = ({ resumes }) => {
  const resumeId = window.location.pathname.split('/')[2]; // Get the resume ID from the URL
  const resume = resumes[resumeId];
  return <Resume resume={resume} />;
};

function Home() {
  return (
    <div className="home-content">
      <h3>This is the greatest and best resume directory page on the internet.</h3>
      
      {/* Add additional home content here */}
    </div>
  );
}

export default App
