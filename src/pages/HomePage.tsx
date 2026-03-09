import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, MessageCircle, Code, Smartphone, Brain, ShoppingCart, Building2, Stethoscope, UtensilsCrossed, Pill, CheckCircle2, ExternalLink } from 'lucide-react';
import { allProjects, categories } from '@/data/portfolioData';

const services = [
  { icon: Code, key: 'services.custom_software' },
  { icon: Code, key: 'services.website' },
  { icon: Smartphone, key: 'services.mobile' },
  { icon: Stethoscope, key: 'services.healthcare' },
  { icon: UtensilsCrossed, key: 'services.pos' },
  { icon: Pill, key: 'services.pharmacy' },
  { icon: Brain, key: 'services.ai' },
  { icon: ShoppingCart, key: 'services.ecommerce' },
  { icon: Building2, key: 'services.business' },
];

const stats = [
  { value: '100+', labelAr: 'مشروع مكتمل', labelEn: 'Completed Projects' },
  { value: '50+', labelAr: 'عميل سعيد', labelEn: 'Happy Clients' },
  { value: '9+', labelAr: 'قطاعات نخدمها', labelEn: 'Industries Served' },
  { value: '24/7', labelAr: 'دعم فني', labelEn: 'Technical Support' },
];

const HomePage = () => {
  const { t, lang } = useLanguage();
  const Arrow = lang === 'ar' ? ArrowLeft : ArrowRight;

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-5" />
        <div className="absolute top-20 end-10 w-72 h-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-10 start-10 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />

        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text leading-tight">
              {t('hero.headline')}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              {t('hero.subheadline')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/consultation"
                className="px-8 py-4 rounded-xl hero-gradient text-primary-foreground font-semibold text-lg hover:opacity-90 transition-opacity glow-primary inline-flex items-center justify-center gap-2"
              >
                {t('hero.cta1')} <Arrow size={20} />
              </Link>
              <a
                href="https://wa.me/201227080430"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl border-2 border-primary text-primary font-semibold text-lg hover:bg-primary/5 transition-colors inline-flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} /> {t('hero.cta2')}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-y border-border bg-card/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{lang === 'ar' ? stat.labelAr : stat.labelEn}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t('services.title')}</h2>
            <p className="text-muted-foreground text-lg">{t('services.subtitle')}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="card-gradient rounded-2xl p-6 border border-border hover:glow-primary transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-xl hero-gradient flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon size={24} className="text-primary-foreground" />
                  </div>
                  <h3 className="font-bold text-foreground text-lg">{t(service.key)}</h3>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <Link to="/services" className="text-primary font-semibold hover:underline inline-flex items-center gap-1">
              {t('common.viewAll')} <Arrow size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="hero-gradient rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">{t('consultation.title')}</h2>
              <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">{t('consultation.subtitle')}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/consultation"
                  className="px-8 py-4 rounded-xl bg-background text-foreground font-semibold hover:bg-background/90 transition-colors inline-flex items-center justify-center gap-2"
                >
                  {t('hero.cta1')} <Arrow size={20} />
                </Link>
                <a
                  href="https://wa.me/201227080430"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-xl border-2 border-primary-foreground/30 text-primary-foreground font-semibold hover:bg-primary-foreground/10 transition-colors inline-flex items-center justify-center gap-2"
                >
                  <MessageCircle size={20} /> {t('hero.cta2')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 bg-card/50 border-t border-border">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            {lang === 'ar' ? 'لماذا انستاتك لابز؟' : 'Why Instatech Labs?'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { ar: 'فريق متخصص', en: 'Expert Team' },
              { ar: 'تسليم في الوقت المحدد', en: 'On-Time Delivery' },
              { ar: 'دعم فني مستمر', en: 'Continuous Support' },
              { ar: 'أسعار تنافسية', en: 'Competitive Pricing' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3 p-4 rounded-xl bg-background border border-border"
              >
                <CheckCircle2 className="text-primary shrink-0" size={24} />
                <span className="font-medium text-foreground">{lang === 'ar' ? item.ar : item.en}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
