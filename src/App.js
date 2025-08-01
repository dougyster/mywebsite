import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [experienceExpanded, setExperienceExpanded] = useState(true);
  const [projectsExpanded, setProjectsExpanded] = useState(true);

  useEffect(() => {
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDarkMode(true);
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    document.documentElement.setAttribute('data-theme', newDarkMode ? 'dark' : 'light');
    localStorage.setItem('theme', newDarkMode ? 'dark' : 'light');
  };

  const toggleExperience = () => {
    setExperienceExpanded(!experienceExpanded);
  };

  const toggleProjects = () => {
    setProjectsExpanded(!projectsExpanded);
  };

  return (
    <div className="portfolio">
      <div className="container">
        <header>
          <h1>Douglas Yang</h1>
          <div className="social-links">
            <a href="https://linkedin.com/douglasyang1" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fa-brands fa-linkedin social-icon linkedin-icon"></i>
            </a>
            <a href="https://x.com/DHCUnited" target="_blank" rel="noopener noreferrer" aria-label="Twitter/X">
              <i className="fa-brands fa-twitter social-icon x-icon"></i>
            </a>
            <a href="https://github.com/dougyster" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <i className="fa-brands fa-github social-icon github-icon"></i>
            </a>
          </div>
        </header>

        <section className="bio">
          <p>Incoming @ Meta, Alum @ Harvard CS</p>
        </section>

        <div className="divider"></div>

        <section className="experience">
          <div className="section-header" onClick={toggleExperience}>
            <h2>Previously</h2>
            <span className={`expand-icon ${experienceExpanded ? 'expanded' : 'collapsed'}`}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path d="M7.41,8.59L12,13.17l4.59-4.58L18,10l-6,6l-6-6L7.41,8.59z" />
              </svg>
            </span>
          </div>
          <div className={`section-content ${!experienceExpanded ? 'collapsed' : ''}`}>
            <ul className="experience-list">
              <li>ETL Pipeline Engineering @ Amazon</li>
              <li>Data Engineering and ML Research @ Harvard Rubin Observatory Research Group</li>
              <li>Vector Database Research @ RPS Ventures</li>
              <li>API Engineering @ Figur8 (Biotech startup from MIT)</li>
              <li>2 x Crypto hackathon winner @ EasyA </li>
            </ul>
          </div>
        </section>

        <div className="divider"></div>

        <section className="projects">
          <div className="section-header" onClick={toggleProjects}>
            <h2>Built</h2>
            <span className={`expand-icon ${projectsExpanded ? 'expanded' : 'collapsed'}`}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path d="M7.41,8.59L12,13.17l4.59-4.58L18,10l-6,6l-6-6L7.41,8.59z" />
              </svg>
            </span>
          </div>
          <div className={`section-content ${!projectsExpanded ? 'collapsed' : ''}`}>
            <ul className="projects-list">
              <li>Distributed Pre-training Data Ingestion and Processing Pipeline </li>
              <li>Data Platform for Lightning-fast Carbon Project Due Diligence - <a href="https://www.sequestor.org" target="_blank" rel="noopener noreferrer" className="highlight-link">Sequestor</a></li>
              <li>Crypto Chargeback and Escrow Protocol - <a href="https://aegis-docs.gitbook.io/aegis-protocol/" target="_blank" rel="noopener noreferrer" className="highlight-link">Aegis Protocol</a></li>
            </ul>
          </div>
        </section>

        <div className="theme-toggle-container">
          <label className="theme-toggle" htmlFor="theme-switch">
            <input
              type="checkbox"
              id="theme-switch"
              checked={darkMode}
              onChange={toggleTheme}
              aria-label="Toggle dark mode"
            />
            <span className="toggle-slider">
              <span className="toggle-icon sun">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M12,7c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5S14.76,7,12,7L12,7z M2,13h2c0.55,0,1-0.45,1-1s-0.45-1-1-1H2 c-0.55,0-1,0.45-1,1S1.45,13,2,13z M20,13h2c0.55,0,1-0.45,1-1s-0.45-1-1-1h-2c-0.55,0-1,0.45-1,1S19.45,13,20,13z M11,2v2 c0,0.55,0.45,1,1,1s1-0.45,1-1V2c0-0.55-0.45-1-1-1S11,1.45,11,2z M11,20v2c0,0.55,0.45,1,1,1s1-0.45,1-1v-2c0-0.55-0.45-1-1-1 S11,19.45,11,20z M5.99,4.58c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0 s0.39-1.03,0-1.41L5.99,4.58z M18.36,16.95c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06 c0.39,0.39,1.03,0.39,1.41,0c0.39-0.39,0.39-1.03,0-1.41L18.36,16.95z M19.42,5.99c0.39-0.39,0.39-1.03,0-1.41 c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L19.42,5.99z M7.05,18.36 c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L7.05,18.36z" />
                </svg>
              </span>
              <span className="toggle-icon moon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M9.5,2c-1.82,0-3.53,0.5-5,1.35c2.99,1.73,5,4.95,5,8.65s-2.01,6.92-5,8.65C5.97,21.5,7.68,22,9.5,22c5.52,0,10-4.48,10-10 S15.02,2,9.5,2z" />
                </svg>
              </span>
            </span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;
