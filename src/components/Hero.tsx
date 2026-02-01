import Link from "next/link";

interface HeroProps {
  headline?: string;
  subheadline?: string;
  cta?: string;
}

export default function Hero({
  headline = "Power Your Future with Advanced Energy Storage",
  subheadline = "Industry-leading Battery Energy Storage Systems for utilities, commercial, and industrial applications. Maximize efficiency, reduce costs, and accelerate your clean energy transition.",
  cta = "Get Your Free Assessment",
}: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center gradient-bg pt-16">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-slow" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-secondary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-slow animation-delay-2000" />
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-accent-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-slow animation-delay-4000" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
              </span>
              Now Offering ITC Tax Credit Eligible Systems
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 text-balance">
              {headline.split(" ").map((word, i) =>
                ["Energy", "Storage", "Future", "Power"].includes(word) ? (
                  <span key={i} className="gradient-text">
                    {word}{" "}
                  </span>
                ) : (
                  <span key={i}>{word} </span>
                )
              )}
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl">
              {subheadline}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#contact" className="btn-primary text-center">
                {cta}
                <svg
                  className="ml-2 -mr-1 h-5 w-5"
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
              </Link>
              <Link href="#projects" className="btn-secondary text-center">
                View Our Projects
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-8">
              <div>
                <p className="text-3xl md:text-4xl font-bold text-primary-600">500+</p>
                <p className="text-sm text-gray-600">MW Deployed</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-primary-600">98%</p>
                <p className="text-sm text-gray-600">Uptime SLA</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-primary-600">24/7</p>
                <p className="text-sm text-gray-600">Monitoring</p>
              </div>
            </div>
          </div>

          <div className="relative animate-slide-up hidden lg:block">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-3xl transform rotate-6 opacity-20" />
              <div className="absolute inset-0 bg-white rounded-3xl shadow-2xl p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl flex items-center justify-center">
                    <svg
                      className="w-16 h-16 text-primary-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Grid-Scale BESS
                  </h3>
                  <p className="text-gray-600 text-sm">
                    From 1 MWh to 1 GWh capacity
                  </p>
                  <div className="mt-6 flex justify-center gap-4">
                    <div className="text-center">
                      <div className="w-3 h-3 rounded-full bg-green-500 mx-auto mb-1 animate-pulse"></div>
                      <span className="text-xs text-gray-500">Online</span>
                    </div>
                    <div className="text-center">
                      <div className="w-3 h-3 rounded-full bg-primary-500 mx-auto mb-1"></div>
                      <span className="text-xs text-gray-500">Charging</span>
                    </div>
                    <div className="text-center">
                      <div className="w-3 h-3 rounded-full bg-accent-500 mx-auto mb-1"></div>
                      <span className="text-xs text-gray-500">Peak Shave</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
