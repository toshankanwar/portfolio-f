import React from 'react';
import { skills } from '../utils/data';

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-title">
          <h2>My Skills</h2>
        </div>
        
        <div className="skills-container">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <h3>{skill.category}</h3>
              <div className="skill-items">
                {skill.items.map((item, idx) => (
                  <span key={idx} className="skill-item">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        .skills {
          background-color: white;
        }
        
        .skills-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }
        
        .skill-card {
          background-color: #f8fafc;
          border-radius: 8px;
          padding: 1.5rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
        }
        
        .skill-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 15px rgba(0, 0, 0, 0.05);
        }
        
        .skill-card h3 {
          color: var(--primary);
          margin-bottom: 1rem;
          position: relative;
          padding-bottom: 0.5rem;
        }
        
        .skill-card h3::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          height: 2px;
          width: 30px;
          background-color: var(--primary);
        }
        
        .skill-items {
          display: flex;
          flex-wrap: wrap;
          gap: 0.8rem;
        }
        
        .skill-item {
          display: inline-block;
          padding: 0.4rem 0.8rem;
          background-color: white;
          border-radius: 4px;
          border: 1px solid var(--gray-light);
          transition: all 0.3s ease;
        }
        
        .skill-item:hover {
          background-color: var(--primary);
          color: white;
          border-color: var(--primary);
        }
        
        @media screen and (max-width: 768px) {
          .skills-container {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;