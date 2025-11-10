import { Card } from "@/components/ui/card";
import { Target, Heart, ThumbsUp, Smile, LineChart, Zap } from "lucide-react";

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function BenefitCard({ icon, title, description }: BenefitCardProps) {
  return (
    <Card className="p-6 hover-elevate transition-all h-full" data-testid={`card-benefit-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground">
          {icon}
        </div>
        
        <h3 className="text-xl font-bold" data-testid={`text-benefit-title-${title.toLowerCase().replace(/\s+/g, '-')}`}>
          {title}
        </h3>
        
        <p className="text-muted-foreground" data-testid={`text-benefit-description-${title.toLowerCase().replace(/\s+/g, '-')}`}>
          {description}
        </p>
      </div>
    </Card>
  );
}

export default function Benefits() {
  const benefits = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Понятная выгода",
      description: "Бонусные баллы за действия, которые вы и так совершаете: заправка, покупка кофе, использование приложения"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Персональный подход",
      description: "Задания и предложения соответствуют вашим реальным потребностям и стилю вождения"
    },
    {
      icon: <ThumbsUp className="w-8 h-8" />,
      title: "Простота участия",
      description: "Не нужно разбираться в сложных правилах: выполняйте задания и получайте награды"
    },
    {
      icon: <Smile className="w-8 h-8" />,
      title: "Положительные эмоции",
      description: "Задания и уровни превращают повседневные поездки в увлекательный путь достижений"
    },
    {
      icon: <LineChart className="w-8 h-8" />,
      title: "Предсказуемость и контроль над своими тратами",
      description: "Накопительная система баллов и понятные условия их списания позволяют планировать свои расходы на топливо и сопутствующие покупки, превращая случайные траты в управляемый бюджет"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Умные подсказки",
      description: "Программа подсказывает удобные и выгодные моменты для покупки или заправки"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-benefits-title">
            Ваши выгоды
          </h2>
          <p className="text-lg text-muted-foreground" data-testid="text-benefits-subtitle">
            Программа создана для вашего комфорта и выгоды
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit) => (
            <BenefitCard key={benefit.title} {...benefit} />
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary via-primary to-primary/90 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4" data-testid="text-cta-title">
            Превратите повседневные действия в достижения
          </h3>
          <p className="text-lg text-white/90 max-w-3xl mx-auto" data-testid="text-cta-description">
            Новая программа лояльности — это переход от пассивного начисления бонусов к активной вовлекающей системе, которая основа на партнерстве и общей взаимовыгоде
          </p>
        </div>
      </div>
    </section>
  );
}
