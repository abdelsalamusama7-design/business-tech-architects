import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const articles = [
  { titleAr: 'أفضل أنظمة إدارة العيادات', titleEn: 'Best Clinic Management Systems', descAr: 'اكتشف كيف يمكن لنظام إدارة العيادات أن يحسن كفاءة عملك الطبي ويزيد رضا المرضى.', descEn: 'Discover how a clinic management system can improve your medical practice efficiency and increase patient satisfaction.' },
  { titleAr: 'كيف تؤتمت المطاعم طلباتها', titleEn: 'How Restaurants Can Automate Orders', descAr: 'تعرف على أحدث تقنيات أتمتة الطلبات التي تساعد المطاعم على تقديم خدمة أفضل.', descEn: 'Learn about the latest order automation technologies helping restaurants deliver better service.' },
  { titleAr: 'لماذا يحتاج كل عمل تطبيق موبايل', titleEn: 'Why Every Business Needs a Mobile App', descAr: 'في عصر الهواتف الذكية، تعرف على أهمية امتلاك تطبيق موبايل لعملك.', descEn: 'In the smartphone era, understand the importance of having a mobile app for your business.' },
  { titleAr: 'كيف يحسن الذكاء الاصطناعي أعمالك', titleEn: 'How AI Can Improve Business Automation', descAr: 'استكشف كيف يمكن للذكاء الاصطناعي أن يحول عمليات شركتك ويزيد إنتاجيتها.', descEn: 'Explore how AI can transform your company operations and boost productivity.' },
  { titleAr: 'أفضل الأدوات الرقمية للشركات الصغيرة', titleEn: 'Top Digital Tools for Small Businesses', descAr: 'قائمة بأفضل الأدوات والأنظمة الرقمية التي تحتاجها الشركات الصغيرة للنمو.', descEn: 'A list of the best digital tools and systems small businesses need to grow.' },
  { titleAr: 'مستقبل التجارة الإلكترونية', titleEn: 'The Future of E-commerce', descAr: 'تعرف على الاتجاهات الجديدة في التجارة الإلكترونية وكيف تستعد لها.', descEn: 'Learn about new e-commerce trends and how to prepare for them.' },
];

const BlogPage = () => {
  const { t, lang } = useLanguage();
  const Arrow = lang === 'ar' ? ArrowLeft : ArrowRight;

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">{t('blog.title')}</h1>
          <p className="text-lg text-muted-foreground">{t('blog.subtitle')}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="card-gradient rounded-2xl border border-border overflow-hidden hover:glow-primary transition-all duration-300 group"
            >
              <div className="h-48 hero-gradient opacity-70 flex items-center justify-center p-6">
                <h3 className="text-primary-foreground font-bold text-lg text-center">{lang === 'ar' ? article.titleAr : article.titleEn}</h3>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{lang === 'ar' ? article.descAr : article.descEn}</p>
                <Link to="/consultation" className="text-primary text-sm font-semibold inline-flex items-center gap-1 hover:underline">
                  {t('blog.readMore')} <Arrow size={14} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 hero-gradient rounded-3xl p-10 text-center">
          <h2 className="text-2xl font-bold text-primary-foreground mb-4">
            {lang === 'ar' ? 'هل تحتاج حلاً تقنياً لعملك؟' : 'Need a tech solution for your business?'}
          </h2>
          <Link to="/consultation" className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-background text-foreground font-semibold hover:bg-background/90 transition-colors">
            {t('nav.consultation')} <Arrow size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
