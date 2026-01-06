import { Building2, Calendar, Users, BarChart3, Quote } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function PartnershipSection() {
  const { t } = useLanguage();

  const points = [
    { icon: Calendar, text: t('partnership.point1') },
    { icon: Users, text: t('partnership.point2') },
    { icon: BarChart3, text: t('partnership.point3') },
  ];

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary mb-6">
              <Building2 className="h-8 w-8 text-primary" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t('partnership.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('partnership.description')}
            </p>
          </div>

          {/* Partnership Points */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            {points.map((point, index) => (
              <div 
                key={index}
                className="flex flex-col items-center text-center p-6 bg-card rounded-xl shadow-card border border-border/50"
              >
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-4">
                  <point.icon className="h-6 w-6 text-primary" />
                </div>
                <p className="text-foreground font-medium">
                  {point.text}
                </p>
              </div>
            ))}
          </div>

          {/* Quote */}
          <div className="bg-secondary rounded-2xl p-8 relative">
            <Quote className="absolute top-4 left-4 h-8 w-8 text-primary/30" />
            <p className="text-center text-lg text-foreground font-medium italic pl-8 pr-8">
              {t('partnership.model')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
