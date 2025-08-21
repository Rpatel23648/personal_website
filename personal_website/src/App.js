import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [expandedSections, setExpandedSections] = useState({
    experience: false,
    education: false,
    skills: false
  });

  const fullText = "Hello, I'm Romil Patel! 👋";

  // Typing animation effect
  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  // Cursor blink effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(!showCursor);
    }, 500);
    return () => clearInterval(interval);
  }, [showCursor]);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const toggleSection = (sectionName) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionName]: !prev[sectionName]
    }));
  };

  // Computer Engineering focused skills
  const skills = [
    { name: 'Python', level: 90, color: '#3776ab' },
    { name: 'C/C++', level: 85, color: '#00599c' },
    { name: 'Verilog/VHDL', level: 75, color: '#ff6b35' },
    { name: 'JavaScript', level: 65, color: '#f7df1e' },
    { name: 'React', level: 75, color: '#61dafb' },
    { name: 'TensorFlow/PyTorch', level: 50, color: '#ff6f00' },
    { name: 'FPGA Design', level: 65, color: '#ff6600' },
    { name: 'Git/Linux', level: 85, color: '#f05032' },
    { name: 'Java', level: 70, color: '#0076a8' },
    { name: 'RISC-V Assembly', level: 80, color: '#0076a8' },
    { name: 'C#', level: 60, color: '#0076a8' },
    { name: 'Arduino/Raspberry Pi', level: 80, color: '#00979d' },
    { name: 'MATLAB', level: 40, color: '#0076a8' }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <div className="content">
            <div className="typing-container">
              <h1 className="typing-text">
                {typedText}
                <span className={`cursor ${showCursor ? 'visible' : ''}`}>|</span>
              </h1>
              <div className="profile-image-container">
                <img
                  src="/IMG_9411.JPEG"
                  alt="Romil Patel"
                  className="profile-image"
                />
              </div>
            </div>

            <p className="intro-text">Welcome to my portfolio, where innovation meets expertise. As a Computer Engineering student at Georgia Tech, I brings a unique blend of skills in Digital Design, Hardware/Software Programming, and Artificial Intelligence. With a proven track record of enhancing operational efficiency and developing cutting-edge projects, I am eager to contribute to impactful software or hardware engineering initiatives. Explore my journey through technology and problem-solving here!.</p>

            <div className="hero-section">
              <h2>🔬 What I Do</h2>
              <p>Bridging hardware and software to create intelligent systems</p>
              <div className="tech-stack">
                <span className="tech-item">🔧 Embedded Systems</span>
                <span className="tech-item">🤖 AI/ML Research</span>
                <span className="tech-item">⚡ Digital Design</span>
                <span className="tech-item">💻 Software Development</span>
                <span className="tech-item">🔌 FPGA Programming</span>
              </div>
            </div>

            <div className="goals-section">
              <h2>🎯 My Goals</h2>
              <div className="goals-container">
                <div className="goal-category">
                  <h3>🚀 Long-Term Goals</h3>
                  <div className="goal-item long-term">
                    <span className="goal-icon">🔧</span>
                    <div className="goal-content">
                      <strong>Career Aspiration</strong>
                      <p>Join an organization that is driving mass innovation in the chip design world that will let me integrate AI/ML into the hardware world or to work on software engineering projects that will help me gain more experience in the software world to make a significant impact.</p>
                    </div>
                  </div>
                  <div className="goal-item long-term">
                    <span className="goal-icon">🏢</span>
                    <div className="goal-content">
                      <strong>Industry Impact</strong>
                      <p>Contribute to next-generation computing architectures that push the boundaries of what's possible in semiconductor technology.</p>
                    </div>
                  </div>

                </div>

                <div className="goal-category">
                  <h3>📚 Short-Term Goals</h3>
                  <div className="goal-item short-term">
                    <span className="goal-icon">🤖</span>
                    <div className="goal-content">
                      <strong>AI/ML Research</strong>
                      <p>Develop expertise in neural network acceleration and hardware-software co-design for AI applications throughout my time at Georgia Tech's OLIVES Lab.</p>
                    </div>
                  </div>
                  <div className="goal-item short-term">
                    <span className="goal-icon">⚡</span>
                    <div className="goal-content">
                      <strong>Digital Design</strong>
                      <p>Master VLSI design, processor architecture, and memory systems through coursework, projects, internships and clubs available at Georgia Tech.</p>
                    </div>
                  </div>
                  <div className="goal-item short-term">
                    <span className="goal-icon">💻</span>
                    <div className="goal-content">
                      <strong>Software Development</strong>
                      <p>Build practical software development skills to complement hardware engineering expertise to give myself more job opportunities and expertise in today's market.</p>
                    </div>
                  </div>
                  <div className="goal-item short-term">
                    <span className="goal-icon">🔌</span>
                    <div className="goal-content">
                      <strong>FPGA Programming</strong>
                      <p>Gain hands-on experience with FPGA-based system design and optimization through projects, internships and clubs available at Georgia Tech.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="quick-stats">
              <div className="stat-card">
                <div className="stat-number">5+</div>
                <div className="stat-label">Hardware Projects</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">5+</div>
                <div className="stat-label">Programming Languages</div>
              </div>
            </div> */}

            <div className="contact-section">
              <h2>Contact Me</h2>
              <div className="contact-card">
                <div className="contact-info">
                  <div className="contact-item">
                    <span className="contact-icon">📧</span>
                    <div>
                      <strong>Email</strong>
                      <p>romil.patel@gatech.edu</p>
                    </div>
                  </div>
                  <div className="contact-item">
                    <span className="contact-icon">📱</span>
                    <div>
                      <strong>Phone</strong>
                      <p>+1 (845) 821-0981</p>
                    </div>
                  </div>
                </div>
                <div className="contact-actions">
                  <a href="mailto:romil.patel@gatech.edu" className="contact-button">
                    📧 Send Email
                  </a>
                  <a href="tel:+15551234567" className="contact-button">
                    📱 Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      case 'about':
        return (
          <div className="content">
            <h1>About Me 🎯</h1>
            <div className="about-section">
              <div className="about-grid">
                <div className="about-card">
                  <h3>🎓 Academic Journey</h3>
                  <p>Computer Engineering student at Georgia Tech, building on my foundation from Stony Brook University. Focused on embedded systems, digital design, AI/ML applications, and software development.</p>
                </div>
                <div className="about-card">
                  <h3>🔬 Research Interests</h3>
                  <p>Passionate about edge computing, neural networks, and developing efficient hardware-software co-design applications.</p>
                </div>
                <div className="about-card">
                  <h3>🌍 Industry Focus</h3>
                  <p>Interested in semiconductor industry, autonomous systems, software development, and developing next-generation computing architectures that push the boundaries of what's possible.</p>
                </div>
              </div>

              <h3>🎯 Technical Interests</h3>
              <div className="interests-grid">
                <div className="interest-item">
                  <span className="interest-icon">🔧</span>
                  <span>Embedded Systems</span>
                </div>
                <div className="interest-item">
                  <span className="interest-icon">🤖</span>
                  <span>Machine Learning</span>
                </div>
                <div className="interest-item">
                  <span className="interest-icon">⚡</span>
                  <span>Digital Design</span>
                </div>
                <div className="interest-item">
                  <span className="interest-icon">🔌</span>
                  <span>FPGA Development & Programming</span>
                </div>
                <div className="interest-item">
                  <span className="interest-icon">📱</span>
                  <span>Software Development</span>
                </div>
                <div className="interest-item">
                  <span className="interest-icon">💻</span>
                  <span>System Architecture & Memory Systems</span>
                </div>
              </div>

              <h3>🎓 Relevant Coursework</h3>
              <div className="coursework-grid">
                <div className="course-item">
                  <span className="course-icon">🔌</span>
                  <div>
                    <strong>Architecture, Memory Systems, Concurrency, and Energy in Computation (ECE 3058)</strong>
                    <p>Computer architecture and operating systems fundamentals, focusing on performance analysis, pipelining, memory systems, I/O, scheduling, and parallelism.</p>
                  </div>
                </div>
                <div className="course-item">
                  <span className="course-icon">🤖</span>
                  <div>
                    <strong>AI Foundations (ECE 2806)</strong>
                    <p>An introduction to the foundations of AI, combining programming, math, data literacy, problem-solving, model evaluation, ethical considerations, and practical tools.</p>
                  </div>
                </div>
                <div className="course-item">
                  <span className="course-icon">🔧</span>
                  <div>
                    <strong>GPU Programming - General Programming (ECE 3803)</strong>
                    <p>Development, analysis, and optimization of general programs that take advantage of the computational capabilities of modern GPU hardware.</p>
                  </div>
                </div>
                <div className="course-item">
                  <span className="course-icon">⚡</span>
                  <div>
                    <strong>Programming SW/HW Systems (ECE 2035)</strong>
                    <p>Implement high-level programming language storage, control, and procedural constructs in the assembly language of a hardware platform</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'resume':
        return (
          <div className="content">
            <h1>Resume 📄</h1>

            {/* PDF Viewer Section */}
            <div className="resume-pdf-section">
              <div className="pdf-header">
                <h3>📋 Full Resume</h3>
                <div className="pdf-actions">
                  <a
                    href="/Patel_Romil Resume.pdf"
                    download="Patel_Romil_Resume.pdf"
                    className="download-button"
                  >
                    📥 Download PDF
                  </a>
                  <a
                    href="/Patel_Romil Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="view-button"
                  >
                    🔍 View Full Page
                  </a>
                </div>
              </div>

              <div className="pdf-viewer">
                <iframe
                  src="/Patel_Romil Resume.pdf#toolbar=0&navpanes=0&scrollbar=0"
                  title="Romil Patel Resume"
                  width="100%"
                  height="600"
                  style={{ border: 'none', borderRadius: '10px' }}
                />
              </div>
            </div>

            {/* Collapsible Resume Sections */}
            <div className="resume-sections">
              <h3>📖 Resume Highlights</h3>

              {/* Experience Section */}
              <div className="resume-collapsible">
                <button
                  className="collapsible-header"
                  onClick={() => toggleSection('experience')}
                >
                  <span>💼 Experience</span>
                  <span className="toggle-icon">{expandedSections.experience ? '−' : '+'}</span>
                </button>
                <div className={`collapsible-content ${expandedSections.experience ? 'expanded' : ''}`}>
                  <div className="experience-item">
                    <h4>TSO Technical Assistant</h4>
                    <p className="company-info">Georgia Institute of Technology • August 2024 - Present</p>
                    <p>Provided technical support to faculty and students, resolving 20-30 support tickets per week and maintaining a high satisfaction
                      rate.</p>
                    <p>Managed a database of over 4,000 devices, ensuring compliance with security protocols and task sequence accuracy for
                      software deployment</p>
                    <div className="tech-used">
                      <span className="tech-badge">Customer Support & Problem Solving</span>
                      <span className="tech-badge">Hardware & Software Troubleshooting</span>
                      <span className="tech-badge">Operating Systems (MacOS / Windows / Linux (Ubuntu & Redhat))</span>
                      <span className="tech-badge">Database Management</span>
                    </div>
                  </div>

                  <div className="experience-item">
                    <h4>Lyft Back-End Engineering Job Simulation (Virtual – Forage)</h4>
                    <p className="company-info">Forage • May 2024 - June 2024</p>
                    <p>Completed the Back-End Engineering job simulation, taking over development of an unfinished project for the Lyft Rentals team. </p>
                    <p>Designed a UML class diagram to reorganize the architecture and implemented unit tests to improve code reliability.</p>
                    <p>Refactored legacy code using test-driven development (TDD) principles and added new functionality to meet project requirements</p>
                    <div className="tech-used">
                      <span className="tech-badge">Python</span>
                      <span className="tech-badge">UML</span>
                      <span className="tech-badge">Test-Driven Development</span>
                      <span className="tech-badge">Legacy Code Refactoring</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Education Section */}
              <div className="resume-collapsible">
                <button
                  className="collapsible-header"
                  onClick={() => toggleSection('education')}
                >
                  <span>🎓 Education</span>
                  <span className="toggle-icon">{expandedSections.education ? '−' : '+'}</span>
                </button>
                <div className={`collapsible-content ${expandedSections.education ? 'expanded' : ''}`}>
                  <div className="education-item">
                    <h5>Bachelor of Science in Computer Engineering & Minor in Applications of Artificial Intelligence and Machine Learning</h5>
                    <p>Georgia Institute of Technology • 2024 - Present</p>
                    <p>GPA: 3.2/4.0 | Focus: System Architecture & Computing Hardware & Emerging Architectures </p>
                  </div>
                  <div className="education-item">
                    <h4>Bachelor of Science in Computer Engineering</h4>
                    <p>Stony Brook University • 2023 - 2024</p>
                    <p>GPA: 3.9/4.0 | Dean's List</p>
                  </div>
                </div>
              </div>

              {/* Skills Section */}
              <div className="resume-collapsible">
                <button
                  className="collapsible-header"
                  onClick={() => toggleSection('skills')}
                >
                  <span>🛠️ Technical Skills</span>
                  <span className="toggle-icon">{expandedSections.skills ? '−' : '+'}</span>
                </button>
                <div className={`collapsible-content ${expandedSections.skills ? 'expanded' : ''}`}>
                  <div className="skills-container">
                    {skills.map((skill, index) => (
                      <div key={index} className="skill-item">
                        <div className="skill-header">
                          <span className="skill-name">{skill.name}</span>
                          <span className="skill-percentage">{skill.level}%</span>
                        </div>
                        <div className="skill-bar">
                          <div
                            className="skill-progress"
                            style={{
                              width: `${skill.level}%`,
                              backgroundColor: skill.color
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'projects':
        return (
          <div className="content">
            <h1>Projects 🚀</h1>
            <div className="projects-grid">
              <div className="project-card">
                <div className="project-header">
                  <h3>🧠 AI First Course Assistant LLM</h3>
                  <span className="project-status">Research</span>
                </div>
                <p>GPT-2 model trained on the Georgia Tech AI First Course to answer questions about the course material. Used different metrics such as tokenization strategies, learning rate, and # of layers and heads to evaluate the model's performance and used the model to answer questions about the course material.</p>
                <div className="project-tech">
                  <span className="tech-badge">Thesis Writing</span>
                  <span className="tech-badge">Poster Presentation</span>
                  <span className="tech-badge">Python</span>
                  <span className="tech-badge">TensorFlow</span>
                </div>
                <div className="project-links">
                  <a href="/Report_-_Romil_Patel.pdf" className="project-link" target="_blank" rel="noopener noreferrer">
                    📝 Project Paper
                  </a>
                  <a href="https://github.gatech.edu/rpatel778/AIFirst_Code" className="project-link" target="_blank" rel="noopener noreferrer">
                    📁 GitHub
                  </a>
                  <a href="/Poster_Template_2.pdf" className="project-link" target="_blank" rel="noopener noreferrer">
                    🎤 Presentation
                  </a>
                </div>
              </div>
              <div className="project-card">
                <div className="project-header">
                  <h3>🤖 Snake Game on MBed Microcontroller</h3>
                  <span className="project-status">Complete</span>
                </div>
                <p>Embedded system that leveraged a MBed microcontroller to implement a snake game with a custom game controller displayed on a uLED screen.</p>
                <div className="project-tech">
                  <span className="tech-badge">MBed</span>
                  <span className="tech-badge">Circuits/Breadboards</span>
                  <span className="tech-badge">C/C++</span>
                  <span className="tech-badge">Embedded Systems</span>
                </div>
                <div className="project-links">
                  <a href="IMG_0049.mov" className="project-link" target="_blank" rel="noopener noreferrer">
                    🏠 Live Demo
                  </a>
                  <a href="#" className="project-link" target="_blank" rel="noopener noreferrer">
                    📁 GitHub
                  </a>
                </div>
              </div>
              <div className="project-card">
                <div className="project-header">
                  <h3>⚡ RISC-V Processor Design</h3>
                  <span className="project-status">Complete</span>
                </div>
                <p>Designed a single cycle and multi-cycle RISC-V processor using SystemVerilog and ModelSim that supports the RV32I instruction set along with pipeline flushing, stall control, and data forwarding.</p>
                <div className="project-tech">
                  <span className="tech-badge">SystemVerilog</span>
                  <span className="tech-badge">ModelSim</span> 
                  <span className="tech-badge">Assembly</span>
                  <span className="tech-badge">C</span>
                </div>
                <div className="project-links">
                  <a href="/Screenshot 2025-08-21 105825.png" className="project-link" target="_blank" rel="noopener noreferrer">
                    🔧 Overview of Processor
                  </a>
                  <a href="#" className="project-link" target="_blank" rel="noopener noreferrer">
                    📁 GitHub
                  </a>
                </div>
              </div>
              <div className="project-card">
                <div className="project-header">
                  <h3>📱 Edge AI Object Detection</h3>
                  <span className="project-status">In Progress</span>
                </div>
                <p>Real-time object detection system optimized for edge devices. Uses quantized neural networks and hardware acceleration for low-power operation.</p>
                <div className="project-tech">
                  <span className="tech-badge">PyTorch</span>
                  <span className="tech-badge">OpenCV</span>
                  <span className="tech-badge">C++</span>
                  <span className="tech-badge">CUDA</span>
                </div>
                <div className="project-links">
                  <a href="#" className="project-link" target="_blank" rel="noopener noreferrer">
                    👁️ Demo
                  </a>
                  <a href="#" className="project-link" target="_blank" rel="noopener noreferrer">
                    📁 GitHub
                  </a>
                </div>
              </div>
              <div className="project-card">
                <div className="project-header">
                  <h3>🔌 Digital Signal Processor</h3>
                  <span className="project-status">Complete</span>
                </div>
                <p>Custom DSP with optimized arithmetic units for audio processing. Features FFT acceleration and real-time filtering capabilities.</p>
                <div className="project-tech">
                  <span className="tech-badge">VHDL</span>
                  <span className="tech-badge">MATLAB</span>
                  <span className="tech-badge">FPGA</span>
                  <span className="tech-badge">DSP</span>
                </div>
                <div className="project-links">
                  <a href="#" className="project-link" target="_blank" rel="noopener noreferrer">
                    🎵 Audio Demo
                  </a>
                  <a href="#" className="project-link" target="_blank" rel="noopener noreferrer">
                    📁 GitHub
                  </a>
                </div>
              </div>
              <div className="project-card">
                <div className="project-header">
                  <h3>🌐 Web Development Portfolio</h3>
                  <span className="project-status">Live</span>
                </div>
                <p>Full-stack web application showcasing technical projects and skills. Built with modern web technologies and responsive design.</p>
                <div className="project-tech">
                  <span className="tech-badge">React</span>
                  <span className="tech-badge">Node.js</span>
                  <span className="tech-badge">MongoDB</span>
                  <span className="tech-badge">CSS3</span>
                </div>
                <div className="project-links">
                  <a href="https://quickandquality.net" className="project-link" target="_blank" rel="noopener noreferrer">
                    🌐 Live Demo
                  </a>
                  <a href="#" className="project-link">
                    📁 GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return <div>Page not found</div>;
    }
  };

  return (
    <div className="App">
      {/* Floating particles background */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="particle" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 20}s`,
            animationDuration: `${10 + Math.random() * 20}s`
          }}></div>
        ))}
      </div>

      {/* Navigation Tabs */}
      <nav className="nav-tabs">
        <button
          className={`tab ${activeTab === 'home' ? 'active' : ''}`}
          onClick={() => handleTabClick('home')}
        >
          🏠 Home
        </button>
        <button
          className={`tab ${activeTab === 'about' ? 'active' : ''}`}
          onClick={() => handleTabClick('about')}
        >
          👤 About Me
        </button>
        <button
          className={`tab ${activeTab === 'resume' ? 'active' : ''}`}
          onClick={() => handleTabClick('resume')}
        >
          📄 Resume
        </button>
        <button
          className={`tab ${activeTab === 'projects' ? 'active' : ''}`}
          onClick={() => handleTabClick('projects')}
        >
          🚀 Projects
        </button>
      </nav>

      {/* Main Content Area */}
      <main className="main-content">
        {renderContent()}
      </main>
    </div>
  );
}

export default App;
