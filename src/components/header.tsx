"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-colors duration-300",
        isScrolled ? "bg-white/80 backdrop-blur-sm border-b" : "bg-transparent"
      )}
    >
      <div className="container mx-auto max-w-[371px] px-4 flex justify-between items-center py-4">
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/products" className="text-gray-700 hover:text-black">Products</Link>
          <Link href="/events" className="text-gray-700 hover:text-black">Events</Link>
          <Link href="/career" className="text-gray-700 hover:text-black">Career</Link>
        </nav>
        <div className="flex-1 md:flex-none md:absolute md:left-1/2 md:-translate-x-1/2">
          <Link href="/">
            <Image
              src="https://res.cloudinary.com/dxx5vxxtr/image/upload/v1768506166/492b93d9-2a99-4549-8ce5-7d6b733bd26e.png"
              alt="Logo"
              width={100}
              height={24}
              priority
            />
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-4 text-sm">
          <Link href="/about-us" className="text-gray-700 hover:text-black">About Us</Link>
          <Button asChild size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/contact-us">Contact Us</Link>
          </Button>
        </nav>
        <div className="md:hidden flex-1 flex justify-end">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu />
                <span className="sr-only">Open Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="flex flex-col gap-6 text-lg p-6">
                <Link href="/products" className="text-gray-700 hover:text-black">Products</Link>
                <Link href="/events" className="text-gray-700 hover:text-black">Events</Link>
                <Link href="/career" className="text-gray-700 hover:text-black">Career</Link>
                <Link href="/about-us" className="text-gray-700 hover:text-black">About Us</Link>
                <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link href="/contact-us">Contact Us</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
