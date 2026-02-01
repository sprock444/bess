import { ReactNode } from "react";

const projects = [
  {
    name: "SunValley Solar + Storage",
    location: "California, USA",
    capacity: "200 MW / 800 MWh",
    description:
      "One of the largest solar-plus-storage facilities in North America, providing grid stability and peak shaving services to the California ISO.",
    type: "Utility Scale",
    status: "Operational",
    image: "solar",
  },
  {
    name: "WindForce Grid Storage",
    location: "Texas, USA",
    capacity: "150 MW / 600 MWh",
    description:
      "Integrated wind farm storage solution providing frequency regulation and capacity firming for ERCOT grid operations.",
    type: "Utility Scale",
    status: "Operational",
    image: "wind",
  },
  {
    name: "Metro Industrial Complex",
    location: "New York, USA",
    capacity: "50 MW / 200 MWh",
    description:
      "Commercial and industrial energy storage serving a major manufacturing hub, reducing demand charges by 45%.",
    type: "Commercial & Industrial",
    status: "Operational",
    image: "industrial",
  },
  {
    name: "Pacific Microgrid Network",
    location: "Hawaii, USA",
    capacity: "75 MW / 300 MWh",
    description:
      "Island microgrid solution providing energy resilience and enabling 95% renewable integration for remote communities.",
    type: "Microgrid",
    status: "Under Construction",
    image: "microgrid",
  },
];

const iconMap: Record<string, ReactNode> = {
  solar: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
  ),
  wind: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1V18"
      />
    </svg>
  ),
  industrial: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
      />
    </svg>
  ),
  microgrid: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
      />
    </svg>
  ),
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 section-darker relative">
      {/* Background grid */}
      <div className="absolute inset-0 grid-overlay opacity-30" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-electric-500 font-medium uppercase tracking-widest text-sm mb-4">
            Our Portfolio
          </p>
          <h2 className="headline-lg mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Explore our portfolio of grid-scale and commercial energy storage
            deployments powering the clean energy transition.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="card group">
              <div className="flex items-start justify-between mb-6">
                <div className="w-16 h-16 bg-dark-800 border border-white/10 flex items-center justify-center text-electric-500 group-hover:border-electric-500/50 transition-colors">
                  {iconMap[project.image]}
                </div>
                <span
                  className={`inline-flex items-center px-3 py-1 text-xs font-medium uppercase tracking-wider ${
                    project.status === "Operational"
                      ? "bg-neon-500/10 text-neon-500 border border-neon-500/20"
                      : "bg-electric-500/10 text-electric-400 border border-electric-500/20"
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full mr-2 ${
                      project.status === "Operational"
                        ? "bg-neon-500"
                        : "bg-electric-500 animate-pulse"
                    }`}
                  />
                  {project.status}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-electric-400 transition-colors">
                {project.name}
              </h3>

              <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  {project.location}
                </span>
                <span className="text-electric-500 font-medium">{project.type}</span>
              </div>

              <p className="text-gray-400 mb-6 leading-relaxed">{project.description}</p>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Capacity</p>
                  <p className="text-lg font-bold text-white">{project.capacity}</p>
                </div>
                <button className="text-electric-500 font-medium text-sm hover:text-electric-400 flex items-center gap-2 group/btn">
                  Learn More
                  <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Summary stats */}
        <div className="mt-16 flex flex-wrap justify-center gap-12 md:gap-20 py-10 border-t border-b border-white/10">
          <div className="text-center">
            <p className="stat-value">475+</p>
            <p className="text-sm text-gray-500 mt-1 uppercase tracking-wider">Total MW</p>
          </div>
          <div className="text-center">
            <p className="stat-value">1.9 GWh</p>
            <p className="text-sm text-gray-500 mt-1 uppercase tracking-wider">Energy Capacity</p>
          </div>
          <div className="text-center">
            <p className="stat-value">50+</p>
            <p className="text-sm text-gray-500 mt-1 uppercase tracking-wider">Projects</p>
          </div>
        </div>
      </div>
    </section>
  );
}
