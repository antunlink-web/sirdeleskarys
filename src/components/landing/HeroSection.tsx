import { Heart, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

export function HeroSection() {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-hero overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-heart-rose/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/4 opacity-10">
          <Heart className="w-24 h-24 text-primary" />
        </div>
        <div className="absolute top-1/3 right-1/4 opacity-5">
          <Heart className="w-32 h-32 text-primary" />
        </div>
      </div>

      <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Animated Heart Icon */}
          <div className="mb-8 inline-flex items-center justify-center">
            <div className="relative">
              <Heart className="h-20 w-20 text-primary fill-primary animate-heartbeat" />
              <div className="absolute inset-0 h-20 w-20 bg-primary/20 rounded-full animate-ping" />
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            {t('hero.title')}
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {t('hero.subtitle')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button 
              size="lg" 
              onClick={() => scrollToSection('donate')}
              className="text-lg px-8 py-6 shadow-button hover:shadow-lg transition-all hover:scale-105"
            >
              <Heart className="h-5 w-5 mr-2" />
              {t('hero.donateButton')}
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection('about')}
              className="text-lg px-8 py-6 border-2 hover:bg-secondary transition-all"
            >
              {t('hero.learnMore')}
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => scrollToSection('about')}
            className="p-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Scroll down"
          >
            <ArrowDown className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
