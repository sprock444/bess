import Link from "next/link";

const footerLinks = {
  solutions: [
    { name: "Utility Scale BESS", href: "#" },
    { name: "Commercial Storage", href: "#" },
    { name: "Industrial Solutions", href: "#" },
    { name: "Microgrid Systems", href: "#" },
    { name: "EV Charging", href: "#" },
  ],
  company: [
    { name: "About Us", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Careers", href: "#" },
    { name: "News", href: "#" },
    { name: "Contact", href: "#contact" },
  ],
  resources: [
    { name: "Case Studies", href: "#" },
    { name: "White Papers", href: "#" },
    { name: "Blog", href: "#" },
    { name: "FAQ", href: "#" },
    { name: "Support", href: "#" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
  ],
};

const locations = [
  "California",
  "Texas",
  "New York",
  "Arizona",
  "Florida",
  "Nevada",
  "Colorado",
  "Oregon",
];

export default function Footer() {
  return (
    <footer className="bg-dark-950 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="relative h-10 w-10 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-electric-500 to-neon-500 opacity-20" />
                <svg
                  className="h-6 w-6 text-electric-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white tracking-tight">
                  POWERGRID
                </span>
                <span className="text-[10px] font-medium tracking-[0.2em] text-electric-500 uppercase">
                  Energy Storage
                </span>
              </div>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Pioneering the future of energy storage with innovative battery
              solutions for utilities, commercial, and industrial applications
              worldwide.
            </p>
            <div className="flex gap-3">
              {[
                { name: "LinkedIn", icon: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" },
                { name: "Twitter", icon: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
                { name: "YouTube", icon: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" },
              ].map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="w-10 h-10 bg-dark-800 border border-white/10 flex items-center justify-center hover:border-electric-500/50 hover:bg-electric-500/10 transition-all"
                  aria-label={social.name}
                >
                  <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Solutions</h3>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-500 hover:text-electric-500 transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-500 hover:text-electric-500 transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-500 hover:text-electric-500 transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5">
          <div className="mb-6">
            <h4 className="text-xs font-semibold text-gray-500 mb-3 uppercase tracking-wider">
              Serving Energy Storage Customers Across the US
            </h4>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {locations.map((location) => (
                <a
                  key={location}
                  href={`#${location.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-xs text-gray-600 hover:text-electric-500 transition-colors"
                >
                  BESS {location}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-sm text-gray-600">
              &copy; {new Date().getFullYear()} PowerGrid BESS. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6">
              {footerLinks.legal.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-gray-600 hover:text-electric-500 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
