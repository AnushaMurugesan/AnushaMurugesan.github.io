// import React from "react";

// const SkillsSection = () => {
//   const skills = [
//     {
//       name: "React",
//       logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
//     },
//     {
//       name: "JavaScript",
//       logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
//     },
//     {
//       name: "TypeScript",
//       logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
//     },
//     {
//       name: "Node.js",
//       logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
//     },
//     {
//       name: "Python",
//       logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
//     },
//     {
//       name: "CSS3",
//       logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
//     },
//     {
//       name: "HTML5",
//       logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
//     },
//     {
//       name: "Git",
//       logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
//     },
//     {
//       name: "Figma",
//       logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
//     },
//     {
//       name: "MongoDB",
//       logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
//     },
//     {
//       name: "Express",
//       logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
//     },
//     {
//       name: "Next.js",
//       logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
//     },
//   ];

//   return (
//     <section className="py-20 px-6 relative overflow-hidden">
//       <div className="max-w-6xl mx-auto">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold mb-4">
//             <span className="text-cosmic">Skills & Technologies</span>
//           </h2>
//           <p className="text-muted-foreground">cross-functional</p>
//         </div>

//         {/* Central Skills Orbital System */}
//         <div className="relative h-[600px] flex items-center justify-center">
//           {/* Central focal point */}
//           <div className="absolute z-10 w-32 h-32 rounded-full cosmic-gradient flex items-center justify-center shadow-2xl glow-purple">
//             <span className="text-4xl font-bold text-white font-preahvihear">
//               A
//             </span>
//           </div>

//           {/* Orbital rings */}
//           <div
//             className="absolute w-80 h-80 rounded-full border border-cosmic-purple/20 animate-spin"
//             style={{ animationDuration: "20s" }}
//           ></div>
//           <div
//             className="absolute w-96 h-96 rounded-full border border-cosmic-blue/15 animate-spin"
//             style={{ animationDuration: "30s", animationDirection: "reverse" }}
//           ></div>
//           <div
//             className="absolute w-[500px] h-[500px] rounded-full border border-cosmic-pink/10 animate-spin"
//             style={{ animationDuration: "40s" }}
//           ></div>

//           {/* Tech icons positioned around the center */}
//           {skills.map((skill, index) => {
//             const angle = (index * 360) / skills.length;
//             const radius = 180 + (index % 3) * 40; // Varying distances
//             const x = Math.cos((angle * Math.PI) / 180) * radius;
//             const y = Math.sin((angle * Math.PI) / 180) * radius;

//             return (
//               <div
//                 key={skill.name}
//                 className="absolute w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center hover:border-cosmic-purple/50 transition-all duration-300 hover:scale-110 hover:glow-purple group"
//                 style={{
//                   transform: `translate(${x}px, ${y}px)`,
//                   animation: `float 3s ease-in-out infinite`,
//                   animationDelay: `${index * 0.2}s`,
//                 }}
//               >
//                 <img
//                   src={skill.logo}
//                   alt={skill.name}
//                   className="w-8 h-8 object-contain"
//                 />
//                 <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                   <span className="text-xs text-muted-foreground whitespace-nowrap bg-card px-2 py-1 rounded border border-border">
//                     {skill.name}
//                   </span>
//                 </div>
//               </div>
//             );
//           })}

//           {/* Connecting lines animation */}
//           <svg className="absolute inset-0 w-full h-full pointer-events-none">
//             {skills.slice(0, 6).map((_, index) => {
//               const angle = (index * 360) / 6;
//               const radius = 200;
//               const x = 300 + Math.cos((angle * Math.PI) / 180) * radius;
//               const y = 300 + Math.sin((angle * Math.PI) / 180) * radius;

//               return (
//                 <line
//                   key={index}
//                   x1="300"
//                   y1="300"
//                   x2={x}
//                   y2={y}
//                   stroke="url(#gradient)"
//                   strokeWidth="1"
//                   opacity="0.3"
//                   className="animate-pulse"
//                   style={{ animationDelay: `${index * 0.5}s` }}
//                 />
//               );
//             })}
//             <defs>
//               <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
//                 <stop offset="0%" stopColor="hsl(var(--cosmic-purple))" />
//                 <stop offset="100%" stopColor="hsl(var(--cosmic-blue))" />
//               </linearGradient>
//             </defs>
//           </svg>

//           {/* Glowing effect background */}
//           <div className="absolute inset-0 bg-gradient-radial from-cosmic-purple/5 via-transparent to-transparent rounded-full"></div>
//         </div>

//         {/* Additional text */}
//         <div className="text-center mt-12">
//           <p className="text-muted-foreground max-w-2xl mx-auto">
//             Passionate about creating seamless user experiences through modern
//             web technologies and design systems. Always learning and adapting to
//             new tools and frameworks.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SkillsSection;

import React from "react";

const SkillsSection = () => {
  const skills = [
    {
      name: "React",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "JavaScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "TypeScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    // {
    //   name: "Node.js",
    //   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    // },
    // {
    //   name: "Python",
    //   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    // },
    {
      name: "CSS3",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "HTML5",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "Git",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "Figma",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    },
    {
      name: "MongoDB",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    // {
    //   name: "Express",
    //   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    // },
    {
      name: "Next.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
  ];

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-cosmic">Skills & Technologies</span>
          </h2>
          <p className="text-muted-foreground">cross-functional</p>
        </div>

        {/* Central Skills Orbital System */}
        <div className="relative h-[600px] flex items-center justify-center">
          {/* Central focal point */}
          <div className="absolute z-10 w-32 h-32 rounded-full cosmic-gradient flex items-center justify-center shadow-2xl glow-purple">
            <span className="text-4xl font-bold text-white font-preahvihear">
              A
            </span>
          </div>

          {/* Orbital rings */}
          <div
            className="absolute w-80 h-80 rounded-full border border-cosmic-purple/20 animate-spin"
            style={{ animationDuration: "20s" }}
          ></div>
          <div
            className="absolute w-96 h-96 rounded-full border border-cosmic-blue/15 animate-spin"
            style={{ animationDuration: "30s", animationDirection: "reverse" }}
          ></div>
          <div
            className="absolute w-[500px] h-[500px] rounded-full border border-cosmic-pink/10 animate-spin"
            style={{ animationDuration: "40s" }}
          ></div>

          {/* Rotating container for all icons */}
          <div className="absolute inset-0 skill-orbit-container">
            {skills.map((skill, index) => {
              const angle = (index * 360) / skills.length;
              const radius = 180;
              const x = Math.cos((angle * Math.PI) / 180) * radius;
              const y = Math.sin((angle * Math.PI) / 180) * radius;

              return (
                <div
                  key={skill.name}
                  className="absolute w-14 h-14 rounded-full bg-card border border-border flex items-center justify-center hover:border-cosmic-purple/50 transition-all duration-300 hover:scale-125 hover:glow-purple group"
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    transform: "translate(-50%, -50%)",
                    animation: `skillFloat 4s ease-in-out infinite`,
                    animationDelay: `${index * 0.3}s`,
                  }}
                >
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-8 h-8 object-contain"
                  />
                  <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <span className="text-xs text-muted-foreground whitespace-nowrap bg-card px-2 py-1 rounded border border-border">
                      {skill.name}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Connecting lines animation */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {skills.slice(0, 6).map((_, index) => {
              const angle = (index * 360) / 6;
              const radius = 180;
              const x = 300 + Math.cos((angle * Math.PI) / 180) * radius;
              const y = 300 + Math.sin((angle * Math.PI) / 180) * radius;

              return (
                <line
                  key={index}
                  x1="300"
                  y1="300"
                  x2={x}
                  y2={y}
                  stroke="url(#gradient)"
                  strokeWidth="1"
                  opacity="0.3"
                  className="animate-pulse"
                  style={{ animationDelay: `${index * 0.5}s` }}
                />
              );
            })}
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--cosmic-purple))" />
                <stop offset="100%" stopColor="hsl(var(--cosmic-blue))" />
              </linearGradient>
            </defs>
          </svg>

          {/* Glowing effect background */}
          <div className="absolute inset-0 bg-gradient-radial from-cosmic-purple/5 via-transparent to-transparent rounded-full"></div>
        </div>

        {/* Additional text */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating seamless user experiences through modern
            web technologies and design systems. Always learning and adapting to
            new tools and frameworks.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
