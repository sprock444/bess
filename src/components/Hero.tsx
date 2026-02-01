import Link from "next/link";

interface HeroProps {
  headline?: string;
  subheadline?: string;
  cta?: string;
}

export default function Hero({
  headline = "The Future of Energy Storage",
  subheadline = "Grid-scale battery systems engineered for maximum performance, reliability, and return on investment.",
  cta = "Explore Solutions",
}: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center section-darker overflow-hidden">
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-overlay opacity-30" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-electric-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-500/5 rounded-full blur-3xl" />

      <div className="relative z-20 mx-auto max-w-7xl px-6 lg:px-8 py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column - Text content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-electric-500/10 border border-electric-500/20 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-500"></span>
              </span>
              <span className="text-sm font-medium text-electric-400 uppercase tracking-wider">
                ITC Tax Credit Eligible
              </span>
            </div>

            {/* Headline */}
            <h1 className="headline-xl mb-6">
              {headline.split(" ").slice(0, 2).join(" ")}{" "}
              <span className="text-gradient">{headline.split(" ").slice(2).join(" ")}</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-gray-400 mb-10 leading-relaxed">
              {subheadline}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="#contact" className="btn-primary">
                <span className="flex items-center gap-2">
                  {cta}
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
              <Link href="#projects" className="btn-secondary">
                View Projects
              </Link>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
              <div>
                <p className="stat-value">500+</p>
                <p className="text-sm text-gray-500 mt-1 uppercase tracking-wider">MW Deployed</p>
              </div>
              <div>
                <p className="stat-value">99.5%</p>
                <p className="text-sm text-gray-500 mt-1 uppercase tracking-wider">Uptime</p>
              </div>
              <div>
                <p className="stat-value">24/7</p>
                <p className="text-sm text-gray-500 mt-1 uppercase tracking-wider">Monitoring</p>
              </div>
            </div>
          </div>

          {/* Right column - Image */}
          <div className="relative hidden lg:block">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              {/* Gradient border effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-electric-500/20 to-neon-500/20 rounded-lg blur-sm" />

              {/* Image container with placeholder */}
              <div className="relative h-full w-full bg-dark-800 rounded-lg overflow-hidden border border-white/10">
                {/* Styled placeholder - replace with actual image */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('/hero-bess.jpg')`,
                    backgroundColor: '#1a1a2e',
                  }}
                >
                  {/* Fallback visual when no image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="grid grid-cols-3 gap-4 p-8 opacity-20">
                      {[...Array(6)].map((_, i) => (
                        <div
                          key={i}
                          className="w-24 h-16 bg-gradient-to-br from-electric-500/30 to-neon-500/30 rounded border border-white/10"
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-dark-900/30 via-transparent to-electric-500/10" />

                {/* Badge on image */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-dark-950/80 backdrop-blur-sm border border-white/10 rounded px-4 py-3">
                    <p className="text-sm text-gray-400">Featured Installation</p>
                    <p className="text-white font-semibold">250 MW / 1,000 MWh System</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-electric-500/20 rounded-lg -z-10" />
            <div className="absolute -top-4 -left-4 w-24 h-24 border border-neon-500/20 rounded-lg -z-10" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="flex flex-col items-center gap-2 text-gray-500">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-electric-500 to-transparent" />
        </div>
      </div>
    </section>
  );
}
