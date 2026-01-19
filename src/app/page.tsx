import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Eye, Heart, Star, CheckCircle2, Award, Lightbulb, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { AnnouncementBar } from "@/components/announcement-bar";
import { Header } from "@/components/header";
import { placeholderImages } from "@/lib/placeholder-images";
import { products } from "@/lib/products";
import { Card, CardContent } from "@/components/ui/card";
import { Footer } from "@/components/footer";

export default function Home() {
  const heroImage = placeholderImages.find(p => p.id === "hero-image");
  const solutionsImage = placeholderImages.find(p => p.id === "customer-driven-solutions");
  const reviewer1 = placeholderImages.find(p => p.id === "reviewer-raashi-metha");
  const reviewer2 = placeholderImages.find(p => p.id === "reviewer-ria-bajaj");
  const reviewer3 = placeholderImages.find(p => p.id === "reviewer-radhi-agarwal");

  const reviews = [
    {
      name: "Dr. Raashi Metha",
      title: "MBBS, DNB",
      review: "As a dermatologist, I highly recommend Caresmith's Bloom Scalp Massager for stimulating hair growth and the Bloom Foot File for rejuvenated feet. I've personally used them and can attest to their effectiveness. The scalp massager promotes circulation while the foot file exfoliates for softer skin.",
      rating: 5,
      image: reviewer1,
    },
    {
      name: "Ria Bajaj",
      title: "Athlete Pole & Aerial Fitness",
      review: "As an athlete in pole and aerial fitness, I love the ChargeSport and ChargeFlex Massage Guns. With customizable intensity and versatile attachments, they target muscle tension effectively. Essential for my recovery routine, helping me perform at my best. Highly recommended!",
      rating: 5,
      image: reviewer2,
    },
    {
      name: "Radhi Agarwal",
      title: "Product Manager at Microsoft",
      review: "Revive Electric Head Massager is my ultimate relaxation tool after a hectic workday. This blissful device helps me unwind, calm down, and find tranquility within minutes. A must-have for all workaholics seeking daily rejuvenation.",
      rating: 5,
      image: reviewer3,
    },
  ];

  return (
    <div className="bg-background text-foreground">
      <AnnouncementBar />
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
          
          <div className="relative z-10 container mx-auto px-4">
            <div className="max-w-readable mx-auto space-y-4 text-white">
              <h1 className="text-m-hero-l md:text-hero-l font-headline font-semibold tracking-[-0.025em]">
                Say hello to your new favorite drinking buddy
              </h1>
              <p className="text-m-body-base md:text-body-lg max-w-prose mx-auto">
                ...and goodbye to rough mornings
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/shop">
                    shop morning recovery
                    <ArrowRight />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-black">
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
            <h2 className="text-center text-m-h2 md:text-h2 font-headline font-semibold mb-12">Featured Products</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {products.map((product) => (
                <Card key={product.id} className="group overflow-hidden border rounded-xl shadow-subtle flex flex-col bg-card">
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
          </div>
        </section>

        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4 max-w-[1371px]">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-subtle">
                {solutionsImage && (
                  <Image
                    src={solutionsImage.imageUrl}
                    alt={solutionsImage.description}
                    fill
                    className="object-cover"
                    data-ai-hint={solutionsImage.imageHint}
                  />
                )}
              </div>
              <div className="space-y-8">
                <h2 className="text-m-h2 md:text-h2 font-headline font-semibold">
                  Customer-Driven Solutions with Xentrix
                </h2>
                <p className="text-muted-foreground text-body-base md:text-body-lg">
                  At Xentrix, we focus on delivering tailored solutions that meet your customers needs. With advanced technology and AI-powered CRM systems, we help businesses build stronger customer relationships.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-body-base">Personalized Engagement</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-body-base">Seamless Integration</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-body-base">Smart Data Analytics</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-body-base">24/7 Customer Support</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pt-8 border-t border-border gap-8 sm:gap-4">
                    <div className="text-center sm:text-left">
                        <p className="text-m-h2 md:text-h2 font-headline font-semibold text-primary">200+</p>
                        <p className="text-body-sm text-muted-foreground mt-1">Business Partners</p>
                    </div>
                    <div className="text-center sm:text-left">
                        <p className="text-m-h2 md:text-h2 font-headline font-semibold text-primary">30K+</p>
                        <p className="text-body-sm text-muted-foreground mt-1">Satisfied Customers</p>
                    </div>
                    <div className="text-center sm:text-left">
                        <p className="text-m-h2 md:text-h2 font-headline font-semibold text-primary">10+</p>
                        <p className="text-body-sm text-muted-foreground mt-1">Years of Excellence</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4 max-w-[1371px]">
            <div className="bg-secondary rounded-3xl p-12 text-center">
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="flex flex-col items-center gap-3">
                  <Award className="w-10 h-10 text-primary" />
                  <h3 className="font-semibold text-foreground">Expert Approved</h3>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <Lightbulb className="w-10 h-10 text-primary" />
                  <h3 className="font-semibold text-foreground">Thoughtfully Designed</h3>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <ShieldCheck className="w-10 h-10 text-primary" />
                  <h3 className="font-semibold text-foreground">12-Month Warranty</h3>
                </div>
              </div>
              <p className="text-muted-foreground">
                We're committed to delivering on our promise with 100% dedication.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24 bg-secondary">
          <div className="container mx-auto px-4 max-w-[1371px]">
            <div className="text-center max-w-readable mx-auto">
              <h2 className="text-m-h2 md:text-h2 font-headline font-semibold text-foreground mb-6">
                Discover What Customers Are Saying
              </h2>
              <div className="flex justify-center gap-8 md:gap-16 mb-12">
                <div>
                  <p className="text-m-h2 md:text-h2 font-headline font-semibold text-primary">70K+</p>
                  <p className="text-body-sm text-muted-foreground mt-1">Reviews</p>
                </div>
                <div>
                  <p className="text-m-h2 md:text-h2 font-headline font-semibold text-primary">1M+</p>
                  <p className="text-body-sm text-muted-foreground mt-1">Customers</p>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              {reviews.map((review, index) => (
                <div key={index} className="text-center flex flex-col items-center">
                  {review.image && (
                    <Image
                      src={review.image.imageUrl}
                      alt={review.name}
                      width={100}
                      height={100}
                      className="rounded-full mx-auto mb-4"
                      data-ai-hint={review.image.imageHint}
                    />
                  )}
                  <h3 className="text-h4 font-semibold text-foreground">{review.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{review.title}</p>
                  <div className="flex justify-center gap-0.5 mb-4 text-primary">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-body-base text-muted-foreground">{review.review}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
