import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import OurStory from "@/components/sections/OurStory";
import Menu from "@/components/sections/Menu";
import OurSpace from "@/components/sections/OurSpace";
import InstagramGallery from "@/components/sections/InstagramGallery";
import Locations from "@/components/sections/Locations";
import Testimonials from "@/components/sections/Testimonials";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <OurStory />
        <Menu />
        <OurSpace />
        <InstagramGallery />
        <Locations />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
