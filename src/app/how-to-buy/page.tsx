import { AnnouncementBar } from '@/components/announcement-bar';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import Image from 'next/image';
import { placeholderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { Search, MessageSquare, FileText, Package, Truck } from 'lucide-react';

export default function HowToBuyPage() {
  const howToBuyImage = placeholderImages.find(p => p.id === 'how-to-buy-inquiry');

  const steps = [
    {
      icon: <Search className="w-8 h-8 text-primary" />,
      title: 'Step 1: Browse Our Products',
      description: 'Explore our extensive catalog of advanced physiotherapy and rehabilitation equipment. Find the products that best suit your clinical needs.',
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-primary" />,
      title: 'Step 2: Submit an Enquiry',
      description: 'Once you have identified the products you are interested in, use our contact form or email us to submit an enquiry. Please provide as much detail as possible.',
    },
    {
      icon: <FileText className="w-8 h-8 text-primary" />,
      title: 'Step 3: Receive a Quotation',
      description: 'Our sales team will review your enquiry and get back to you with a detailed quotation, including product specifications, pricing, and availability.',
    },
    {
      icon: <Package className="w-8 h-8 text-primary" />,
      title: 'Step 4: Confirm Your Order',
      description: 'Review the quotation and confirm your order with our team. We will finalize the payment terms and prepare your order for dispatch.',
    },
    {
      icon: <Truck className="w-8 h-8 text-primary" />,
      title: 'Step 5: Delivery & Installation',
      description: 'Your order will be shipped to your location. We provide transit insurance and can arrange for installation and training upon request.',
    },
  ];

  return (
    <div className="bg-background text-foreground">
      <AnnouncementBar />
      <Header />
      <main className="container mx-auto max-w-[1371px] px-4 py-16 sm:py-24">
        <div className="text-center max-w-readable mx-auto mb-16">
          <h1 className="text-m-h1 md:text-h1 font-headline font-semibold">How to Buy</h1>
          <p className="mt-4 text-body-lg text-muted-foreground">
            Our purchasing process is designed to be simple and consultative, ensuring you get the right equipment for your needs. Follow these steps to place an order with eNBe TechServ.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="relative aspect-[4/5] rounded-xl overflow-hidden mt-0 md:mt-8">
            {howToBuyImage && (
              <Image
                src={howToBuyImage.imageUrl}
                alt={howToBuyImage.description}
                fill
                className="object-cover"
                data-ai-hint={howToBuyImage.imageHint}
              />
            )}
          </div>

          <Card className="bg-card p-8 sm:p-12 rounded-xl border-none">
             <CardContent className="p-0">
                <div className="space-y-8">
                  {steps.map((step, index) => (
                      <div key={index} className="flex items-start gap-6">
                          <div className="flex-shrink-0 mt-1">{step.icon}</div>
                          <div>
                              <h3 className="text-h4 font-semibold text-foreground mb-2">{step.title}</h3>
                              <p className="text-body-base text-muted-foreground">{step.description}</p>
                          </div>
                      </div>
                  ))}
                </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
