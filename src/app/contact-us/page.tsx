'use client';

import * as React from 'react';
import { Header } from '@/components/header';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Plus, X } from 'lucide-react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';

function FaqSection() {
  const faqs = [
    {
      id: 'faq-1',
      question: 'Placeholder question goes here?',
      answer:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text.',
    },
    {
      id: 'faq-2',
      question: 'Placeholder question goes here?',
      answer:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text.',
    },
    {
      id: 'faq-3',
      question: 'Placeholder question goes here?',
      answer:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text.',
    },
    {
      id: 'faq-4',
      question: 'Placeholder question goes here?',
      answer:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text.',
    },
  ];
  const [openItem, setOpenItem] = React.useState<string | null>('faq-1');

  return (
    <section className="py-16 sm:py-24 bg-muted/50">
      <div className="container mx-auto max-w-page px-4">
        <div className="text-center max-w-readable mx-auto">
          <p className="text-sm font-semibold text-muted-foreground tracking-widest mb-2">
            TRUSTED BY
          </p>
          <h2 className="text-m-h2 md:text-h2 font-headline font-semibold">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="w-full max-w-3xl mx-auto mt-12 space-y-4">
          {faqs.map(faq => (
            <Collapsible
              key={faq.id}
              open={openItem === faq.id}
              onOpenChange={isOpen => setOpenItem(isOpen ? faq.id : null)}
              className="rounded-xl border-none data-[state=closed]:bg-card data-[state=open]:bg-card shadow-sm"
            >
              <CollapsibleTrigger className="p-6 w-full flex justify-between items-center text-left font-semibold hover:no-underline">
                {faq.question}
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted">
                  {openItem === faq.id ? (
                    <X className="h-4 w-4" />
                  ) : (
                    <Plus className="h-4 w-4" />
                  )}
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent className="px-6 pb-6 text-muted-foreground">
                {faq.answer}
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ContactUsPage() {
  return (
    <div className="bg-background text-foreground">
      <Header />
      <main>
        <section className="py-16 sm:py-24">
          <div className="container mx-auto max-w-page px-4">
            <div className="grid items-start gap-16 md:grid-cols-2">
              {/* Left Column: Info */}
              <div className="space-y-8">
                <div>
                  <h1 className="text-m-h1 font-headline font-semibold md:text-h1">
                    Contact us
                  </h1>
                  <p className="text-m-body-base mt-4 text-muted-foreground md:text-body-lg">
                    We'd love to hear from you. Please fill out this form, and
                    we'll reply soon.
                  </p>
                </div>

                <div className="grid gap-x-8 gap-y-12 pt-8 sm:grid-cols-2">
                  <div>
                    <h3 className="mb-2 text-h4 font-semibold">Email</h3>
                    <p className="mb-1 text-body-base text-muted-foreground">
                      Contact us by email, and we will respond shortly.
                    </p>
                    <a
                      href="mailto:hey@uiblox.com"
                      className="text-body-base font-medium hover:underline"
                    >
                      hey@uiblox.com
                    </a>
                  </div>
                  <div>
                    <h3 className="mb-2 text-h4 font-semibold">Phone</h3>
                    <p className="mb-1 text-body-base text-muted-foreground">
                      Call us on weekdays from 9 AM to 5 PM.
                    </p>
                    <a
                      href="tel:+1222333444"
                      className="text-body-base font-medium hover:underline"
                    >
                      +1 (222) 333 444
                    </a>
                  </div>
                  <div>
                    <h3 className="mb-2 text-h4 font-semibold">Mobile</h3>
                    <p className="mb-1 text-body-base text-muted-foreground">
                      Call us on weekdays from 9 AM to 6 PM.
                    </p>
                    <a
                      href="tel:+2222333444"
                      className="text-body-base font-medium hover:underline"
                    >
                      +2 (222) 333 444
                    </a>
                  </div>
                  <div>
                    <h3 className="mb-2 text-h4 font-semibold">Office</h3>
                    <p className="text-body-base text-muted-foreground">
                      Visit us at our headquarters.
                    </p>
                    <p className="text-body-base font-medium">
                      87266 Green Station, Euless, Oregon 26739, Canada
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Form */}
              <div className="rounded-xl bg-card p-8 sm:p-12">
                <h2 className="mb-6 text-m-h2 font-headline font-semibold md:text-h2">
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
                        className="rounded-full border-transparent bg-muted"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last name *</Label>
                      <Input
                        id="last-name"
                        type="text"
                        placeholder="Smith"
                        className="rounded-full border-transparent bg-muted"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="jane@email.com"
                      className="rounded-full border-transparent bg-muted"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Leave us a message..."
                      rows={5}
                      className="rounded-xl border-transparent bg-muted"
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
                    className="w-full rounded-full bg-foreground text-background hover:bg-foreground/90"
                  >
                    Send
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <FaqSection />
      </main>
      <footer className="mt-16 border-t py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Mediworker. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
