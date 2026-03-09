import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Target, Eye, Users, Award } from 'lucide-react';

const AboutPage = () => {
  const { t, lang } = useLanguage();

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">{t('about.title')}</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t('about.subtitle')}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="card-gradient rounded-2xl border border-border p-8">
            <div className="w-14 h-14 rounded-2xl hero-gradient flex items-center justify-center mb-6">
              <Target size={28} className="text-primary-foreground" />
            </div>
            <h3 className="font-bold text-foreground text-xl mb-3">{t('about.mission')}</h3>
            <p className="text-muted-foreground leading-relaxed">{t('about.missionText')}</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="card-gradient rounded-2xl border border-border p-8">
            <div className="w-14 h-14 rounded-2xl hero-gradient flex items-center justify-center mb-6">
              <Eye size={28} className="text-primary-foreground" />
            </div>
            <h3 className="font-bold text-foreground text-xl mb-3">{t('about.vision')}</h3>
            <p className="text-muted-foreground leading-relaxed">{t('about.visionText')}</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { icon: Users, ar: 'فريق من 20+ مطور', en: '20+ Developers', descAr: 'فريق متخصص من أفضل المطورين والمصممين', descEn: 'A specialized team of top developers and designers' },
            { icon: Award, ar: '100+ مشروع ناجح', en: '100+ Successful Projects', descAr: 'خبرة واسعة في مختلف القطاعات', descEn: 'Extensive experience across various industries' },
            { icon: Target, ar: '5+ سنوات خبرة', en: '5+ Years Experience', descAr: 'خبرة طويلة في تطوير البرمجيات', descEn: 'Long experience in software development' },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-14 h-14 rounded-2xl hero-gradient flex items-center justify-center mb-4 mx-auto">
                  <Icon size={28} className="text-primary-foreground" />
                </div>
                <h3 className="font-bold text-foreground text-lg mb-2">{lang === 'ar' ? item.ar : item.en}</h3>
                <p className="text-muted-foreground text-sm">{lang === 'ar' ? item.descAr : item.descEn}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
