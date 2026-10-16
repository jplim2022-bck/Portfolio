export default function Skills() {
  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/>
        </svg>
      ),
      title: "Data Management",
      description:
        "Expert in high-volume data entry, verification, and spreadsheet management. Proficient in Excel, Google Sheets, and database systems with strong attention to detail.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
        </svg>
      ),
      title: "Web Development",
      description:
        "Responsive, accessible and reliable web experiences with modern interfaces and dependable backend architecture using Next.js, React, and TypeScript.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
        </svg>
      ),
      title: "Virtual Assistance",
      description:
        "Remote administrative and operations support with expertise in ticket management, event research, inventory tracking, and record keeping.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
        </svg>
      ),
      title: "Process Automation",
      description:
        "Practical intelligent features and automations that improve decisions, simplify complex work, and create real value through efficient workflows.",
    },
  ];

  return (
    <section id="skills" className="py-32 bg-[#0a0b1e] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-20">
          <p className="text-indigo-400 text-sm tracking-widest uppercase font-semibold mb-4">
            WHAT I CAN BUILD WITH YOU
          </p>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8">
            Services
          </h2>
          <div className="w-20 h-1 bg-indigo-500"></div>
        </div>

        <div className="mb-16 max-w-2xl">
          <p className="text-gray-300 text-lg leading-relaxed">
            From an early idea to a complete digital product, I create solutions shaped
            around the problem—not a generic template.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 group cursor-pointer"
            >
              <div className="mb-6 text-indigo-400 group-hover:text-indigo-300 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
