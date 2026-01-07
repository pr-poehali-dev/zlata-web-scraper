import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в течение 2 часов.",
    });
    
    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      message: ""
    });
  };

  const benefits = [
    {
      icon: "Target",
      title: "Стратегический подход",
      description: "Разрабатываем долгосрочные стратегии развития вашего бизнеса"
    },
    {
      icon: "TrendingUp",
      title: "Рост показателей",
      description: "Увеличение эффективности бизнес-процессов до 40%"
    },
    {
      icon: "Shield",
      title: "Гарантия результата",
      description: "Фиксируем достижение KPI в договоре"
    },
    {
      icon: "Users",
      title: "Экспертная команда",
      description: "Опыт работы с компаниями из Fortune 500"
    }
  ];

  const projects = [
    {
      title: "Цифровая трансформация банка",
      category: "Финансовый сектор",
      result: "+35% эффективности процессов",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format"
    },
    {
      title: "Оптимизация производства",
      category: "Промышленность",
      result: "−25% издержек за 6 месяцев",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format"
    },
    {
      title: "Развитие розничной сети",
      category: "Ритейл",
      result: "Открытие 50 точек продаж",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&auto=format"
    }
  ];

  const pricingPlans = [
    {
      name: "Базовый",
      price: "150 000 ₽",
      period: "за консультацию",
      features: [
        "1 встреча (2 часа)",
        "Аудит текущей ситуации",
        "Рекомендации по развитию",
        "Презентация результатов"
      ],
      highlighted: false
    },
    {
      name: "Профессиональный",
      price: "450 000 ₽",
      period: "в месяц",
      features: [
        "4 встречи в месяц",
        "Глубокий анализ бизнеса",
        "Стратегия развития",
        "Внедрение решений",
        "Поддержка 24/7"
      ],
      highlighted: true
    },
    {
      name: "Корпоративный",
      price: "от 1 500 000 ₽",
      period: "за проект",
      features: [
        "Комплексная трансформация",
        "Выделенная команда экспертов",
        "Полное сопровождение",
        "Фиксация KPI в договоре",
        "Гарантия результата"
      ],
      highlighted: false
    }
  ];

  const faqs = [
    {
      question: "Как быстро можно начать работу?",
      answer: "Первую встречу можем провести в течение 48 часов после согласования деталей. Для комплексных проектов подготовка занимает 5-7 рабочих дней."
    },
    {
      question: "Какие гарантии вы предоставляете?",
      answer: "Мы фиксируем ключевые показатели эффективности (KPI) в договоре и гарантируем их достижение. При невыполнении обязательств предусмотрена система компенсаций."
    },
    {
      question: "С какими отраслями вы работаете?",
      answer: "Наша экспертиза охватывает финансовый сектор, промышленность, ритейл, IT, телекоммуникации и госсектор. За 15 лет реализовано более 200 проектов."
    },
    {
      question: "Возможна ли дистанционная работа?",
      answer: "Да, 70% наших проектов реализуются в гибридном формате. Используем современные инструменты для эффективной удалённой работы."
    },
    {
      question: "Какова минимальная длительность проекта?",
      answer: "Минимум — разовая консультация (2 часа). Оптимальная длительность проектов трансформации — от 3 месяцев для достижения измеримых результатов."
    }
  ];

  return (
    <div className="min-h-screen">
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Briefcase" size={28} className="text-primary" />
            <span className="text-xl font-bold text-secondary">ExpertConsult</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <button onClick={() => scrollToSection('benefits')} className="text-sm font-medium hover:text-primary transition-colors">Преимущества</button>
            <button onClick={() => scrollToSection('portfolio')} className="text-sm font-medium hover:text-primary transition-colors">Портфолио</button>
            <button onClick={() => scrollToSection('pricing')} className="text-sm font-medium hover:text-primary transition-colors">Тарифы</button>
            <button onClick={() => scrollToSection('faq')} className="text-sm font-medium hover:text-primary transition-colors">FAQ</button>
            <button onClick={() => scrollToSection('contact')} className="text-sm font-medium hover:text-primary transition-colors">Контакты</button>
          </nav>
          <Button onClick={() => scrollToSection('contact')}>
            Записаться
          </Button>
        </div>
      </header>

      <section className="py-20 md:py-32 bg-gradient-to-br from-secondary via-secondary to-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <Badge className="mb-6 bg-white/20 text-white border-white/30">Профессиональный консалтинг</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Трансформируем ваш бизнес в лидера рынка
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Стратегическое консультирование для роста эффективности, прибыли и конкурентоспособности
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" onClick={() => scrollToSection('contact')} className="text-lg">
                Получить консультацию
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('portfolio')} className="text-lg bg-transparent border-white text-white hover:bg-white hover:text-secondary">
                Наши проекты
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="benefits" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Почему выбирают нас</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Комплексный подход к решению бизнес-задач любой сложности
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name={benefit.icon} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Портфолио проектов</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Успешные кейсы трансформации бизнеса в различных отраслях
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <Badge className="w-fit mb-2">{project.category}</Badge>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-primary font-semibold text-base">
                    {project.result}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ценовые планы</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Гибкие форматы сотрудничества для бизнеса любого масштаба
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative ${plan.highlighted ? 'border-primary shadow-xl scale-105' : ''}`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary text-white px-4 py-1">Популярный</Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <div className="mb-2">
                    <span className="text-4xl font-bold">{plan.price}</span>
                  </div>
                  <CardDescription>{plan.period}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full" 
                    variant={plan.highlighted ? "default" : "outline"}
                    asChild
                  >
                    <a href="#contact">Выбрать план</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Часто задаваемые вопросы</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ответы на популярные вопросы о наших услугах
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Записаться на консультацию</h2>
              <p className="text-lg text-muted-foreground">
                Оставьте заявку, и мы свяжемся с вами в течение 2 часов
              </p>
            </div>
            <Card>
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Имя *</label>
                      <Input 
                        required
                        placeholder="Иван Петров"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Компания *</label>
                      <Input 
                        required
                        placeholder="ООО «Ваша компания»"
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email *</label>
                      <Input 
                        required
                        type="email"
                        placeholder="ivan@company.ru"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Телефон *</label>
                      <Input 
                        required
                        type="tel"
                        placeholder="+7 (999) 123-45-67"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Опишите вашу задачу</label>
                    <Textarea 
                      placeholder="Расскажите о целях и задачах, которые хотите решить..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full md:w-auto">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Briefcase" size={24} />
                <span className="font-bold text-lg">ExpertConsult</span>
              </div>
              <p className="text-white/80 text-sm">
                Профессиональный консалтинг для роста вашего бизнеса
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="#" className="hover:text-white transition-colors">Стратегический консалтинг</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Цифровая трансформация</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Оптимизация процессов</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Компания</h3>
              <ul className="space-y-2 text-sm text-white/80">
                <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Команда</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Карьера</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-sm text-white/80">
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@expertconsult.ru
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (495) 123-45-67
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  Москва, Пресненская наб.
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-sm text-white/60">
            <p>© 2024 ExpertConsult. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;