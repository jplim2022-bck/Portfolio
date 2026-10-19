export default function Projects() {
  const projects = [
    {
      title: "AI Project",
      description:
        "AI-assisted development and automation project showcasing practical applications of AI tools in business operations and workflow optimization.",
      link: "https://drive.google.com/drive/folders/1i9OO1w9wZsclj-80E2hAPUWzIG2cWcEx?usp=sharing",
      images: ["/images/ai-project-1.jpg", "/images/ai-project-2.jpg"], // Multiple preview images
      tags: ["AI Tools", "ChatGPT", "Claude", "Automation", "Development"],
      featured: true,
    },
    {
      title: "Cognitive Assessment App",
      description:
        "An interactive cognitive assessment application designed to evaluate and track cognitive abilities through various testing modules and analytics.",
      link: "https://cogapp.vercel.app/",
      images: ["/images/cog-project.jpg"],
      tags: ["Next.js", "React", "TypeScript", "Vercel"],
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-12 md:py-32 bg-[#0a0b1e] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-8 md:mb-20">
          <p className="text-indigo-400 text-xs md:text-sm tracking-widest uppercase font-semibold mb-2 md:mb-4">
            MY WORK
          </p>
          <h2 className="text-3xl md:text-7xl font-bold text-white mb-4 md:mb-8">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-indigo-500"></div>
        </div>

        <div className="mb-8 md:mb-16 max-w-2xl">
          <p className="text-gray-300 text-sm md:text-lg leading-relaxed">
            A showcase of my recent work in AI-assisted development and application design.
          </p>
        </div>

        <div className="grid gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass p-6 md:p-12 rounded-2xl hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="flex flex-col gap-6 md:gap-8">
                {/* Project Info */}
                <div className="space-y-3 md:space-y-6">
                  {project.featured && (
                    <span className="inline-block px-3 py-1 md:px-4 md:py-1 bg-indigo-500/20 text-indigo-400 rounded-full text-xs font-semibold uppercase tracking-wider">
                      Featured Project
                    </span>
                  )}
                  
                  <h3 className="text-2xl md:text-4xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm md:text-lg leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 md:px-4 md:py-2 bg-white/5 border border-white/10 text-gray-300 rounded-lg text-xs md:text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Images or Video */}
                {project.images && project.images.length > 0 ? (
                  <div className="w-full rounded-xl overflow-hidden bg-black/50">
                    {project.images.length === 1 ? (
                      // Single image
                      <img
                        src={project.images[0]}
                        alt={project.title}
                        className="w-full h-auto object-cover"
                      />
                    ) : (
                      // Multiple images - grid layout
                      <div className="grid grid-cols-2 gap-2 p-2">
                        {project.images.map((img, imgIndex) => (
                          <img
                            key={imgIndex}
                            src={img}
                            alt={`${project.title} preview ${imgIndex + 1}`}
                            className="w-full h-auto object-cover rounded-lg"
                          />
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="w-full h-48 md:h-64 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-xl flex items-center justify-center group-hover:from-indigo-500/30 group-hover:to-purple-500/30 transition-all">
                    <div className="text-center">
                      <svg
                        className="w-12 h-12 md:w-16 md:h-16 text-indigo-400 mx-auto mb-2"
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
                      <p className="text-gray-400 text-xs md:text-sm">Application Preview</p>
                    </div>
                  </div>
                )}

                {/* View Project Link */}
                {project.link !== '#' && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-indigo-400 font-semibold hover:translate-x-2 transition-transform text-sm md:text-base w-fit"
                  >
                    <span>VIEW PROJECT</span>
                    <svg
                      className="w-4 h-4 md:w-5 md:h-5"
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
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
