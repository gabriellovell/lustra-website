import Link from "next/link";

import termsContent from "@/content/pages/terms.json";

type TermsContent = typeof termsContent;

type Section = TermsContent["sections"][number];

type SectionProps = {
  section: Section;
};

function SectionHeading({ title }: { title: string }) {
  return <h2 className="text-2xl font-semibold text-gray-900 mb-4">{title}</h2>;
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="list-disc list-inside text-gray-700 space-y-2">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function TermsSection({ section }: SectionProps) {
  return (
    <section>
      <SectionHeading title={section.title} />
      {section.body && <p className="text-gray-700 leading-relaxed mb-4">{section.body}</p>}
      {section.items && section.items.length > 0 && <List items={section.items} />}
    </section>
  );
}

export default function Terms() {
  const { title, lastUpdated, intro, sections } = termsContent;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg" aria-hidden />
            <span className="text-xl font-bold text-gray-900">Lustra</span>
          </Link>
          <Link href="/" className="text-purple-600 hover:text-purple-700 font-medium">
            ← Back to Home
          </Link>
        </nav>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">{title}</h1>

          <p className="text-gray-600 mb-8">
            <strong>Last Updated:</strong> {lastUpdated}
          </p>

          <p className="text-gray-700 leading-relaxed mb-8">{intro}</p>

          <div className="space-y-8">
            {sections.map((section) => (
              <TermsSection key={section.title} section={section} />
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-6 h-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded" aria-hidden />
            <span className="text-lg font-bold">Lustra</span>
          </div>
          <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Lustra. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
