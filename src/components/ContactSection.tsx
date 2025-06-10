import React from "react";

const ContactSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Contact</h2>
        <p className="text-muted-foreground mb-2">anushaa102002@gmail.com</p>

        <div className="mt-12">
          <p className="text-muted-foreground mb-6 leading-relaxed max-w-2xl mx-auto">
            I'm always interested in hearing about new opportunities, whether
            that's hearing from a company about a position or other consultative
            opportunities. Drop me a line and let's chat! You can email me
            directly or fill out the form below, and I'll get back to you as
            soon as possible.
          </p>

          <p className="text-muted-foreground">
            <span className="text-cosmic-purple">anushaa102002@gmail.com</span>
          </p>
        </div>

        {/* Social links */}
        <div className="flex justify-center space-x-6 mt-12">
          <a
            href="#"
            className="w-12 h-12 bg-card border border-border rounded-lg flex items-center justify-center hover:border-cosmic-purple/50 transition-colors"
          >
            <span className="text-cosmic-purple">@</span>
          </a>
          <a
            href="#"
            className="w-12 h-12 bg-card border border-border rounded-lg flex items-center justify-center hover:border-cosmic-blue/50 transition-colors"
          >
            <span className="text-cosmic-blue">in</span>
          </a>
          <a
            href="#"
            className="w-12 h-12 bg-card border border-border rounded-lg flex items-center justify-center hover:border-cosmic-pink/50 transition-colors"
          >
            <span className="text-cosmic-pink">gh</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
