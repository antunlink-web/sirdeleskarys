import { useEffect } from 'react';
import { Heart, Building2, CreditCard } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'stripe-buy-button': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        'buy-button-id': string;
        'publishable-key': string;
      }, HTMLElement>;
    }
  }
}

export function DonationSection() {
  const { t, language } = useLanguage();

  useEffect(() => {
    // Load Stripe Buy Button script
    const script = document.createElement('script');
    script.src = 'https://js.stripe.com/v3/buy-button.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="donate" className="py-20 md:py-28 gradient-warm">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <Heart className="h-8 w-8 text-primary fill-primary animate-pulse-soft" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t('donate.title')}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('donate.subtitle')}
            </p>
          </div>

          {/* Donation Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Stripe Buy Button Card */}
            <div className="bg-card rounded-2xl p-8 shadow-soft border border-border/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <CreditCard className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  {language === 'lt' ? 'Mokėti kortele' : 'Pay by Card'}
                </h3>
              </div>
              
              <div className="flex justify-center">
                {/* @ts-ignore - Stripe custom element */}
                <stripe-buy-button
                  buy-button-id="buy_btn_1R2x44KYtez9H1NSWA7x4IQg"
                  publishable-key="pk_live_51OAWgYKYtez9H1NS5DHFAcm0B3RDkKuWTb1GPp64trO15mTz8HxggOUSKhCBonrx2hRBGjaLe2OkkffKyUqNkojs00ZHzFui07"
                >
                </stripe-buy-button>
              </div>
            </div>

            {/* Bank Transfer Card */}
            <div className="bg-card rounded-2xl p-8 shadow-soft border border-border/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Building2 className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  {language === 'lt' ? 'Banko pavedimas' : 'Bank Transfer'}
                </h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">
                    {language === 'lt' ? 'Gavėjas' : 'Recipient'}
                  </p>
                  <p className="text-foreground font-medium">Gera valia, labdaros ir paramos fondas</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">
                    {language === 'lt' ? 'Įmonės kodas' : 'Company Code'}
                  </p>
                  <p className="text-foreground font-medium">306343770</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">IBAN</p>
                  <p className="text-foreground font-medium text-sm md:text-base break-all">
                    LT547300010182129291
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">
                    {language === 'lt' ? 'Mokėjimo paskirtis' : 'Payment Purpose'}
                  </p>
                  <p className="text-foreground font-medium">Pagalba</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
