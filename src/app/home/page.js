// Import the content of the home page
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
