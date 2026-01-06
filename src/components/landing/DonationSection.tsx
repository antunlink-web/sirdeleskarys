import { useState } from 'react';
import { Heart, Shield, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';

export function DonationSection() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [selectedAmount, setSelectedAmount] = useState<number | null>(15);
  const [customAmount, setCustomAmount] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const amounts = [
    { value: 15, label: t('donate.amount1'), desc: t('donate.amount1Desc') },
    { value: 50, label: t('donate.amount2'), desc: t('donate.amount2Desc') },
    { value: 100, label: t('donate.amount3'), desc: t('donate.amount3Desc') },
  ];

  const handleDonate = async () => {
    const amount = selectedAmount || parseInt(customAmount);
    if (!amount || amount < 1) {
      toast({
        title: "Invalid amount",
        description: "Please select or enter a valid donation amount.",
        variant: "destructive",
      });
      return;
    }

    setIsProcessing(true);
    
    // TODO: Integrate with Stripe when Cloud is enabled
    toast({
      title: "Thank you!",
      description: "Stripe integration will be enabled soon. Thank you for your interest in supporting Heart Warrior!",
    });
    
    setIsProcessing(false);
  };

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

          {/* Donation Card */}
          <div className="bg-card rounded-2xl p-8 shadow-soft border border-border/50">
            {/* Amount Options */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              {amounts.map((amount) => (
                <button
                  key={amount.value}
                  onClick={() => {
                    setSelectedAmount(amount.value);
                    setCustomAmount('');
                  }}
                  className={`p-6 rounded-xl border-2 transition-all ${
                    selectedAmount === amount.value
                      ? 'border-primary bg-secondary'
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  <div className="font-display text-2xl font-bold text-foreground mb-1">
                    {amount.label}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {amount.desc}
                  </p>
                </button>
              ))}
            </div>

            {/* Custom Amount */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-foreground mb-2">
                {t('donate.custom')}
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-medium">
                  €
                </span>
                <Input
                  type="number"
                  min="1"
                  placeholder="0"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    setSelectedAmount(null);
                  }}
                  className="pl-8 text-lg h-12"
                />
              </div>
            </div>

            {/* Donate Button */}
            <Button 
              onClick={handleDonate}
              disabled={isProcessing}
              size="lg"
              className="w-full text-lg py-6 shadow-button hover:shadow-lg transition-all"
            >
              {isProcessing ? (
                <span className="animate-pulse">Processing...</span>
              ) : (
                <>
                  <CreditCard className="h-5 w-5 mr-2" />
                  {t('donate.button')} €{selectedAmount || customAmount || '0'}
                </>
              )}
            </Button>

            {/* Security Badge */}
            <div className="flex items-center justify-center gap-2 mt-6 text-sm text-muted-foreground">
              <Shield className="h-4 w-4" />
              {t('donate.secure')}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
