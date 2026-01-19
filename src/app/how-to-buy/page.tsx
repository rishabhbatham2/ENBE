import { AnnouncementBar } from '@/components/announcement-bar';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export default function HowToBuyPage() {
  return (
    <div className="bg-background text-foreground">
      <AnnouncementBar />
      <Header />
      <main className="container mx-auto max-w-[1371px] px-4 py-16 sm:py-24">
        <div className="text-center max-w-readable mx-auto">
          <h1 className="text-m-h1 md:text-h1 font-headline font-semibold">How to Buy</h1>
          <p className="mt-4 text-body-lg text-muted-foreground">
            We are working on this page. Please check back later for more information on how to purchase our products.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
