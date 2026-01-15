import Link from "next/link";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";

export function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-20 bg-transparent py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
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
          {/* Mobile menu button can go here */}
          <Button variant="ghost" size="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          </Button>
        </div>
      </div>
    </header>
  );
}
