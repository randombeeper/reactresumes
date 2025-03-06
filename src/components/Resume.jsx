
import { useState } from "react";

function Resume(props) {
    const resume = props.resume

    const name = resume.name;
    const profile = resume.profile;
    const headshot = resume.headshot;

    return (
        <div className="resume">
        <h2>{resume.name}</h2>
        <h3>{resume.profile}</h3>
        <img src={resume.headshot} alt={`${resume.name}'s headshot`} className="headshot" />
  
        <h3>Experience</h3>
        {resume.experiences.map((exp, index) => (
          <div key={index} className="experience">
            <h4>{exp.title} at {exp.company}</h4>
            <p>{exp.location} | {exp.startDate} - {exp.endDate}</p>
            <ul>
              {exp.accomplishments.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
  
        <h3>Education</h3>
        {resume.education.map((edu, index) => (
          <div key={index} className="education">
            <h4>{edu.title}</h4>
            <p>{edu.school} - Graduated {edu.yearGraduated}</p>
          </div>
        ))}
      </div>
    );
}

export default Resume;