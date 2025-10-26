"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import landingPageContent from "@/content/pages/index.json";

type LandingPageContent = typeof landingPageContent;

type HeroActionIconName = LandingPageContent["hero"]["primaryActions"][number]["icon"];
type WhyIconName = LandingPageContent["whyLustra"]["items"][number]["icon"];
type FeatureIconName = LandingPageContent["features"]["items"][number]["icon"];

const whyBackgroundClassMap: Record<WhyIconName, string> = {
  bolt: "bg-purple-100",
  spark: "bg-pink-100",
  shield: "bg-blue-100",
};

const featureBackgroundClassMap: Record<FeatureIconName, string> = {
  edit: "bg-purple-100",
  photo: "bg-pink-100",
  chat: "bg-blue-100",
};

function HeroActionIcon({ icon }: { icon: HeroActionIconName }) {
  switch (icon) {
    case "appStore":
      return (
        <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        </svg>
      );
    case "googlePlay":
      return (
        <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
        </svg>
      );
    default:
      return null;
  }
}

function WhyIcon({ icon }: { icon: WhyIconName }) {
  switch (icon) {
    case "bolt":
      return (
        <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      );
    case "spark":
      return (
        <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      );
    case "shield":
      return (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      );
    default:
      return null;
  }
}

function FeatureIcon({ icon }: { icon: FeatureIconName }) {
  switch (icon) {
    case "edit":
      return (
        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      );
    case "photo":
      return (
        <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      );
    case "chat":
      return (
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const pageContent = landingPageContent;
  const { header, hero, whyLustra, features, referral, creators, testimonial, pricing, contact, footer } = pageContent;

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-b from-purple-50 to-white"
      data-sb-object-id={`landing-page:${pageContent.slug}`}
    >
      {/* Header */}
      <header
        className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50"
        data-sb-object-id="header"
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F3baef651a3394f3b8ece804fec9446e0%2F5bb0345ecabc49f2ad8b92ca329e7762?format=webp&width=800"
              alt={`${header.logoText} logo`}
              width={32}
              height={32}
              decoding="async"
              className="h-8 w-8 rounded"
            />
            <span className="text-xl font-bold text-gray-900" data-sb-field-path="logoText">
              {header.logoText}
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {header.navItems.map((item, index) => (
              item.targetId && item.targetId.startsWith("/") ? (
                <Link key={item.targetId} href={item.targetId} className="text-gray-700 hover:text-purple-600 transition-colors" data-sb-object-id={`header.navItems.${index}`}>
                  <span data-sb-field-path="label">{item.label}</span>
                </Link>
              ) : (
                <button
                  key={item.targetId}
                  onClick={() => scrollToSection(item.targetId)}
                  className="text-gray-700 hover:text-purple-600 transition-colors"
                  data-sb-object-id={`header.navItems.${index}`}
                >
                  <span data-sb-field-path="label">{item.label}</span>
                </button>
              )
            ))}
          </div>
          <button
            className="md:hidden p-2 text-gray-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-gray-200">
            <div className="px-4 py-2 space-y-2">
              {header.navItems.map((item, index) => (
                item.targetId && item.targetId.startsWith("/") ? (
                  <Link key={item.targetId} href={item.targetId} className="block w-full text-left px-3 py-2 text-gray-700 hover:text-purple-600 hover:bg-gray-50 rounded-md transition-colors" data-sb-object-id={`header.navItems.${index}`}>
                    <span data-sb-field-path="label">{item.label}</span>
                  </Link>
                ) : (
                  <button
                    key={item.targetId}
                    onClick={() => scrollToSection(item.targetId)}
                    className="block w-full text-left px-3 py-2 text-gray-700 hover:text-purple-600 hover:bg-gray-50 rounded-md transition-colors"
                    data-sb-object-id={`header.navItems.${index}`}
                  >
                    <span data-sb-field-path="label">{item.label}</span>
                  </button>
                )
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8" data-sb-object-id="hero">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content - Left Side */}
            <div className="text-center lg:text-left">
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
                data-sb-field-path="heading"
              >
                {hero.heading}
              </h1>
              <div className="mb-4">
                <p
                  className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600"
                  data-sb-field-path="highlight"
                >
                  {hero.highlight}
                </p>
              </div>
              <p className="text-xl text-gray-600 mb-8" data-sb-field-path="description">
                {hero.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-4">
                {hero.primaryActions.map((action, index) => (
                  <a
                    key={action.label}
                    href={action.href}
                    className={`inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold transition-colors ${
                      action.icon === "appStore"
                        ? "bg-black text-white hover:bg-gray-800"
                        : "bg-green-600 text-white hover:bg-green-700"
                    }`}
                    data-sb-object-id={`hero.primaryActions.${index}`}
                  >
                    <HeroActionIcon icon={action.icon} />
                    <span data-sb-field-path="label">{action.label}</span>
                  </a>
                ))}
              </div>
              {hero.secondaryAction && (
                <div className="flex justify-center lg:justify-start">
                  <a
                    href={hero.secondaryAction.href}
                    className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all"
                    data-sb-object-id="hero.secondaryAction"
                  >
                    <span data-sb-field-path="label">{hero.secondaryAction.label}</span>
                  </a>
                </div>
              )}
            </div>

            {/* Right-side hero image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative" data-sb-object-id="hero.phonePlaceholder">
                <div className="w-full max-w-[420px] h-auto flex items-center justify-center">
                  <div className="relative w-full h-[60vh] max-h-[660px] overflow-hidden rounded-2xl shadow-lg">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F3baef651a3394f3b8ece804fec9446e0%2F75625ac5ef79447f98e5b53d3e5adaaf?format=webp&width=1200"
                      alt={`${hero.phonePlaceholder.label} — ${hero.phonePlaceholder.caption}`}
                      className="w-full h-full object-cover"
                      loading="eager"
                      decoding="async"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-black/10" aria-hidden />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why Lustra Section */}
      <section id="why-lustra" className="py-20 bg-white scroll-mt-16" data-sb-object-id="whyLustra">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8" data-sb-field-path="title">
              {whyLustra.title}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {whyLustra.items.map((item, index) => (
              <div key={item.title} className="text-center p-6" data-sb-object-id={`whyLustra.items.${index}`}>
                <div className={`w-16 h-16 ${whyBackgroundClassMap[item.icon]} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <WhyIcon icon={item.icon} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2" data-sb-field-path="title">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Teaser Section */}
      <section id="features" className="py-20 bg-gradient-to-b from-gray-50 to-white scroll-mt-16" data-sb-object-id="features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4" data-sb-field-path="title">
              {features.title}
            </h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {features.items.map((feature, index) => (
              <div key={feature.title} className="bg-white p-8 rounded-2xl shadow-lg" data-sb-object-id={`features.items.${index}`}>
                <div className={`w-12 h-12 ${featureBackgroundClassMap[feature.icon]} rounded-lg flex items-center justify-center mb-4`}>
                  <FeatureIcon icon={feature.icon} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2" data-sb-field-path="title">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-4" data-sb-field-path="description">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
          {features.cta && (
            <div className="text-center mt-12">
              <a
                href={features.cta.href}
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all"
                data-sb-object-id="features.cta"
              >
                <span data-sb-field-path="label">{features.cta.label}</span>
              </a>
            </div>
          )}
        </div>
      </section>

      {/* Referral Teaser Section */}
      <section className="py-20 bg-white" data-sb-object-id="referral">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4" data-sb-field-path="title">
              {referral.title}
            </h2>
            <p className="text-xl mb-8" data-sb-field-path="description">
              {referral.description}
            </p>
            <button
              className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
              data-sb-field-path="buttonLabel"
            >
              {referral.buttonLabel}
            </button>
          </div>
        </div>
      </section>

      {/* Creator Teaser Section */}
      <section className="py-20 bg-gray-50" data-sb-object-id="creators">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4" data-sb-field-path="title">
              {creators.title}
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto" data-sb-field-path="description">
              {creators.description}
            </p>
            <a
              href={creators.buttonHref}
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all"
              data-sb-field-path="buttonLabel"
            >
              {creators.buttonLabel}
            </a>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-white" data-sb-object-id="testimonial">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-gray-50 rounded-2xl p-8">
              <svg className="w-12 h-12 text-yellow-400 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <p className="text-xl text-gray-700 italic mb-4" data-sb-field-path="quote">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <p className="text-gray-600" data-sb-field-path="attribution">
                &mdash; {testimonial.attribution}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Teaser Section */}
      <section id="pricing" className="py-20 bg-gradient-to-b from-gray-50 to-white scroll-mt-16" data-sb-object-id="pricing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4" data-sb-field-path="title">
              {pricing.title}
            </h2>
            <p className="text-xl text-gray-600 mb-8" data-sb-field-path="subtitle">
              {pricing.subtitle}
            </p>
            <a
              href={pricing.ctaHref}
              className="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold"
              data-sb-field-path="ctaLabel"
            >
              {pricing.ctaLabel}
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white scroll-mt-16" data-sb-object-id="contact">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4" data-sb-field-path="title">
              {contact.title}
            </h2>
            <p className="text-xl text-gray-600" data-sb-field-path="description">
              {contact.description}
            </p>
          </div>
          <div className="text-center">
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all"
              data-sb-field-path="ctaLabel"
            >
              {contact.ctaLabel}
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12" data-sb-object-id="footer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg" aria-hidden />
              <span className="text-xl font-bold" data-sb-field-path="logoText">
                {footer.logoText}
              </span>
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-gray-400">
              {footer.links.map((link, index) => (
                <span
                  key={link.label}
                  className="flex items-center space-x-2"
                  data-sb-object-id={`footer.links.${index}`}
                >
                  {index > 0 && (
                    <span aria-hidden className="select-none">
                      •
                    </span>
                  )}
                  {link.type === "internal" ? (
                    <Link href={link.href} className="hover:text-white transition-colors" data-sb-field-path="label">
                      {link.label}
                    </Link>
                  ) : (
                    <a href={link.href} className="hover:text-white transition-colors" data-sb-field-path="label">
                      {link.label}
                    </a>
                  )}
                </span>
              ))}
            </div>
            <div className="text-gray-400 pt-4">
              <p data-sb-field-path="legalEntity">&copy; {new Date().getFullYear()} {footer.legalEntity}</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
