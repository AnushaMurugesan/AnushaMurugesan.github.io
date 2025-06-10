import React from "react";

const WorkExperience = () => {
  const experiences = [
    {
      company: "Analytics Aura",
      position: "Junior Product Analyst",
      period: "2024 - Present",
      description: "Product Analyst in Mass Data Management System",
      color: "cosmic-blue",
    },
    {
      company: "Bytecomp Technologies",
      position: "Frontend Developer",
      period: "2023 - 2024",
      description:
        "React JS Developer for logistics and supply chain management",
      color: "cosmic-purple",
    },
    // {
    //   company: "CIB on the Mobile",
    //   position: "Junior Designer",
    //   period: "2019 - 2020",
    //   description: "Started journey in digital product design",
    //   color: "cosmic-purple"
    // },
    // {
    //   company: "CIB on the Mobile",
    //   position: "Design Intern",
    //   period: "2018 - 2019",
    //   description: "Learned fundamentals of user interface design",
    //   color: "cosmic-pink"
    // }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center">
          Work Experience
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative p-6 rounded-2xl bg-card border border-border hover:border-cosmic-purple/50 transition-all duration-300 hover:glow-purple group"
            >
              {/* Company icon */}
              <div
                className={`w-12 h-12 rounded-xl bg-${exp.color}/20 border border-${exp.color}/30 flex items-center justify-center mb-4`}
              >
                <div className={`w-6 h-6 rounded bg-${exp.color}`}></div>
              </div>

              <h3 className="text-xl font-semibold mb-2">{exp.company}</h3>
              <p className="text-cosmic-purple mb-2">{exp.position}</p>
              <p className="text-muted-foreground text-sm mb-3">{exp.period}</p>
              <p className="text-muted-foreground">{exp.description}</p>

              {/* Hover effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cosmic-purple/5 to-cosmic-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            I'm currently looking to join a{" "}
            <span className="text-cosmic-purple">cross-functional</span> team
          </p>
          <p className="text-muted-foreground">
            that values{" "}
            <span className="text-cosmic-blue">
              improving people's lives through accessible design
            </span>
          </p>

          {/* Social icons placeholder */}
          <div className="flex justify-center space-x-4 mt-8">
            {["f", "@", "in", "tw", "ig", "gh"].map((icon, index) => (
              <div
                key={index}
                className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center hover:border-cosmic-purple/50 transition-colors cursor-pointer"
              >
                <span className="text-sm text-muted-foreground">{icon}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
