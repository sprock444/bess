export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 section-dark relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-electric-500/5 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left column - Content */}
          <div>
            <p className="text-electric-500 font-medium uppercase tracking-widest text-sm mb-4">
              About PowerGrid
            </p>
            <h2 className="headline-lg mb-6">
              Pioneering the Future of{" "}
              <span className="text-gradient">Energy Storage</span>
            </h2>
            <p className="text-lg text-gray-400 mb-6 leading-relaxed">
              PowerGrid BESS is at the forefront of the energy storage revolution.
              Founded by industry veterans with decades of experience in power
              systems and renewable energy, we deliver innovative battery solutions
              that transform how businesses and utilities manage electricity.
            </p>
            <p className="text-lg text-gray-400 mb-10 leading-relaxed">
              Our mission is to accelerate the global transition to sustainable
              energy by providing reliable, cost-effective, and scalable storage
              systems.
            </p>

            {/* Feature list */}
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z", title: "Proven Track Record", desc: "500+ MW across 50+ projects" },
                { icon: "M13 10V3L4 14h7v7l9-11h-7z", title: "Cutting-Edge Tech", desc: "Industry-leading battery systems" },
                { icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z", title: "Expert Team", desc: "200+ engineers & specialists" },
                { icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064", title: "Global Presence", desc: "12 countries, 4 continents" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-dark-800 border border-white/10 flex items-center justify-center group-hover:border-electric-500/50 transition-colors">
                    <svg className="w-5 h-5 text-electric-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{item.title}</h3>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column - Stats grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "15+", label: "Years Experience", color: "electric" },
                { value: "2 GWh", label: "Total Capacity", color: "neon" },
                { value: "40%", label: "Cost Savings", color: "neon" },
                { value: "99.5%", label: "Availability", color: "electric" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className={`card group ${i === 1 || i === 2 ? "mt-8" : ""}`}
                >
                  <div className={`stat-value mb-2`}>
                    {stat.value}
                  </div>
                  <p className="text-gray-400 text-sm uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-8 -right-8 w-32 h-32 border border-electric-500/20" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-neon-500/20" />
          </div>
        </div>
      </div>
    </section>
  );
}
