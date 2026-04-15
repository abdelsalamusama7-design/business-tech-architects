import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Code, Smartphone, Brain, ShoppingCart, Building2, Stethoscope, UtensilsCrossed, Pill, Cog, Store, Share2, TrendingUp } from 'lucide-react';

const services = [
  {
    icon: Code,
    key: 'services.custom_software',
    descAr: 'نطور برمجيات مخصصة تلبي احتياجات عملك بدقة، من التصميم إلى التنفيذ.',
    descEn: 'We develop custom software that precisely meets your business needs, from design to deployment.',
  },
  {
    icon: Code,
    key: 'services.website',
    descAr: 'مواقع إلكترونية احترافية ومتجاوبة مع جميع الأجهزة، محسّنة لمحركات البحث.',
    descEn: 'Professional, responsive websites optimized for search engines and all devices.',
  },
  {
    icon: Smartphone,
    key: 'services.mobile',
    descAr: 'تطبيقات موبايل لنظامي iOS و Android بتصميم عصري وأداء عالٍ.',
    descEn: 'Mobile apps for iOS and Android with modern design and high performance.',
  },
  {
    icon: Stethoscope,
    key: 'services.healthcare',
    descAr: 'أنظمة متكاملة لإدارة العيادات والمستشفيات تشمل المواعيد والسجلات الطبية.',
    descEn: 'Comprehensive systems for managing clinics and hospitals including appointments and medical records.',
  },
  {
    icon: UtensilsCrossed,
    key: 'services.pos',
    descAr: 'أنظمة نقاط بيع متكاملة للمطاعم تشمل القوائم الرقمية وإدارة الطلبات.',
    descEn: 'Complete POS systems for restaurants including digital menus and order management.',
  },
  {
    icon: Pill,
    key: 'services.pharmacy',
    descAr: 'منصات صيدلة شاملة لإدارة المخزون والطلبات والوصفات الطبية.',
    descEn: 'Comprehensive pharmacy platforms for managing inventory, orders, and prescriptions.',
  },
  {
    icon: Brain,
    key: 'services.ai',
    descAr: 'حلول ذكاء اصطناعي لأتمتة العمليات وتحسين الكفاءة التشغيلية.',
    descEn: 'AI solutions to automate operations and improve operational efficiency.',
  },
  {
    icon: ShoppingCart,
    key: 'services.ecommerce',
    descAr: 'متاجر إلكترونية متكاملة مع بوابات دفع وأنظمة شحن.',
    descEn: 'Complete e-commerce stores with payment gateways and shipping systems.',
  },
  {
    icon: Building2,
    key: 'services.business',
    descAr: 'أنظمة ERP وCRM لإدارة الموارد والعملاء بكفاءة عالية.',
    descEn: 'ERP and CRM systems for efficient resource and customer management.',
  },
  {
    icon: Store,
    key: 'services.online_store',
    descAr: 'متاجر أونلاين احترافية على شوبيفاي وغيرها مع إدارة المنتجات والطلبات والشحن وبوابات الدفع.',
    descEn: 'Professional online stores on Shopify and other platforms with product, order, shipping management and payment gateways.',
  },
  {
    icon: Share2,
    key: 'services.social_pages',
    descAr: 'منصات بيع وشراء صفحات السوشيال ميديا وخدمات زيادة المتابعين والتفاعل على جميع المنصات.',
    descEn: 'Platforms for buying and selling social media pages and follower/engagement boosting services across all platforms.',
  },
  {
    icon: TrendingUp,
    key: 'services.social_management',
    descAr: 'إدارة حسابات السوشيال ميديا وجدولة المنشورات وتحليل الأداء وإنشاء المحتوى بالذكاء الاصطناعي.',
    descEn: 'Social media account management, post scheduling, performance analytics, and AI-powered content creation.',
  },
];

const ServicesPage = () => {
  const { t, lang } = useLanguage();

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">{t('services.title')}</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t('services.subtitle')}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="card-gradient rounded-2xl p-8 border border-border hover:glow-primary transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl hero-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon size={28} className="text-primary-foreground" />
                </div>
                <h3 className="font-bold text-foreground text-xl mb-3">{t(service.key)}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {lang === 'ar' ? service.descAr : service.descEn}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
