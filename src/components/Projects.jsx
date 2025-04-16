import React, { useState } from 'react';
import { projects } from '../utils/data';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);
  
  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-title">
          <h2>My Projects</h2>
        </div>
        
        <div className="filter-buttons">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button 
            className={`filter-btn ${filter === 'development' ? 'active' : ''}`}
            onClick={() => setFilter('development')}
          >
            Development
          </button>
          <button 
            className={`filter-btn ${filter === 'ml' ? 'active' : ''}`}
            onClick={() => setFilter('ml')}
          >
            ML
          </button>
        </div>
        
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-img">
                <img src={`src/assets/images/${project.image}`} alt={project.title} />
                <div className="overlay">
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" title="GitHub">
                      <i className="fab fa-github"></i>
                    </a>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" title="Live Demo">
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-stack">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        .projects {
          background-color: #f9fafb;
        }
        
        .filter-buttons {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 2rem;
        }
        
        .filter-btn {
          background: none;
          border: none;
          padding: 0.5rem 1rem;
          font-size: 1rem;
          cursor: pointer;
          border-radius: 4px;
          transition: all 0.3s ease;
          color: var(--gray);
        }
        
        .filter-btn:hover {
          color: var(--primary);
        }
        
        .filter-btn.active {
          background-color: var(--primary);
          color: white;
        }
        
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 2rem;
        }
        
        .project-card {
          background-color: white;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
        }
        
        .project-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }
        
        .project-img {
          position: relative;
          overflow: hidden;
          height: 200px;
        }
        
        .project-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        
        .project-card:hover .project-img img {
          transform: scale(1.1);
        }
        
        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.7);
          display: flex;
          justify-content: center;
          align-items: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .project-card:hover .overlay {
          opacity: 1;
        }
        
        .project-links {
          display: flex;
          gap: 1rem;
        }
        
        .project-links a {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: white;
          color: var(--dark);
          font-size: 1.2rem;
          transition: all 0.3s ease;
        }
        
        .project-links a:hover {
          background-color: var(--primary);
          color: white;
          transform: translateY(-5px);
        }
        
        .project-info {
          padding: 1.5rem;
        }
        .project-info h3 {
          margin-bottom: 0.5rem;
          color: var(--dark);
        }
        
        .project-info p {
          color: var(--gray);
          margin-bottom: 1rem;
        }
        
        .tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        
        .tech-tag {
          display: inline-block;
          padding: 0.2rem 0.5rem;
          background-color: var(--gray-light);
          border-radius: 4px;
          font-size: 0.8rem;
          color: var(--gray);
        }
        
        @media screen and (max-width: 768px) {
          .projects-grid {
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          }
          
          .filter-buttons {
            flex-wrap: wrap;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
