import TopBar from "@/components/site/TopBar";
import Header from "@/components/site/Header";
import HeroSection from "@/components/site/HeroSection";
import VideoSection from "@/components/site/VideoSection";
import Footer from "@/components/site/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Header />
      <main>
        <HeroSection />
        <VideoSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
