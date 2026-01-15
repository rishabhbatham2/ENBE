import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Plus, Eye, Heart, Star } from "lucide-react";
import Image from "next/image";
import { Header } from "@/components/header";
import { placeholderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  const heroImage = placeholderImages.find(p => p.id === "hero-image");
  const tinctureImage = placeholderImages.find(p => p.id === "product-tincture");
  const softgelImage = placeholderImages.find(p => p.id === "product-softgel");
  const gummiesImage = placeholderImages.find(p => p.id === "product-gummies");
  const doggyTreatsImage = placeholderImages.find(p => p.id === "product-doggy-treats");


  const products = [
    {
      id: 1,
      name: "Tincture",
      mg: 1500,
      rating: 5,
      image: tinctureImage,
    },
    {
      id: 2,
      name: "Softgel",
      mg: 750,
      rating: 5,
      image: softgelImage,
    },
    {
      id: 3,
      name: "Gummies",
      mg: 300,
      rating: 5,
      image: gummiesImage,
    },
    {
      id: 4,
      name: "Doggy Treats",
      mg: 750,
      rating: 5,
      image: doggyTreatsImage,
    },
  ];

  return (
    <div className="bg-background text-foreground">
      <Header />
      <main>
        <section className="relative min-h-[600px] md:min-h-[700px] flex items-center">
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
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
          <div className="relative z-10 container mx-auto px-4">
            <div className="max-w-readable space-y-4">
              <h1 className="text-m-hero-l md:text-hero-l font-semibold text-foreground tracking-[-0.025em]">
                Say hello to your new favorite drinking buddy
              </h1>
              <p className="text-m-body-base md:text-body-lg text-muted-foreground max-w-prose">
                ...and goodbye to rough mornings
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
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
          </div>
        </section>

        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-center text-m-h2 md:text-h2 font-semibold mb-12">Featured Products</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {products.map((product) => (
                <Card key={product.id} className="group text-center overflow-hidden border rounded-xl shadow-subtle flex flex-col bg-card">
                  <CardContent className="p-4 flex-grow flex flex-col">
                    <div className="relative mb-4">
                      {product.image && (
                        <div className="aspect-square relative">
                           <Image
                            src={product.image.imageUrl}
                            alt={product.image.description}
                            fill
                            className="object-contain"
                            data-ai-hint={product.image.imageHint}
                          />
                        </div>
                      )}
                      <Button variant="secondary" className="absolute top-2 right-2 h-8 w-8 p-0 bg-white/80 backdrop-blur-sm rounded-full">
                        <Heart className="h-4 w-4 text-muted-foreground" />
                      </Button>
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-auto opacity-0 group-hover:opacity-100 transition-opacity">
                         <Button variant="secondary" size="sm" className="rounded-full bg-white/80 backdrop-blur-sm">
                           <Eye className="mr-2 h-4 w-4"/>
                           Quick View
                         </Button>
                      </div>
                    </div>
                    
                    <div className="flex-grow flex flex-col items-center">
                       <div className="flex justify-center items-baseline gap-2 w-full mb-2">
                        <h3 className="text-m-h4 md:text-h4 font-semibold">{product.name}</h3>
                        <span className="text-sm text-muted-foreground">Mg:{product.mg}</span>
                      </div>
                      <div className="flex justify-center gap-0.5 mb-4 text-primary">
                        {[...Array(product.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                      </div>
                    </div>
                    
                    <Button asChild className="w-full mt-auto">
                      <Link href={`/product/${product.id}`}>
                        Read More
                        <ArrowRight />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
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
