import React from 'react';

const RejyPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            Rejy KP
          </h1>
          <p className="text-xl md:text-2xl text-purple-300 mb-8">
            Full Stack Developer & Freelancer
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+917994870262"
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/50 flex items-center gap-2"
            >
              <span>📞</span> +91 7994870262
            </a>
            <a
              href="mailto:rejykaringa2000@gmail.com"
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/50 flex items-center gap-2"
            >
              <span>✉️</span> Email
            </a>
            <a
              href="https://www.linkedin.com/in/rejy-kp"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/50 flex items-center gap-2"
            >
              <span>💼</span> LinkedIn
            </a>
            <a
              href="https://github.com/rejy11"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/50 flex items-center gap-2"
            >
              <span>💻</span> GitHub
            </a>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Featured Card - Availability */}
          <div className="lg:col-span-3 bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl p-8 shadow-2xl transform hover:scale-[1.02] transition-all duration-300">
            <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-2">
              🚀 Available for Freelance Projects
            </h2>
            <div className="text-white">
              <p className="mb-4 text-lg leading-relaxed">
                Specializing in building scalable web applications with <strong>React, Laravel, and Node.js</strong>.
                Ready to bring your ideas to life with modern technology and premium design.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-300 mt-1">✓</span>
                  <span>Full-stack web development (MERN & PHP Laravel)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-300 mt-1">✓</span>
                  <span>E-commerce platforms with secure payment integration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-300 mt-1">✓</span>
                  <span>Comprehensive Event Management Systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-300 mt-1">✓</span>
                  <span>REST API development & robust database design</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-300 mt-1">✓</span>
                  <span>Responsive, high-performance UI/UX with React</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Recent Work */}
          <div className="lg:col-span-2 bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              💼 Recent Work
            </h3>
            <div className="space-y-4">
              <div className="bg-slate-700/50 rounded-lg p-4 hover:bg-slate-700/70 transition-colors duration-300">
                <strong className="text-purple-300 text-lg">MECC Event System</strong>
                <p className="text-gray-300 text-sm mt-1">
                  Handled 11,000+ attendees seamlessly with real-time registration and management
                </p>
              </div>
              <div className="bg-slate-700/50 rounded-lg p-4 hover:bg-slate-700/70 transition-colors duration-300">
                <strong className="text-purple-300 text-lg">E-Commerce Platform</strong>
                <p className="text-gray-300 text-sm mt-1">
                  Multi-role system with payment gateways, inventory management, and analytics
                </p>
              </div>
              <div className="bg-slate-700/50 rounded-lg p-4 hover:bg-slate-700/70 transition-colors duration-300">
                <strong className="text-purple-300 text-lg">Miraj Media, Bahrain</strong>
                <p className="text-gray-300 text-sm mt-1">
                  Currently contributing as a developer on enterprise-level projects
                </p>
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="lg:col-span-1 bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              🛠️ Tech Stack
            </h3>
            <div className="space-y-4">
              <div>
                <strong className="text-purple-300 block mb-2">Frontend</strong>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-purple-600/30 text-purple-200 px-3 py-1 rounded-full text-sm border border-purple-500/30">React</span>
                  <span className="bg-purple-600/30 text-purple-200 px-3 py-1 rounded-full text-sm border border-purple-500/30">Next.js</span>
                  <span className="bg-purple-600/30 text-purple-200 px-3 py-1 rounded-full text-sm border border-purple-500/30">Tailwind CSS</span>
                </div>
              </div>

              <div>
                <strong className="text-purple-300 block mb-2">Backend</strong>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-purple-600/30 text-purple-200 px-3 py-1 rounded-full text-sm border border-purple-500/30">Node.js</span>
                  <span className="bg-purple-600/30 text-purple-200 px-3 py-1 rounded-full text-sm border border-purple-500/30">Laravel</span>
                  <span className="bg-purple-600/30 text-purple-200 px-3 py-1 rounded-full text-sm border border-purple-500/30">Express</span>
                </div>
              </div>

              <div>
                <strong className="text-purple-300 block mb-2">Tools & Infrastructure</strong>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-purple-600/30 text-purple-200 px-3 py-1 rounded-full text-sm border border-purple-500/30">Git</span>
                  <span className="bg-purple-600/30 text-purple-200 px-3 py-1 rounded-full text-sm border border-purple-500/30">AWS EC2</span>
                  <span className="bg-purple-600/30 text-purple-200 px-3 py-1 rounded-full text-sm border border-purple-500/30">MongoDB</span>
                  <span className="bg-purple-600/30 text-purple-200 px-3 py-1 rounded-full text-sm border border-purple-500/30">MySQL</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
          <p className="text-gray-300">
            <strong className="text-purple-300">Let's Build Something Amazing Together</strong>
            <br />
            <span className="text-sm">Open to freelance opportunities and collaborations</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RejyPage;