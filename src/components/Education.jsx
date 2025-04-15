import React from 'react';
import { education } from '../utils/data';

const Education = () => {
  return (
    <section id="education" className="education">
      <div className="container">
        <div className="section-title">
          <h2>Education</h2>
        </div>
        
        <div className="timeline">
          {education.map((edu, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-icon">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <div className="timeline-content">
                <div className="time-period">{edu.period}</div>
                <h3>{edu.institution}</h3>
                <p>{edu.degree}</p>
                <p className="field">{edu.field}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        .education {
          background-color: white;
        }
        
        .timeline {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
          padding: 2rem 0;
        }
        
        .timeline::before {
          content: '';
          position: absolute;
          top: 0;
          left: 18px;
          height: 100%;
          width: 2px;
          background-color: var(--primary);
        }
        
        .timeline-item {
          position: relative;
          padding-left: 50px;
          margin-bottom: 3rem;
        }
        
        .timeline-item:last-child {
          margin-bottom: 0;
        }
        
        .timeline-icon {
          position: absolute;
          left: 0;
          top: 0;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background-color: var(--primary);
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
          font-size: 1rem;
        }
        
        .timeline-content {
          background-color: #f8fafc;
          border-radius: 8px;
          padding: 1.5rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
        }
        
        .timeline-content:hover {
          transform: translateX(10px);
          box-shadow: 0 10px 15px rgba(0, 0, 0, 0.05);
        }
        
        .time-period {
          display: inline-block;
          padding: 0.3rem 0.8rem;
          background-color: var(--primary);
          color: white;
          border-radius: 4px;
          font-size: 0.9rem;
          margin-bottom: 1rem;
        }
        
        .timeline-content h3 {
          color: var(--dark);
          margin-bottom: 0.5rem;
        }
        
        .timeline-content p {
          color: var(--gray);
          margin-bottom: 0.5rem;
        }
        
        .field {
          font-style: italic;
        }
      `}</style>
    </section>
  );
};

export default Education;