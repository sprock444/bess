import Link from "next/link";

const benefits = [
  {
    title: "Peak Demand Reduction",
    description:
      "Reduce peak demand charges by up to 50% by storing energy during off-peak hours and discharging during high-demand periods.",
    icon: "M13 17h8m0 0V9m0 8l-8-8-4 4-6-6",
    stat: "50%",
    statLabel: "Peak Reduction",
  },
  {
    title: "Renewable Integration",
    description:
      "Maximize the value of solar and wind investments by storing excess generation and dispatching when needed most.",
    icon: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z",
    stat: "95%",
    statLabel: "RE Utilization",
  },
  {
    title: "Grid Stability",
    description:
      "Provide frequency regulation, voltage support, and spinning reserves to maintain grid stability and prevent outages.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    stat: "99.9%",
    statLabel: "Uptime",
  },
  {
    title: "Revenue Stacking",
    description:
      "Generate multiple revenue streams through energy arbitrage, ancillary services, capacity payments, and demand response.",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    stat: "4+",
    statLabel: "Revenue Streams",
  },
  {
    title: "Backup Power",
    description:
      "Ensure business continuity with seamless backup power during outages, protecting critical operations and assets.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    stat: "4-8 hrs",
    statLabel: "Backup Duration",
  },
  {
    title: "Carbon Reduction",
    description:
      "Reduce reliance on fossil fuel peaker plants and accelerate decarbonization goals with zero-emission energy storage.",
    icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064",
    stat: "80%",
    statLabel: "Carbon Reduction",
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-24 md:py-32 section-dark relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 -translate-y-1/2 -right-64 w-[600px] h-[600px] bg-electric-500/5 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-electric-500 font-medium uppercase tracking-widest text-sm mb-4">
            Technology Benefits
          </p>
          <h2 className="headline-lg mb-6">
            The Power of <span className="text-gradient">BESS Technology</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Battery Energy Storage Systems deliver measurable value across
            financial, operational, and environmental dimensions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="card group">
              <div className="w-14 h-14 bg-dark-800 border border-white/10 flex items-center justify-center mb-6 group-hover:border-electric-500/50 group-hover:bg-electric-500/10 transition-all">
                <svg className="w-6 h-6 text-electric-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={benefit.icon} />
                </svg>
              </div>

              <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">{benefit.description}</p>

              <div className="pt-6 border-t border-white/10">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-gradient">{benefit.stat}</span>
                  <span className="text-sm text-gray-500 uppercase tracking-wider">{benefit.statLabel}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-electric-600 to-neon-600 opacity-10" />
          <div className="absolute inset-0 border border-electric-500/30" />

          <div className="relative px-8 py-12 md:px-12 md:py-16">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="headline-md mb-4">Calculate Your Savings</h3>
                <p className="text-gray-400 text-lg">
                  Our energy experts can analyze your usage patterns and demonstrate
                  the ROI potential for your specific application.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 md:justify-end">
                <Link href="#contact" className="btn-primary">
                  <span>Get Free Assessment</span>
                </Link>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-10 border-t border-white/10">
              {[
                { value: "3-5 yrs", label: "Typical Payback" },
                { value: "15-20%", label: "IRR Potential" },
                { value: "20+ yrs", label: "System Lifespan" },
                { value: "30%", label: "ITC Available" },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <p className="text-2xl md:text-3xl font-bold text-white">{item.value}</p>
                  <p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
