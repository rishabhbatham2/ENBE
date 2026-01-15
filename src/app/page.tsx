import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
      <div className="max-w-readable space-y-6">
        <h1 className="text-m-hero-l md:text-hero-l font-semibold text-foreground tracking-[-0.025em]">
          The future of conscious commerce.
        </h1>
        <p className="text-m-body-base md:text-body-base text-muted-foreground max-w-prose mx-auto">
          Welcome to Zenith Commerce. This is a demonstration of a modern, calm, and confident e-commerce experience. Explore the design system that lays our foundation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="transition-transform duration-300 ease-in-out hover:scale-105">
            <Link href="/style-guide">
              View Style Guide
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
