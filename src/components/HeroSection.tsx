import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import heroImage from "@assets/photo_2025-11-07_16-22-34_1762714290990.jpg";

interface StatsCardProps {
  value: string;
  label: string;
}

function StatsCard({ value, label }: StatsCardProps) {
  return (
    <div className="bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-lg p-6 text-center">
      <div className="text-4xl md:text-5xl font-bold text-white mb-2">{value}</div>
      <div className="text-sm md:text-base text-white/90">{label}</div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-primary overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/90" />
      
      <div className="absolute inset-0 flex items-center justify-end">
        <img 
          src={heroImage} 
          alt="Программа лояльности"
          className="h-full w-auto object-contain opacity-90"
          data-testid="img-hero"
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 min-h-screen flex items-center">
        <div className="max-w-2xl text-white space-y-8">
          <div className="inline-block">
            <Badge 
              className="bg-accent hover:bg-accent text-accent-foreground px-4 py-2 text-sm font-semibold"
              data-testid="badge-period"
            >
              до 31 декабря 2026
            </Badge>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight" data-testid="text-hero-title">
              ОБНОВЛЕННАЯ ПРОГРАММА ЛОЯЛЬНОСТИ
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 font-medium" data-testid="text-hero-subtitle">
              Зарабатывайте баллы за вашу преданность бренду
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <StatsCard value="15" label="уровней развития" />
            <StatsCard value=">50" label="баллов за каждый уровень" />
            <StatsCard value=">20" label="уникальных заданий" />
          </div>

          <div>
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent text-accent-foreground text-lg px-8 py-6 h-auto font-semibold"
              data-testid="button-start"
            >
              Начать участие
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
