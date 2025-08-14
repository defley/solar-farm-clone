import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, TrendingUp, Shield } from "lucide-react";

const CableSection = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    if (typeof window === "undefined") return;
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (isMobile) {
    // Version mobile optimisée
    return (
      <section className="py-8 bg-gradient-to-b from-background to-background/50">
        <div className="container-xl px-4 space-y-12">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary">
              <TrendingUp className="w-4 h-4" />
              Solution 100% gratuite
            </div>
            <h2 className="text-3xl font-display font-bold leading-tight text-center">
              Financez vos travaux avec votre toiture
            </h2>
            <p className="text-foreground/70 text-center max-w-sm mx-auto leading-relaxed">
              Transformez votre toit en source de revenus garantis pendant 30 ans
            </p>
          </div>
        </div>
      </section>
    );
  }

  // Version desktop avec animation cable
  return (
    <section className="relative py-16 overflow-hidden">
      <div className="container-xl relative">
        <div className="text-center space-y-8">
          <h2 className="text-4xl lg:text-5xl font-display font-bold">
            Gagnez jusqu'à 5500€ de loyer annuel par hectare
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            dédié aux panneaux photovoltaïques. Grâce à notre connaissance du marché, nous vous guidons pour recevoir le meilleur loyer et la proposition la plus fiable.
          </p>
          <div className="pt-6">
            <Button size="lg" variant="cta">
              Simuler son loyer annuel
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CableSection;