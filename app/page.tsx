import { HeroSection1 } from "@/components/global/HeroSection";
import Navbar from "@/components/global/Navbar";
import { CompanyLogo } from "@/components/global/CompanyLogo";
import Testimonials from "@/components/global/Testimonial";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <Navbar />
        <HeroSection1 />
        <CompanyLogo />
        <Testimonials />
      </main>
    </div>
  );
}
