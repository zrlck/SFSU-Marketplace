import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { FeaturedItems } from "@/components/featured-items";
import { HowItWorks } from "@/components/how-it-works";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeaturedItems />
        <HowItWorks />
      </main>
      <Footer />
    </>
  );
}
