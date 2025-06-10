
import React from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import SolutionsSection from "@/components/SolutionsSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-biodelle-offwhite">
      <Header />
      <HeroSection />
      <DifferentialsSection />
      <SolutionsSection />
      <AboutSection />
      <TestimonialsSection />
      <div className="bg-white pt-4 pb-12">
        <div className="max-w-7xl mx-auto">
          <WhatsAppButton phoneNumber="5542998477232" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
