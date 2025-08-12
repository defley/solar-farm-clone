const Footer = () => {
  return (
    <footer className="mt-16 border-t">
      <div className="container mx-auto px-4 py-10 text-sm text-muted-foreground flex flex-col md:flex-row gap-4 items-center justify-between">
        <p>© {new Date().getFullYear()} Ferme Solaire — Tous droits réservés.</p>
        <nav className="flex items-center gap-6">
          <a href="#" className="hover:opacity-80">Mentions légales</a>
          <a href="#" className="hover:opacity-80">Politique de confidentialité</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
