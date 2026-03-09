import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Stethoscope, UtensilsCrossed, Pill, ShoppingBag, Building2, CheckCircle2 } from 'lucide-react';

const solutions = [
  {
    icon: Stethoscope,
    ar: 'حلول العيادات',
    en: 'Solutions for Clinics',
    featuresAr: ['نظام حجز مواعيد', 'سجلات المرضى الإلكترونية', 'نظام الفواتير', 'التقارير والإحصائيات', 'تطبيق موبايل للمرضى'],
    featuresEn: ['Appointment booking system', 'Electronic patient records', 'Billing system', 'Reports and analytics', 'Patient mobile app'],
  },
  {
    icon: UtensilsCrossed,
    ar: 'حلول المطاعم',
    en: 'Solutions for Restaurants',
    featuresAr: ['نظام نقاط البيع', 'قائمة رقمية تفاعلية', 'نظام إدارة الطلبات', 'نظام التوصيل', 'تطبيق طلب أونلاين'],
    featuresEn: ['POS system', 'Interactive digital menu', 'Order management system', 'Delivery system', 'Online ordering app'],
  },
  {
    icon: Pill,
    ar: 'حلول الصيدليات',
    en: 'Solutions for Pharmacies',
    featuresAr: ['إدارة المخزون', 'نظام الوصفات', 'تتبع الأدوية', 'نظام الفواتير', 'التقارير'],
    featuresEn: ['Inventory management', 'Prescription system', 'Drug tracking', 'Billing system', 'Reports'],
  },
  {
    icon: ShoppingBag,
    ar: 'حلول متاجر التجزئة',
    en: 'Solutions for Retail Stores',
    featuresAr: ['نظام POS', 'إدارة المخزون', 'تتبع المبيعات', 'نظام العملاء', 'التجارة الإلكترونية'],
    featuresEn: ['POS system', 'Inventory management', 'Sales tracking', 'Customer system', 'E-commerce'],
  },
  {
    icon: Building2,
    ar: 'حلول الشركات',
    en: 'Solutions for Corporate Businesses',
    featuresAr: ['نظام ERP', 'إدارة الموارد البشرية', 'نظام CRM', 'إدارة المشاريع', 'التقارير المالية'],
    featuresEn: ['ERP system', 'HR management', 'CRM system', 'Project management', 'Financial reports'],
  },
];

const SolutionsPage = () => {
  const { t, lang } = useLanguage();

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">{t('solutions.title')}</h1>
          <p className="text-lg text-muted-foreground">{t('solutions.subtitle')}</p>
        </motion.div>

        <div className="space-y-8">
          {solutions.map((sol, i) => {
            const Icon = sol.icon;
            const features = lang === 'ar' ? sol.featuresAr : sol.featuresEn;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="card-gradient rounded-2xl p-8 border border-border hover:glow-primary transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-16 h-16 rounded-2xl hero-gradient flex items-center justify-center shrink-0">
                    <Icon size={32} className="text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-foreground text-2xl mb-4">{lang === 'ar' ? sol.ar : sol.en}</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {features.map((f, j) => (
                        <div key={j} className="flex items-center gap-2">
                          <CheckCircle2 size={16} className="text-primary shrink-0" />
                          <span className="text-muted-foreground text-sm">{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SolutionsPage;
