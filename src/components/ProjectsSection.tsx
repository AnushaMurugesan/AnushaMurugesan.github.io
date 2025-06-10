import React from "react";

const ProjectsSection = () => {
  return (
    <section id="lab" className="py-20 px-6 relative">
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
                Master Data Management system allowing user, module, and group
                creation with controlled access for users within modules. It
                features a responsive form builder to create multiple form
                screens for each module.
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
                Logistics - streamlines hotel chain operations, enabling branch
                management, user access control, and inventory tracking. Its
                tools help reduce food waste.
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
                A responsive IT company website wit h dynamic animations,
                showcasing projects, ser vices, and met hodologies to boost user
                engagement.
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
                An interactive business dashboard wit h call repor ts, customer
                metrics, and revenue char ts for data-driven decision-making.
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
