const benefits = [
  {
    title: "Peak Demand Reduction",
    description:
      "Reduce peak demand charges by up to 50% by storing energy during off-peak hours and discharging during high-demand periods.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
        />
      </svg>
    ),
    stat: "50%",
    statLabel: "Peak Reduction",
  },
  {
    title: "Renewable Integration",
    description:
      "Maximize the value of solar and wind investments by storing excess generation and dispatching when needed most.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
    stat: "95%",
    statLabel: "RE Utilization",
  },
  {
    title: "Grid Stability & Reliability",
    description:
      "Provide frequency regulation, voltage support, and spinning reserves to maintain grid stability and prevent outages.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    stat: "99.9%",
    statLabel: "Uptime",
  },
  {
    title: "Revenue Stacking",
    description:
      "Generate multiple revenue streams through energy arbitrage, ancillary services, capacity payments, and demand response.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    stat: "4+",
    statLabel: "Revenue Streams",
  },
  {
    title: "Backup Power & Resilience",
    description:
      "Ensure business continuity with seamless backup power during outages, protecting critical operations and assets.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    stat: "4-8 hrs",
    statLabel: "Backup Duration",
  },
  {
    title: "Carbon Footprint Reduction",
    description:
      "Reduce reliance on fossil fuel peaker plants and accelerate decarbonization goals with zero-emission energy storage.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"
        />
      </svg>
    ),
    stat: "80%",
    statLabel: "Carbon Reduction",
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-heading">
            Benefits of <span className="gradient-text">BESS Technology</span>
          </h2>
          <p className="section-subheading">
            Battery Energy Storage Systems deliver measurable value across
            financial, operational, and environmental dimensions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100 hover:border-primary-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-bl-[4rem] rounded-tr-2xl opacity-50 group-hover:opacity-100 transition-opacity" />

              <div className="relative">
                <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600 mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                  {benefit.icon}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>

                <p className="text-gray-600 mb-6">{benefit.description}</p>

                <div className="pt-6 border-t border-gray-100">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-primary-600">
                      {benefit.stat}
                    </span>
                    <span className="text-sm text-gray-500">{benefit.statLabel}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Calculate Your Savings
              </h3>
              <p className="text-primary-100 mb-6">
                Our energy experts can analyze your usage patterns and demonstrate
                the ROI potential for your specific application.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-colors"
              >
                Get Free Assessment
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
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur rounded-xl p-4 text-center">
                <p className="text-3xl font-bold text-white">3-5 yrs</p>
                <p className="text-primary-100 text-sm">Typical Payback</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-4 text-center">
                <p className="text-3xl font-bold text-white">15-20%</p>
                <p className="text-primary-100 text-sm">IRR Potential</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-4 text-center">
                <p className="text-3xl font-bold text-white">20+ yrs</p>
                <p className="text-primary-100 text-sm">System Lifespan</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-4 text-center">
                <p className="text-3xl font-bold text-white">30%</p>
                <p className="text-primary-100 text-sm">ITC Available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
