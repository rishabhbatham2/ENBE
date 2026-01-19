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
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Footer } from '@/components/footer';

const StyleGuidePage = () => {
  const colors = [
    { name: "Primary Accent", hex: "#2563eb", variable: "primary" },
    { name: "Secondary Accent", hex: "#3b82f6", variable: "accent" },
    { name: "Background Primary", hex: "#f9fafb", variable: "background" },
    { name: "Background Secondary", hex: "#ffffff", variable: "card" },
    { name: "Text Primary", hex: "#0c1d3e", variable: "foreground" },
    { name: "Text Secondary", hex: "#64748b", variable: "muted-foreground" },
    { name: "Text Muted", hex: "#64748b", variable: "muted-foreground", description: "Slightly lighter than secondary for hints." },
    { name: "Divider / Hairline", hex: "#e2e8f0", variable: "border" },
  ];

  const productPalette = [
    { name: "Light Blue", hex: "#a8c5ff", bg: "bg-[#a8c5ff]" },
    { name: "Medium Blue", hex: "#6c9eff", bg: "bg-[#6c9eff]" },
    { name: "Dark Blue", hex: "#3a81f5", bg: "bg-[#3a81f5]" },
    { name: "Navy Blue", hex: "#003380", bg: "bg-[#003380]" },
    { name: "Sky Blue", hex: "#87ceeb", bg: "bg-[#87ceeb]" },
  ];

  const icons = [
    { icon: <Leaf />, name: "Leaf" },
    { icon: <Sparkles />, name: "Sparkles" },
    { icon: <CheckCircle2 />, name: "Check Circle" },
    { icon: <Wind />, name: "Wind" },
  ];

  const fontSizes = [
    { name: 'Hero XL', desktop: '64px / 1.05', mobile: '40px / 1.1', class: 'text-hero-xl' },
    { name: 'Hero L', desktop: '56px / 1.1', mobile: '36px / 1.1', class: 'text-hero-l' },
    { name: 'Hero M', desktop: '48px / 1.15', mobile: '32px / 1.15', class: 'text-hero-m' },
    { name: 'Heading 1', desktop: '40px / 1.15', mobile: '30px / 1.15', class: 'text-h1' },
    { name: 'Heading 2', desktop: '32px / 1.2', mobile: '26px / 1.2', class: 'text-h2' },
    { name: 'Heading 3', desktop: '24px / 1.25', mobile: '22px / 1.25', class: 'text-h3' },
    { name: 'Heading 4', desktop: '20px / 1.3', mobile: '18px / 1.3', class: 'text-h4' },
    { name: 'Body Large', desktop: '18px / 1.6', mobile: '18px / 1.6', class: 'text-body-lg' },
    { name: 'Body Base', desktop: '16px / 1.6', mobile: '15px / 1.6', class: 'text-body-base' },
    { name: 'Body Small', desktop: '14px / 1.55', mobile: '14px / 1.55', class: 'text-body-sm' },
    { name: 'Caption', desktop: '13px / 1.4', mobile: '13px / 1.4', class: 'text-caption' },
    { name: 'Button', desktop: '14px / 1', mobile: '14px / 1', class: 'text-button-text' },
    { name: 'Nav Links', desktop: '14px / 1', mobile: '14px / 1', class: 'text-nav-links' },
    { name: 'Label', desktop: '12px / 1.2', mobile: '12px / 1.2', class: 'text-label' },
  ];

  const spacing = [
    { value: '0', rem: '0', px: '0px' },
    { value: 'px', rem: '1px', px: '1px' },
    { value: '0.5', rem: '0.125rem', px: '2px' },
    { value: '1', rem: '0.25rem', px: '4px' },
    { value: '1.5', rem: '0.375rem', px: '6px' },
    { value: '2', rem: '0.5rem', px: '8px' },
    { value: '2.5', rem: '0.625rem', px: '10px' },
    { value: '3', rem: '0.75rem', px: '12px' },
    { value: '3.5', rem: '0.875rem', px: '14px' },
    { value: '4', rem: '1rem', px: '16px' },
    { value: '5', rem: '1.25rem', px: '20px' },
    { value: '6', rem: '1.5rem', px: '24px' },
    { value: '7', rem: '1.75rem', px: '28px' },
    { value: '8', rem: '2rem', px: '32px' },
    { value: '9', rem: '2.25rem', px: '36px' },
    { value: '10', rem: '2.5rem', px: '40px' },
    { value: '11', rem: '2.75rem', px: '44px' },
    { value: '12', rem: '3rem', px: '48px' },
    { value: '14', rem: '3.5rem', px: '56px' },
    { value: '16', rem: '4rem', px: '64px' },
    { value: '20', rem: '5rem', px: '80px' },
    { value: '24', rem: '6rem', px: '96px' },
  ];

  return (
    <div className="bg-background min-h-screen">
      <header className="py-4 border-b">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="font-semibold text-lg">Mediworker</Link>
          <Badge variant="outline">Style Guide</Badge>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 md:py-16 space-y-16">
        <div className="text-center max-w-readable mx-auto">
          <h1 className="text-m-h1 md:text-h1 font-semibold">Design System</h1>
          <p className="text-m-body-base md:text-body-lg text-muted-foreground mt-4">
            A comprehensive guide to the visual language of Mediworker. Calm, confident, and consistent.
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
            <CardHeader>
              <CardTitle>Font Sizes</CardTitle>
              <p className="text-muted-foreground text-body-sm">The type scale is responsive. Values are shown as: size / line-height.</p>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Style Name</TableHead>
                    <TableHead>Desktop</TableHead>
                    <TableHead>Mobile</TableHead>
                    <TableHead>CSS Class</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {fontSizes.map((size) => (
                    <TableRow key={size.name}>
                      <TableCell className="font-medium">{size.name}</TableCell>
                      <TableCell>{size.desktop}</TableCell>
                      <TableCell>{size.mobile}</TableCell>
                      <TableCell><code>.{size.class}</code></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </section>

        {/* Spacing */}
        <section>
          <h2 className="text-m-h2 md:text-h2 font-semibold mb-8">Spacing</h2>
           <Card className="rounded-xl shadow-subtle">
            <CardHeader>
              <CardTitle>Spacing Scale</CardTitle>
              <p className="text-muted-foreground text-body-sm">The 4-point grid system provides consistent spacing. Use classes like <code>p-4</code> or <code>m-8</code>.</p>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Value</TableHead>
                    <TableHead>REM</TableHead>
                    <TableHead>px</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {spacing.map((space) => (
                    <TableRow key={space.value}>
                      <TableCell className="font-medium">{space.value}</TableCell>
                      <TableCell>{space.rem}</TableCell>
                      <TableCell>{space.px}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
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
      <Footer />
    </div>
  );
};

export default StyleGuidePage;
