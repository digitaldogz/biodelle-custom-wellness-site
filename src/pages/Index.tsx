
import React from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import SolutionsSection from "@/components/SolutionsSection";
import AboutSection from "@/components/AboutSection";
import BlogSection from "@/components/BlogSection";
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
      <BlogSection />
      <Footer />
      <WhatsAppButton phoneNumber="5511999999999" />
    </div>
  );
};

export default Index;
