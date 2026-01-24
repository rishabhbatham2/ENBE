'use client';

import * as React from 'react';
import { AnnouncementBar } from '@/components/announcement-bar';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Plus, X } from 'lucide-react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';

function FaqPage() {
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
                    Frequently Asked Questions
                </h1>
                <p className="text-m-body-base mt-4 text-muted-foreground md:text-body-lg">
                    Find answers to common questions about our products and services.
                </p>
                </div>
                <div
                className="w-full mx-auto mt-12 space-y-4 max-w-4xl"
                >
                {faqs.map(faq => (
                    <Collapsible
                    key={faq.id}
                    open={openItem === faq.id}
                    onOpenChange={isOpen => setOpenItem(isOpen ? faq.id : null)}
                    className="rounded-xl border-none data-[state=closed]:bg-card data-[state=open]:bg-card"
                    >
                    <CollapsibleTrigger className="p-6 w-full flex justify-between items-center text-left font-semibold hover:no-underline">
                        {faq.question}
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary">
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
                </div>
            </div>
            </section>
        </main>
        <Footer />
    </div>
  );
}

export default FaqPage;
