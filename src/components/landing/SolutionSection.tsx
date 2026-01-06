import { Home, Hospital, Heart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function SolutionSection() {
  const { t } = useLanguage();

  const pillars = [
    {
      icon: Home,
      title: t('solution.pillar1'),
      description: t('solution.pillar1Desc'),
    },
    {
      icon: Hospital,
      title: t('solution.pillar2'),
      description: t('solution.pillar2Desc'),
    },
    {
      icon: Heart,
      title: t('solution.pillar3'),
      description: t('solution.pillar3Desc'),
    },
  ];

  return (
    <section id="solution" className="py-20 md:py-28 gradient-warm">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              {t('solution.title')}
            </h2>
          </div>

          {/* Three Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((pillar, index) => (
              <div 
                key={index}
                className="bg-card rounded-2xl p-8 text-center shadow-card hover:shadow-soft transition-all duration-300 border border-border/50 group hover:-translate-y-1"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary mb-6 group-hover:bg-primary/20 transition-colors">
                  <pillar.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
