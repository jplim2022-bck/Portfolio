export default function Stats() {
  const stats = [
    {
      number: "4+",
      label: "Years Experience",
      description: "Remote work expertise"
    },
    {
      number: "100%",
      label: "Client Satisfaction",
      description: "Reliable & accurate"
    },
    {
      number: "24/7",
      label: "Availability",
      description: "Flexible schedule"
    },
    {
      number: "1000+",
      label: "Tasks Completed",
      description: "Proven track record"
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-[#0a0b1e] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center glass p-6 rounded-2xl hover:bg-white/10 transition-all"
            >
              <div className="text-3xl md:text-5xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-white font-semibold mb-1 text-sm md:text-base">
                {stat.label}
              </div>
              <div className="text-gray-400 text-xs md:text-sm">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
