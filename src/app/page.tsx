import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { Header } from "@/components/header";
import { placeholderImages } from "@/lib/placeholder-images";

export default function Home() {
  const heroImage = placeholderImages.find(p => p.id === "hero-image");

  return (
    <div className="bg-background text-foreground">
      <Header />
      <main>
        <section className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center text-center">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-cover"
              priority
              data-ai-hint={heroImage.imageHint}
            />
          )}
          <div className="absolute inset-0 bg-background/70" />
          <div className="relative z-10 max-w-readable space-y-4 px-4">
            <h1 className="text-m-hero-l md:text-hero-l font-semibold text-foreground tracking-[-0.025em]">
              Say hello to your new favorite drinking buddy
            </h1>
            <p className="text-m-body-base md:text-body-lg text-muted-foreground max-w-prose mx-auto">
              ...and goodbye to rough mornings
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg">
                <Link href="/shop">
                  shop morning recovery
                  <ArrowRight />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/subscribe">
                  subscribe & save
                  <ArrowRight />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="py-8 border-t mt-16">
        <div className="container mx-auto px-4 text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} Zenith Commerce. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
