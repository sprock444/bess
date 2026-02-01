import Link from "next/link";

const industries = [
  {
    name: "Utilities & Power",
    description:
      "Grid-scale storage for frequency regulation, capacity firming, and renewable integration.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    applications: ["Frequency Regulation", "Capacity Markets", "T&D Deferral", "Black Start"],
  },
  {
    name: "Commercial & Industrial",
    description:
      "Reduce demand charges, optimize time-of-use rates, and ensure power quality.",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
    applications: ["Peak Shaving", "Demand Response", "Power Quality", "Backup Power"],
  },
  {
    name: "Renewable Energy",
    description:
      "Maximize project value with solar-plus-storage and wind-plus-storage solutions.",
    icon: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z",
    applications: ["Energy Shifting", "Capacity Firming", "Curtailment Reduction", "Hybrid Systems"],
  },
  {
    name: "Microgrids",
    description:
      "Enable energy independence for islands, remote communities, and critical facilities.",
    icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z",
    applications: ["Island Mode", "Diesel Replacement", "Critical Loads", "Resilience"],
  },
  {
    name: "EV Infrastructure",
    description:
      "Support high-power EV charging without costly grid upgrades.",
    icon: "M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2zM9 7h6m-6 4h6",
    applications: ["Load Buffering", "Grid Upgrade Avoidance", "Fast Charging", "Fleet Electrification"],
  },
  {
    name: "Mining & Heavy Industry",
    description:
      "Provide reliable power for remote operations and heavy industrial processes.",
    icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065zM15 12a3 3 0 11-6 0 3 3 0 016 0z",
    applications: ["Remote Power", "Process Optimization", "Fuel Savings", "Emissions Reduction"],
  },
];

export default function Industries() {
  return (
    <section id="industries" className="py-24 md:py-32 section-darker relative">
      {/* Background grid */}
      <div className="absolute inset-0 grid-overlay opacity-30" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-electric-500 font-medium uppercase tracking-widest text-sm mb-4">
            Industry Solutions
          </p>
          <h2 className="headline-lg mb-6">
            Built for <span className="text-gradient">Your Industry</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Tailored energy storage solutions designed to meet the unique
            requirements of diverse industries and applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <div key={index} className="card group">
              <div className="w-16 h-16 bg-dark-800 border border-white/10 flex items-center justify-center mb-6 group-hover:border-electric-500/50 group-hover:bg-electric-500/10 transition-all">
                <svg className="w-7 h-7 text-electric-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={industry.icon} />
                </svg>
              </div>

              <h3 className="text-xl font-bold text-white mb-3">{industry.name}</h3>
              <p className="text-gray-400 mb-6 leading-relaxed text-sm">{industry.description}</p>

              <div className="space-y-2">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Key Applications
                </p>
                <div className="flex flex-wrap gap-2">
                  {industry.applications.map((app, appIndex) => (
                    <span
                      key={appIndex}
                      className="inline-flex items-center px-3 py-1 text-xs bg-dark-800 border border-white/10 text-gray-300"
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-400 mb-6">
            Don&apos;t see your industry? We design custom solutions for unique applications.
          </p>
          <Link href="#contact" className="btn-primary inline-flex">
            <span className="flex items-center gap-2">
              Discuss Your Requirements
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
