import type { Metadata } from "next";
import Link from "next/link";

const accentColor = "#FF5C5C";

type Section = {
  id: string;
  title: string;
  description: string;
};

const sections: Section[] = [
  {
    id: "information-we-collect",
    title: "1. Information We Collect",
    description:
      "We collect the details you choose to share with LustraAI, including dating profile prompts, biography text, and feedback you provide about your profile. When you upload or analyze photos, we process those images to deliver insights and recommendations. We also collect basic device and usage analytics so we can understand how features are performing and continue improving the product.",
  },
  {
    id: "how-we-use-information",
    title: "2. How We Use Your Information",
    description:
      "Your data powers the LustraAI experience. We use it to generate personalized AI suggestions, refine our recommendation models, and maintain your account. Aggregated and anonymized analytics may be used to train new models and enhance user experience, but we never use your personal data to build unrelated products.",
  },
  {
    id: "data-security",
    title: "3. Data Security",
    description:
      "Protecting your information is core to what we do. We employ industry-standard encryption in transit and at rest, enforce strict access controls for employees, and continuously monitor our systems for suspicious activity. Security reviews and audits help us ensure safeguards stay current.",
  },
  {
    id: "sharing-and-disclosure",
    title: "4. Sharing & Disclosure",
    description:
      "We do not sell, rent, or trade your personal information. Data is only shared with trusted partners when necessary to provide the services you request, and never without appropriate safeguards or your consent. If the law requires disclosure, we will notify you when possible.",
  },
  {
    id: "your-rights",
    title: "5. Your Rights",
    description:
      "You are always in control of your LustraAI data. You can request a copy of your personal information, ask us to delete it, or update your preferences at any time. Contact us using the information below and we will respond promptly in accordance with applicable laws.",
  },
  {
    id: "cookies-and-tracking",
    title: "6. Cookies & Tracking",
    description:
      "We use essential cookies and similar technologies to keep you signed in, remember your preferences, and gather basic analytics so we can improve the LustraAI experience. You can adjust cookie settings in your browser, though disabling them may impact certain features.",
  },
  {
    id: "third-party-services",
    title: "7. Third-Party Services",
    description:
      "LustraAI integrates with select third-party services—such as Apple, Google, the Rork backend, and Firebase/Supabase—to power login, payments, messaging, and infrastructure. Each provider is vetted for security, and only receives the data required to perform their role.",
  },
  {
    id: "contact",
    title: "8. Contact",
    description:
      "Need help or have a privacy question? Reach our team at team@joinlustra.com and we will get back to you quickly.",
  },
  {
    id: "legal-notice",
    title: "9. Legal Notice",
    description:
      "Quantum Tech Financial LLC\nDelaware, United States\nEIN on file, doing business as LustraAI.",
  },
];

const formattedDate = new Intl.DateTimeFormat("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric",
}).format(new Date());

export const metadata: Metadata = {
  title: "Privacy Policy & Legal | LustraAI",
  description:
    "Learn how LustraAI collects, uses, and protects your personal information. Review our privacy practices, data rights, and legal notice.",
};

export default function PrivacyAndLegalPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="border-b border-gray-200 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <p
            className="text-sm font-semibold tracking-wide uppercase"
            style={{ color: accentColor }}
          >
            Privacy & Legal
          </p>
          <h1 className="mt-3 text-4xl sm:text-5xl font-bold leading-tight text-gray-900">
            Privacy Policy & Legal Notice
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600">
            Last updated: {formattedDate}
          </p>
          <p className="mt-6 text-lg text-gray-700 leading-relaxed max-w-3xl">
            Your privacy matters to us. This page explains how LustraAI collects, uses, and protects your personal information,
            and outlines your rights as a user.
          </p>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-12">
          {sections.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-24">
              <div className="flex flex-col sm:flex-row sm:items-start sm:gap-6">
                <span
                  className="mb-4 sm:mb-0 inline-flex h-12 w-12 flex-none items-center justify-center rounded-full bg-gray-100 text-lg font-semibold"
                  style={{ border: `2px solid ${accentColor}`, color: accentColor }}
                  aria-hidden
                >
                  {section.title.split(".")[0]}
                </span>
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold text-gray-900">{section.title}</h2>
                  <p className="mt-4 whitespace-pre-line text-gray-700 leading-relaxed">{section.description}</p>
                </div>
              </div>
            </section>
          ))}
        </div>
      </main>

      <footer className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium text-white shadow-sm transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            style={{ backgroundColor: accentColor }}
          >
            ← Back to Home
          </Link>
          <p className="text-sm text-gray-500">© 2025 LustraAI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
