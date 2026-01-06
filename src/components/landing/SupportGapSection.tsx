import { Check, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function SupportGapSection() {
  const { t } = useLanguage();

  const exists = [
    t('gap.exists1'),
    t('gap.exists2'),
  ];

  const missing = [
    t('gap.missing1'),
    t('gap.missing2'),
    t('gap.missing3'),
    t('gap.missing4'),
  ];

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              {t('gap.title')}
            </h2>
          </div>

          {/* Two Column Comparison */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* What Exists */}
            <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50">
              <h3 className="font-display text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                  <Check className="h-5 w-5 text-green-600" />
                </span>
                {t('gap.exists')}
              </h3>
              <ul className="space-y-4">
                {exists.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What's Missing */}
            <div className="bg-secondary rounded-2xl p-8 border border-primary/20">
              <h3 className="font-display text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <X className="h-5 w-5 text-primary" />
                </span>
                {t('gap.missing')}
              </h3>
              <ul className="space-y-4">
                {missing.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <X className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
