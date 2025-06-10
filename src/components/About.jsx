import React from 'react';
import { personalInfo } from '../utils/data';

const About = () => {
    return (
        <section id="about" className="about">
            <div className="container">
                <div className="section-title">
                    <h2>About Me</h2>
                </div>

                <div className="about-content">
                    <div className="about-text">
                        <p>Hello! I'm Toshan Kanwar, an Data Science and Artificial Intelligence student at IIIT Naya Raipur with a strong passion for Full Stack Web Development and Machine Learning.</p>

                        <p>I specialize in building responsive and dynamic web applications that deliver real-world impact. My journey in tech started with a fascination for how systems work, which has grown into a deep interest in software engineering, machine learning and full stack development.</p>

                        <p>Beyond development, I actively engage in machine learning and other research works. I'm always eager to explore new technologies and push my limits as a developer and problem solver.</p>

                        <div className="about-details">
                            <div className="detail">
                                <span className="label"><i className="fas fa-envelope"></i> Email:</span>
                                <span className="value">{personalInfo.email}</span>
                            </div>

                            <div className="detail">
                                <span className="label"><i className="fas fa-phone"></i> Phone:</span>
                                <span className="value">{personalInfo.phone}</span>
                            </div>

                            <div className="detail">
                                <span className="label"><i className="fas fa-map-marker-alt"></i> Location:</span>
                                <span className="value">{personalInfo.location}</span>
                            </div>

                            <div className="detail">
                                <span className="label"><i className="fas fa-graduation-cap"></i> Education:</span>
                                <span className="value">B.Tech in Data Science and Artificial Intelligence</span>
                            </div>
                        </div>

                        <a href="/Toshan_s_Resume.pdf" className="btn" target="_blank" rel="noopener noreferrer">
                        <i className="fas fa-eye"></i> View Resume
                      </a>

                    </div>

                    <div className="about-stats">
                        <div className="stat-item">
                            <div className="stat-count">5+</div>
                            <div className="stat-title">Projects</div>
                        </div>

                        <div className="stat-item">
                            <div className="stat-count">100+</div>
                            <div className="stat-title">DSA Problems Solved</div>
                        </div>

                        <div className="stat-item">
                            <div className="stat-count">10+</div>
                            <div className="stat-title">Technical Skills</div>
                        </div>

                        <div className="stat-item">
                            <div className="stat-count">3+</div>
                            <div className="stat-title">Years of Coding</div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .about {
          background-color: #f9fafb;
        }
        
        .about-content {
          display: grid;
          grid-template-columns: 3fr 2fr;
          gap: 3rem;
        }
        
        .about-text p {
          margin-bottom: 1.5rem;
          font-size: 1.1rem;
        }
        
        .about-details {
          margin: 2rem 0;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }
        
        .detail {
          display: flex;
          flex-direction: column;
          margin-bottom: 1rem;
        }
        
        .label {
          font-weight: 600;
          color: var(--primary);
          margin-bottom: 0.3rem;
        }
        
        .label i {
          margin-right: 0.5rem;
        }
        
        .about-stats {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }
        
        .stat-item {
          background-color: white;
          border-radius: 8px;
          padding: 1.5rem;
          text-align: center;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
          border-bottom: 3px solid var(--primary);
        }
        
        .stat-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 15px rgba(0, 0, 0, 0.05);
        }
        
        .stat-count {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--primary);
          margin-bottom: 0.5rem;
        }
        
        .stat-title {
          color: var(--gray);
        }
        
        @media screen and (max-width: 992px) {
          .about-content {
            grid-template-columns: 1fr;
          }
          
          .about-details {
            grid-template-columns: 1fr;
          }
        }
        
        @media screen and (max-width: 576px) {
          .about-stats {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
        </section>
    );
};

export default About;