import React from 'react';
import { Link } from 'react-router-dom'; // You can use Link for navigation if you implement routing

const Directory = ({resumes}) => {

  return (
    <div>
      <ul>
        {resumes.map((resume, index) => (
          <li key={index}>
            <Link to={`/resume/${index}`}>{resume.name}</Link> {/* If you want routing */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Directory;