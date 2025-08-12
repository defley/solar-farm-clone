import React from "react";
import { Button } from "@/components/ui/button";

const CHECK_ICON = (
  <svg width="14" height="11" viewBox="0 0 14 11" aria-hidden>
    <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
      <polyline points="9.679 0 3.025 6.862 0 3.743"></polyline>
    </g>
  </svg>
);

const STAR_ICON = (
  <svg width="17" height="16" viewBox="0 0 17 16" aria-hidden>
    <path
      d="M7.567.352c.145-.469.812-.469.958 0l1.542 4.965a.57.57 0 0 0 .48.401h5.043c.48 0 .686.606.305.895l-4.122 3.133a.57.57 0 0 0-.175.544l1.564 5.036c.144.464-.396.838-.784.543L8.35 12.759a.57.57 0 0 0-.609 0L3.714 15.819c-.387.294-.927-.08-.783-.544l1.565-5.036a.57.57 0 0 0-.175-.544L.198 6.563c-.381-.289-.175-.895.305-.895h5.043a.57.57 0 0 0 .455-.401L7.567.352Z"
      fill="currentColor"
    />
  </svg>
);

const ValoriserSection = () => {
  return (
    <section aria-labelledby="valoriser-title" className="container mx-auto px-4 mt-16 md:mt-24">
      <header className="text-center max-w-3xl mx-auto">
        <h2 id="valoriser-title" className="font-display text-3xl md:text-4xl tracking-tight">
          Valorisez votre terrain au profit de la transition écologique.
        </h2>
        <p className="mt-3 text-muted-foreground text-lg">Investissez dans un avenir durable<br /> en hébergeant une ferme solaire.</p>

        <div className="mt-4 flex items-center justify-center gap-6 text-sm">
          <div className="inline-flex items-center gap-2 text-foreground/80">
            <span className="text-primary" aria-hidden>{CHECK_ICON}</span>
            <span>Gratuit de A à Z</span>
          </div>
          <div className="inline-flex items-center gap-2 text-foreground/80">
            <span className="text-primary" aria-hidden>{CHECK_ICON}</span>
            <span>Sans engagement</span>
          </div>
          <div className="inline-flex items-center gap-2 text-foreground/80">
            <span className="text-primary" aria-hidden>{STAR_ICON}</span>
            <span>Trustpilot</span>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Button size="lg" variant="cta">Héberger une ferme solaire</Button>
          <a href="tel:+33412280241" className="story-link text-sm text-muted-foreground">ou appelez-nous au 04.12.28.02.41</a>
        </div>
      </header>

      {/* Cable + plug animation to image */}
      <div className="relative mt-12 md:mt-16">
        {/* SVG cable */}
        <svg viewBox="0 0 1200 400" className="w-full h-64 md:h-80 lg:h-96 text-muted-foreground/60" preserveAspectRatio="none">
          <defs>
            <linearGradient id="cableGrad" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="currentColor" stopOpacity="0.9" />
              <stop offset="100%" stopColor="currentColor" stopOpacity="0.4" />
            </linearGradient>
          </defs>
          <path id="cable-path" d="M200 10 C 250 70, 300 90, 360 100 S 540 120, 650 180 S 900 260, 1000 380" fill="none" stroke="url(#cableGrad)" strokeWidth="3" strokeLinecap="round" strokeDasharray="1200" strokeDashoffset="1200">
            <animate attributeName="stroke-dashoffset" from="1200" to="0" dur="1.8s" begin="0.2s" fill="freeze" />
          </path>

          {/* Plug moving along the cable */}
          <g>
            <g id="plug" transform="translate(-9999,-9999)" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="-10" y="-6" rx="3" ry="3" width="20" height="12" fill="hsl(var(--background))" />
              <line x1="-14" y1="-2" x2="-20" y2="-2" />
              <line x1="-14" y1="2" x2="-20" y2="2" />
            </g>
            <animateMotion href="#plug" dur="1.8s" begin="0.2s" fill="freeze" keyPoints="0;1" keyTimes="0;1">
              <mpath href="#cable-path" />
            </animateMotion>
          </g>
        </svg>

        {/* Target image the cable reaches */}
        <div className="absolute bottom-0 right-0 w-56 md:w-72 lg:w-80 translate-y-1/3">
          <img
            src="https://cdn.prod.website-files.com/63ca74be7d71b6c128d7ac1e/63e611a7b8870e0703058b51_63e60d457589495064407036_Solar%20Energy%20on%20the%20farm-poster-00001.jpeg"
            alt="Ferme solaire – poster vidéo avec panneaux et brebis"
            loading="lazy"
            className="rounded-xl border bg-card shadow-sm w-full h-auto"
          />
        </div>
      </div>

      <div className="mt-24 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h3 className="font-display text-2xl md:text-3xl tracking-tight">
            Gagnez jusqu'à 5500€ de loyer annuel par hectare
          </h3>
          <p className="mt-3 text-muted-foreground">
            dédié aux panneaux photovoltaïques. Grâce à notre connaissance du marché, nous vous guidons pour recevoir le meilleur loyer et la proposition la plus fiable.
          </p>
          <div className="mt-6">
            <Button asChild variant="secondary">
              <a href="#simulateur">Simuler son loyer annuel</a>
            </Button>
          </div>
        </div>
        <article className="prose prose-slate dark:prose-invert max-w-none">
          <h4 className="text-xl font-semibold">Une démarche simple et sans aucune avance de frais</h4>
          <p>
            Nous nous occupons de toutes les démarches administratives et financières et vous proposons l’offre la plus adaptée à vos besoins.
          </p>
          <h4 className="text-xl font-semibold mt-6">Un service clé en mains et 100% transparent</h4>
          <p>
            Un conseiller dédié vous rappelle sous 48h (jours ouvrés) pour élaborer votre dossier et évaluer la faisabilité du projet. Vous pouvez aussi nous missionner pour négocier avec nos partenaires développeurs d'énergie renouvelable.
          </p>
        </article>
      </div>
    </section>
  );
};

export default ValoriserSection;
