// Internal reproduction authorized by Copro Solaire
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Shield, CheckCircle } from "lucide-react";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section id="top" className="relative pt-10 lg:pt-20 pb-16 overflow-hidden">
      {/* Background moderne avec gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/5"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,hsl(var(--primary)/0.1),transparent_50%)]"></div>

      <div className="container-xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Contenu texte optimisé */}
          <div className="space-y-8">
            {/* Badge moderniste */}
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-green-500/10 to-primary/10 rounded-full border border-green-500/20">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-green-700 dark:text-green-300">Solution 100% gratuite</span>
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl xl:text-6xl leading-[1.1] font-bold font-display">
                Valorisez votre terrain au profit de la{" "}
                <span className="relative">
                  <span className="bg-gradient-to-r from-primary via-primary/90 to-primary/80 bg-clip-text text-transparent">
                    transition écologique
                  </span>
                  <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 200 12" fill="none">
                    <path d="M2 10C60 2, 140 2, 198 10" stroke="currentColor" strokeWidth="2" className="text-primary/40" strokeLinecap="round"/>
                  </svg>
                </span>
              </h1>

              <p className="text-xl text-foreground/70 leading-relaxed max-w-lg">
                Investissez dans un avenir durable en hébergeant une ferme solaire.
              </p>

              {/* Liste d'avantages avec icônes */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-foreground/80 font-medium">Gratuit de A à Z</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-foreground/80 font-medium">Sans engagement</span>
                </div>
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-foreground/80 font-medium">Revenus garantis 30 ans</span>
                </div>
              </div>
            </div>

            {/* CTAs modernisés */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 py-6 h-auto">
                Héberger une ferme solaire
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 h-auto">
                ou appelez-nous au 04.12.28.02.41
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="pt-6 border-t border-border/50">
              <p className="text-sm text-foreground/60 mb-3">Plus de 500 propriétaires nous font confiance</p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-yellow-400" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-foreground/70">Trustpilot</span>
              </div>
            </div>
          </div>

          {/* Image hero optimisée */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="/lovable-uploads/a6e0aae1-28cf-4595-bf0f-7c0d08c801eb.png"
                alt="Illustration de panneaux solaires sur copropriété avec verdure"
                className="w-full h-auto"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-background border rounded-xl p-4 shadow-lg max-w-xs hidden sm:block">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">5500€</div>
                <div className="text-sm text-foreground/70">de loyer annuel par hectare</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;