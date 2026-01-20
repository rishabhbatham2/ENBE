import { AnnouncementBar } from '@/components/announcement-bar';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export default function ShippingPolicyPage() {
  return (
    <div className="bg-background text-foreground">
      <AnnouncementBar />
      <Header />
      <main className="container mx-auto max-w-[1371px] px-4 py-16 sm:py-24">
        <div className="max-w-readable mx-auto">
            <h1 className="text-m-h1 md:text-h1 font-headline font-semibold mb-8">Shipping & Delivery Policy</h1>
            <div className="space-y-6 text-muted-foreground">

                <h2 className="text-m-h2 md:text-h2 font-headline font-semibold text-foreground !mt-12">1. Order Processing Model</h2>
                <p>eNBe TechServ operates on an enquiry-based order system. Customers submit product enquiries through our website or contact channels. Orders are processed only after:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>Product specifications are finalized</li>
                    <li>Pricing and availability are confirmed</li>
                    <li>Delivery timelines are communicated</li>
                    <li>Payment terms (if applicable) are agreed upon</li>
                </ul>
                <p>Once the above steps are completed, the order is confirmed and scheduled for dispatch.</p>

                <h2 className="text-m-h2 md:text-h2 font-headline font-semibold text-foreground !mt-12">2. Shipping Method</h2>
                <p>All shipments are arranged manually through trusted third-party logistics partners or direct supplier dispatch.</p>
                <p>The choice of courier or freight partner depends on:</p>
                 <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>Product size and weight</li>
                    <li>Delivery location</li>
                    <li>Urgency and special handling requirements</li>
                </ul>
                <p>Tracking details will be shared with the customer once available.</p>

                <h2 className="text-m-h2 md:text-h2 font-headline font-semibold text-foreground !mt-12">3. Delivery Timeline</h2>
                <p>Delivery timelines are indicative and communicated at the time of order confirmation.</p>
                <p>Typical delivery timelines range from 5 to 15 business days, depending on:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>Product availability</li>
                    <li>Supplier dispatch schedules</li>
                    <li>Customer location</li>
                    <li>Logistics partner performance</li>
                </ul>
                <p>While we make every effort to deliver within the estimated timeline, delays may occur due to factors beyond our control.</p>

                <h2 className="text-m-h2 md:text-h2 font-headline font-semibold text-foreground !mt-12">4. Delivery Charges</h2>
                <p>Shipping and handling charges (if applicable) will be clearly communicated to the customer during order confirmation.</p>
                <p>Any additional charges for special packaging, insurance, or express delivery will be informed in advance.</p>

                <h2 className="text-m-h2 md:text-h2 font-headline font-semibold text-foreground !mt-12">5. Transit Insurance</h2>
                <p>eNBe TechServ provides transit insurance only, valid until the product is delivered and accepted by the customer.</p>
                <p>Any visible damage to the package or product must be reported immediately at the time of delivery and documented with photographs or videos.</p>

                <h2 className="text-m-h2 md:text-h2 font-headline font-semibold text-foreground !mt-12">6. Delivery Acceptance</h2>
                <p>Customers are advised to inspect the package upon delivery.</p>
                <p>In case of visible damage, customers should:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>Refuse delivery or</li>
                    <li>Accept delivery only after noting the damage on the delivery receipt</li>
                    <li>Inform eNBe TechServ within 24 hours of delivery</li>
                </ul>
                <p>Failure to report transit damage within the stipulated time may result in rejection of claims.</p>

                <h2 className="text-m-h2 md:text-h2 font-headline font-semibold text-foreground !mt-12">7. Partial Shipments</h2>
                <p>Orders may be delivered in multiple shipments depending on product availability and logistics arrangements.</p>
                <p>Customers will be informed in advance if partial shipments are required.</p>

                <h2 className="text-m-h2 md:text-h2 font-headline font-semibold text-foreground !mt-12">8. Failed Delivery Attempts</h2>
                <p>If delivery fails due to incorrect address, unavailability of the recipient, or refusal to accept the shipment, re-delivery charges may apply.</p>
                <p>Any storage or return-to-origin charges incurred due to failed delivery attempts shall be borne by the customer.</p>
                
                <h2 className="text-m-h2 md:text-h2 font-headline font-semibold text-foreground !mt-12">9. Delays and Force Majeure</h2>
                <p>eNBe TechServ shall not be held liable for delays caused by:</p>
                 <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>Natural disasters</li>
                    <li>Government restrictions</li>
                    <li>Strikes or transportation disruptions</li>
                    <li>Supplier delays</li>
                    <li>Pandemics or public health emergencies</li>
                    <li>Any circumstances beyond reasonable control</li>
                </ul>
                <p>Customers will be notified in case of significant delays.</p>

                <h2 className="text-m-h2 md:text-h2 font-headline font-semibold text-foreground !mt-12">10. Installation and Setup (If Applicable)</h2>
                <p>Installation or setup services (if offered) will be scheduled separately and communicated to the customer.</p>
                <p>Certain products may require professional installation by the manufacturer or authorized service partner.</p>
                <p>Additional charges may apply for installation services.</p>

                <h2 className="text-m-h2 md:text-h2 font-headline font-semibold text-foreground !mt-12">11. International Shipping</h2>
                <p>International shipping (if offered) will be subject to separate terms, customs duties, taxes, and regulatory clearances.</p>
                <p>All international shipping charges and duties shall be borne by the customer.</p>
                
                <h2 className="text-m-h2 md:text-h2 font-headline font-semibold text-foreground !mt-12">12. Contact Information</h2>
                <p>For shipping and delivery-related queries:</p>
                <p>eNBe TechServ Private Limited</p>
                <ul className="list-none space-y-2 pl-4">
                  <li>📧 Email: jsrawat@enbetechserv.com</li>
                  <li>📞 Phone: +91 88006 33255</li>
                  <li>🏢 Address: T2/505, RPS Savana, Sector - 88, Faridabad - 121002, Haryana</li>
                  <li>🕒 Business Hours: Monday–Saturday (9:00 AM – 8:00 PM)</li>
                </ul>
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
