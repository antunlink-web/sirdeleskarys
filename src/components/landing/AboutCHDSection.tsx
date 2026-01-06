import { Heart, Hospital, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function AboutCHDSection() {
  const { t } = useLanguage();

  const stats = [
    {
      icon: Heart,
      value: t('chd.stat1'),
      label: t('chd.stat1Label'),
    },
    {
      icon: Hospital,
      value: t('chd.stat2'),
      label: t('chd.stat2Label'),
    },
    {
      icon: MapPin,
      value: t('chd.stat3'),
      label: t('chd.stat3Label'),
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              {t('chd.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('chd.description')}
            </p>
            <p className="text-lg text-primary font-medium mt-4">
              {t('chd.positive')}
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="relative group"
              >
                <div className="bg-card rounded-2xl p-8 text-center shadow-card hover:shadow-soft transition-all duration-300 border border-border/50">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary mb-4">
                    <stat.icon className="h-7 w-7 text-primary" />
                  </div>
                  <div className="font-display text-4xl font-bold text-foreground mb-2">
                    {stat.value}
                  </div>
                  <p className="text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
