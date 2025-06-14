import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
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
            href="mailto:anushaa102002@gmail.com"
            className="w-12 h-12 bg-card border border-border rounded-lg flex items-center justify-center hover:border-cosmic-purple/50 transition-colors"
          >
            <SiGmail className="text-cosmic-purple" />
          </a>
          <a
            href="https://www.linkedin.com/in/anusha-murugesan-52a978269"
            className="w-12 h-12 bg-card border border-border rounded-lg flex items-center justify-center hover:border-cosmic-blue/50 transition-colors"
          >
            <FaLinkedin className="text-cosmic-blue" />
          </a>
          <a
            href="https://github.com/AnushaMurugesan"
            className="w-12 h-12 bg-card border border-border rounded-lg flex items-center justify-center hover:border-cosmic-pink/50 transition-colors"
          >
            <FaGithub className="text-cosmic-pink" />
          </a>
          <a
            href="https://www.instagram.com/_.itx.anu._/"
            className="w-12 h-12 bg-card border border-border rounded-lg flex items-center justify-center hover:border-cosmic-pink/50 transition-colors"
          >
            <FaInstagram className="text-cosmic-purple" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
