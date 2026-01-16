'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Lightbulb, Zap, Cog } from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';

export default function AboutUsPage() {
  const stats = [
    { value: '2015+', label: 'Product release' },
    { value: '1500+', label: 'People building Tuesday' },
    { value: '500+', label: 'Countries use Tuesday' },
    { value: '300K+', label: 'Customers rely on Tuesday to organize' },
  ];

  const timelineEvents = [
    {
      date: '2018 - December',
      title: 'The Spark Of Innovation',
      description:
        'Lumora was envisioned as a solution to redefine team management and bridge gaps in workflow coordination. A bold idea was born to empower businesses with smarter tools.',
      icon: Lightbulb,
    },
    {
      date: '2019 - October',
      title: 'Beta Launch',
      description:
        'Lumora took its first steps as a beta product, gaining traction and refining its features to cater to the real needs of users in team management.',
      icon: Zap,
    },
    {
      date: '2022 - September',
      title: 'Revolutionizing With Automation',
      description: 'We introduced powerful automation features, allowing teams to streamline workflows and achieve unprecedented efficiency.',
      icon: Cog,
    },
  ];

  return (
    <div className="bg-background text-foreground">
      <Header />
      <main>
        <section className="bg-secondary py-16 sm:py-24">
          <div className="container mx-auto max-w-[1371px] px-4">
            <div className="text-center max-w-readable mx-auto">
              <div className="inline-flex items-center gap-2 bg-card px-3 py-1 rounded-full text-sm font-medium mb-4 shadow-sm">
                <Sparkles className="w-4 h-4 text-accent" />
                <span>About Us</span>
              </div>
              <h1 className="text-m-h1 md:text-h1 font-headline font-semibold text-foreground">
                Empowering Teams, One Task at a Time, Every Day
              </h1>
              <p className="text-m-body-base md:text-body-lg mt-4 text-muted-foreground">
                Lumora was created to meet the need for a fast, intuitive, and flexible task management platform that helps teams achieve maximum productivity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center">
                <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link href="#">
                    Start Now For Free
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

            <div className="mt-16 sm:mt-24">
              <Card className="rounded-xl shadow-subtle">
                <CardContent className="p-8 sm:p-12">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 divide-x divide-border">
                    {stats.map((stat, index) => (
                      <div key={index} className="text-center px-4">
                        <p className="text-m-h2 md:text-h2 font-headline font-semibold text-foreground">
                          {stat.value.slice(0, -1)}
                          <span className="text-primary">{stat.value.slice(-1)}</span>
                        </p>
                        <p className="text-body-sm text-muted-foreground mt-2">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24">
          <div className="container mx-auto max-w-[1371px] px-4">
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
              <div>
                <p className="text-sm font-semibold text-primary tracking-widest mb-2">
                  Effortless Task Automation
                </p>
                <h2 className="text-m-h2 md:text-h2 font-headline font-semibold text-foreground">
                  Unlock Productivity with Smart Automation Tools
                </h2>
              </div>
              <div className="space-y-4 text-muted-foreground text-body-base md:text-body-lg">
                <p>
                  As we automated processes, built workflows, and expanded our
                  community beyond what we imagined, Mondai work as naturally
                  came to life through that journey.
                </p>
                <p>
                  On February 8th, 2021, Mondai marked a new chapter by going
                  public on Nasdaq. Today, we keep growing as a multi-product
                  company.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24">
          <div className="container mx-auto max-w-[1371px] px-4">
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">
              <div>
                <p className="text-sm font-semibold text-primary tracking-widest mb-2">
                  OUR STORY
                </p>
                <h2 className="text-m-h2 md:text-h2 font-headline font-semibold text-foreground">
                  From Concept to Global Impact
                </h2>
              </div>
              <div className="relative">
                <div className="absolute left-4 top-0 h-full w-px bg-border -translate-x-1/2"></div>
                <div className="space-y-12">
                  {timelineEvents.map((event, index) => (
                    <div key={index} className="relative pl-12">
                      <div className="absolute left-4 top-1 -translate-x-1/2">
                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                          <event.icon className="w-5 h-5" />
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground font-medium">{event.date}</p>
                        <h3 className="text-h4 font-headline font-semibold text-foreground mt-1">{event.title}</h3>
                        <p className="text-body-base text-muted-foreground mt-2">{event.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
