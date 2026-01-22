import { AnnouncementBar } from '@/components/announcement-bar';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import Image from 'next/image';
import { placeholderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { FileText, Inbox, MessageSquare, PackageCheck, Leaf, UserCheck, Zap, Heart } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export default function HowToBuyPage() {
  const howToBuyImage = placeholderImages.find(p => p.id === 'how-to-buy-inquiry');

  const steps = [
    {
      icon: <FileText className="w-8 h-8 text-primary" />,
      title: 'Step 1: Submit the Enquiry Form',
      description: 'Fill out the enquiry form on our website to express your interest in our health and massage products. The form includes: Full Name, Email ID, Phone Number, and Quantity Required. This helps us understand your requirements and recommend the right product for you.',
    },
    {
      icon: <Inbox className="w-8 h-8 text-primary" />,
      title: 'Step 2: Enquiry Received by Our Team',
      description: 'Once you submit the form, your enquiry is securely received by the Enbe Techserv team. We review your details carefully to ensure accurate assistance.',
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-primary" />,
      title: 'Step 3: Sales & Support Team Contacts You',
      description: 'Our experienced sales support team will contact you to: explain product features and health benefits, guide you in selecting the right massage or wellness solution, and share pricing, availability, and delivery details.',
    },
    {
      icon: <PackageCheck className="w-8 h-8 text-primary" />,
      title: 'Step 4: Confirm Order & Enjoy a Healthier Lifestyle',
      description: 'After confirmation, we process your order and guide you through the next steps so you can start enjoying comfort, relaxation, and improved well-being in your daily life.',
    },
  ];

  const whyChooseUs = [
    {
      icon: <Leaf className="w-6 h-6 text-primary" />,
      text: 'Wellness-focused products for modern, busy lifestyles',
    },
    {
      icon: <UserCheck className="w-6 h-6 text-primary" />,
      text: 'Personalized product guidance',
    },
    {
      icon: <Zap className="w-6 h-6 text-primary" />,
      text: 'Quick and reliable customer support',
    },
    {
      icon: <Heart className="w-6 h-6 text-primary" />,
      text: 'Trusted solutions for comfort, recovery, and relaxation',
    }
  ];

  return (
    <div className="bg-background text-foreground">
      <AnnouncementBar />
      <Header />
      <main className="container mx-auto max-w-[1371px] px-4 py-16 sm:py-24">
        <div className="text-center max-w-readable mx-auto mb-16">
          <h1 className="text-m-h1 md:text-h1 font-headline font-semibold">How to Buy – Simple & Hassle-Free Process</h1>
          <p className="mt-4 text-body-lg text-muted-foreground">
             At Enbe Techserv, we make it easy to purchase wellness and massage products designed to support a healthy life, even with a busy schedule.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="relative aspect-square rounded-xl overflow-hidden mt-0 md:mt-8">
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

          <Card className="bg-card p-8 sm:p-12 rounded-xl border">
             <CardContent className="p-0">
                <div className="space-y-8">
                  {steps.map((step, index) => (
                      <div key={index} className="flex items-start gap-6">
                          <div className="flex-shrink-0 mt-1">{step.icon}</div>
                          <div>
                              <h3 className="text-h4 font-semibold text-foreground mb-2">{step.title}</h3>
                              <p className="text-body-base text-muted-foreground whitespace-pre-line">{step.description}</p>
                          </div>
                      </div>
                  ))}
                </div>
                <Separator className="my-8" />
                <div>
                  <h3 className="text-h4 font-semibold text-foreground mb-4">Why Choose Enbe Techserv?</h3>
                  <ul className="space-y-4">
                    {whyChooseUs.map((item, index) => (
                      <li key={index} className="flex items-center gap-4">
                        {item.icon}
                        <span className="text-body-base text-muted-foreground">{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
