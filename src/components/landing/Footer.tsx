import { Heart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function Footer() {
  const { language, t } = useLanguage();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <Heart className="h-6 w-6 fill-primary text-primary" />
              <span className="font-display text-lg font-bold">
                {language === 'lt' ? 'Širdelės Karys' : 'Heart Warrior'}
              </span>
            </div>

            {/* Tagline */}
            <p className="text-background/70 text-center">
              {t('footer.tagline')}
            </p>
          </div>

          <div className="border-t border-background/20 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-background/60">
              © 2026 {language === 'lt' ? 'Širdelės Karys' : 'Heart Warrior'}. {t('footer.rights')}
            </p>
            <a 
              href="#" 
              className="text-sm text-background/60 hover:text-background transition-colors"
            >
              {t('footer.privacy')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
