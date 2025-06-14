import React from "react";

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-6 relative">
      {/* Cosmic background element */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-r from-cosmic-purple/10 to-cosmic-blue/10 blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Central cosmic logo */}
        <div className="text-center mb-20">
          <div className="relative inline-block">
            <div className="w-32 h-32 rounded-full cosmic-gradient flex items-center justify-center text-6xl font-bold text-white mb-8 mx-auto animate-float glow-purple">
              ∑
            </div>
            {/* Orbiting elements */}
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-4 left-4 w-2 h-2 bg-cosmic-blue rounded-full animate-pulse-glow"></div>
              <div className="absolute top-4 right-4 w-1.5 h-1.5 bg-cosmic-pink rounded-full animate-pulse-glow delay-1000"></div>
              <div className="absolute bottom-4 left-4 w-1 h-1 bg-cosmic-purple rounded-full animate-pulse-glow delay-2000"></div>
              <div className="absolute bottom-4 right-4 w-1.5 h-1.5 bg-cosmic-blue rounded-full animate-pulse-glow delay-3000"></div>
            </div>
          </div>
        </div>

        {/* Featured Projects */}
        <div className="space-y-20">
          {/* Project 1 - MDM */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-sm text-cosmic-purple mb-2">
                Featured Project
              </h3>
              <h2 className="text-4xl font-bold mb-6">
                MDM (Master Data Management)
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                A robust system that enables the creation of users, groups, and modules with controlled access permissions. It includes a
                fully responsive, drag-and-drop form builder that allows users to create custom input forms with validations. Each form
                dynamically generates and maps to database tables for structured data storage.

                <br />
                <br />
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-card border border-border rounded-lg flex items-center justify-center">
                  <span className="text-cosmic-purple">🗄️</span>
                </div>
                <div className="w-10 h-10 bg-card border border-border rounded-lg flex items-center justify-center">
                  <span className="text-cosmic-blue">⚙️</span>
                </div>
              </div>
            </div>
            <div className="bg-card border border-border rounded-2xl p-8 hover:border-cosmic-purple/50 transition-all duration-300 hover:glow-purple">
              <div className="bg-muted rounded-xl h-64 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 cosmic-gradient rounded-xl mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl text-white">🗄️</span>
                  </div>
                  <p className="text-muted-foreground">MDM System Preview</p>
                </div>
              </div>
            </div>
          </div>

          {/* Project 2 - Atvara */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <h3 className="text-sm text-cosmic-blue mb-2">
                Featured Project
              </h3>
              <h2 className="text-4xl font-bold mb-6">Atvara</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Logistics - A comprehensive logistics platform built to optimize and streamline daily operations for hotel chains. It enables
                centralized management of multiple branches by offering features such as branch-level configuration, user access control
                based on roles, and real-time inventory tracking. The system is designed to improve operational transparency, enhance
                resource planning, and support better decision-making across locations
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-card border border-border rounded-lg flex items-center justify-center">
                  <span className="text-cosmic-purple">🏨</span>
                </div>
                <div className="w-10 h-10 bg-card border border-border rounded-lg flex items-center justify-center">
                  <span className="text-cosmic-pink">📦</span>
                </div>
              </div>
            </div>
            <div className="lg:order-1 bg-card border border-border rounded-2xl p-8 hover:border-cosmic-blue/50 transition-all duration-300 hover:glow-blue">
              <div className="bg-muted rounded-xl h-64 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 nebula-gradient rounded-xl mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl text-white">🏨</span>
                  </div>
                  <p className="text-muted-foreground">Atvara System Preview</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-sm text-cosmic-purple mb-2">
                Featured Project
              </h3>
              <h2 className="text-4xl font-bold mb-6">Bytecompass Website</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                A fully responsive website for an IT solutions company, designed to showcase its projects, services, and development
                methodologies in a visually engaging and interactive way. The website features smooth, custom-built animations and
                dynamic UI elements aimed at improving user engagement and conveying a modern, tech-forward brand identity.
                <br />
                <br />
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-card border border-border rounded-lg flex items-center justify-center">
                  <span className="text-cosmic-purple">🌐</span>
                </div>
                <div className="w-10 h-10 bg-card border border-border rounded-lg flex items-center justify-center">
                  <span className="text-cosmic-blue">💻</span>
                </div>
              </div>
            </div>
            <div className="bg-card border border-border rounded-2xl p-8 hover:border-cosmic-purple/50 transition-all duration-300 hover:glow-purple">
              <div className="bg-muted rounded-xl h-64 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 cosmic-gradient rounded-xl mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl text-white">🌐</span>
                  </div>
                  <p className="text-muted-foreground">
                    Bytecompass Website Preview
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <h3 className="text-sm text-cosmic-blue mb-2">
                Featured Project
              </h3>
              <h2 className="text-4xl font-bold mb-6">Jerobyte</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                I contributed to developing a responsive business dashboard with Chart.js integration, 
                delivering dynamic call reports, customer metrics, and revenue charts for data-driven decisions.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-card border border-border rounded-lg flex items-center justify-center">
                  <span className="text-cosmic-purple">💻</span>
                </div>
                <div className="w-10 h-10 bg-card border border-border rounded-lg flex items-center justify-center">
                  <span className="text-cosmic-pink">�</span>
                </div>
              </div>
            </div>
            <div className="lg:order-1 bg-card border border-border rounded-2xl p-8 hover:border-cosmic-blue/50 transition-all duration-300 hover:glow-blue">
              <div className="bg-muted rounded-xl h-64 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 nebula-gradient rounded-xl mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl text-white">💻</span>
                  </div>
                  <p className="text-muted-foreground">
                    Jerobyte System Preview
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
