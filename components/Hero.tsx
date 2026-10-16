"use client";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center animated-gradient pt-20 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-indigo-400 text-sm tracking-widest uppercase font-semibold">
                Hi, I&apos;m
              </p>
              <h1 className="text-6xl md:text-8xl font-bold text-white leading-tight">
                John
                <br />
                <span className="gradient-text">Patrick Lim</span>
              </h1>
            </div>

            <div className="inline-block px-6 py-3 glass rounded-full">
              <p className="text-white font-semibold">
                IT Professional & Virtual Assistant
              </p>
            </div>

            <div className="glass p-6 rounded-2xl space-y-4 max-w-md">
              <h3 className="text-white font-bold text-lg">PROFILE</h3>
              <h4 className="text-indigo-400 font-semibold">What I bring</h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                Virtual Assistant with 4 years of remote experience supporting U.S.-based 
                concert operations through ticket purchasing, inventory tracking, event research, 
                and high-volume data management. Skilled in maintaining accurate records, verifying 
                event information, organizing spreadsheets, and managing multiple tasks independently 
                while meeting deadlines. Combines strong attention to detail, organizational skills, 
                and technical proficiency to support efficient and reliable business operations.
              </p>
            </div>
          </div>

          {/* Right side - Image/Illustration area */}
          <div className="relative min-h-[600px]">
            <div className="relative">
              {/* Large circular background */}
              <div className="w-full max-w-md aspect-square rounded-full bg-gradient-to-br from-indigo-600/30 to-purple-600/30 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-6">
                    <div className="w-48 h-48 mx-auto bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white text-6xl font-bold">
                      JP
                    </div>
                  </div>
                </div>
              </div>

              {/* Action cards */}
              <div className="mt-8 space-y-4 max-w-md">
                <a
                  href="#skills"
                  className="glass px-8 py-5 rounded-2xl flex items-center justify-between hover:bg-white/10 transition-all group w-full block"
                >
                  <span className="text-white font-semibold text-lg">EXPLORE</span>
                  <svg
                    className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform"
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
                  className="glass px-8 py-5 rounded-2xl hover:bg-white/10 transition-all group w-full block"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-white font-semibold text-lg">Selected work</span>
                    <svg
                      className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform"
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
                  className="glass px-8 py-5 rounded-2xl hover:bg-white/10 transition-all group w-full block"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-white font-semibold text-lg">Let&apos;s talk</span>
                    <svg
                      className="w-6 h-6 text-white"
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
