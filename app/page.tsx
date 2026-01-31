import { HeroSection1 } from "@/components/global/HeroSection";
import Navbar from "@/components/global/Navbar";
import { CompanyLogo } from "@/components/global/CompanyLogo";
import Testimonials from "@/components/global/Testimonial";
import TeamSection from "@/components/global/TeamSection";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <Navbar />
        <HeroSection1 />
        <CompanyLogo />
        <Testimonials />
        <TeamSection />
      </main>
    </div>
  );
}
