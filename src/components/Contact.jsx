import React, { useState } from 'react';
import { personalInfo } from '../utils/data';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formPayload = {
      access_key: 'b8a13edd-5d10-492a-992f-40dc5acd7849',
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formPayload)
      });

      const result = await response.json();

      if (result.success) {
        setFormStatus({
          submitted: true,
          success: true,
          message: 'Thank you! Your message has been sent successfully!'
        });
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error(result.message || 'Something went wrong.');
      }
    } catch (error) {
      setFormStatus({
        submitted: true,
        success: false,
        message: error.message || 'Failed to send your message. Please try again.'
      });
    }

    setTimeout(() => {
      setFormStatus({
        submitted: false,
        success: false,
        message: ''
      });
    }, 5000);
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <h2>Contact Me</h2>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <div className="icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="details">
                <h3>Email</h3>
                <p>{personalInfo.email}</p>
              </div>
            </div>

            <div className="info-item">
              <div className="icon">
                <i className="fas fa-phone"></i>
              </div>
              <div className="details">
                <h3>Phone</h3>
                <p>{personalInfo.phone}</p>
              </div>
            </div>

            <div className="info-item">
              <div className="icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="details">
                <h3>Location</h3>
                <p>{personalInfo.location}</p>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn">
                Send Message <i className="fas fa-paper-plane"></i>
              </button>

              {formStatus.submitted && (
                <div className={`form-message ${formStatus.success ? 'success' : 'error'}`}>
                  {formStatus.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact {
          background-color: #f9fafb;
        }

        .contact-content {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 3rem;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .info-item {
          display: flex;
          gap: 1rem;
          background-color: white;
          border-radius: 8px;
          padding: 1.5rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
        }

        .info-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 15px rgba(0, 0, 0, 0.05);
        }

        .icon {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background-color: var(--primary);
          color: white;
          font-size: 1.2rem;
        }

        .details h3 {
          color: var(--dark);
          margin-bottom: 0.5rem;
        }

        .details p {
          color: var(--gray);
        }

        .contact-form {
          background-color: white;
          border-radius: 8px;
          padding: 2rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          color: var(--dark);
          font-weight: 500;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 0.8rem;
          border: 1px solid var(--gray-light);
          border-radius: 4px;
          font-family: var(--font-sans);
          transition: all 0.3s ease;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--primary);
          box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.2);
        }

        .form-message {
          margin-top: 1rem;
          padding: 0.8rem;
          border-radius: 4px;
        }

        .form-message.success {
          background-color: rgba(34, 197, 94, 0.1);
          color: var(--success);
          border: 1px solid var(--success);
        }

        .form-message.error {
          background-color: rgba(239, 68, 68, 0.1);
          color: var(--danger);
          border: 1px solid var(--danger);
        }

        @media screen and (max-width: 992px) {
          .contact-content {
            grid-template-columns: 1fr;
          }

          .contact-info {
            order: 2;
          }

          .contact-form {
            order: 1;
            margin-bottom: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
