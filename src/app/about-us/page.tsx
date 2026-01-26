'use client';

import { AnnouncementBar } from '@/components/announcement-bar';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function AboutUsPage() {
  const offerings = [
    'Reliable, clinically validated technology that reduces treatment variability',
    'Easy-to-use systems that minimize training time and operational complexity',
    'Seamless integration into existing clinical workflows',
    'Expert technical support to reduce downtime and service delays',
    'Scalable solutions suitable for clinics, hospitals, and sports rehab centers',
  ];

  return (
    <div className="bg-background text-foreground">
      <AnnouncementBar />
      <Header />
      <main>
        <section className="bg-secondary py-16 sm:py-24">
          <div className="container mx-auto max-w-[1371px] px-4">
            <div className="text-center max-w-readable mx-auto">
              <div className="inline-flex items-center gap-2 bg-card px-3 py-1 rounded-full text-sm font-medium mb-4 shadow-sm">
                <Sparkles className="w-4 h-4 text-primary" />
                <span>About Us</span>
              </div>
              <h1 className="text-m-h1 md:text-h1 font-headline font-semibold text-foreground">
                Advanced Physiotherapy and Rehabilitation Solutions
              </h1>
              <p className="text-m-body-base md:text-body-lg mt-4 text-muted-foreground">
                eNBe TechServ is a leading provider of advanced physiotherapy and rehabilitation solutions in India, delivering high-performance medical and therapeutic equipment to clinics, hospitals, and sports rehab centers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center">
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link href="/products">
                    Explore Products
                    <ArrowRight />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-card text-foreground">
                  <Link href="/contact-us">
                    Talk to sales
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24">
          <div className="container mx-auto max-w-[1371px] px-4">
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start max-w-5xl mx-auto">
              <div className='md:col-span-1'>
                 <h2 className="text-m-h2 md:text-h2 font-headline font-semibold text-foreground mb-4">
                  Our Mission
                </h2>
                <div className="space-y-4 text-muted-foreground text-body-base md:text-body-lg">
                  <p>
                    Our portfolio integrates cutting-edge electrotherapy, ultrasound, NMES, and VR-based rehabilitation technologies, along with assessment tools engineered to optimize muscle recovery, pain management, and functional mobility.
                  </p>
                  <p>
                    With a focus on precision, safety, and evidence-based performance, each device undergoes rigorous design and clinical validation to ensure maximum therapeutic efficacy.
                  </p>
                  <p>
                   Beyond equipment, eNBe TechServ provides technical support, training, and integration guidance, enabling healthcare professionals to deliver measurable patient outcomes.
                  </p>
                </div>
              </div>
              <div className='md:col-span-1'>
                <h2 className="text-m-h2 md:text-h2 font-headline font-semibold text-foreground mb-4">
                  How We Help
                </h2>
                <p className="text-muted-foreground text-body-base md:text-body-lg mb-6">We address common clinical and operational challenges by offering:</p>
                <ul className="space-y-4">
                    {offerings.map((offering, index) => (
                        <li key={index} className="flex items-start gap-3">
                            <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                            <span className="text-body-base text-muted-foreground">{offering}</span>
                        </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 sm:py-24">
            <div className="container mx-auto max-w-[1371px] px-4">
                <div className="text-center max-w-prose mx-auto">
                    <h2 className="text-m-h2 md:text-h2 font-headline font-semibold text-foreground mb-4">
                    Our Commitment
                    </h2>
                    <p className="text-m-body-base md:text-body-lg text-muted-foreground">
                        By combining advanced technology with dependable support, eNBe TechServ helps healthcare professionals improve efficiency, enhance patient recovery, and build long-term clinical trust.
                    </p>
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
