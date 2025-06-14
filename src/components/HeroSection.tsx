import React from "react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden bg-[#18151f] mt-20"
    >
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-cosmic-purple rounded-full animate-pulse-glow"></div>
      <div className="absolute top-40 right-20 w-1 h-1 bg-cosmic-blue rounded-full animate-pulse-glow delay-1000"></div>
      <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-cosmic-pink rounded-full animate-pulse-glow delay-2000"></div>

      <div className="max-w-7xl mx-auto w-full">
        {/* Top section with avatar and main content */}
        <div className="flex items-start justify-between mb-32">
          {/* Left side - Avatar with gradient background */}
          <div className="flex-shrink-0 relative">
            {/* Gradient background with blur effect */}
            <div className="absolute inset-0 w-[370px] h-[370px] rounded-full bg-gradient-to-br from-blue-500/30 via-purple-500/40 to-pink-500/30 blur-2xl"></div>
            <div className="relative w-[300px] h-[300px] rounded-full overflow-hidden bg-gradient-to-br from-blue-100/80 via-purple-100/60 to-pink-100/40 backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-2xl">
              <img
                src="/lovable-uploads/1375d8b7-e0a6-4ae0-b3f3-e463a014c4fd.png"
                alt="Avatar with laptop"
                className="w-[220px] h-[220px] object-contain"
              />
            </div>

            {/* Name and arrow positioned above the avatar, name at the end of the arrow */}
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 flex flex-col items-center w-[320px] pointer-events-none">
              <svg
                width="320"
                height="80"
                viewBox="0 0 320 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="block"
              >
                <path
                  d="M10 40 Q160 -10 270 55"
                  stroke="#A259FF"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="5 5"
                />
                {/* Arrowhead at the end of the curve */}
                <polygon points="260,50 272,56 260,62" fill="#A259FF" />
              </svg>
              <div className="absolute left-[245px] top-[48px] pointer-events-auto">
                <span className="text-base md:text-lg text-white font-light">
                  Hello! I Am{" "}
                  <span className="text-cosmic-purple font-medium">
                    Dimitris Kiriakakis
                  </span>
                </span>
              </div>
            </div>
          </div>

          {/* Right side - Main quote content */}
          <div className="flex-1 ml-24 text-left flex flex-col justify-center relative hide-on-mobile">
            {/* Underline for the whole quote */}
            <div
              className="absolute left-0 right-0"
              style={{ top: "calc(100% - 1.5rem)" }}
            >
              <div
                className="w-full border-b-4 border-cosmic-purple opacity-60 rounded-full"
                style={{ height: "0.5rem" }}
              ></div>
            </div>
            <p className="text-xl text-white/70 mb-2 font-light">
              A Designer who
            </p>
            <h1 className="text-7xl md:text-8xl font-extrabold mb-2 leading-tight text-white">
              Judges a book
            </h1>
            <div className="flex items-center gap-4 mb-2">
              <span className="text-4xl md:text-5xl font-extrabold text-white">
                by its
              </span>
              <div className="relative inline-block align-middle">
                <span className="text-4xl md:text-5xl font-extrabold text-cosmic cosmic-gradient bg-clip-text text-transparent z-10 relative">
                  cover
                </span>
                {/* Hand-drawn style oval around "cover" (SVG, thinner, more organic, better aligned) */}
                <svg
                  className="absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none"
                  width="140"
                  height="48"
                  viewBox="0 0 140 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ zIndex: 1 }}
                >
                  <path
                    d="M10 38 Q70 5 130 24 Q70 47 10 38 Z"
                    stroke="#A259FF"
                    strokeWidth="3"
                    fill="none"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <span className="text-4xl md:text-5xl font-extrabold text-white">
                ...
              </span>
            </div>
            <p className="text-base text-white/50 max-w-lg font-light mt-1">
              Because if the cover doesn't impress you why would you open it?
            </p>
          </div>
        </div>

        {/* Bottom section - Software Engineer content aligned to left */}
        <div className="space-y-4 text-left mt-16">
          <h2 className="text-5xl md:text-6xl font-extrabold text-white">
            I'm a Software Engineer.
            <span className="text-cosmic-purple">|</span>
          </h2>
          <p className="text-white/80 flex items-center gap-2 text-lg">
            Currently, I'm a Software Engineer at
            <span className="inline-flex items-center ml-2">
              {/* Facebook SVG icon */}
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#1877F3"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-1"
              >
                <circle cx="12" cy="12" r="12" fill="#1877F3" />
                <path
                  d="M15.36 8.26H13.5V7.13C13.5 6.7 13.8 6.6 14.01 6.6H15.33V4.44L13.53 4.43C11.37 4.43 10.95 5.77 10.95 6.98V8.26H9.75V10.42H10.95V16.43H13.5V10.42H15.09L15.36 8.26Z"
                  fill="white"
                />
              </svg>
              <span className="text-[#1877F3] font-semibold">Facebook</span>,
            </span>
          </p>
          <p className="text-white/70 max-w-2xl leading-relaxed text-lg">
            A self-taught UI/UX designer, functioning in the industry for 3+
            years now. I make meaningful and delightful digital products that
            create an equilibrium between user needs and business goals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
