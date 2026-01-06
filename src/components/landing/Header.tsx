import { useState } from 'react';
import { Heart, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import heartWarriorLogo from '@/assets/heart-warrior-logo.png';

export function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <img 
              src={heartWarriorLogo} 
              alt={language === 'lt' ? 'Širdelės Karys' : 'Heart Warrior'} 
              className="h-14 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {t('nav.about')}
            </button>
            <button 
              onClick={() => scrollToSection('solution')}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {t('nav.howWeHelp')}
            </button>
            <button 
              onClick={() => scrollToSection('donate')}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {t('nav.donate')}
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {t('nav.contact')}
            </button>
          </nav>

          {/* Language Toggle + CTA */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language Toggle */}
            <div className="flex items-center bg-muted rounded-full p-1">
              <button
                onClick={() => setLanguage('lt')}
                className={`px-3 py-1 text-sm font-medium rounded-full transition-all ${
                  language === 'lt' 
                    ? 'bg-background text-foreground shadow-sm' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                LT
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 text-sm font-medium rounded-full transition-all ${
                  language === 'en' 
                    ? 'bg-background text-foreground shadow-sm' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                EN
              </button>
            </div>

            <Button 
              onClick={() => scrollToSection('donate')}
              className="shadow-button hover:shadow-lg transition-shadow"
            >
              <Heart className="h-4 w-4 mr-1" />
              {t('nav.donateButton')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50">
            <nav className="flex flex-col gap-4">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left py-2 text-foreground font-medium"
              >
                {t('nav.about')}
              </button>
              <button 
                onClick={() => scrollToSection('solution')}
                className="text-left py-2 text-foreground font-medium"
              >
                {t('nav.howWeHelp')}
              </button>
              <button 
                onClick={() => scrollToSection('donate')}
                className="text-left py-2 text-foreground font-medium"
              >
                {t('nav.donate')}
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left py-2 text-foreground font-medium"
              >
                {t('nav.contact')}
              </button>
              
              {/* Mobile Language Toggle */}
              <div className="flex items-center gap-2 py-2">
                <span className="text-sm text-muted-foreground">Language:</span>
                <div className="flex items-center bg-muted rounded-full p-1">
                  <button
                    onClick={() => setLanguage('lt')}
                    className={`px-3 py-1 text-sm font-medium rounded-full transition-all ${
                      language === 'lt' 
                        ? 'bg-background text-foreground shadow-sm' 
                        : 'text-muted-foreground'
                    }`}
                  >
                    LT
                  </button>
                  <button
                    onClick={() => setLanguage('en')}
                    className={`px-3 py-1 text-sm font-medium rounded-full transition-all ${
                      language === 'en' 
                        ? 'bg-background text-foreground shadow-sm' 
                        : 'text-muted-foreground'
                    }`}
                  >
                    EN
                  </button>
                </div>
              </div>

              <Button 
                onClick={() => scrollToSection('donate')}
                className="w-full mt-2 shadow-button"
              >
                <Heart className="h-4 w-4 mr-1" />
                {t('nav.donateButton')}
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
