import { Card } from "@/components/ui/card";
import { UserPlus, Target, ArrowRightLeft, TrendingUp } from "lucide-react";

interface StepCardProps {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

function StepCard({ number, icon, title, description }: StepCardProps) {
  return (
    <Card className="p-6 hover-elevate transition-all" data-testid={`card-step-${number}`}>
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="relative">
          <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
            <span className="text-2xl font-bold text-accent-foreground">{number}</span>
          </div>
          <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            {icon}
          </div>
        </div>
        
        <h3 className="text-xl font-bold" data-testid={`text-step-title-${number}`}>
          {title}
        </h3>
        
        <p className="text-muted-foreground" data-testid={`text-step-description-${number}`}>
          {description}
        </p>
      </div>
    </Card>
  );
}

export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      icon: <UserPlus className="w-4 h-4 text-primary-foreground" />,
      title: "СТАНЬ УЧАСТНИКОМ",
      description: "Зарегистрируйтесь в программе"
    },
    {
      number: "2",
      icon: <Target className="w-4 h-4 text-primary-foreground" />,
      title: "ВЫПОЛНЯЙТЕ ЗАДАНИЯ",
      description: "Получайте персональные миссии и зарабатывайте очки"
    },
    {
      number: "3",
      icon: <ArrowRightLeft className="w-4 h-4 text-primary-foreground" />,
      title: "ОБМЕНИВАЙТЕ ОЧКИ НА БАЛЛЫ",
      description: "1 балл = 1 рубль"
    },
    {
      number: "4",
      icon: <TrendingUp className="w-4 h-4 text-primary-foreground" />,
      title: "ОТКРЫВАЙ НОВЫЕ ВОЗМОЖНОСТИ",
      description: "Обменивайте баллы на заправку или товары в магазине"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-how-title">
            Как это работает
          </h2>
          <p className="text-lg text-muted-foreground" data-testid="text-how-subtitle">
            С программой лояльности «Нам по Пути»
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <StepCard key={step.number} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
}
