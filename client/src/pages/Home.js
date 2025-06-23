import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  const location = useLocation();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [activeIndex, setActiveIndex] = useState(null);

  const tracks = [
    {
      title: 'Productivity',
      description: 'Build tools that help people work smarter, live healthier, and learn better in school, the workplace, and everyday life. Empower people to do more in less time.'
    },
    {
      title: 'Sustainability',
      description: 'Develop solutions for a greener future, from fighting climate change to improving public health. Think global impact, local action, and tech that drives real social good.'
    },
    {
      title: 'Entertainment',
      description: 'Create the next generation of fun—whether it\'s games, social platforms, or immersive experiences. Redefine how people play, connect, and express themselves.'
    },
    {
      title: 'Emerging Tech',
      description: 'Experiment with cutting-edge technology like AI/ML, autonomous systems, spatial computing, XR (VR/AR). Build the unexpected and shape what\'s next.'
    }
  ];

  const faqs = [
    {
      question: 'What is DivHacks?',
      answer: 'Our hackathon is an awesome 36-hour long in-person event hosted at Columbia University where people come together to design something new and bring it to life! There will be lots of learning and workshops, fun games, speakers, and prizes for you to enjoy throughout the event!'
    },
    {
      question: 'Who can attend DivHacks?',
      answer: 'DivHacks welcomes anyone who is currently a college student, both undergraduate or graduate! We are trying to provide a safe and empowering space for students who identify as part of an underrepresented group in tech, but we welcome everyone who feels they would benefit from this type of space! If you feel this hackathon in not right for you as a hacker, but you would like to participate in some other way as a mentor, workshop leader, or volunteer, please contact us!'
    },
    {
      question: 'Do I need prior experience?',
      answer: 'Not at all! You do not have to have any experience or even be a CS major. DivHacks welcomes people of all skill levels, and that includes those who are interested in learning. Throughout the hackathon, there will be workshops aimed towards beginners in different areas including workshops for those with no prior programming experience at all. This year, we especially hope to focus on creating tracks that even people without any experience can leave the event with a project!'
    },
    {
      question: 'Will there be food and swag?',
      answer: 'Yes! We have organized catering for all participants, and swag will be available at booths set up onsite!'
    },
    {
      question: 'Do I have to submit a project?',
      answer: 'Project submissions are not required, but highly encouraged. It\'s a great opportunity to leave the hackathon with a complete project and get feedback.'
    },
    {
      question: 'Can I volunteer to help out?',
      answer: 'Yes! If you want to be a mentor, lead a workshop, or help out elsewhere, please apply!'
    },
    {
      question: 'I have other questions...',
      answer: 'Please email us at cu.divhacks@gmail.com if you have any additional questions!'
    }
  ];

  useEffect(() => {
    const targetDate = new Date('2025-10-04T00:00:00');

    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Handle hash navigation
  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.substring(1); // Remove the # symbol
      const element = document.getElementById(sectionId);
      if (element) {
        // Add a small delay to ensure the page is fully loaded
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location.hash]);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      {/* Landing Section */}
      <div className="row section" id="home">
        <div id="landing-title">
          <h1>
            <b>DIVHACKS 2025</b>
          </h1>
          <h2 id="landing">OCTOBER 4-5TH</h2>
          <div className="countdown-container">
            <div id="clock-container">
              <ul>
                <li><span id="days">{timeLeft.days}</span><span className="label">days</span></li>
                <li><span id="hours">{timeLeft.hours}</span><span className="label">hours</span></li>
                <li><span id="minutes">{timeLeft.minutes}</span><span className="label">minutes</span></li>
                <li><span id="seconds">{timeLeft.seconds}</span><span className="label">seconds</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="row-section" id="about">
        <h2>
          <b>ABOUT <br />DIVHACKS</b>
        </h2>
        <div className="card" id="about-text">
          <p>
            <span className="highlight">DivHacks</span>, founded in 2017, is Columbia University's premier student-led
            annual diversity hackathon. Over the past seven years, DivHacks has
            welcomed attendees from all over the tri-state area. We strive to create
            an empowering and inspirational space for students who are historically
            underrepresented in the tech industry. Our goal is an experience that
            not only reimagines what diversity should look like in the tech industry
            but gives students the tools to use technology to implement change.
          </p>
        </div>

        <div className="stats-section">
          <h2>
            <b>STATS FROM 2024</b>
          </h2>
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">750+</div>
              <div className="stat-label">Applications</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">295</div>
              <div className="stat-label">Hackers</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">14</div>
              <div className="stat-label">Countries Represented</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">54</div>
              <div className="stat-label">Institutions</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">48.4%</div>
              <div className="stat-label">Female/Non-binary</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">58.6%</div>
              <div className="stat-label">Beginner Hackers</div>
            </div>
          </div>
        </div>
      </div>

      {/* Tracks Section */}
      <div className="row-section" id="tracks">
        <div className="tracks-section">
          <h2>
            <b>TRACKS</b>
          </h2>
          <div className="tracks-grid">
            {tracks.map((track, index) => (
              <div className="flip-card" key={index}>
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <div className="track-title">{track.title}</div>
                  </div>
                  <div className="flip-card-back">
                    <div className="track-description">{track.description}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="row-section" id="faq">
        <div className="card" id="about-text">
          <h2>
            <b>FREQUENTLY ASKED QUESTIONS</b>
          </h2>
          <div className="wrapper">
            {faqs.map((faq, index) => (
              <div className="faq" key={index}>
                <button 
                  className={`accordion ${activeIndex === index ? 'active' : ''}`}
                  onClick={() => toggleAccordion(index)}
                >
                  {faq.question}
                  <i className="fa-solid fa-chevron-down"></i>
                </button>
                <div 
                  className="panel"
                  style={{ 
                    maxHeight: activeIndex === index ? '1000px' : '0',
                    padding: activeIndex === index ? '1rem' : '0 1rem'
                  }}
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home; 