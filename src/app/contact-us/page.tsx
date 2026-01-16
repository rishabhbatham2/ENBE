'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
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

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

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
    <motion.section
      className="py-16 sm:py-24 bg-muted/50"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto max-w-[1371px] px-4">
        <motion.div
          className="text-center max-w-readable mx-auto"
          variants={itemVariants}
        >
          <p className="text-sm font-semibold text-muted-foreground tracking-widest mb-2">
            TRUSTED BY
          </p>
          <h2 className="text-m-h2 md:text-h2 font-headline font-semibold">
            Frequently Asked Questions
          </h2>
        </motion.div>
        <motion.div
          className="w-full mx-auto mt-12 space-y-4"
          variants={itemVariants}
        >
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
              <CollapsibleContent className="overflow-hidden transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                <div className="px-6 pb-6 text-muted-foreground">
                  {faq.answer}
                </div>
              </CollapsibleContent>
            </Collapsible>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

export default function ContactUsPage() {
  const contactInfo = [
    { title: 'Email', description: 'Contact us by email, and we will respond shortly.', link: 'mailto:hey@uiblox.com', linkText: 'hey@uiblox.com' },
    { title: 'Phone', description: 'Call us on weekdays from 9 AM to 5 PM.', link: 'tel:+1222333444', linkText: '+1 (222) 333 444' },
    { title: 'Mobile', description: 'Call us on weekdays from 9 AM to 6 PM.', link: 'tel:+2222333444', linkText: '+2 (222) 333 444' },
    { title: 'Office', description: 'Visit us at our headquarters.', address: '87266 Green Station, Euless, Oregon 26739, Canada' },
  ];

  return (
    <div className="bg-background text-foreground">
      <Header />
      <main>
        <motion.section
          className="py-16 sm:py-24"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="container mx-auto max-w-[1371px] px-4">
            <motion.div
              className="text-center max-w-readable mx-auto"
              variants={itemVariants}
            >
              <h1 className="text-m-h1 font-headline font-semibold md:text-h1">
                Contact us
              </h1>
              <p className="text-m-body-base mt-4 text-muted-foreground md:text-body-lg">
                We'd love to hear from you. Please fill out this form, and
                we'll reply soon.
              </p>
            </motion.div>

            <div className="grid items-start gap-16 md:grid-cols-2 mt-12">
              {/* Left Column: Info */}
              <motion.div
                className="grid gap-x-8 gap-y-12 sm:grid-cols-2 items-start"
                variants={sectionVariants}
              >
                {contactInfo.map((info, index) => (
                  <motion.div key={index} variants={itemVariants}>
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
                  </motion.div>
                ))}
              </motion.div>

              {/* Right Column: Form */}
              <motion.div
                className="rounded-xl bg-card p-8 sm:p-12"
                variants={itemVariants}
              >
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
                    className="w-full rounded-full bg-accent text-accent-foreground hover:bg-accent/90"
                  >
                    Send
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </motion.section>
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
