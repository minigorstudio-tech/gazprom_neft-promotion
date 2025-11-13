import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, TrendingUp, Crown, Gift } from "lucide-react";

interface LevelCardProps {
  level: number;
  points: number;
  bonus: string;
  isLottery?: boolean;
  tier: "start" | "growth" | "elite";
}

function LevelCard({ level, points, bonus, isLottery, tier }: LevelCardProps) {
  const tierColors = {
    start: "border-blue-200",
    growth: "border-primary",
    elite: "border-accent"
  };

  return (
    <div 
      className={`flex items-center justify-between p-4 border rounded-lg hover-elevate ${tierColors[tier]}`}
      data-testid={`card-level-${level}`}
    >
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
          <span className="text-lg font-bold text-primary-foreground">{level}</span>
        </div>
        <div>
          <div className="font-semibold" data-testid={`text-level-points-${level}`}>
            {points} очков
          </div>
          {isLottery && (
            <Badge variant="outline" className="mt-1 text-xs border-accent text-accent">
              + Лотерея
            </Badge>
          )}
        </div>
      </div>
      <div className="text-lg font-bold text-accent" data-testid={`text-level-bonus-${level}`}>
        {bonus}
      </div>
    </div>
  );
}

export default function LevelsSystem() {
  const tiers = [
    {
      name: "Быстрый старт",
      subtitle: "Уровни 1-5",
      icon: <Zap className="w-6 h-6" />,
      badge: "~1 уровень/неделя",
      tier: "start" as const,
      levels: [
        { level: 1, points: 50, bonus: "+50 баллов" },
        { level: 2, points: 100, bonus: "+50 баллов" },
        { level: 3, points: 150, bonus: "+50 баллов" },
        { level: 4, points: 200, bonus: "+50 баллов" },
        { level: 5, points: 250, bonus: "+50 баллов", isLottery: true },
      ]
    },
    {
      name: "Стабильный рост",
      subtitle: "Уровни 6-10",
      icon: <TrendingUp className="w-6 h-6" />,
      badge: "~1 уровень/месяц",
      tier: "growth" as const,
      levels: [
        { level: 6, points: 500, bonus: "+100 баллов" },
        { level: 7, points: 750, bonus: "+100 баллов" },
        { level: 8, points: 1000, bonus: "+100 баллов" },
        { level: 9, points: 1250, bonus: "+100 баллов" },
        { level: 10, points: 1500, bonus: "+200 баллов", isLottery: true },
      ]
    },
    {
      name: "Элитный клуб",
      subtitle: "Уровни 11-15",
      icon: <Crown className="w-6 h-6" />,
      badge: "Долгосрочно",
      tier: "elite" as const,
      levels: [
        { level: 11, points: 1750, bonus: "+200 баллов" },
        { level: 12, points: 2000, bonus: "+200 баллов" },
        { level: 13, points: 2200, bonus: "+250 баллов" },
        { level: 14, points: 2350, bonus: "+300 баллов" },
        { level: 15, points: 2500, bonus: "+500 баллов", isLottery: true },
      ]
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-levels-title">
            Система из 15 уровней
          </h2>
          <p className="text-lg text-muted-foreground mb-8" data-testid="text-levels-subtitle">
            Зарабатывайте очки, повышайте уровень и получайте награды
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge className="bg-accent hover:bg-accent text-accent-foreground px-6 py-2 text-sm">
              50 бонусных баллов за каждый уровень
            </Badge>
            <Badge className="bg-primary hover:bg-primary text-primary-foreground px-6 py-2 text-sm">
              Беспроигрышная лотерея на уровнях 5, 10, 15
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {tiers.map((tier) => (
            <Card key={tier.name} className="p-6" data-testid={`card-tier-${tier.tier}`}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground">
                  {tier.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold" data-testid={`text-tier-name-${tier.tier}`}>
                    {tier.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{tier.subtitle}</p>
                </div>
              </div>

              <div className="mb-4">
                <Badge variant="outline" className="text-xs">
                  {tier.badge}
                </Badge>
              </div>

              <div className="space-y-3">
                {tier.levels.map((level) => (
                  <LevelCard key={level.level} {...level} tier={tier.tier} />
                ))}
              </div>
            </Card>
          ))}
        </div>

        <Card className="mt-12 p-8 border-accent/20 bg-accent/5" data-testid="card-lottery-info">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
              <Gift className="w-8 h-8 text-accent-foreground" />
            </div>
            <div className="text-center md:text-left flex-1">
              <h3 className="text-2xl font-bold mb-2" data-testid="text-lottery-title">
                Беспроигрышная лотерея
              </h3>
              <p className="text-muted-foreground" data-testid="text-lottery-description">
                Достигните уровней <span className="font-semibold text-accent">5, 10 или 15</span> и автоматически станьте участником беспроигрышной лотереи с гарантированными призами!
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
