export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <h2 className="section-heading">
              Pioneering the Future of{" "}
              <span className="gradient-text">Energy Storage</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              PowerGrid BESS is at the forefront of the energy storage revolution.
              Founded by industry veterans with decades of experience in power
              systems and renewable energy, we deliver innovative battery energy
              storage solutions that transform how businesses and utilities manage
              electricity.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Our mission is to accelerate the global transition to sustainable
              energy by providing reliable, cost-effective, and scalable energy
              storage systems. We partner with utilities, commercial enterprises,
              and industrial facilities to optimize energy use, reduce costs, and
              minimize environmental impact.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-primary-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Proven Track Record</h3>
                  <p className="text-gray-600 text-sm">
                    500+ MW deployed across 50+ projects worldwide
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-secondary-100 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-secondary-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Cutting-Edge Tech</h3>
                  <p className="text-gray-600 text-sm">
                    Industry-leading battery chemistry and BMS
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-accent-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Expert Team</h3>
                  <p className="text-gray-600 text-sm">
                    200+ engineers and energy specialists
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-primary-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Global Presence</h3>
                  <p className="text-gray-600 text-sm">
                    Operations in 12 countries across 4 continents
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="card bg-gradient-to-br from-primary-50 to-white">
                  <div className="text-4xl font-bold text-primary-600 mb-2">15+</div>
                  <p className="text-gray-600">Years of Experience</p>
                </div>
                <div className="card bg-gradient-to-br from-secondary-50 to-white">
                  <div className="text-4xl font-bold text-secondary-600 mb-2">2 GWh</div>
                  <p className="text-gray-600">Total Capacity Deployed</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="card bg-gradient-to-br from-accent-50 to-white">
                  <div className="text-4xl font-bold text-accent-600 mb-2">40%</div>
                  <p className="text-gray-600">Average Cost Savings</p>
                </div>
                <div className="card bg-gradient-to-br from-primary-50 to-white">
                  <div className="text-4xl font-bold text-primary-600 mb-2">99.5%</div>
                  <p className="text-gray-600">System Availability</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
