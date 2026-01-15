import * as React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Leaf, Sparkles, Wind } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

const StyleGuidePage = () => {
  const colors = [
    { name: "Primary Accent", hex: "#eaff2a", variable: "primary" },
    { name: "Secondary Accent", hex: "#e36b3d", variable: "accent" },
    { name: "Background Primary", hex: "#f4f4f2", variable: "background" },
    { name: "Background Secondary", hex: "#ffffff", variable: "card" },
    { name: "Text Primary", hex: "#111111", variable: "foreground" },
    { name: "Text Secondary", hex: "#5f5f5f", variable: "muted-foreground" },
    { name: "Text Muted", hex: "#8a8a8a", variable: "muted-foreground", description: "Slightly lighter than secondary for hints." },
    { name: "Divider / Hairline", hex: "#e2e2de", variable: "border" },
  ];

  const productPalette = [
    { name: "Sage Green", hex: "#cfd8cc", bg: "bg-[#cfd8cc]" },
    { name: "Soft Blue", hex: "#cfddea", bg: "bg-[#cfddea]" },
    { name: "Warm Beige", hex: "#e6ddd2", bg: "bg-[#e6ddd2]" },
    { name: "Charcoal Grey", hex: "#4a4a4a", bg: "bg-[#4a4a4a]" },
    { name: "Muted Orange", hex: "#e58b5b", bg: "bg-[#e58b5b]" },
  ];

  const icons = [
    { icon: <Leaf />, name: "Leaf" },
    { icon: <Sparkles />, name: "Sparkles" },
    { icon: <CheckCircle2 />, name: "Check Circle" },
    { icon: <Wind />, name: "Wind" },
  ];

  return (
    <div className="bg-background min-h-screen">
      <header className="py-4 border-b">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="font-semibold text-lg">Zenith Commerce</Link>
          <Badge variant="outline">Style Guide</Badge>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 md:py-16 space-y-16">
        <div className="text-center max-w-readable mx-auto">
          <h1 className="text-m-h1 md:text-h1 font-semibold">Design System</h1>
          <p className="text-m-body-base md:text-body-lg text-muted-foreground mt-4">
            A comprehensive guide to the visual language of Zenith Commerce. Calm, confident, and consistent.
          </p>
        </div>

        {/* Color System */}
        <section>
          <h2 className="text-m-h2 md:text-h2 font-semibold mb-8">Color System</h2>
          <div className="space-y-8">
            <Card className="rounded-xl shadow-subtle overflow-hidden">
              <CardHeader><CardTitle>Neutral Base</CardTitle></CardHeader>
              <CardContent className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {colors.map((color) => (
                  <div key={color.name}>
                    <div className={`h-24 rounded-md border bg-${color.variable}`}></div>
                    <h3 className="font-medium mt-2">{color.name}</h3>
                    <p className="text-sm text-muted-foreground">{color.hex}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
            <Card className="rounded-xl shadow-subtle overflow-hidden">
              <CardHeader><CardTitle>Product Palette</CardTitle></CardHeader>
              <CardContent className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {productPalette.map((color) => (
                  <div key={color.name}>
                    <div className={`h-24 rounded-md ${color.bg}`}></div>
                    <h3 className="font-medium mt-2">{color.name}</h3>
                    <p className="text-sm text-muted-foreground">{color.hex}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Typography */}
        <section>
          <h2 className="text-m-h2 md:text-h2 font-semibold mb-8">Typography</h2>
          <Card className="rounded-xl shadow-subtle">
            <CardContent className="p-6 md:p-8 space-y-6">
              <div>
                <p className="text-label text-muted-foreground mb-2">Inter, Semibold (600)</p>
                <h1 className="text-m-hero-xl md:text-hero-xl font-semibold tracking-[-0.03em]">Hero XL</h1>
                <h1 className="text-m-hero-l md:text-hero-l font-semibold tracking-[-0.025em]">Hero L</h1>
                <h1 className="text-m-hero-m md:text-hero-m font-semibold tracking-[-0.02em]">Hero M</h1>
                <h1 className="text-m-h1 md:text-h1 font-semibold tracking-[-0.02em]">Heading 1</h1>
                <h2 className="text-m-h2 md:text-h2 font-semibold tracking-[-0.015em]">Heading 2</h2>
                <h3 className="text-m-h3 md:text-h3 font-semibold tracking-[-0.01em]">Heading 3</h3>
                <h4 className="text-m-h4 md:text-h4 font-semibold">Heading 4</h4>
              </div>
              <div className="w-full h-px bg-border"></div>
              <div>
                <p className="text-label text-muted-foreground mb-2">Inter, Regular (400)</p>
                <p className="text-body-lg">Body Large: For introductory paragraphs.</p>
                <p className="text-m-body-base md:text-body-base">Body Regular: The quick brown fox jumps over the lazy dog. This is the standard for all body copy. It's designed for maximum readability and a calm reading experience.</p>
                <p className="text-body-sm">Body Small: Useful for finer details.</p>
                <p className="text-caption">Caption: For image captions and tertiary information.</p>
              </div>
               <div className="w-full h-px bg-border"></div>
              <div>
                <p className="text-label text-muted-foreground mb-2">Inter, Medium (500)</p>
                <p className="text-button-text font-medium">Button Text</p>
                <p className="text-nav-links font-medium">Navigation Links</p>
                <p className="text-label font-medium">Label / Overline</p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Buttons & Actions */}
        <section>
          <h2 className="text-m-h2 md:text-h2 font-semibold mb-8">Buttons & Actions</h2>
          <Card className="rounded-xl shadow-subtle">
            <CardContent className="p-6 md:p-8 space-y-6">
              <div className="space-y-4">
                <h3 className="font-medium">Primary Button</h3>
                <p className="text-sm text-muted-foreground">For the single most important action on a page.</p>
                <Button size="lg" className="transition-transform duration-300 ease-in-out hover:scale-105">Shop Now</Button>
              </div>
              <div className="space-y-4">
                <h3 className="font-medium">Secondary Action</h3>
                <p className="text-sm text-muted-foreground">For less prominent actions. Underlines on hover.</p>
                 <Button variant="link" className="p-0 h-auto text-foreground">
                    Learn More <ArrowRight className="ml-1 w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Cards & Iconography */}
        <section className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-m-h2 md:text-h2 font-semibold mb-8">Cards & Surfaces</h2>
            <Card className="rounded-xl shadow-subtle">
              <CardHeader>
                <CardTitle>Example Card</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-m-body-base md:text-body-base">
                  Cards use a white background, a 20px border radius, and a subtle shadow to lift them off the page.
                </p>
              </CardContent>
            </Card>
          </div>
          <div>
            <h2 className="text-m-h2 md:text-h2 font-semibold mb-8">Iconography</h2>
            <Card className="rounded-xl shadow-subtle">
              <CardContent className="p-6 md:p-8 flex items-center justify-around">
                {icons.map((item) => (
                  <div key={item.name} className="flex flex-col items-center gap-2 text-muted-foreground">
                    {React.cloneElement(item.icon, { className: "w-8 h-8" })}
                    <span className="text-xs">{item.name}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
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
};

export default StyleGuidePage;
