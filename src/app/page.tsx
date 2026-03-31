import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import CoursesSection from "@/components/home/CoursesSection";
import FacultySection from "@/components/home/FacultySection";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";
import CtaSection from "@/components/home/CtaSection";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <HeroSection />
      <StatsSection />
      <CoursesSection />
      <FacultySection />
      <WhyChooseUsSection />
      <CtaSection />
    </main>
  );
}
