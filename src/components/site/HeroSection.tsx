const HeroSection = () => {
  return (
    <section className="container mx-auto px-4 pt-10 md:pt-16 lg:pt-24">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight">
            Hébergez
            <br />
            une
            <br />
            ferme
            <br />
            solaire
          </h1>
          <p className="mt-6 text-muted-foreground max-w-md">
            et touchez une rente de 1 000€ à 5500€/an par hectare sur 40 ans
            sans aucun investissement
          </p>
        </div>
        <div className="relative">
          <img
            src="https://cdn.prod.website-files.com/63be8720f81b056b6775ca28/63cfdd16474592425b7518e3_Home%20Hero.png"
            alt="Illustration ferme solaire avec panneaux et animaux"
            loading="lazy"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
