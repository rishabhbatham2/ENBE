import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Plus } from "lucide-react";
import Image from "next/image";
import { Header } from "@/components/header";
import { placeholderImages } from "@/lib/placeholder-images";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  const heroImage = placeholderImages.find(p => p.id === "hero-image");
  const eye900Image = placeholderImages.find(p => p.id === "product-eye900");
  const pemfProstateImage = placeholderImages.find(p => p.id === "product-pemf-prostate");
  const pemfPetImage = placeholderImages.find(p => p.id === "product-pemf-pet");

  const products = [
    {
      id: 1,
      name: "EYE900",
      logo: "https://res.cloudinary.com/dxx5vxxtr/image/upload/v1768506166/492b93d9-2a99-4549-8ce5-7d6b733bd26e.png",
      image: eye900Image,
      functions: [
        "Prevention of Eye Aging",
        "Treatment for Dry Eye Syndrome",
        "Adjunctive Therapy for Glaucoma",
        "Reduction of Dark Circles",
      ],
    },
    {
      id: 2,
      name: "PEMF: Prostate",
      logo: "https://res.cloudinary.com/dxx5vxxtr/image/upload/v1768506166/492b93d9-2a99-4549-8ce5-7d6b733bd26e.png",
      image: pemfProstateImage,
      functions: [
        "Improvement of Prostate Inflammation",
        "Enhancement of Male Sexual Function",
        "Reduction of Urinary Incontinence",
        "Strengthening of Cavernous Nitric Oxide levels",
      ],
    },
    {
      id: 3,
      name: "PEMF",
      logo: "https://res.cloudinary.com/dxx5vxxtr/image/upload/v1768509747/e162d184-17c3-49d6-949e-d796cb88593a.png",
      image: pemfPetImage,
      altLogo: "Pet Caron Logo",
      functions: [
        "Home Care Medical Device for Pets",
        "Promoting Health in Senior Dogs and Cats",
      ],
    },
  ];

  return (
    <div className="bg-background text-foreground">
      <Header />
      <main>
        <section className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center text-center">
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
          <div className="absolute inset-0 bg-background/70" />
          <div className="relative z-10 max-w-readable space-y-4 px-4">
            <h1 className="text-m-hero-l md:text-hero-l font-semibold text-foreground tracking-[-0.025em]">
              Say hello to your new favorite drinking buddy
            </h1>
            <p className="text-m-body-base md:text-body-lg text-muted-foreground max-w-prose mx-auto">
              ...and goodbye to rough mornings
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
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
        </section>

        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {products.map((product) => (
                <Card key={product.id} className="text-center overflow-hidden border-2 rounded-xl shadow-subtle flex flex-col">
                  <CardContent className="p-6 flex-grow flex flex-col">
                    <div className="flex-grow">
                      <div className="relative h-12 mb-4">
                        <Image
                          src={product.logo}
                          alt={product.altLogo || "Mediworker Logo"}
                          width={150}
                          height={48}
                          className="mx-auto"
                        />
                      </div>
                      <h2 className="text-m-h2 md:text-h2 font-semibold mb-4">{product.name}</h2>
                      {product.image && (
                        <div className="relative aspect-video mb-4">
                          <Image
                            src={product.image.imageUrl}
                            alt={product.image.description}
                            fill
                            className="object-contain"
                            data-ai-hint={product.image.imageHint}
                          />
                        </div>
                      )}
                    </div>
                    <div>
                      <div className="flex items-center justify-center gap-2 mb-4">
                        <Plus className="text-red-500" />
                        <span className="font-semibold text-lg">Function</span>
                      </div>
                      <div className="bg-gray-100 p-4 rounded-lg space-y-2 text-left">
                        {product.functions.map((func, index) => (
                          <div key={index}>
                            <p className="text-m-body-base md:text-body-base text-gray-700">{func}</p>
                            {index < product.functions.length - 1 && <Separator className="my-2" />}
                          </div>
                        ))}
                      </div>
                    </div>
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
