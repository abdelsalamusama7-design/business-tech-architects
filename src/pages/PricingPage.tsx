import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const plans = [
  {
    key: 'pricing.starter',
    priceAr: '5,000 جنيه',
    priceEn: '$500',
    featuresAr: ['موقع إلكتروني بسيط', 'تصميم متجاوب', 'لوحة تحكم أساسية', 'دعم فني لمدة شهر', 'SEO أساسي'],
    featuresEn: ['Simple website', 'Responsive design', 'Basic admin panel', '1 month support', 'Basic SEO'],
    popular: false,
  },
  {
    key: 'pricing.professional',
    priceAr: '15,000 جنيه',
    priceEn: '$1,500',
    featuresAr: ['موقع أو تطبيق متقدم', 'تصميم مخصص', 'لوحة تحكم متقدمة', 'دعم فني 3 أشهر', 'SEO متقدم', 'تكامل مع APIs', 'تدريب على النظام'],
    featuresEn: ['Advanced website or app', 'Custom design', 'Advanced admin panel', '3 months support', 'Advanced SEO', 'API integration', 'System training'],
    popular: true,
  },
  {
    key: 'pricing.enterprise',
    priceAr: 'حسب الطلب',
    priceEn: 'Custom',
    featuresAr: ['نظام متكامل مخصص', 'تصميم حصري', 'بنية تحتية سحابية', 'دعم فني مستمر', 'تطوير مستمر', 'فريق مخصص', 'SLA مضمون'],
    featuresEn: ['Custom integrated system', 'Exclusive design', 'Cloud infrastructure', 'Continuous support', 'Ongoing development', 'Dedicated team', 'Guaranteed SLA'],
    popular: false,
  },
];

const PricingPage = () => {
  const { t, lang } = useLanguage();

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">{t('pricing.title')}</h1>
          <p className="text-lg text-muted-foreground">{t('pricing.subtitle')}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => {
            const features = lang === 'ar' ? plan.featuresAr : plan.featuresEn;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`rounded-2xl p-8 border transition-all duration-300 ${
                  plan.popular
                    ? 'hero-gradient text-primary-foreground border-transparent glow-primary scale-105'
                    : 'card-gradient border-border hover:glow-primary'
                }`}
              >
                {plan.popular && (
                  <div className="text-xs font-bold uppercase tracking-wider mb-4 text-primary-foreground/80">
                    {lang === 'ar' ? '⭐ الأكثر طلباً' : '⭐ Most Popular'}
                  </div>
                )}
                <h3 className={`font-bold text-2xl mb-2 ${plan.popular ? 'text-primary-foreground' : 'text-foreground'}`}>
                  {t(plan.key)}
                </h3>
                <div className={`text-3xl font-bold mb-6 ${plan.popular ? 'text-primary-foreground' : 'gradient-text'}`}>
                  {lang === 'ar' ? plan.priceAr : plan.priceEn}
                </div>
                <div className="space-y-3 mb-8">
                  {features.map((f, j) => (
                    <div key={j} className="flex items-center gap-2">
                      <CheckCircle2 size={16} className={plan.popular ? 'text-primary-foreground/80' : 'text-primary'} />
                      <span className={`text-sm ${plan.popular ? 'text-primary-foreground/90' : 'text-muted-foreground'}`}>{f}</span>
                    </div>
                  ))}
                </div>
                <Link
                  to="/consultation"
                  className={`block text-center py-3 rounded-xl font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-background text-foreground hover:bg-background/90'
                      : 'hero-gradient text-primary-foreground hover:opacity-90'
                  }`}
                >
                  {plan.popular ? t('pricing.getStarted') : t('pricing.contactUs')}
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
