import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { placeholderImages } from "@/lib/placeholder-images";
import { ArrowRight, Instagram, Twitter, Youtube, Dribbble } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ContactUsPage() {
  const ctaImage = placeholderImages.find(p => p.id === "contact-cta-cards");

  return (
    <div className="bg-background text-foreground">
      <Header />
      <main>
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-readable mx-auto">
              <h1 className="text-m-h1 md:text-h1 font-headline font-semibold">
                Contact Us
              </h1>
              <p className="text-m-body-base md:text-body-lg text-muted-foreground mt-4">
                We're here to help! Whether you have questions, feedback, or
                need support, our team is ready to assist you.
              </p>
            </div>

            <div className="mt-16 grid md:grid-cols-2 gap-16 items-start">
              {/* Get in touch */}
              <div className="space-y-8">
                <h2 className="text-m-h2 md:text-h2 font-headline font-semibold">Get in touch</h2>
                <div className="space-y-4 text-body-base">
                  <div>
                    <p className="font-semibold text-muted-foreground">Email:</p>
                    <a href="mailto:Moneta@gmail.com" className="hover:underline">Moneta@gmail.com</a>
                  </div>
                  <div>
                    <p className="font-semibold text-muted-foreground">Phone:</p>
                    <a href="tel:12312212323" className="hover:underline">(123) 1221 2323</a>
                  </div>
                  <div>
                    <p className="font-semibold text-muted-foreground">Address:</p>
                    <p>
                      123 Innovation Avenue, Suite 456<br />
                      Tech District, San Francisco, CA 94107<br />
                      United States
                    </p>
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-muted-foreground mb-2">Follow Us</p>
                  <div className="flex items-center gap-4">
                    <Link href="#" className="text-muted-foreground hover:text-foreground"><Youtube className="w-6 h-6" /></Link>
                    <Link href="#" className="text-muted-foreground hover:text-foreground"><Instagram className="w-6 h-6" /></Link>
                    <Link href="#" className="text-muted-foreground hover:text-foreground"><Dribbble className="w-6 h-6" /></Link>
                    <Link href="#" className="text-muted-foreground hover:text-foreground"><Twitter className="w-6 h-6" /></Link>
                  </div>
                </div>
              </div>

              {/* Form */}
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-muted-foreground">Your Name</label>
                    <Input id="name" type="text" placeholder="Your name" className="bg-secondary border-none rounded-lg" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-muted-foreground">Email address</label>
                    <Input id="email" type="email" placeholder="Your email address" className="bg-secondary border-none rounded-lg" />
                  </div>
                </div>
                <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-muted-foreground">Message</label>
                    <Textarea id="message" placeholder="Write something..." rows={6} className="bg-secondary border-none rounded-lg" />
                </div>
                <Button type="submit" size="lg" className="w-full sm:w-auto">Send Message</Button>
              </form>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24">
            <div className="container mx-auto px-4">
                <div className="bg-secondary rounded-xl p-8 md:p-16 grid md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-4">
                        <h2 className="text-m-h2 md:text-h2 font-headline font-semibold">Ready to Transform Your Financial Management?</h2>
                        <p className="text-muted-foreground text-body-base">
                            Experience the future of finance with our cutting-edge SaaS platform. Start optimizing your financial operations today!
                        </p>
                        <Button asChild variant="link" className="p-0 h-auto text-foreground">
                            <Link href="#">
                                Download app
                                <ArrowRight className="ml-2" />
                            </Link>
                        </Button>
                    </div>
                    <div className="relative aspect-[4/3]">
                        {ctaImage && (
                            <Image 
                                src={ctaImage.imageUrl}
                                alt={ctaImage.description}
                                fill
                                className="object-contain"
                                data-ai-hint={ctaImage.imageHint}
                            />
                        )}
                    </div>
                </div>
            </div>
        </section>

      </main>
      <footer className="py-8 border-t mt-16">
        <div className="container mx-auto px-4 text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} Mediworker. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
