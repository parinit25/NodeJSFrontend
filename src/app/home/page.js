"use client";
// Import the content of the products
import HomePageContent from "@/components/home-page/HomePageContent";
import Guard from "@/components/layout/Gaurd";

const HomePage = () => {
  return (
    <Guard>
      <HomePageContent />
    </Guard>
  );
};

export default HomePage;
