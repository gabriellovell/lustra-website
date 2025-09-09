import Link from "next/link";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg"></div>
            <span className="text-xl font-bold text-gray-900">Lustra</span>
          </Link>
          <Link href="/" className="text-purple-600 hover:text-purple-700 font-medium">
            ← Back to Home
          </Link>
        </nav>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          
          <p className="text-gray-600 mb-8">
            <strong>Last Updated:</strong> December 2024
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
              <p className="text-gray-700 leading-relaxed">
                At Lustra, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and services. We are committed to protecting your personal information and your right to privacy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
              <h3 className="text-xl font-medium text-gray-900 mb-3">Personal Information</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Profile photos you upload for analysis</li>
                <li>Dating profile text and bio content</li>
                <li>Email address for account creation and communication</li>
                <li>Usage data and app interaction patterns</li>
                <li>Device information and technical data</li>
              </ul>
              
              <h3 className="text-xl font-medium text-gray-900 mb-3">Automatically Collected Information</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>App usage statistics and analytics</li>
                <li>Device identifiers and operating system information</li>
                <li>IP address and location data (if permitted)</li>
                <li>Crash reports and performance data</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Your Information</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>To provide AI-powered profile optimization and recommendations</li>
                <li>To analyze photos and provide improvement suggestions</li>
                <li>To generate personalized bio and messaging recommendations</li>
                <li>To improve our app functionality and user experience</li>
                <li>To provide customer support and respond to inquiries</li>
                <li>To send important updates and notifications about our services</li>
                <li>To prevent fraud and ensure app security</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Security</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We implement industry-standard security measures to protect your personal information:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>End-to-end encryption for all data transmission</li>
                <li>Secure cloud storage with restricted access</li>
                <li>Regular security audits and vulnerability assessments</li>
                <li>Multi-factor authentication for our internal systems</li>
                <li>Automatic data anonymization for research purposes</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information Sharing</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties except in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>With your explicit consent</li>
                <li>To trusted service providers who assist in app operations (under strict confidentiality agreements)</li>
                <li>When required by law or to protect our rights and safety</li>
                <li>In connection with a business transaction (merger, acquisition, etc.)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Retention</h2>
              <p className="text-gray-700 leading-relaxed">
                We retain your personal information only as long as necessary to provide our services and fulfill the purposes outlined in this policy. You can request deletion of your account and associated data at any time through the app settings or by contacting our support team.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Rights</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Depending on your location, you may have the following rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Right to access your personal data</li>
                <li>Right to correct or update inaccurate information</li>
                <li>Right to delete your personal data</li>
                <li>Right to restrict processing of your data</li>
                <li>Right to data portability</li>
                <li>Right to withdraw consent at any time</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Children&apos;s Privacy</h2>
              <p className="text-gray-700 leading-relaxed">
                Lustra is intended for users aged 18 and older. We do not knowingly collect personal information from children under 18. If we discover that a child under 18 has provided us with personal information, we will promptly delete such information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">International Users</h2>
              <p className="text-gray-700 leading-relaxed">
                If you are using Lustra from outside the United States, please note that your information may be transferred to, stored, and processed in the United States. By using our services, you consent to this transfer and processing.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to This Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this Privacy Policy periodically to reflect changes in our practices or applicable law. We will notify you of any material changes through the app or by email. Your continued use of Lustra after such modifications constitutes acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have questions about this Privacy Policy or our privacy practices, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2"><strong>Email:</strong> privacy@joinlustra.com</p>
                <p className="text-gray-700 mb-2"><strong>Address:</strong> Lustra Privacy Team</p>
                <p className="text-gray-700">123 Tech Street, San Francisco, CA 94105</p>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-6 h-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded"></div>
            <span className="text-lg font-bold">Lustra</span>
          </div>
          <p className="text-gray-400 text-sm">
            &copy; 2024 Lustra. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}