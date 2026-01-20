import { AnnouncementBar } from '@/components/announcement-bar';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { products } from '@/lib/products';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2, Eye, Heart, Star } from 'lucide-react';

export default function ShopPage() {
  return (
    <div className="bg-background text-foreground">
      <AnnouncementBar />
      <Header />
      <main className="container mx-auto max-w-[1371px] px-4 py-16 sm:py-24">
        <div className="text-center mb-12">
          <h1 className="text-m-h1 md:text-h1 font-headline font-semibold">Shop</h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {products.map((product) => (
            <Card key={product.id} className="group overflow-hidden border rounded-xl flex flex-col bg-card">
              <div className="relative">
                {product.image && (
                  <div className="aspect-square relative">
                      <Image
                      src={product.image.imageUrl}
                      alt={product.image.description}
                      fill
                      className="object-cover"
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
              <CardContent className="p-4 flex-grow flex flex-col">
                <div className="flex justify-between items-baseline gap-2 w-full mb-1">
                  <h3 className="text-m-h4 md:text-h4 font-headline font-semibold">{product.name}</h3>
                  {product.mg && <span className="text-sm text-muted-foreground">Mg:{product.mg}</span>}
                </div>

                <div className="flex justify-start gap-0.5 mb-4 text-primary">
                  {[...Array(product.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                
                <ul className="space-y-2 text-sm text-muted-foreground mb-4">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                       <CheckCircle2 className="w-4 h-4 text-primary" />
                       <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
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
      </main>
      <Footer />
    </div>
  );
}
