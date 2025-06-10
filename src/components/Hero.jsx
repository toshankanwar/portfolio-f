import React from 'react';
import { personalInfo, socialLinks } from '../utils/data';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="container hero-container">
                <div className="hero-content">
                    <h1>
                        Hi, I'm <span className="name">{personalInfo.name}</span>
                    </h1>
                    <h2 className="title">
                        <TypeAnimation
                            sequence={[
                                'Full Stack Developer',
                                1000,
                                'ML Engineer',
                                1000,
                                'Data Science Enthusiasm',
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </h2>
                    <p className="bio">{personalInfo.bio}</p>

                    <div className="hero-btns">
                        <a href="#projects" className="btn">View Projects</a>
                        <a href="#contact" className="btn btn-outline">Contact Me</a>
                    </div>

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

                <div className="hero-image">
                    <div className="image-container">
                        <img src="/image.jpg" alt={personalInfo.name} />
                    </div>
                </div>
            </div>

            <style jsx>{`
        .hero {
          padding: 8rem 0 5rem;
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
          min-height: 100vh;
          display: flex;
          align-items: center;
        }
        
        .hero-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          align-items: center;
        }
        
        .hero-content {
          padding-right: 2rem;
        }
        
        .hero-content h1 {
          font-size: 3rem;
          margin-bottom: 0.5rem;
        }
        
        .name {
          color: var(--primary);
        }
        
        .title {
          font-size: 2rem;
          margin-bottom: 1.5rem;
          color: var(--gray);
        }
        
        .bio {
          font-size: 1.1rem;
          margin-bottom: 2rem;
        }
        
        .hero-btns {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
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
          background-color: var(--primary);
          color: white;
          font-size: 1.2rem;
          transition: all 0.3s ease;
        }
        
        .social-links a:hover {
          transform: translateY(-5px);
          background-color: var(--primary-dark);
        }
        
        .image-container {
          width: 400px;
          height: 400px;
          border-radius: 50%;
          overflow: hidden;
          border: 5px solid white;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
          margin: 0 auto;
          justify-content: center;
          align-items: center;
        }
        
        
        .image-container img {
          width: 100%;
          height: 100%;
          object-fit:cover;
        }
        
        @media screen and (max-width: 992px) {
          .image-container {
            width: 350px;
            height: 350px;
          }
        }
        
        @media screen and (max-width: 768px) {
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
          }
          
          .hero-content {
            padding-right: 0;
            order: 2;
          }
          
          .hero-image {
            order: 1;
            margin-bottom: 2rem;
          }
          
          .image-container {
            width: 250px;
            height: 250px;
          }
          
          .hero-btns {
            justify-content: center;
          }
          
          .social-links {
            justify-content: center;
          }
        }
          
      `}</style>
        </section>
    );
};

export default Hero;