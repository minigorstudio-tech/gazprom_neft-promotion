import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Smartphone, FileQuestion, Gift } from "lucide-react";

interface CTAStepProps {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

function CTAStep({ number, icon, title, description }: CTAStepProps) {
  return (
    <div className="flex flex-col items-center text-center text-white" data-testid={`cta-step-${number}`}>
      <div className="relative mb-4">
        <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mb-2">
          <span className="text-3xl font-bold text-accent-foreground">{number}</span>
        </div>
             </div>
      
      <h3 className="text-xl font-bold mb-2 mt-4" data-testid={`text-cta-step-title-${number}`}>
        {title}
      </h3>
      
      <p className="text-white/90" data-testid={`text-cta-step-description-${number}`}>
        {description}
      </p>
    </div>
  );
}

export default function FinalCTA() {
  const steps = [
    {
      number: "01",
      title: "Скачайте приложение",
      description: "Установите приложение Газпромнефть на ваш смартфон"
    },
    {
      number: "02",
      title: "Пройдите опрос",
      description: "Ответьте на несколько вопросов о ваших предпочтениях"
    },
    {
      number: "03",
      title: "Получайте награды",
      description: "Выполняйте задания и зарабатывайте бонусы"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary via-primary to-primary/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-final-cta-title">
            Начните получать выгоду уже сегодня
          </h2>
          <p className="text-xl text-white/90" data-testid="text-final-cta-subtitle">
            Три простых шага к персональным выгодам и наградам
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
          {steps.map((step) => (
            <CTAStep key={step.number} {...step} />
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent text-accent-foreground text-lg px-10 py-6 h-auto font-semibold"
            data-testid="button-download-app"
          >
            Скачать приложение
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="bg-white/10 hover:bg-white/20 border-white/30 text-white backdrop-blur-sm text-lg px-10 py-6 h-auto font-semibold"
            data-testid="button-learn-more"
          >
            Узнать больше
          </Button>
        </div>

        <p className="text-center text-white/80 mt-8 text-sm" data-testid="text-participants-info">
          Присоединяйтесь к тысячам участников, которые уже получают выгоду от программы
        </p>
      </div>
    </section>
  );
}
