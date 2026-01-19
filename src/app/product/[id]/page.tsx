'use client';

import * as React from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/lib/products';
import { AnnouncementBar } from '@/components/announcement-bar';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import { Star, Minus, Plus, Heart, Facebook, Twitter, Instagram, CheckCircle2 } from 'lucide-react';

export default function ProductPage() {
  const params = useParams();
  const id = params.id ? parseInt(params.id as string) : NaN;
  const [product, setProduct] = React.useState<(typeof products)[0] | null>(null);
  const [activeImage, setActiveImage] = React.useState<string | undefined>(undefined);
  const [quantity, setQuantity] = React.useState(1);

  React.useEffect(() => {
    if (!isNaN(id)) {
      const foundProduct = products.find((p) => p.id === id);
      setProduct(foundProduct || null);
      if (foundProduct?.gallery?.[0]) {
        setActiveImage(foundProduct.gallery[0]?.imageUrl);
      }
    }
  }, [id]);

  if (!product) {
    return (
      <div className="bg-background text-foreground min-h-screen">
        <AnnouncementBar />
        <Header />
        <main className="container mx-auto max-w-[1371px] px-4 py-16 sm:py-24">
          <div className="text-center">Loading product...</div>
        </main>
        <Footer />
      </div>
    );
  }

  const {
    name,
    rating,
    reviewsCount,
    price,
    salePrice,
    shortDescription,
    availability,
    gallery,
    longDescription,
    specifications,
    userReviews,
    keyFeatures,
  } = product;
  
  const currentPrice = salePrice || price;

  return (
    <div className="bg-white text-foreground">
      <AnnouncementBar />
      <Header />
      <main className="py-16 sm:py-24">
        <div className="container mx-auto max-w-[1371px] px-4">
          <div className="grid md:grid-cols-5 gap-12 lg:gap-16">
            {/* Image Gallery */}
            <div className="md:col-span-2 flex flex-col items-start">
              <div className="w-full max-w-md">
                <div className="aspect-square relative mb-4 border rounded-xl overflow-hidden">
                  {activeImage && (
                    <Image
                      src={activeImage}
                      alt={name}
                      fill
                      className="object-contain"
                    />
                  )}
                </div>
                <div className="flex gap-2 justify-start">
                  {gallery && gallery.map((img, index) => img && (
                    <button
                      key={index}
                      className={`w-20 h-20 relative rounded-xl overflow-hidden border ${activeImage === img.imageUrl ? 'border-primary' : 'border-border'}`}
                      onClick={() => setActiveImage(img.imageUrl)}
                    >
                      <Image
                        src={img.imageUrl}
                        alt={`${name} thumbnail ${index + 1}`}
                        fill
                        className="object-cover"
                        data-ai-hint={img.imageHint}
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="md:col-span-3 space-y-6">
              <h1 className="text-m-h1 md:text-h1 font-headline font-semibold text-foreground">{name}</h1>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-0.5 text-primary">
                  {[...Array(rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">({reviewsCount} customer reviews)</span>
              </div>
              <div>
                {price && salePrice && (
                  <span className="text-xl text-muted-foreground line-through mr-2">${price.toFixed(2)}</span>
                )}
                {currentPrice && (
                  <span className="text-3xl font-bold text-primary">${currentPrice.toFixed(2)}</span>
                )}
              </div>
              <p className="text-body-base text-muted-foreground">{shortDescription}</p>
              
              <div className="flex items-center gap-4">
                <span className="text-sm font-semibold">Availability:</span>
                <span className={`text-sm font-medium ${availability === 'In Stock' ? 'text-primary' : 'text-destructive'}`}>{availability}</span>
              </div>

              <Separator />

              <div className="flex items-center gap-4">
                <div className="flex items-center border rounded-full">
                  <Button variant="ghost" size="icon" className="rounded-full" onClick={() => setQuantity(q => Math.max(1, q - 1))}>
                    <Minus className="w-4 h-4" />
                  </Button>
                  <span className="w-12 text-center">{quantity}</span>
                  <Button variant="ghost" size="icon" className="rounded-full" onClick={() => setQuantity(q => q + 1)}>
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
                <Button size="lg" className="flex-grow">
                  Get Quote
                </Button>
                <Button variant="outline" size="icon">
                  <Heart className="w-5 h-5"/>
                </Button>
              </div>

              <Separator />

              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Share:</span>
                <div className="flex gap-2">
                    <Link href="#" className="hover:text-foreground"><Facebook className="w-5 h-5"/></Link>
                    <Link href="#" className="hover:text-foreground"><Twitter className="w-5 h-5"/></Link>
                    <Link href="#" className="hover:text-foreground"><Instagram className="w-5 h-5"/></Link>
                </div>
              </div>
            </div>
          </div>

          {/* Description & Specifications */}
          <div className="mt-16 sm:mt-24 grid md:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h2 className="text-h3 font-headline font-semibold text-foreground mb-4">Description</h2>
              <div
                className="text-body-base text-muted-foreground space-y-4"
                dangerouslySetInnerHTML={{ __html: longDescription || '' }}
              />
            </div>
            <div>
              <h2 className="text-h3 font-headline font-semibold text-foreground mb-4">Additional Information</h2>
              <Card>
                <CardContent className="p-0">
                  <Table>
                    <TableBody>
                      {specifications && specifications.map((spec) => (
                        <TableRow key={spec.name}>
                          <TableCell className="font-medium text-foreground">{spec.name}</TableCell>
                          <TableCell className="text-muted-foreground">{spec.value}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Key Features */}
          {keyFeatures && keyFeatures.length > 0 && (
            <div className="mt-16 sm:mt-24">
              <h2 className="text-h3 font-headline font-semibold text-foreground mb-8 text-center">Key Features</h2>
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
                {keyFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <p className="text-body-base text-muted-foreground">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Reviews */}
          {userReviews && userReviews.length > 0 && (
            <div className="mt-16 sm:mt-24">
              <h2 className="text-h3 font-headline font-semibold text-foreground mb-8">Reviews ({reviewsCount})</h2>
              <div className="space-y-8">
                {userReviews.map((review) => (
                  <div key={review.id} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center font-bold text-lg">
                        {review.author.charAt(0)}
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold text-foreground">{review.author}</h4>
                        <span className="text-xs text-muted-foreground">- {new Date(review.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-0.5 text-primary mb-2">
                        {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current"/>)}
                      </div>
                      <p className="text-body-base text-muted-foreground">{review.comment}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
