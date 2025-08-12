import { X } from "lucide-react";

const TopBar = () => {
  // Static top bar replicating the announcement style
  return (
    <div className="w-full bg-accent text-foreground/80 text-xs sm:text-sm py-2">
      <div className="container mx-auto px-4 flex items-center justify-center relative">
        <p>
          Ferme Solaire est un organisme français 100% indépendant. Découvrez notre équipe
          <a href="#" className="ml-1 underline hover:opacity-80"> en cliquant ici</a>.
        </p>
        <button aria-label="Fermer l'annonce" className="absolute right-3 top-1/2 -translate-y-1/2 opacity-60 hover:opacity-100">
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default TopBar;
