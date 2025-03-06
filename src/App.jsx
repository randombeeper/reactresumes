import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import DirectoryPage from '/src/pages/Directory';
import Resume from './components/Resume'

const resumes = [
  {
    name: 'Jane Doe',
    profession: 'Software Engineer',
    profile: 'Innovative and detail-oriented software engineer with 5+ years of experience building scalable web applications. Expertise in front-end development and cloud-based solutions..',
    experiences: [
      {
        title: 'Front-End Engineer',
        company: 'Tech Solutions',
        location: 'Denver, CO',
        startDate: 'Jan 2020',
        endDate: 'Present',
        accomplishments: [
          'Developed and maintained React-based applications with over 100k monthly users.',
          'Implemented CI/CD pipelines, reducing deployment time by 40%.'
        ]
      },
      {
        title: 'Software Developer Intern',
        company: 'NextGen Software',
        location: 'Boulder, CO',
        startDate: 'May 2019',
        endDate: 'Dec 2019',
        accomplishments: [
          'Built reusable UI components and optimized API integrations.'
        ]
      }
    ],
    education: [
      {
        title: 'BSc in Computer Science',
        school: 'University of Colorado',
        yearGraduated: 2019
      }
    ],
    headshot: '/src/assets/jane-doe.jpeg'
  },
  {
    name: 'Jim Bob',
    profession: 'Customer Success',
    profile: 'Dynamic and customer-focused VP of Customer Success with 10+ years of experience building and leading high-performing teams. Skilled in client retention strategies, customer advocacy, and driving revenue growth through exceptional service.',
    experiences: [
      {
        title: 'Front-End Engineer',
        company: 'Tech Solutions',
        location: 'Denver, CO',
        startDate: 'Jan 2020',
        endDate: 'Present',
        accomplishments: [
          'Developed and maintained React-based applications with over 100k monthly users.',
          'Implemented CI/CD pipelines, reducing deployment time by 40%.'
        ]
      },
      {
        title: 'Software Developer Intern',
        company: 'NextGen Software',
        location: 'Boulder, CO',
        startDate: 'May 2019',
        endDate: 'Dec 2019',
        accomplishments: [
          'Built reusable UI components and optimized API integrations.'
        ]
      }
    ],
    education: [
      {
        title: 'BSc in Computer Science',
        school: 'University of Colorado',
        yearGraduated: 2019
      }
    ],
    headshot: '/src/assets/jim-bob.jpeg'
  },
];

function App() {
  return (
    <Router>
      <div className="app-container">
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
    <div>
      <h3>This is the greatest and best resume directory page on the internet.</h3>
      <h4>Seach Box TBD</h4>
      {/* Add additional home content here */}
    </div>
  );
}

export default App
