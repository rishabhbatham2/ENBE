"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { ShoppingCart, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

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
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/shop" className="text-gray-700 hover:text-black">Shop</Link>
          <Link href="/subscribe" className="text-gray-700 hover:text-black">Subscribe</Link>
          <Link href="/learn" className="text-gray-700 hover:text-black">Learn</Link>
          <Link href="/blog" className="text-gray-700 hover:text-black">Blog</Link>
        </nav>
        <div className="flex-1 md:flex-none md:absolute md:left-1/2 md:-translate-x-1/2">
          <Link href="/" className="font-bold text-2xl text-gray-800">more.</Link>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/guarantee" className="text-gray-700 hover:text-black">Guarantee</Link>
          <Link href="/find-a-store" className="text-gray-700 hover:text-black">Find a Store</Link>
          <Link href="/account" className="text-gray-700 hover:text-black">Account</Link>
          <Link href="/cart" className="flex items-center gap-1 text-gray-700 hover:text-black">
            Cart <ShoppingCart className="h-4 w-4" />
          </Link>
        </nav>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu />
                <span className="sr-only">Open Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="flex flex-col gap-6 text-lg p-6">
                <Link href="/shop" className="text-gray-700 hover:text-black">Shop</Link>
                <Link href="/subscribe" className="text-gray-700 hover:text-black">Subscribe</Link>
                <Link href="/learn" className="text-gray-700 hover:text-black">Learn</Link>
                <Link href="/blog" className="text-gray-700 hover:text-black">Blog</Link>
                <Link href="/guarantee" className="text-gray-700 hover:text-black">Guarantee</Link>
                <Link href="/find-a-store" className="text-gray-700 hover:text-black">Find a Store</Link>
                <Link href="/account" className="text-gray-700 hover:text-black">Account</Link>
                <Link href="/cart" className="flex items-center gap-1 text-gray-700 hover:text-black">
                  Cart <ShoppingCart className="h-5 w-5" />
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}