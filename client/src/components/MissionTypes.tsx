import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, User, Repeat, ShoppingCart, Calendar, Sparkles, CheckCircle } from "lucide-react";

interface MissionCardProps {
  title: string;
  description: string;
  points: string;
  icon: React.ReactNode;
  type?: "star" | "lightning";
}

function MissionCard({ title, description, points, icon, type }: MissionCardProps) {
  return (
    <Card className="p-6 hover-elevate transition-all" data-testid={`card-mission-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-primary-foreground">
          {icon}
        </div>
        
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="font-bold" data-testid={`text-mission-title-${title.toLowerCase().replace(/\s+/g, '-')}`}>
              {title}
            </h3>
            {type && (
              <Badge 
                variant={type === "star" ? "outline" : "default"} 
                className={type === "star" ? "border-accent text-accent" : "bg-primary text-primary-foreground"}
              >
                {type === "star" ? <Star className="w-3 h-3" /> : <Sparkles className="w-3 h-3" />}
              </Badge>
            )}
          </div>
          <p className="text-sm text-muted-foreground mb-3" data-testid={`text-mission-description-${title.toLowerCase().replace(/\s+/g, '-')}`}>
            {description}
          </p>
          <Badge className="bg-primary hover:bg-primary text-primary-foreground">
            {points}
          </Badge>
        </div>
      </div>
    </Card>
  );
}

export default function MissionTypes() {
  const generalMissions = [
    {
      title: "Добро пожаловать",
      description: "Зарегистрируйтесь в программе",
      points: "50 очков",
      icon: <User className="w-6 h-6" />
    },
    {
      title: "Включить уведомления",
      description: "Разрешите push-уведомления в приложении",
      points: "10 очков",
      icon: <Sparkles className="w-6 h-6" />
    },
    {
      title: "Пройти опрос",
      description: "Пройдите короткий опрос о ваших предпочтениях",
      points: "20 очков",
      icon: <Star className="w-6 h-6" />,
    },
    {
      title: "Регулярные заправки",
      description: "Заправьтесь до 70 раз на сумму от 1000 рублей за год",
      points: "Сумма очков зависит от степени выполнения задания",
      icon: <Repeat className="w-6 h-6" />,
    },
    {
      title: "Последовательные покупки",
      description: "Совершайте покупки несколько месяцев подряд",
      points: "Сумма очков зависит от степени выполнения задания",
      icon: <ShoppingCart className="w-6 h-6" />,
    },
    {
      title: "Годовой расход",
      description: "Достигните суммы годовых трат",
      points: "Сумма очков зависит от степени выполнения задания",
      icon: <Calendar className="w-6 h-6" />,
    },
    {
      title: "Разные товары в чеке",
      description: "Покупайте товары разных категорий",
      points: "Сумма очков зависит от степени выполнения задания",
      icon: <ShoppingCart className="w-6 h-6" />,
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-missions-title">
            Типы заданий
          </h2>
          <p className="text-lg text-muted-foreground" data-testid="text-missions-subtitle">
            Выполняйте общие задания и получайте персональные после прохождения опроса
          </p>
        </div>

        <Tabs defaultValue="general" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8" data-testid="tabs-mission-types">
            <TabsTrigger value="general" data-testid="tab-general">
              Общие задания
            </TabsTrigger>
            <TabsTrigger value="personal" data-testid="tab-personal">
              Персональные задания
            </TabsTrigger>
          </TabsList>

          <TabsContent value="general" className="space-y-4">
            {generalMissions.map((mission) => (
              <MissionCard key={mission.title} {...mission} />
            ))}
          </TabsContent>

          <TabsContent value="personal">
            <Card className="p-8 bg-muted/50">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-3">
                    Каждый месяц - новые задания, подобранные специально для вас.
                  </h3>
                  <p className="text-muted-foreground">
                    Выполняйте их и получайте дополнительные баллы к основной программе.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <p className="text-foreground">Задания, которые вам подходят</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <p className="text-foreground">Дополнительные способы сэкономить</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <p className="text-foreground">Новые миссии каждый месяц</p>
                  </div>
                </div>

                <Card className="p-4 bg-background border-accent/20">
                  <p className="text-sm text-muted-foreground mb-2">
                    Персональные задания открываются после прохождения опроса
                  </p>
                  <p className="font-bold text-lg text-accent">
                    До 600 очков в год через персональные задания
                  </p>
                </Card>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
