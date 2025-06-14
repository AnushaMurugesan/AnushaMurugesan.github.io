import React from "react";

const HeroSectionV2 = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col items-start justify-center px-4 md:px-16 py-16 relative overflow-hidden text-white font-preahvihear pt-[5rem] md:pt-[7rem]">
      {/* Glowing star background animation */}
      {/* You can adjust the number, color, and position of these stars as needed */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div
          className="absolute top-[10%] left-[15%] w-4 h-4 bg-[#a259ff] rounded-full blur-2xl opacity-90 animate-pulse"
          style={{ animationDuration: "2.5s" }}
        />
        <div
          className="absolute top-[30%] left-[60%] w-3 h-3 bg-[#a259ff] rounded-full blur-xl opacity-80 animate-pulse"
          style={{ animationDuration: "3.2s", animationDelay: "0.5s" }}
        />
        <div
          className="absolute top-[70%] left-[25%] w-4 h-4 bg-[#a259ff] rounded-full blur-2xl opacity-95 animate-pulse"
          style={{ animationDuration: "2.8s", animationDelay: "1s" }}
        />
        <div
          className="absolute top-[50%] left-[80%] w-2.5 h-2.5 bg-[#a259ff] rounded-full blur-xl opacity-70 animate-pulse"
          style={{ animationDuration: "2.2s", animationDelay: "0.7s" }}
        />
        <div
          className="absolute top-[80%] left-[40%] w-3 h-3 bg-[#a259ff] rounded-full blur-2xl opacity-85 animate-pulse"
          style={{ animationDuration: "3.5s", animationDelay: "1.2s" }}
        />
        {/* Extra large glows for more effect */}
        <div
          className="absolute top-[20%] left-[80%] w-10 h-10 bg-[#a259ff] rounded-full blur-3xl opacity-40 animate-pulse"
          style={{ animationDuration: "4s", animationDelay: "1.5s" }}
        />
        <div
          className="absolute top-[60%] left-[10%] w-8 h-8 bg-[#a259ff] rounded-full blur-3xl opacity-35 animate-pulse"
          style={{ animationDuration: "4.5s", animationDelay: "2s" }}
        />
        <div
          className="absolute top-[85%] left-[70%] w-12 h-12 bg-[#a259ff] rounded-full blur-3xl opacity-30 animate-pulse"
          style={{ animationDuration: "5s", animationDelay: "2.5s" }}
        />
      </div>

      {/* Arrow and name row - only show on md and up */}
      <div className="absolute left-[30px] top-[40px] z-20 flex flex-row items-start md:left-[220px] md:top-[140px] md:flex md:flex-row md:items-start hidden md:flex">
        {/* SVG Arrow: tail starts at start of name, curves down/left to avatar */}
        <svg
          width="90"
          height="70"
          className="mr-2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M105 15 Q20 5 5 55"
            stroke="#b6a6e6"
            strokeWidth="1.5"
            fill="none"
            markerEnd="url(#arrowhead)"
          />
          <defs>
            <marker
              id="arrowhead"
              markerWidth="8"
              markerHeight="8"
              refX="4"
              refY="4"
              orient="auto"
              markerUnits="strokeWidth"
            >
              <path d="M0,0 L8,4 L0,8 L2,4 Z" fill="#b6a6e6" />
            </marker>
          </defs>
        </svg>
        <span className="text-base md:text-lg text-[#fff] font-medium whitespace-nowrap">
          Hello! I Am <span className="text-[#a259ff]">Anusha</span>
        </span>
      </div>

      {/* Mobile: Name with hello, only on small screens */}
      <div className="flex md:hidden flex-col items-center w-full mt-4 mb-2">
        <span className="text-lg text-[#fff] font-medium">
          Hello! I Am <span className="text-[#a259ff]">Anusha</span>
        </span>
      </div>

      {/* Main content row - stack vertically on mobile */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-12 mt-4 md:mt-24 w-full md:ml-8">
        {/* Avatar with glow */}
        <div className="relative flex-shrink-0 mb-2 md:mb-0">
          <div className="absolute inset-0 rounded-full blur-2xl bg-[#7c3aed] opacity-40 w-40 h-40 md:w-56 md:h-56 z-0" />
          <img
            src="/lovable-uploads/avatar2.png"
            alt="Avatar"
            className="relative w-40 h-40 md:w-56 md:h-56 rounded-full z-10 shadow-2xl border-[#2d1a4a]"
          />
        </div>
        {/* Headline and subtext */}
        <div className="flex flex-col items-center md:items-start w-full">
          {/* Quote - only on mobile, show after avatar and name */}
          <span className="text-base text-[#b6a6e6] mb-1 md:hidden text-center">
            A Front End Developer who
          </span>
          {/* Quote - only on md and up, above headline */}
          <span className="text-lg text-[#b6a6e6] mb-1 hidden md:block">
            A Front End Developer who
          </span>
          {/* Headline */}
          <div className="flex flex-row items-center text-3xl md:text-5xl font-bold leading-tight text-center md:text-left">
            <span>
              Judges a book
              <br />
              by its&nbsp;
              <span className="relative text-[#a78bfa]">
                cover
                <span
                  className="inline-block px-5 border-[1px] border-[#ccc] absolute top-[15%] left-[-10%] hidden md:block"
                  style={{
                    borderRadius: "50%",
                    transform: "rotate(-10deg)",
                    minHeight: "65px",
                    minWidth: "170px",
                  }}
                ></span>
              </span>
              <span className="text-[#a78bfa]">...</span>
            </span>
          </div>
          <span className="text-sm text-[#b6a6e6] mt-4 text-center md:text-left">
            Great front-end is where design meets code.
          </span>
        </div>
      </div>

      {/* Software Engineer headline and description - stack on mobile */}
      <div className="mt-8 md:mt-20 w-full flex flex-col items-center md:items-start md:ml-8">
        <h1 className="text-3xl  md:text-4xl font-bold mb-2 text-center md:text-left">
          <div>
            I'm a Frontend Developer (React / Next) |
          </div>
          <div>Full-Stack Experience (Prisma + Next.js) |
          </div>

        </h1>
        <div className="flex items-center text-xs md:text-sm text-[#b6a6e6] mb-4 justify-center md:justify-start">
          <span>
            Passionate about building scalable web applications and beautiful
            user interfaces.
          </span>
        </div>
        <p className="text-sm md:text-md text-[#e0e0e0] max-w-2xl mt-4 text-center md:text-left">
          A self-taught Frontend Developer (React / Next) with Full-Stack Experience (Prisma + Next.js) over 2+ years of
          experience.
          <br />I create robust, user-friendly digital products that bridge the
          gap between design and technology, delivering value to both users and
          businesses.
        </p>
      </div>
    </section>
  );
};

export default HeroSectionV2;
