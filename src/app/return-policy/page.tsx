import { AnnouncementBar } from '@/components/announcement-bar';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export default function ReturnPolicyPage() {
  return (
    <div className="bg-background text-foreground">
      <AnnouncementBar />
      <Header />
      <main className="container mx-auto max-w-[1371px] px-4 py-16 sm:py-24">
        <div className="max-w-readable mx-auto">
            <h1 className="text-m-h1 md:text-h1 font-headline font-semibold mb-8">Refund, Cancellation & Returns Policy</h1>
            <div className="space-y-6 text-muted-foreground">

                <h2 className="text-m-h2 md:text-h2 font-headline font-semibold text-foreground !mt-12">Order Placement & Processing</h2>
                <p>eNBe TechServ operates on an enquiry-based order model. Customers submit product enquiries through our website or contact channels, after which our team connects with them to confirm product specifications, pricing, availability, and delivery timelines.</p>
                <p>Orders are processed manually upon mutual confirmation between the customer and eNBe TechServ.</p>

                <h2 className="text-m-h2 md:text-h2 font-headline font-semibold text-foreground !mt-12">Cancellation Policy</h2>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>Orders may be cancelled only before the product has been dispatched from our warehouse or supplier.</li>
                    <li>To request a cancellation, customers must write to us at support@enbetechserv.com with their order or enquiry reference details.</li>
                    <li>Once a cancellation request is acknowledged and approved, any advance payment (if applicable) will be refunded within 7 business days.</li>
                    <li>Orders cannot be cancelled once the product has been shipped or handed over to the logistics partner.</li>
                </ul>

                <h2 className="text-m-h2 md:text-h2 font-headline font-semibold text-foreground !mt-12">Refund Policy</h2>
                <p>eNBe TechServ does not accept returns or issue refunds except under the following conditions:</p>
                <p>Refunds or replacements may be considered only if:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>The product is damaged during transit</li>
                    <li>The product has manufacturing defects (as verified by the brand/manufacturer)</li>
                    <li>An incorrect product was supplied</li>
                </ul>
                <p>To raise a return or refund request:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>Customers must notify us within 7 days of receiving the product.</li>
                    <li>An email must be sent to support@enbetechserv.com with:
                        <ul className="list-disc list-inside space-y-2 pl-4 mt-2">
                           <li>Order or invoice details</li>
                           <li>Clear photographs or videos of the damaged, defective, or incorrect product</li>
                        </ul>
                    </li>
                    <li>All requests are subject to inspection and validation by eNBe TechServ and/or the original manufacturer.</li>
                </ul>
                

                <h2 className="text-m-h2 md:text-h2 font-headline font-semibold text-foreground !mt-12">Returns & Replacement Conditions</h2>
                <p>Returns or replacements will not be accepted if:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>The product has been used, installed, or altered</li>
                    <li>The original packaging, seals, or accessories are missing or damaged</li>
                    <li>The serial number or identification labels have been tampered with</li>
                    <li>The issue arises due to improper handling or misuse</li>
                </ul>
                <p>Upon receipt of the returned product, eNBe TechServ will inspect and validate the claim.</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>If approved, either a replacement or refund (as applicable) will be initiated.</li>
                    <li>If found ineligible, the product will be returned to the customer.</li>
                </ul>

                <h2 className="text-m-h2 md:text-h2 font-headline font-semibold text-foreground !mt-12">Refund Processing Timeline</h2>
                 <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>For advance payments made via bank transfer, UPI, or digital payment methods, refunds will be processed to the original source within 7–14 business days after approval.</li>
                    <li>For any other payment arrangements, refund timelines will be communicated at the time of confirmation.</li>
                </ul>


                <h2 className="text-m-h2 md:text-h2 font-headline font-semibold text-foreground !mt-12">Insurance</h2>
                 <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>eNBe TechServ provides transit insurance only, which is valid until the product is delivered and accepted by the customer.</li>
                    <li>Any transit damage must be reported immediately upon delivery and documented with photographic evidence.</li>
                </ul>
                

                <h2 className="text-m-h2 md:text-h2 font-headline font-semibold text-foreground !mt-12">Shipping & Delivery</h2>
                 <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>eNBe TechServ arranges shipping manually through trusted logistics partners.</li>
                    <li>Delivery timelines are indicative and communicated during order confirmation.</li>
                    <li>While we strive to ensure timely delivery, unforeseen circumstances such as logistical delays, supplier issues, or force majeure events may cause delays.</li>
                    <li>Customers will be informed of any such delays by our support team.</li>
                </ul>
                

                <h2 className="text-m-h2 md:text-h2 font-headline font-semibold text-foreground !mt-12">Important Notes</h2>
                <ul className="list-disc list-inside space-y-2 pl-4">
                    <li>As orders are processed based on custom quotations and manual confirmations, pricing, availability, and delivery timelines may vary.</li>
                    <li>All sales are subject to the manufacturer’s warranty terms, where applicable.</li>
                    <li>eNBe TechServ assists customers in coordinating warranty or service requests with the original manufacturer or supplier.</li>
                </ul>
                

                <h2 className="text-m-h2 md:text-h2 font-headline font-semibold text-foreground !mt-12">Contact Information</h2>
                <p>For cancellations, refunds, returns, or service-related queries:</p>
                <p>eNBe TechServ Private Limited</p>
                <ul className="list-none space-y-2 pl-4">
                  <li>📧 Email: jsrawat@enbetechserv.com</li>
                  <li>📞 Phone: +91 88006 33255</li>
                  <li>🏢 Address: T2/505, RPS Savana, Sector - 88, Faridabad - 121002, Haryana</li>
                  <li>🕒 Business Hours: Monday–Saturday (11:00 AM – 6:00 PM)</li>
                </ul>
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
