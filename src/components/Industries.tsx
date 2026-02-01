const industries = [
  {
    name: "Utilities & Power Generators",
    description:
      "Grid-scale storage for frequency regulation, capacity firming, and renewable integration. Support transmission and distribution deferral with strategic storage deployment.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    applications: ["Frequency Regulation", "Capacity Markets", "T&D Deferral", "Black Start"],
    color: "primary",
  },
  {
    name: "Commercial & Industrial",
    description:
      "Reduce demand charges, optimize time-of-use rates, and ensure power quality. Ideal for manufacturing, data centers, and commercial facilities with high energy demands.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
    applications: ["Peak Shaving", "Demand Response", "Power Quality", "Backup Power"],
    color: "secondary",
  },
  {
    name: "Renewable Energy Developers",
    description:
      "Maximize project value with solar-plus-storage and wind-plus-storage solutions. Provide dispatchable renewable energy and capture higher PPA rates.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
    applications: ["Energy Shifting", "Capacity Firming", "Curtailment Reduction", "Hybrid Systems"],
    color: "accent",
  },
  {
    name: "Microgrids & Remote Power",
    description:
      "Enable energy independence for islands, remote communities, and critical facilities. Reduce diesel dependency and improve reliability in off-grid applications.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
        />
      </svg>
    ),
    applications: ["Island Mode", "Diesel Replacement", "Critical Loads", "Resilience"],
    color: "primary",
  },
  {
    name: "EV Charging Infrastructure",
    description:
      "Support high-power EV charging without costly grid upgrades. Buffer charging load, reduce demand charges, and enable fast charging anywhere.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2zM9 7h6m-6 4h6"
        />
      </svg>
    ),
    applications: ["Load Buffering", "Grid Upgrade Avoidance", "Fast Charging", "Fleet Electrification"],
    color: "secondary",
  },
  {
    name: "Mining & Heavy Industry",
    description:
      "Provide reliable power for remote mining operations and heavy industrial processes. Reduce fuel costs and enable renewable integration in challenging environments.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    applications: ["Remote Power", "Process Optimization", "Fuel Savings", "Emissions Reduction"],
    color: "accent",
  },
];

const colorClasses = {
  primary: {
    bg: "bg-primary-100",
    text: "text-primary-600",
    border: "border-primary-200",
  },
  secondary: {
    bg: "bg-secondary-100",
    text: "text-secondary-600",
    border: "border-secondary-200",
  },
  accent: {
    bg: "bg-accent-100",
    text: "text-accent-600",
    border: "border-accent-200",
  },
};

export default function Industries() {
  return (
    <section id="industries" className="py-20 md:py-28 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-heading">
            Industry-Specific <span className="gradient-text">Applications</span>
          </h2>
          <p className="section-subheading">
            Tailored energy storage solutions designed to meet the unique
            requirements of diverse industries and applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => {
            const colors = colorClasses[industry.color as keyof typeof colorClasses];
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl border border-gray-100 hover:border-gray-200 transition-all duration-300 group"
              >
                <div
                  className={`w-16 h-16 ${colors.bg} rounded-2xl flex items-center justify-center ${colors.text} mb-6 group-hover:scale-110 transition-transform`}
                >
                  {industry.icon}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {industry.name}
                </h3>

                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  {industry.description}
                </p>

                <div className="space-y-2">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Key Applications
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {industry.applications.map((app, appIndex) => (
                      <span
                        key={appIndex}
                        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${colors.bg} ${colors.text}`}
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-6">
            Don&apos;t see your industry? We design custom solutions for unique applications.
          </p>
          <a
            href="#contact"
            className="btn-primary inline-flex items-center"
          >
            Discuss Your Requirements
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
