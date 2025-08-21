import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

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

  // Computer Engineering focused skills
  const skills = [
    { name: 'Python', level: 90, color: '#3776ab' },
    { name: 'C/C++', level: 85, color: '#00599c' },
    { name: 'Verilog/VHDL', level: 75, color: '#ff6b35' },
    { name: 'JavaScript', level: 80, color: '#f7df1e' },
    { name: 'React', level: 75, color: '#61dafb' },
    { name: 'TensorFlow/PyTorch', level: 70, color: '#ff6f00' },
    { name: 'FPGA Design', level: 65, color: '#ff6600' },
    { name: 'Git/Linux', level: 85, color: '#f05032' },
    { name: 'Arduino/Raspberry Pi', level: 80, color: '#00979d' },
    { name: 'MATLAB', level: 75, color: '#0076a8' }
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
                <span className="tech-item">💻 Full-Stack Development</span>
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
                      <p>Join an organization that is driving mass innovation in the chip design world that will let me integrate AI/ML into the hardware world.</p>
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
                      <strong>Full-Stack Development</strong>
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
                  <p>Computer Engineering student at Georgia Tech, building on my foundation from Stony Brook University. Focused on embedded systems, digital design, and AI/ML applications.</p>
                </div>
                <div className="about-card">
                  <h3>🔬 Research Interests</h3>
                  <p>Passionate about edge computing, neural network acceleration, and developing efficient hardware-software co-design solutions for AI applications.</p>
                </div>
                <div className="about-card">
                  <h3>🌍 Industry Focus</h3>
                  <p>Interested in semiconductor industry, autonomous systems, and developing next-generation computing architectures that push the boundaries of what's possible.</p>
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
                  <span>FPGA Development</span>
                </div>
                <div className="interest-item">
                  <span className="interest-icon">📱</span>
                  <span>IoT & Edge Computing</span>
                </div>
                <div className="interest-item">
                  <span className="interest-icon">💻</span>
                  <span>System Architecture</span>
                </div>
              </div>

              <h3>🎓 Relevant Coursework</h3>
              <div className="coursework-grid">
                <div className="course-item">
                  <span className="course-icon">🔌</span>
                  <div>
                    <strong>Digital Design & Computer Architecture</strong>
                    <p>VLSI design, processor architecture, memory systems</p>
                  </div>
                </div>
                <div className="course-item">
                  <span className="course-icon">🤖</span>
                  <div>
                    <strong>Artificial Intelligence & Machine Learning</strong>
                    <p>Neural networks, computer vision, natural language processing</p>
                  </div>
                </div>
                <div className="course-item">
                  <span className="course-icon">🔧</span>
                  <div>
                    <strong>Embedded Systems Design</strong>
                    <p>Real-time systems, microcontroller programming, sensor integration</p>
                  </div>
                </div>
                <div className="course-item">
                  <span className="course-icon">⚡</span>
                  <div>
                    <strong>Computer Networks & Communication</strong>
                    <p>Protocol design, wireless communication, network security</p>
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
            <div className="resume-section">
              <h3>💼 Experience</h3>
              <div className="experience-item">
                <h4>Hardware Engineering Intern</h4>
                <p className="company-info">Tech Company • Summer 2024</p>
                <p>Developed FPGA-based neural network accelerators for edge computing applications. Implemented custom RTL designs and optimized for power efficiency.</p>
                <div className="tech-used">
                  <span className="tech-badge">Verilog</span>
                  <span className="tech-badge">FPGA</span>
                  <span className="tech-badge">Python</span>
                  <span className="tech-badge">TensorFlow</span>
                </div>
              </div>

              <div className="experience-item">
                <h4>Research Assistant - AI Lab</h4>
                <p className="company-info">University Research Lab • 2023 - Present</p>
                <p>Working on hardware-software co-design for AI acceleration. Developing custom architectures for neural network inference on embedded devices.</p>
                <div className="tech-used">
                  <span className="tech-badge">C/C++</span>
                  <span className="tech-badge">PyTorch</span>
                  <span className="tech-badge">ARM Assembly</span>
                  <span className="tech-badge">Linux</span>
                </div>
              </div>

              <h3>🎓 Education</h3>
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

              <h3>🛠️ Technical Skills</h3>
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


              <div className="achievements-grid">
                <div className="">
                  {/* <span className="achievement-icon">🏅</span>
                  <span>Xilinx FPGA Design Certification</span> */}
                </div>
                <div className="">
                  {/* <span className="achievement-icon">🏆</span>
                  <span>Dean's List - 3 Semesters</span> */}
                </div>
                <div className="">
                  {/* <span className="achievement-icon">🎯</span>
                  <span>IEEE Student Member</span> */}
                </div>
                <div className="">
                  {/* <span className="achievement-icon">💡</span>
                  <span>Hackathon Winner - IoT Category</span> */}
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
                  <h3>🧠 Neural Network Accelerator</h3>
                  <span className="project-status">Research</span>
                </div>
                <p>FPGA-based CNN accelerator for real-time image classification. Achieved 10x speedup compared to CPU implementation with 60% power reduction.</p>
                <div className="project-tech">
                  <span className="tech-badge">Verilog</span>
                  <span className="tech-badge">FPGA</span>
                  <span className="tech-badge">Python</span>
                  <span className="tech-badge">TensorFlow</span>
                </div>
                <div className="project-links">
                  <a href="#" className="project-link">
                    📊 Demo Video
                  </a>
                  <a href="#" className="project-link">
                    📁 GitHub
                  </a>
                </div>
              </div>
              <div className="project-card">
                <div className="project-header">
                  <h3>🤖 Smart Home IoT System</h3>
                  <span className="project-status">Complete</span>
                </div>
                <p>Embedded system with AI-powered voice recognition and automated home control. Features real-time sensor monitoring and cloud integration.</p>
                <div className="project-tech">
                  <span className="tech-badge">Arduino</span>
                  <span className="tech-badge">Raspberry Pi</span>
                  <span className="tech-badge">Python</span>
                  <span className="tech-badge">TensorFlow Lite</span>
                </div>
                <div className="project-links">
                  <a href="#" className="project-link">
                    🏠 Live Demo
                  </a>
                  <a href="#" className="project-link">
                    📁 GitHub
                  </a>
                </div>
              </div>
              <div className="project-card">
                <div className="project-header">
                  <h3>⚡ RISC-V Processor Design</h3>
                  <span className="project-status">Academic</span>
                </div>
                <p>Custom RISC-V processor implementation with pipelined architecture. Includes cache memory, branch prediction, and performance optimization.</p>
                <div className="project-tech">
                  <span className="tech-badge">SystemVerilog</span>
                  <span className="tech-badge">ModelSim</span>
                  <span className="tech-badge">Assembly</span>
                  <span className="tech-badge">C</span>
                </div>
                <div className="project-links">
                  <a href="#" className="project-link">
                    🔧 Simulation
                  </a>
                  <a href="#" className="project-link">
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
                  <a href="#" className="project-link">
                    👁️ Demo
                  </a>
                  <a href="#" className="project-link">
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
                  <a href="#" className="project-link">
                    🎵 Audio Demo
                  </a>
                  <a href="#" className="project-link">
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
