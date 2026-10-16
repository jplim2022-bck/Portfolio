export default function Projects() {
  const projects = [
    {
      title: "Cognitive Assessment App",
      description:
        "An interactive cognitive assessment application designed to evaluate and track cognitive abilities through various testing modules and analytics.",
      link: "https://cogapp.vercel.app/",
      tags: ["Next.js", "React", "TypeScript", "Vercel"],
      featured: true,
    },
  ];

  return (
    <section id="projects" className="py-32 bg-[#0a0b1e] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-20">
          <p className="text-indigo-400 text-sm tracking-widest uppercase font-semibold mb-4">
            MY WORK
          </p>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8">
            Featured Project
          </h2>
          <div className="w-20 h-1 bg-indigo-500"></div>
        </div>

        <div className="mb-16 max-w-2xl">
          <p className="text-gray-300 text-lg leading-relaxed">
            A showcase of my recent work in web development and application design.
          </p>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="glass p-8 md:p-12 rounded-2xl hover:bg-white/10 transition-all duration-300 group cursor-pointer"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
                <div className="flex-1 space-y-6">
                  {project.featured && (
                    <span className="inline-block px-4 py-1 bg-indigo-500/20 text-indigo-400 rounded-full text-xs font-semibold uppercase tracking-wider">
                      Featured Project
                    </span>
                  )}
                  
                  <h3 className="text-3xl md:text-4xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-4 py-2 bg-white/5 border border-white/10 text-gray-300 rounded-lg text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center space-x-2 text-indigo-400 font-semibold group-hover:translate-x-2 transition-transform">
                    <span>VIEW PROJECT</span>
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>

                <div className="flex-shrink-0">
                  <div className="w-full md:w-64 h-48 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-xl flex items-center justify-center group-hover:from-indigo-500/30 group-hover:to-purple-500/30 transition-all">
                    <div className="text-center">
                      <svg
                        className="w-16 h-16 text-indigo-400 mx-auto mb-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                        />
                      </svg>
                      <p className="text-gray-400 text-sm">Cognitive App</p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
