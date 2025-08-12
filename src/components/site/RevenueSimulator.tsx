import { useMemo, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const formatEuro = (v: number) =>
  new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(v);

const clamp = (n: number, min: number, max: number) => Math.min(Math.max(n, min), max);

const RevenueSimulator = () => {
  const [hectares, setHectares] = useState<number>(1);
  const [rentPerHa, setRentPerHa] = useState<number>(2500);

  const annual = useMemo(() => hectares * rentPerHa, [hectares, rentPerHa]);
  const monthly = useMemo(() => annual / 12, [annual]);

  return (
    <section id="simulateur" className="container mx-auto px-4 mt-16 md:mt-24">
      <header className="max-w-2xl mb-8">
        <h2 className="font-display text-3xl md:text-4xl tracking-tight">
          Simulateur de revenu – ferme solaire
        </h2>
        <p className="mt-3 text-muted-foreground">
          Estimez votre loyer annuel en fonction de la surface disponible et du loyer par hectare.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Paramètres</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Label htmlFor="hectares">Surface (hectares)</Label>
                <Input
                  id="hectares"
                  type="number"
                  step={0.5}
                  min={0.5}
                  max={100}
                  value={hectares}
                  onChange={(e) => setHectares(clamp(parseFloat(e.target.value || "0"), 0.5, 100))}
                  className="w-28 text-right"
                />
              </div>
              <Slider
                min={0.5}
                max={100}
                step={0.5}
                value={[hectares]}
                onValueChange={([v]) => setHectares(v)}
              />
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Label htmlFor="rent">Loyer par hectare (€ / an)</Label>
                <Input
                  id="rent"
                  type="number"
                  step={50}
                  min={1000}
                  max={5500}
                  value={rentPerHa}
                  onChange={(e) => setRentPerHa(clamp(parseFloat(e.target.value || "0"), 1000, 5500))}
                  className="w-28 text-right"
                />
              </div>
              <Slider
                min={1000}
                max={5500}
                step={50}
                value={[rentPerHa]}
                onValueChange={([v]) => setRentPerHa(v)}
              />
              <p className="text-xs text-muted-foreground">Plage indicative observée: 1 000€ à 5 500€ par hectare et par an.</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-card to-background">
          <CardHeader>
            <CardTitle>Résultat estimatif</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg border p-4">
                <p className="text-sm text-muted-foreground">Loyer annuel</p>
                <p className="mt-1 text-3xl font-semibold">{formatEuro(annual)}</p>
              </div>
              <div className="rounded-lg border p-4">
                <p className="text-sm text-muted-foreground">Soit par mois</p>
                <p className="mt-1 text-3xl font-semibold">{formatEuro(monthly)}</p>
              </div>
            </div>
            <div className="rounded-lg border p-4">
              <p className="text-sm text-muted-foreground">Hypothèses utilisées</p>
              <ul className="mt-2 text-sm space-y-1">
                <li>Surface: {hectares} ha</li>
                <li>Loyer/ha: {formatEuro(rentPerHa)}</li>
                <li>Contrat type: 40 ans (indicatif)</li>
              </ul>
            </div>
            <Button size="lg" variant="cta" className="w-full">Commencer mon projet</Button>
            <p className="text-xs text-muted-foreground">
              Estimation non contractuelle. Le loyer réel dépend de la localisation, du réseau et de la faisabilité.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default RevenueSimulator;
