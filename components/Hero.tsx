"use client";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center animated-gradient pt-16 md:pt-20 pb-12 md:pb-0 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-4 md:space-y-8">
            <div className="space-y-2 md:space-y-4">
              <p className="text-indigo-400 text-xs md:text-sm tracking-widest uppercase font-semibold">
                Hi, I&apos;m
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-8xl font-bold text-white leading-tight">
                John Patrick
                <br />
                <span className="gradient-text">D. Lim</span>
              </h1>
            </div>

            <div className="inline-block px-4 py-2 md:px-6 md:py-3 glass rounded-full">
              <p className="text-white font-semibold text-sm md:text-base">
                AI, Administrative & Business Operations Specialist
              </p>
            </div>

            <div className="glass p-4 md:p-6 rounded-2xl space-y-2 md:space-y-4 max-w-md">
              <h3 className="text-white font-bold text-base md:text-lg">PROFESSIONAL SUMMARY</h3>
              <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
                Virtual Assistant and Business Operations professional with 4 years of remote work 
                experience in data management, inventory tracking, online research, and administrative 
                operations. Skilled in maintaining accurate records, organizing operational information, 
                and using digital tools and AI-assisted workflows to support efficiency.
              </p>
            </div>
          </div>

          {/* Right side - Image/Illustration area */}
          <div className="relative">
            <div className="relative">
              {/* JP Circle */}
              <div className="w-32 h-32 md:w-48 md:h-48 mx-auto bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl md:text-6xl font-bold mb-4 md:mb-8">
                JP
              </div>

              {/* Action cards */}
              <div className="mt-4 md:mt-8 space-y-2 md:space-y-3 max-w-sm mx-auto">
                <a
                  href="#skills"
                  className="glass px-4 py-2.5 md:px-6 md:py-3 rounded-lg md:rounded-xl flex items-center justify-between hover:bg-white/10 transition-all group w-full block"
                >
                  <span className="text-white font-semibold text-xs md:text-base">Explore</span>
                  <svg
                    className="w-4 h-4 md:w-5 md:h-5 text-white group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
                
                <a
                  href="#projects"
                  className="glass px-4 py-2.5 md:px-6 md:py-3 rounded-lg md:rounded-xl hover:bg-white/10 transition-all group w-full block"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-white font-semibold text-xs md:text-base">Selected work</span>
                    <svg
                      className="w-4 h-4 md:w-5 md:h-5 text-white group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </a>
                
                <a
                  href="#contact"
                  className="glass px-4 py-2.5 md:px-6 md:py-3 rounded-lg md:rounded-xl hover:bg-white/10 transition-all group w-full block"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-white font-semibold text-xs md:text-base">Let&apos;s talk</span>
                    <svg
                      className="w-4 h-4 md:w-5 md:h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
