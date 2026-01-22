import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Eye, Heart, Star, CheckCircle2, Award, Lightbulb, ShieldCheck, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { AnnouncementBar } from "@/components/announcement-bar";
import { Header } from "@/components/header";
import { placeholderImages } from "@/lib/placeholder-images";
import { products } from "@/lib/products";
import { Card, CardContent } from "@/components/ui/card";
import { Footer } from "@/components/footer";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function Home() {
  const heroImage = placeholderImages.find(p => p.id === "hero-physiotherapy");
  const solutionsImage = placeholderImages.find(p => p.id === "customer-driven-solutions");
  const reviewer1 = placeholderImages.find(p => p.id === "reviewer-raashi-metha");
  const reviewer2 = placeholderImages.find(p => p.id === "reviewer-ria-bajaj");
  const reviewer3 = placeholderImages.find(p => p.id === "reviewer-radhi-agarwal");
  const reviewer4 = placeholderImages.find(p => p.id === "reviewer-4");
  const reviewer5 = placeholderImages.find(p => p.id === "reviewer-5");
  const reviewer6 = placeholderImages.find(p => p.id === "reviewer-6");
  const reviewer7 = placeholderImages.find(p => p.id === "reviewer-7");
  const reviewer8 = placeholderImages.find(p => p.id === "reviewer-8");
  const reviewer9 = placeholderImages.find(p => p.id === "reviewer-9");
  const reviewer10 = placeholderImages.find(p => p.id === "reviewer-10");
  const reviewer11 = placeholderImages.find(p => p.id === "reviewer-11");
  const reviewer12 = placeholderImages.find(p => p.id === "reviewer-12");

  const reviews = [
    {
      name: "Amit Sharma",
      title: "IT Professional, Bengaluru",
      review: "Enbe Techserv products have completely changed how I manage my health with a busy work schedule. The massage and therapy devices are very easy to use and give instant relief after long hours at work. It truly feels like professional care at home.",
      rating: 5,
      image: reviewer1,
    },
    {
      name: "Neha Verma",
      title: "Working Professional, Delhi",
      review: "The quality of Enbe Techserv’s wellness products is excellent. You can immediately feel the difference compared to normal massagers. The build quality, comfort, and results are all top-class. Their team also guided me very well before purchase.",
      rating: 5,
      image: reviewer2,
    },
    {
      name: "Rajesh Patel",
      title: "Business Owner, Ahmedabad",
      review: "I purchased a therapy and massage product from Enbe Techserv for muscle pain and recovery. The results were impressive within a few days. It’s perfect for people who don’t have time for regular clinic visits but still want effective health solutions.",
      rating: 5,
      image: reviewer3,
    },
    {
      name: "Priya Nair",
      title: "Homemaker, Kochi",
      review: "What I really liked about Enbe Techserv is their customer support. They patiently explained the product benefits and helped me choose the right solution. The product works exactly as promised and is very comfortable to use.",
      rating: 5,
      image: reviewer4,
    },
    {
      name: "Sandeep Malhotra",
      title: "Fitness Enthusiast, Chandigarh",
      review: "Enbe Techserv products are ideal for modern lifestyles. They help reduce stress, relax muscles, and support faster recovery after workouts. It’s a great investment for long-term health and overall well-being.",
      rating: 5,
      image: reviewer5,
    },
    {
      name: "Dr. Sameer Sharma",
      title: "General Practitioner",
      review: "The quality of equipment from eNBe TechServ is consistently high. My patients have benefited greatly from the new electrotherapy units. Their support team is also very responsive and helpful.",
      rating: 5,
      image: reviewer6,
    },
    {
      name: "Anjali Verma",
      title: "Physiotherapist",
      review: "I've been using the PEMF devices for a few months now, and the results are impressive. My clients report faster recovery times. The devices are user-friendly and reliable.",
      rating: 5,
      image: reviewer7,
    },
    {
      name: "Vikram Singh",
      title: "Sports Rehab Specialist",
      review: "The ChargeSport massage gun is a game-changer for my athletes. It's powerful, quiet, and the battery life is excellent. It has become an indispensable tool in my clinic.",
      rating: 5,
      image: reviewer8,
    },
    {
      name: "Priya Patel",
      title: "Clinic Owner",
      review: "eNBe TechServ helped me equip my new clinic from scratch. Their team provided excellent consultation, and the quality of the products is top-notch. Highly recommend their services.",
      rating: 5,
      image: reviewer5,
    },
    {
      name: "Sunita Gupta",
      title: "Hospital Procurement Manager",
      review: "We procured a range of rehabilitation equipment for our hospital. The entire process, from inquiry to installation, was seamless. The eNBe team is professional and efficient.",
      rating: 5,
      image: reviewer10,
    },
    {
      name: "Rohan Desai",
      title: "Product Manager",
      review: "The Graphene Magnetic Waist Belt has been a great help for my lower back pain. It's comfortable to wear and provides good support. I'm very satisfied with my purchase.",
      rating: 4,
      image: reviewer9,
    },
    {
      name: "Amit Patel",
      title: "Engineer",
      review: "The customer service is excellent. I had a query about my product, and they resolved it quickly. The product itself is of high quality. I'm a happy customer.",
      rating: 5,
      image: reviewer11,
    }
  ];

  const categories = [
    {
      title: "Electrotherapy",
      href: "/products",
      image: placeholderImages.find(p => p.id === "product-winstim"),
    },
    {
      title: "PEMF Therapy",
      href: "/products",
      image: placeholderImages.find(p => p.id === "product-pemf-gshios"),
    },
    {
      title: "Rehabilitation",
      href: "/products",
      image: placeholderImages.find(p => p.id === "product-vr-system"),
    },
    {
      title: "Treatment Tables",
      href: "/products",
      image: placeholderImages.find(p => p.id === "product-chiropractic-table"),
    }
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
          <div className="absolute inset-0 bg-black/50" />
          
          <div className="relative z-10 container mx-auto px-4">
            <div className="max-w-readable mx-auto space-y-4 text-white">
              <h1 className="text-m-hero-l md:text-hero-l font-headline font-semibold tracking-[-0.025em]">
                Advanced Physiotherapy and Rehabilitation Solutions
              </h1>
              <p className="text-m-body-base md:text-body-lg max-w-prose mx-auto">
                Delivering high-performance medical and therapeutic equipment to clinics, hospitals, and sports rehab centers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/products">
                    Explore Products
                    <ArrowRight />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-black">
                  <Link href="/contact-us">
                    Contact Us
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4 max-w-[1371px]">
            <div className="text-center mb-12 max-w-prose mx-auto">
              <h2 className="text-m-h2 md:text-h2 font-headline font-semibold mb-4">Our Core Technologies</h2>
              <p className="text-lg md:text-xl text-muted-foreground">
                We provide a range of advanced therapeutic solutions to meet diverse clinical needs.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {categories.map((category) => (
                category.image && (
                  <Link href={category.href} key={category.title} className="relative aspect-square overflow-hidden rounded-xl group block">
                    <Image
                      src={category.image.imageUrl}
                      alt={category.image.description}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint={category.image.imageHint}
                    />
                    <div className="absolute inset-0 bg-black/40" />
                    <div className="absolute inset-0 flex items-center justify-center p-4">
                      <h3 className="text-white text-xl md:text-2xl font-bold text-center">
                        {category.title}
                      </h3>
                    </div>
                  </Link>
                )
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4 max-w-[1371px]">
            <h2 className="text-center text-m-h2 md:text-h2 font-headline font-semibold mb-12">Featured Products</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {products.slice(0, 4).map((product) => (
                <Card key={product.id} className="group overflow-hidden border-none flex flex-col bg-card">
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

        <section className="py-16 sm:py-24 bg-secondary">
          <div className="container mx-auto px-4 max-w-[1371px]">
            <div className="bg-card rounded-3xl p-12 text-center border-none">
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

        <section className="py-16 sm:py-24 bg-white">
          <div className="container mx-auto max-w-[1371px] px-4">
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
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {reviews.map((review, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                        <div className="text-center flex flex-col items-center p-6">
                          {review.image && (
                            <Image
                              src={review.image.imageUrl}
                              alt={review.name}
                              width={100}
                              height={100}
                              className="rounded-full mx-auto mb-4 object-cover w-[100px] h-[100px]"
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
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex items-center justify-center bg-background border-border text-foreground hover:bg-accent hover:text-accent-foreground">
                <ChevronLeft className="h-6 w-6" />
              </CarouselPrevious>
              <CarouselNext className="hidden md:flex items-center justify-center bg-background border-border text-foreground hover:bg-accent hover:text-accent-foreground">
                <ChevronRight className="h-6 w-6" />
              </CarouselNext>
            </Carousel>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
