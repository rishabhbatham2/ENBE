import { AnnouncementBar } from '@/components/announcement-bar';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-background text-foreground">
      <AnnouncementBar />
      <Header />
      <main className="container mx-auto max-w-[1371px] px-4 py-16 sm:py-24">
        <div className="max-w-readable mx-auto">
            <h1 className="text-m-h1 md:text-h1 font-headline font-semibold mb-8">Privacy Policy</h1>
            <div className="space-y-6 text-muted-foreground">
                <h2 className="text-m-h2 md:text-h2 font-headline font-semibold text-foreground !mt-12">1. Objective, Scope and Applicability</h2>
                <p>eNBe TechServ Private Limited (“Company”, “we”, “our”, “us”) respects your privacy and is committed to protecting your Personal Information. This Privacy Policy (“Policy”) explains how we collect, use, store, share, and protect your information when you access or use our website, mobile platforms, or services (collectively, the “Platform”).</p>
                <p>This Policy applies to individuals and organizations that browse our Platform, submit inquiries, purchase products, or otherwise engage with us (“you”, “your”, or “Customer”). It does not apply to third-party websites linked to our Platform or to information collected offline unless explicitly stated.</p>
                <p>By using our Platform and providing your information, you consent to the collection, use, and disclosure of your Personal Information in accordance with this Policy.</p>

                <h2 className="text-m-h2 md:text-h2 font-headline font-semibold text-foreground !mt-12">2. Definitions</h2>
                <p>“Personal Information” means any information that identifies or can reasonably be used to identify an individual, either directly or indirectly, including name, contact details, address, payment information, device identifiers, and any other data associated with an identifiable person.</p>

                <h2 className="text-m-h2 md:text-h2 font-headline font-semibold text-foreground !mt-12">3. Information We Collect</h2>
                <p>We collect information through the following means:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li><strong>Information You Provide Directly:</strong> Name, email address, phone number, postal address, organization or clinic details, inquiry or service request details, product interests and order details, payment and billing information (processed via secure third-party payment gateways).</li>
                  <li><strong>Information Collected Automatically:</strong> IP address, browser type, operating system, device identifiers, usage data such as pages visited, time spent, and navigation behavior, cookies and similar tracking technologies.</li>
                  <li><strong>Information from Third Parties:</strong> Logistics partners (delivery status), payment service providers, marketing platforms, analytics providers.</li>
                </ul>

                <h2 className="text-m-h2 md:text-h2 font-headline font-semibold text-foreground !mt-12">4. Purpose of Collection</h2>
                <p>We use your Personal Information to:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>Process orders and deliver products</li>
                  <li>Provide customer support and technical assistance</li>
                  <li>Respond to inquiries and service requests</li>
                  <li>Improve our Platform and product offerings</li>
                  <li>Send transactional communications and service updates</li>
                  <li>Conduct marketing and promotional activities (where permitted)</li>
                  <li>Comply with legal and regulatory obligations</li>
                  <li>Prevent fraud and unauthorized activities</li>
                </ul>

                <h2 className="text-m-h2 md:text-h2 font-headline font-semibold text-foreground !mt-12">5. Legal Basis for Processing</h2>
                <p>We process your Personal Information based on:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li><strong>Contractual necessity</strong> – to fulfill orders and service obligations</li>
                  <li><strong>Legitimate interests</strong> – to improve services and communicate with customers</li>
                  <li><strong>Legal compliance</strong> – to meet statutory and regulatory requirements</li>
                  <li><strong>Consent</strong> – where required for marketing or sensitive data processing</li>
                </ul>

                <h2 className="text-m-h2 md:text-h2 font-headline font-semibold text-foreground !mt-12">6. Sharing of Information</h2>
                <p>We may share your Personal Information with:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>Authorized service providers (logistics, payment gateways, hosting services)</li>
                    <li>Technology partners supporting Platform operations</li>
                    <li>Government or regulatory authorities if legally required</li>
                    <li>Professional advisors (legal, financial, compliance)</li>
                </ul>
                <p>We do not sell or rent your Personal Information to third parties.</p>

                <h2 className="text-m-h2 md:text-h2 font-headline font-semibold text-foreground !mt-12">7. Data Retention</h2>
                <p>We retain Personal Information only as long as necessary to:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>Fulfill the purposes for which it was collected</li>
                  <li>Comply with legal and regulatory obligations</li>
                  <li>Resolve disputes and enforce agreements</li>
                </ul>
                <p>When no longer required, data is securely deleted or anonymized.</p>

                <h2 className="text-m-h2 md:text-h2 font-headline font-semibold text-foreground !mt-12">8. Security Measures</h2>
                <p>We implement reasonable administrative, technical, and physical safeguards to protect Personal Information, including:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>Secure servers and encryption</li>
                  <li>Access controls and authentication</li>
                  <li>Regular security audits</li>
                  <li>Restricted data access on a need-to-know basis</li>
                </ul>
                <p>While we strive to protect your data, no system is completely secure, and we cannot guarantee absolute security.</p>
                
                <h2 className="text-m-h2 md:text-h2 font-headline font-semibold text-foreground !mt-12">9. Cookies and Tracking Technologies</h2>
                <p>We use cookies and similar technologies to:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>Enhance user experience</li>
                  <li>Analyze traffic and usage trends</li>
                  <li>Improve website functionality</li>
                  <li>Deliver relevant content and advertisements</li>
                </ul>
                <p>You may manage or disable cookies through your browser settings. Some features of the Platform may not function properly without cookies.</p>

                <h2 className="text-m-h2 md:text-h2 font-headline font-semibold text-foreground !mt-12">10. User Rights and Choices</h2>
                <p>You have the right to:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>Access and update your Personal Information</li>
                    <li>Withdraw consent for data processing</li>
                    <li>Opt out of marketing communications</li>
                    <li>Request deletion of your Personal Information</li>
                    <li>Lodge a complaint with the Company</li>
                </ul>
                <p>Requests may be sent to the contact details provided below.</p>

                <h2 className="text-m-h2 md:text-h2 font-headline font-semibold text-foreground !mt-12">11. Marketing Communications</h2>
                <p>We may send service-related and promotional communications via email, SMS, phone, or WhatsApp. You may opt out of marketing communications at any time using the unsubscribe link or by contacting us directly.</p>

                <h2 className="text-m-h2 md:text-h2 font-headline font-semibold text-foreground !mt-12">12. Third-Party Links</h2>
                <p>Our Platform may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites. Please review their privacy policies before providing any information.</p>

                <h2 className="text-m-h2 md:text-h2 font-headline font-semibold text-foreground !mt-12">13. Children’s Privacy</h2>
                <p>Our Platform is not intended for individuals under the age of 18. We do not knowingly collect Personal Information from minors. If we become aware of such data, it will be deleted promptly.</p>
                
                <h2 className="text-m-h2 md:text-h2 font-headline font-semibold text-foreground !mt-12">14. Changes to This Policy</h2>
                <p>We may update this Policy periodically. Any changes will be posted on our Platform with an updated effective date. Continued use of the Platform after changes constitutes acceptance of the revised Policy.</p>

                <h2 className="text-m-h2 md:text-h2 font-headline font-semibold text-foreground !mt-12">15. Grievance Redressal and Contact Information</h2>
                <p>For questions, concerns, or complaints regarding this Policy or your Personal Information, please contact:</p>
                <p>eNBe TechServ Private Limited</p>
                <ul className="list-none space-y-2 pl-4">
                  <li>📧 Email: jsrawat@enbetechserv.com</li>
                  <li>📞 Phone: +91-+91 88006 33255</li>
                  <li>🏢 Address: T2/505, RPS Savana, Sector - 88, Faridabad - 121002, Haryana</li>
                  <li>🕒 Business Hours: Monday–Saturday (9:00 AM – 8:00 PM)</li>
                </ul>

                <h2 className="text-m-h2 md:text-h2 font-headline font-semibold text-foreground !mt-12">16. Governing Law</h2>
                <p>This Policy shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts located in Faridabad.</p>
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
