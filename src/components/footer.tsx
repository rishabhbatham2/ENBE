'use client';

import Link from "next/link";
import { Facebook, Youtube, Twitter, Instagram, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

export function Footer() {
  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: "#" },
    { icon: <Youtube className="h-5 w-5" />, href: "#" },
    { icon: <Twitter className="h-5 w-5" />, href: "#" },
    { icon: <Instagram className="h-5 w-5" />, href: "#" },
  ];

  const companyLinks = [
    { name: "About Us", href: "/about-us" },
    { name: "Blog", href: "#" },
    { name: "Contact Us", href: "/contact-us" },
    { name: "Career", href: "/career" },
  ];

  const customerServicesLinks = [
    { name: "My Account", href: "#" },
    { name: "Track Your Order", href: "#" },
    { name: "Return", href: "#" },
    { name: "FAQ", href: "#" },
  ];

  const informationLinks = [
    { name: "Privacy", href: "#" },
    { name: "User Terms & Condition", href: "#" },
    { name: "Return Policy", href: "#" },
  ];

  return (
    <footer className="bg-secondary">
      <div className="container mx-auto max-w-[1371px] px-4 py-16 sm:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Logo and Social */}
          <div className="lg:col-span-4">
            <Link href="/" className="mb-6 inline-block font-bold text-2xl text-foreground">
              eNBe TechServ
            </Link>
            <p className="max-w-sm text-body-sm text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex gap-2 mt-6">
              {socialLinks.map((link, index) => (
                <Button key={index} asChild variant="outline" size="icon" className="rounded-full">
                  <Link href={link.href}>
                    {link.icon}
                  </Link>
                </Button>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-2">
            <h3 className="text-h4 font-semibold mb-4 text-foreground">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map(link => (
                <li key={link.name}>
                  <Link href={link.href} className="text-muted-foreground hover:text-foreground transition-colors text-body-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-2">
            <h3 className="text-h4 font-semibold mb-4 text-foreground">Customer Services</h3>
            <ul className="space-y-3">
              {customerServicesLinks.map(link => (
                <li key={link.name}>
                  <Link href={link.href} className="text-muted-foreground hover:text-foreground transition-colors text-body-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-2">
            <h3 className="text-h4 font-semibold mb-4 text-foreground">Our Information</h3>
            <ul className="space-y-3">
              {informationLinks.map(link => (
                <li key={link.name}>
                  <Link href={link.href} className="text-muted-foreground hover:text-foreground transition-colors text-body-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
           <div className="lg:col-span-2">
            <h3 className="text-h4 font-semibold mb-4 text-foreground">Contact</h3>
             <ul className="space-y-3 text-muted-foreground text-body-sm">
                <li className="flex items-start gap-3">
                    <Phone className="w-5 h-5 mt-1 shrink-0"/>
                    <span>+0123-456-789</span>
                </li>
                 <li className="flex items-start gap-3">
                    <Mail className="w-5 h-5 mt-1 shrink-0"/>
                    <a href="mailto:example@gmail.com" className="hover:text-foreground transition-colors">example@gmail.com</a>
                </li>
                 <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 mt-1 shrink-0"/>
                    <span>8502 Preston Rd. Inglewood, Maine 98380</span>
                </li>
             </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Mediworker. All Rights Reserved.
          </p>
           <div className="flex items-center gap-4 text-sm text-muted-foreground">
             <span>English</span>
             <Separator orientation="vertical" className="h-4" />
             <span>USD</span>
           </div>
        </div>
      </div>
    </footer>
  );
}
