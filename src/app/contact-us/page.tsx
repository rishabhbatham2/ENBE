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
import { useToast } from '@/hooks/use-toast';

export default function ContactUsPage() {
  const contactInfo = [
    { title: 'Email', description: 'Contact us by email, and we will respond shortly.', link: 'mailto:jsrawat@enbetechserv.com', linkText: 'jsrawat@enbetechserv.com' },
    { title: 'Phone', description: 'Call us Monday–Saturday, 9 AM to 8 PM.', link: 'tel:+918800633255', linkText: '+91 88006 33255' },
    { title: 'Office', description: 'Visit us at our headquarters.', address: 'T2/505, RPS Savana, Sector - 88, Faridabad - 121002, Haryana' },
  ];

  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [agreed, setAgreed] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const { toast } = useToast();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (!agreed) {
          toast({
              variant: 'destructive',
              title: 'Agreement Required',
              description: 'You must agree to the Privacy Policy to continue.',
          });
          return;
      }
      setIsSubmitting(true);

      try {
          const response = await fetch('/api/contact', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                  name: `${firstName} ${lastName}`,
                  email,
                  message,
              }),
          });

          if (!response.ok) {
              const errorData = await response.json();
              throw new Error(errorData.error || 'Something went wrong');
          }

          toast({
              title: 'Message Sent!',
              description: "We've received your message and will get back to you shortly.",
          });
          // Reset form
          setFirstName('');
          setLastName('');
          setEmail('');
          setMessage('');
          setAgreed(false);

      } catch (error: any) {
          toast({
              variant: 'destructive',
              title: 'Uh oh! Something went wrong.',
              description: error.message || 'Could not send your message.',
          });
      } finally {
          setIsSubmitting(false);
      }
  };

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
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First name *</Label>
                      <Input
                        id="first-name"
                        type="text"
                        placeholder="Jane"
                        className="rounded-full"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last name *</Label>
                      <Input
                        id="last-name"
                        type="text"
                        placeholder="Smith"
                        className="rounded-full"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
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
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Leave us a message..."
                      rows={5}
                      className="rounded-xl"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                        id="privacy-policy"
                        checked={agreed}
                        onCheckedChange={(checked) => setAgreed(checked as boolean)}
                    />
                    <Label
                      htmlFor="privacy-policy"
                      className="text-sm font-normal text-muted-foreground"
                    >
                      I agree the <a href="/privacy-policy" target="_blank" className="underline">Privacy Policy</a>
                    </Label>
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full rounded-full bg-accent text-accent-foreground hover:bg-accent/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send'}
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
