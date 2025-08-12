import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-baseline gap-2">
          <span className="font-hand text-2xl leading-none">ferme solaire</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#comment" className="hover:opacity-80">Comment ça marche ?</a>
          <a href="#types" className="hover:opacity-80">Type de terrain</a>
          <a href="#aide" className="hover:opacity-80">Aide</a>
          <a href="#avis" className="hover:opacity-80">Avis Clients</a>
          <a href="#mag" className="hover:opacity-80">Mag</a>
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            <a href="tel:+33412280241" className="hover:underline">04 12 28 02 41</a>
          </div>
        </nav>
        <div className="flex items-center gap-3">
          <Button variant="cta" size="lg">Déposer mon dossier</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
