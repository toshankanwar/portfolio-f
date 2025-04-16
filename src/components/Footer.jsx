import React from 'react';
import { personalInfo, socialLinks } from '../utils/data';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h3><span>T</span>oshan<span> K</span>anwar</h3> 
            <p>{personalInfo.title}</p>
          </div>
          
          <div className="footer-links">
            <div className="link-group">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#education">Education</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            
            <div className="link-group">
              <h4>Connect</h4>
              <div className="social-links">
                {socialLinks.map((link, index) => (
                  <a 
                    key={index} 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={link.name}
                  >
                    <i className={link.icon}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="copyright">
          <p>&copy; {currentYear} {personalInfo.name}. All Rights Reserved.</p>
        </div>
      </div>
      
      <style jsx>{`
        .footer {
          background-color: var(--dark);
          color: white;
          padding: 4rem 0 2rem;
        }
        
        .footer-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          margin-bottom: 3rem;
        }
        
        .footer-logo h3 {
          font-size: 1.8rem;
          margin-bottom: 0.5rem;
        }
        
        .footer-logo span {
          color: var(--primary);
        }
        
        .footer-logo p {
          color: var(--gray-light);
        }
        
        .footer-links {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }
        
        .link-group h4 {
          margin-bottom: 1.5rem;
          position: relative;
          padding-bottom: 0.5rem;
        }
        
        .link-group h4::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          height: 2px;
          width: 30px;
          background-color: var(--primary);
        }
        
        .link-group ul {
          list-style: none;
        }
        
        .link-group li {
          margin-bottom: 0.8rem;
        }
        
        .link-group a {
          color: var(--gray-light);
          transition: all 0.3s ease;
        }
        
        .link-group a:hover {
          color: var(--primary);
          padding-left: 5px;
        }
        
        .social-links {
          display: flex;
          gap: 1rem;
        }
        
        .social-links a {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.1);
          color: white;
          font-size: 1.2rem;
          transition: all 0.3s ease;
        }
        
        .social-links a:hover {
          background-color: var(--primary);
          transform: translateY(-5px);
        }
        
        .copyright {
          text-align: center;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          color: var(--gray-light);
        }
        
        @media screen and (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
          }
          
          .footer-links {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;