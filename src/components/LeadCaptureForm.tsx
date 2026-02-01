"use client";

import { useState, FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  company: string;
  interestLevel: string;
  projectType: string;
  message: string;
}

const interestLevels = [
  { value: "exploring", label: "Just Exploring" },
  { value: "evaluating", label: "Actively Evaluating" },
  { value: "planning", label: "Planning a Project" },
  { value: "ready", label: "Ready to Start" },
];

const projectTypes = [
  { value: "utility", label: "Utility Scale" },
  { value: "commercial", label: "Commercial & Industrial" },
  { value: "microgrid", label: "Microgrid" },
  { value: "ev", label: "EV Charging" },
  { value: "other", label: "Other" },
];

export default function LeadCaptureForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    interestLevel: "",
    projectType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Form submitted:", formData);
      setIsSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-24 md:py-32 section-dark">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="text-center card">
            <div className="w-20 h-20 bg-neon-500/10 border border-neon-500/20 flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-neon-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="headline-md mb-4">Thank You</h2>
            <p className="text-lg text-gray-400 mb-6">
              Your inquiry has been received. One of our energy storage specialists
              will contact you within 24 hours.
            </p>
            <p className="text-sm text-gray-500">
              In the meantime, explore our{" "}
              <a href="#projects" className="text-electric-500 hover:underline">
                project portfolio
              </a>{" "}
              to learn more about our capabilities.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 md:py-32 section-dark relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-electric-500/5 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <p className="text-electric-500 font-medium uppercase tracking-widest text-sm mb-4">
              Get Started
            </p>
            <h2 className="headline-lg mb-6">
              Start Your <span className="text-gradient">Energy Storage</span> Journey
            </h2>
            <p className="text-lg text-gray-400 mb-10 leading-relaxed">
              Ready to explore how battery energy storage can transform your
              operations? Our team of experts is here to help you navigate the
              options and design the optimal solution for your needs.
            </p>

            <div className="space-y-6 mb-10">
              {[
                { icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4", title: "Free Site Assessment", desc: "We'll analyze your energy usage and identify optimization opportunities" },
                { icon: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z", title: "Custom ROI Analysis", desc: "Receive a detailed financial model tailored to your specific situation" },
                { icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z", title: "Expert Consultation", desc: "Connect with our engineers to discuss your project requirements" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-dark-800 border border-white/10 flex items-center justify-center group-hover:border-electric-500/50 transition-colors">
                    <svg className="w-5 h-5 text-electric-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{item.title}</h3>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 bg-dark-800 border border-white/10">
              <p className="text-sm text-gray-400 mb-4">
                Prefer to talk directly? Reach us at:
              </p>
              <div className="space-y-3">
                <a href="tel:+18002377669" className="flex items-center gap-3 text-electric-500 hover:text-electric-400 transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  1-800-BESS-NOW
                </a>
                <a href="mailto:info@powergridbess.com" className="flex items-center gap-3 text-electric-500 hover:text-electric-400 transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  info@powergridbess.com
                </a>
              </div>
            </div>
          </div>

          <div className="card">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name <span className="text-electric-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark-800 border border-white/10 text-white placeholder-gray-500 focus:border-electric-500 focus:ring-1 focus:ring-electric-500 transition-colors"
                  placeholder="John Smith"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Work Email <span className="text-electric-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark-800 border border-white/10 text-white placeholder-gray-500 focus:border-electric-500 focus:ring-1 focus:ring-electric-500 transition-colors"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                  Company <span className="text-electric-500">*</span>
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark-800 border border-white/10 text-white placeholder-gray-500 focus:border-electric-500 focus:ring-1 focus:ring-electric-500 transition-colors"
                  placeholder="Your Company Name"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="interestLevel" className="block text-sm font-medium text-gray-300 mb-2">
                    Interest Level <span className="text-electric-500">*</span>
                  </label>
                  <select
                    id="interestLevel"
                    name="interestLevel"
                    required
                    value={formData.interestLevel}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-dark-800 border border-white/10 text-white focus:border-electric-500 focus:ring-1 focus:ring-electric-500 transition-colors"
                  >
                    <option value="">Select...</option>
                    {interestLevels.map((level) => (
                      <option key={level.value} value={level.value}>
                        {level.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-gray-300 mb-2">
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-dark-800 border border-white/10 text-white focus:border-electric-500 focus:ring-1 focus:ring-electric-500 transition-colors"
                  >
                    <option value="">Select...</option>
                    {projectTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Project Details (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark-800 border border-white/10 text-white placeholder-gray-500 focus:border-electric-500 focus:ring-1 focus:ring-electric-500 transition-colors resize-none"
                  placeholder="Tell us about your energy storage needs..."
                />
              </div>

              {error && (
                <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    "Get Your Free Assessment"
                  )}
                </span>
              </button>

              <p className="text-xs text-gray-500 text-center">
                By submitting this form, you agree to our{" "}
                <a href="#" className="text-electric-500 hover:underline">Privacy Policy</a>.
                We&apos;ll never share your information.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
