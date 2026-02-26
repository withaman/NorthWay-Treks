import FaqsPage from "@/components/FaqsPage";
import HeroSection from "@/components/HeroSection";
import Packages from "@/components/Packages";
import TopDestinations from "@/components/TopDestinations";
import TravelPoint from "@/components/TravelPoint";
import TrekkingServices from "@/components/TrekkingServices";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-5">
        <HeroSection />
        <TopDestinations />
        <TrekkingServices />
        <TravelPoint />
        <Packages />
        <WhyChooseUs />
        <FaqsPage />
    </div>
  );
}
