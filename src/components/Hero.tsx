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
      <div className="absolute inset-0 grid-overlay opacity-50" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-electric-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-neon-500/10 rounded-full blur-3xl" />

      {/* Hero image placeholder - wide aspect ratio */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-dark-950 via-dark-950/95 to-dark-950/70 z-10" />
        <div
          className="absolute right-0 top-0 bottom-0 w-2/3 bg-dark-800"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230099ff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        >
          {/* Placeholder for hero image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center opacity-30">
              <svg className="w-32 h-32 mx-auto text-electric-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="mt-4 text-sm text-gray-600">Hero Image Placeholder</p>
              <p className="text-xs text-gray-700">Industrial BESS Photography</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-20 mx-auto max-w-7xl px-6 lg:px-8 py-32">
        <div className="max-w-2xl">
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
          <p className="text-xl md:text-2xl text-gray-400 mb-10 leading-relaxed max-w-xl">
            {subheadline}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
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
          <div className="grid grid-cols-3 gap-8 pt-10 border-t border-white/10">
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
