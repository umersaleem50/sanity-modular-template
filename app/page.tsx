import { HeroSection1 } from "@/components/global/HeroSection";
import Navbar from "@/components/Navbar";
import { CompanyLogo } from "@/components/smoothui/logo-cloud-1/CompanyLogo";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <Navbar />
        <HeroSection1 />
        <CompanyLogo />
      </main>
    </div>
  );
}
