'use client';

import * as React from 'react';
import { AnnouncementBar } from '@/components/announcement-bar';
import { Header } from '@/components/header';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Footer } from '@/components/footer';

export default function ContactUsPage() {
  const contactInfo = [
    { title: 'Email', description: 'Contact us by email, and we will respond shortly.', link: 'mailto:jsrawat@enbetechserv.com', linkText: 'jsrawat@enbetechserv.com' },
    { title: 'Phone', description: 'Call us Monday–Saturday, 9 AM to 8 PM.', link: 'tel:+918800633255', linkText: '+91 88006 33255' },
    { title: 'Office', description: 'Visit us at our headquarters.', address: 'T2/505, RPS Savana, Sector - 88, Faridabad - 121002, Haryana' },
  ];

  return (
    <div className="bg-background text-foreground">
      <AnnouncementBar />
      <Header />
      <main>
        <section
          className="py-16 sm:py-24"
        >
          <div className="container mx-auto max-w-[1371px] px-4">
            <div
              className="text-center max-w-readable mx-auto"
            >
              <h1 className="text-m-h1 font-headline font-semibold md:text-h1 text-primary">
                Contact us
              </h1>
              <p className="text-m-body-base mt-4 text-muted-foreground md:text-body-lg">
                We'd love to hear from you. Please fill out this form, and
                we'll reply soon.
              </p>
            </div>

            <div className="grid items-start gap-16 md:grid-cols-2 mt-12">
              {/* Left Column: Info */}
              <div
                className="grid gap-x-8 gap-y-12 sm:grid-cols-2 items-start"
              >
                {contactInfo.map((info, index) => (
                  <div key={index}>
                    <h3 className="mb-2 text-h4 font-semibold text-primary">{info.title}</h3>
                    <p className="mb-1 text-body-base text-muted-foreground">
                      {info.description}
                    </p>
                    {info.link ? (
                       <a
                        href={info.link}
                        className="text-body-base font-medium text-foreground hover:underline"
                      >
                        {info.linkText}
                      </a>
                    ) : (
                      <p className="text-body-base font-medium text-foreground">
                        {info.address}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              {/* Right Column: Form */}
              <div
                className="rounded-xl bg-card p-8 sm:p-12 border"
              >
                <h2 className="mb-6 text-m-h2 font-headline font-semibold md:text-h2 text-primary">
                  Write us a message
                </h2>
                <form className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First name *</Label>
                      <Input
                        id="first-name"
                        type="text"
                        placeholder="Jane"
                        className="rounded-full"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last name *</Label>
                      <Input
                        id="last-name"
                        type="text"
                        placeholder="Smith"
                        className="rounded-full"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="jane@email.com"
                      className="rounded-full"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Leave us a message..."
                      rows={5}
                      className="rounded-xl"
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="privacy-policy" />
                    <Label
                      htmlFor="privacy-policy"
                      className="text-sm font-normal text-muted-foreground"
                    >
                      I agree the Privacy Policy
                    </Label>
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full rounded-full bg-accent text-accent-foreground hover:bg-accent/90"
                  >
                    Send
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
