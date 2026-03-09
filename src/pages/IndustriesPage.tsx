import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Stethoscope, UtensilsCrossed, ShoppingBag, Pill, GraduationCap, Building, Truck, Briefcase, ShoppingCart } from 'lucide-react';

const industries = [
  { icon: Stethoscope, ar: 'الرعاية الصحية', en: 'Healthcare', descAr: 'أنظمة إدارة العيادات والمستشفيات وحجز المواعيد', descEn: 'Clinic and hospital management systems with appointment booking' },
  { icon: UtensilsCrossed, ar: 'المطاعم', en: 'Restaurants', descAr: 'أنظمة نقاط البيع والقوائم الرقمية وإدارة الطلبات', descEn: 'POS systems, digital menus, and order management' },
  { icon: ShoppingBag, ar: 'التجزئة', en: 'Retail', descAr: 'أنظمة إدارة المخزون ونقاط البيع والتجارة الإلكترونية', descEn: 'Inventory management, POS, and e-commerce systems' },
  { icon: Pill, ar: 'الصيدليات', en: 'Pharmacies', descAr: 'منصات إدارة الأدوية والوصفات والمخزون', descEn: 'Medicine management, prescriptions, and inventory platforms' },
  { icon: GraduationCap, ar: 'التعليم', en: 'Education', descAr: 'أنظمة إدارة المدارس والتعلم الإلكتروني', descEn: 'School management and e-learning systems' },
  { icon: Building, ar: 'العقارات', en: 'Real Estate', descAr: 'منصات إدارة العقارات والحجوزات', descEn: 'Property management and booking platforms' },
  { icon: Truck, ar: 'اللوجستيات', en: 'Logistics', descAr: 'أنظمة إدارة الشحن والتتبع والتوصيل', descEn: 'Shipping, tracking, and delivery management systems' },
  { icon: Briefcase, ar: 'الشركات الخدمية', en: 'Service Companies', descAr: 'أنظمة CRM وإدارة المشاريع والموارد البشرية', descEn: 'CRM, project management, and HR systems' },
  { icon: ShoppingCart, ar: 'التجارة الإلكترونية', en: 'E-commerce', descAr: 'متاجر إلكترونية متكاملة مع بوابات دفع', descEn: 'Complete online stores with payment gateways' },
];

const IndustriesPage = () => {
  const { lang } = useLanguage();
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">{t('industries.title')}</h1>
          <p className="text-lg text-muted-foreground">{t('industries.subtitle')}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((ind, i) => {
            const Icon = ind.icon;
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
                <h3 className="font-bold text-foreground text-xl mb-3">{lang === 'ar' ? ind.ar : ind.en}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{lang === 'ar' ? ind.descAr : ind.descEn}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default IndustriesPage;
