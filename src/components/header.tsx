"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Menu, ChevronDown } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

const shopMenuItems = [
    {
        name: "ELECTRO THERAPY",
        products: [
            { name: "Combotherapy - winstim", href: "/product/1" },
            { name: "Vaccum - winVac", href: "/product/10" },
            { name: "Ultrasound - JSU 2", href: "/product/13" },
            { name: "MULTI WAVE FORM - AP439 +", href: "/product/12" },
            { name: "NMS - 498", href: "/product/14" },
            { name: "SSD -500", href: "/product/11" },
            { name: "PHYSOKIT", href: "/product/15" },
            {
                name: "PORTABLE PACK ELECTROTHERAPY",
                isSubmenu: true,
                products: [
                    { name: "Stim3", href: "/product/16" },
                    { name: "Stim tec 4", href: "/product/17" },
                    { name: "Stim tec 2", href: "/product/18" },
                ],
            },
            { name: "Cranial electrical - Nishcalm", href: "/product/19" },
        ],
    },
    {
        name: "Laser therapy",
        products: [
            { name: "Ilux smart", href: "/product/23" },
            { name: "Ilux plus", href: "/product/24" },
            { name: "Physo laser 1000", href: "/product/25" },
            { name: "Physo laser - 2", href: "/product/26" },
            { name: "Opton pro 10", href: "/product/27" },
            { name: "Opton pro 15", href: "/product/28" },
        ],
    },
    {
        name: "Shock wave",
        products: [
            { name: "Physhock", href: "/product/29" },
            { name: "Impuls - 2", href: "/product/30" },
            { name: "Impuls pro", href: "/product/31" },
        ],
    },
    {
        name: "Assessment tools",
        products: [
            { name: "Fit Must", href: "/product/32" },
            { name: "Fit knees", href: "/product/33" },
        ],
    },
    {
        name: "Chelt therapy",
        href: "#",
        products: [],
    },
    {
        name: "Cryo therapy",
        products: [
            { name: "Polar care wave", href: "/product/34" },
            { name: "Cryo 6", href: "/product/35" },
            { name: "Cryo 7", href: "/product/36" },
        ],
    },
    {
        name: "Tecar therapy",
        products: [
            { name: "Tecar smart", href: "/product/37" },
            { name: "Diacare 7000", href: "/product/38" },
            { name: "Diacare 5000", href: "/product/39" },
        ],
    },
];

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
      <div className="container mx-auto max-w-[1371px] px-4 flex justify-between items-center py-4">
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/products" className="text-gray-700 hover:text-black">Products</Link>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="text-gray-700 hover:text-black hover:bg-transparent p-0 h-auto focus-visible:ring-0">
                Shop
                <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuGroup>
                {shopMenuItems.map((category) => (
                  category.products.length > 0 ? (
                    <DropdownMenuSub key={category.name}>
                      <DropdownMenuSubTrigger>{category.name}</DropdownMenuSubTrigger>
                      <DropdownMenuPortal>
                        <DropdownMenuSubContent>
                          {category.products.map((product) => (
                            'isSubmenu' in product && product.isSubmenu ? (
                              <DropdownMenuSub key={product.name}>
                                <DropdownMenuSubTrigger>{product.name}</DropdownMenuSubTrigger>
                                <DropdownMenuPortal>
                                  <DropdownMenuSubContent>
                                    {product.products.map(subProduct => (
                                      <Link key={subProduct.name} href={subProduct.href} passHref>
                                        <DropdownMenuItem>{subProduct.name}</DropdownMenuItem>
                                      </Link>
                                    ))}
                                  </DropdownMenuSubContent>
                                </DropdownMenuPortal>
                              </DropdownMenuSub>
                            ) : (
                              'href' in product && <Link key={product.name} href={product.href} passHref>
                                <DropdownMenuItem>{product.name}</DropdownMenuItem>
                              </Link>
                            )
                          ))}
                        </DropdownMenuSubContent>
                      </DropdownMenuPortal>
                    </DropdownMenuSub>
                  ) : (
                     <Link key={category.name} href={category.href || '#'} passHref>
                        <DropdownMenuItem>{category.name}</DropdownMenuItem>
                    </Link>
                  )
                ))}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/how-to-buy" className="text-gray-700 hover:text-black">How to buy</Link>
        </nav>
        <div className="flex-1 md:flex-none md:absolute md:left-1/2 md:-translate-x-1/2">
          <Link href="/" className="font-bold text-xl text-foreground">
            eNBe TechServ
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
              <nav className="flex flex-col gap-4 text-lg p-6">
                <Link href="/products" className="text-gray-700 hover:text-black py-2">Products</Link>
                
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="shop" className="border-b-0">
                    <AccordionTrigger className="text-lg font-medium text-gray-700 hover:text-black hover:no-underline py-2">Shop</AccordionTrigger>
                    <AccordionContent>
                      <Accordion type="multiple" className="pl-4">
                        {shopMenuItems.map((category) => (
                           <AccordionItem key={category.name} value={category.name}>
                              <AccordionTrigger className="text-base py-2 hover:no-underline">{category.name}</AccordionTrigger>
                              <AccordionContent>
                                <div className="flex flex-col gap-2 pl-4">
                                {category.products.map(product => (
                                  'isSubmenu' in product && product.isSubmenu ? (
                                    <Accordion key={product.name} type="single" collapsible>
                                       <AccordionItem value={product.name}>
                                         <AccordionTrigger className="text-sm py-2 hover:no-underline">{product.name}</AccordionTrigger>
                                         <AccordionContent>
                                           <div className="flex flex-col gap-2 pl-4">
                                            {product.products.map(subProduct => (
                                              <Link key={subProduct.name} href={subProduct.href} className="text-sm text-gray-700 hover:text-black py-1">{subProduct.name}</Link>
                                            ))}
                                           </div>
                                         </AccordionContent>
                                       </AccordionItem>
                                    </Accordion>
                                  ) : (
                                    'href' in product && <Link key={product.name} href={product.href} className="text-sm text-gray-700 hover:text-black py-1">{product.name}</Link>
                                  )
                                ))}
                                </div>
                              </AccordionContent>
                           </AccordionItem>
                        ))}
                      </Accordion>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <Link href="/how-to-buy" className="text-gray-700 hover:text-black py-2">How to buy</Link>
                <Link href="/about-us" className="text-gray-700 hover:text-black py-2">About Us</Link>
                <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 mt-4">
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
