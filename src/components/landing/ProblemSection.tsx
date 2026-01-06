import { Clock, Home, Briefcase, Stethoscope, AlertCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function ProblemSection() {
  const { t } = useLanguage();

  const problems = [
    { icon: Clock, text: t('problem.hospitalization') },
    { icon: Home, text: t('problem.accommodation') },
    { icon: Briefcase, text: t('problem.wages') },
    { icon: Stethoscope, text: t('problem.equipment') },
  ];

  return (
    <section className="py-20 md:py-28 gradient-warm">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              {t('problem.title')}
            </h2>
          </div>

          {/* Problem Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {problems.map((problem, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 bg-card rounded-xl p-6 shadow-card border border-border/50"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                  <problem.icon className="h-5 w-5 text-primary" />
                </div>
                <p className="text-foreground font-medium">
                  {problem.text}
                </p>
              </div>
            ))}
          </div>

          {/* Total Burden Highlight */}
          <div className="mt-8 bg-primary/10 rounded-2xl p-8 text-center border border-primary/20">
            <AlertCircle className="h-8 w-8 text-primary mx-auto mb-4" />
            <p className="text-xl md:text-2xl font-bold text-foreground">
              {t('problem.total')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
