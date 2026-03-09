import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Stethoscope, UtensilsCrossed, ShoppingBag, Pill, GraduationCap, Building, Truck, Briefcase, ShoppingCart } from 'lucide-react';

const industriesData: Record<string, {
  icon: any;
  ar: string;
  en: string;
  descAr: string;
  descEn: string;
  featuresAr: string[];
  featuresEn: string[];
  relatedCategories: string[];
}> = {
  healthcare: {
    icon: Stethoscope,
    ar: 'الرعاية الصحية',
    en: 'Healthcare',
    descAr: 'نقدم حلول تقنية شاملة للقطاع الصحي تشمل إدارة العيادات والمستشفيات، حجز المواعيد، السجلات الطبية الإلكترونية، وأنظمة الفوترة.',
    descEn: 'We provide comprehensive tech solutions for the healthcare sector including clinic and hospital management, appointment booking, electronic medical records, and billing systems.',
    featuresAr: ['إدارة المواعيد والحجوزات', 'السجلات الطبية الإلكترونية', 'نظام الفوترة والتأمين', 'تطبيق للمرضى', 'لوحة تحكم للأطباء', 'تقارير وإحصائيات'],
    featuresEn: ['Appointment & Booking Management', 'Electronic Medical Records', 'Billing & Insurance System', 'Patient App', 'Doctor Dashboard', 'Reports & Analytics'],
    relatedCategories: ['Clinic Management', 'Hospital Platform', 'Medical Appointments'],
  },
  restaurants: {
    icon: UtensilsCrossed,
    ar: 'المطاعم',
    en: 'Restaurants',
    descAr: 'أنظمة متكاملة لإدارة المطاعم تشمل نقاط البيع، القوائم الرقمية، إدارة الطلبات، والتوصيل.',
    descEn: 'Integrated restaurant management systems including POS, digital menus, order management, and delivery.',
    featuresAr: ['نظام نقاط البيع', 'قائمة طعام رقمية', 'إدارة الطلبات', 'نظام التوصيل', 'إدارة المخزون', 'تقارير المبيعات'],
    featuresEn: ['POS System', 'Digital Menu', 'Order Management', 'Delivery System', 'Inventory Management', 'Sales Reports'],
    relatedCategories: ['Restaurant POS', 'Digital Menu', 'Delivery Platform'],
  },
  retail: {
    icon: ShoppingBag,
    ar: 'التجزئة',
    en: 'Retail',
    descAr: 'حلول متجر التجزئة الذكي من نقاط البيع إلى التجارة الإلكترونية وإدارة المخزون.',
    descEn: 'Smart retail solutions from POS to e-commerce and inventory management.',
    featuresAr: ['نظام نقاط البيع', 'إدارة المخزون', 'متجر إلكتروني', 'برامج الولاء', 'تقارير المبيعات', 'إدارة الموردين'],
    featuresEn: ['POS System', 'Inventory Management', 'Online Store', 'Loyalty Programs', 'Sales Reports', 'Supplier Management'],
    relatedCategories: ['Retail POS', 'Inventory System', 'Marketplace'],
  },
  pharmacies: {
    icon: Pill,
    ar: 'الصيدليات',
    en: 'Pharmacies',
    descAr: 'منصات إدارة الأدوية والوصفات الطبية والمخزون مع أنظمة طلب متقدمة.',
    descEn: 'Medicine management platforms with prescriptions, inventory, and advanced ordering systems.',
    featuresAr: ['إدارة الأدوية والمخزون', 'الوصفات الإلكترونية', 'نظام الطلب عبر الإنترنت', 'تنبيهات انتهاء الصلاحية', 'تقارير المبيعات', 'ربط مع شركات الأدوية'],
    featuresEn: ['Medicine & Inventory Management', 'E-Prescriptions', 'Online Ordering System', 'Expiry Alerts', 'Sales Reports', 'Pharma Company Integration'],
    relatedCategories: ['Pharmacy Platform'],
  },
  education: {
    icon: GraduationCap,
    ar: 'التعليم',
    en: 'Education',
    descAr: 'أنظمة إدارة المدارس والجامعات ومنصات التعلم الإلكتروني.',
    descEn: 'School and university management systems with e-learning platforms.',
    featuresAr: ['إدارة الطلاب والمعلمين', 'نظام الدرجات', 'منصة التعلم الإلكتروني', 'تطبيق أولياء الأمور', 'إدارة الحضور', 'الجداول الدراسية'],
    featuresEn: ['Student & Teacher Management', 'Grading System', 'E-Learning Platform', 'Parent App', 'Attendance Management', 'Class Scheduling'],
    relatedCategories: ['School Management', 'Training Platform'],
  },
  'real-estate': {
    icon: Building,
    ar: 'العقارات',
    en: 'Real Estate',
    descAr: 'منصات إدارة العقارات والإيجارات وأنظمة الحجز.',
    descEn: 'Property management platforms with rental and booking systems.',
    featuresAr: ['إدارة العقارات', 'نظام الحجوزات', 'بوابة المستأجرين', 'إدارة العقود', 'تقارير مالية', 'خرائط تفاعلية'],
    featuresEn: ['Property Management', 'Booking System', 'Tenant Portal', 'Contract Management', 'Financial Reports', 'Interactive Maps'],
    relatedCategories: ['Real Estate', 'Booking System'],
  },
  logistics: {
    icon: Truck,
    ar: 'اللوجستيات',
    en: 'Logistics',
    descAr: 'أنظمة إدارة الشحن والتتبع والتوصيل وسلسلة الإمداد.',
    descEn: 'Shipping, tracking, delivery, and supply chain management systems.',
    featuresAr: ['تتبع الشحنات', 'إدارة المستودعات', 'تحسين المسارات', 'إدارة الأسطول', 'تقارير التوصيل', 'تكامل مع شركات الشحن'],
    featuresEn: ['Shipment Tracking', 'Warehouse Management', 'Route Optimization', 'Fleet Management', 'Delivery Reports', 'Carrier Integration'],
    relatedCategories: ['Logistics Platform', 'Delivery Platform'],
  },
  services: {
    icon: Briefcase,
    ar: 'الشركات الخدمية',
    en: 'Service Companies',
    descAr: 'أنظمة CRM وإدارة المشاريع والموارد البشرية للشركات.',
    descEn: 'CRM, project management, and HR systems for businesses.',
    featuresAr: ['نظام CRM', 'إدارة المشاريع', 'نظام الموارد البشرية', 'نظام المحاسبة', 'إدارة العملاء', 'التقارير والتحليلات'],
    featuresEn: ['CRM System', 'Project Management', 'HR System', 'Accounting System', 'Client Management', 'Reports & Analytics'],
    relatedCategories: ['CRM System', 'HR System', 'Accounting System'],
  },
  ecommerce: {
    icon: ShoppingCart,
    ar: 'التجارة الإلكترونية',
    en: 'E-commerce',
    descAr: 'متاجر إلكترونية متكاملة مع بوابات الدفع وإدارة المخزون والشحن.',
    descEn: 'Complete online stores with payment gateways, inventory, and shipping management.',
    featuresAr: ['متجر إلكتروني متكامل', 'بوابات الدفع', 'إدارة المخزون', 'نظام الشحن', 'لوحة تحكم البائع', 'تطبيق موبايل'],
    featuresEn: ['Full Online Store', 'Payment Gateways', 'Inventory Management', 'Shipping System', 'Seller Dashboard', 'Mobile App'],
    relatedCategories: ['Marketplace', 'Inventory System'],
  },
};

// Portfolio categories (must match PortfolioPage)
const portfolioCategories = [
  'All', 'Clinic Management', 'Pharmacy Platform', 'Restaurant POS', 'Digital Menu',
  'AI Assistant', 'School Management', 'HR System', 'Inventory System', 'Hospital Platform',
  'Delivery Platform', 'Real Estate', 'Marketplace', 'Booking System', 'CRM System',
  'Training Platform', 'Accounting System', 'Logistics Platform', 'Medical Appointments',
  'Retail POS', 'Gym Management', 'Hotel Booking', 'Event Platform',
];

const realProjects = [
  { title: 'Elegant Accessory Hub', url: 'https://elegant-accessory-hub.lovable.app', category: 'Marketplace' },
  { title: 'Glam Gala Boutique', url: 'https://glam-gala-boutique.lovable.app', category: 'Marketplace' },
  { title: 'Blush Boot Bliss', url: 'https://blush-boot-bliss.lovable.app', category: 'Marketplace' },
  { title: 'Fin Feeder Platform', url: 'https://fin-feeder-platform.lovable.app', category: 'Accounting System' },
  { title: 'Teach Sparkle Flow', url: 'https://teach-sparkle-flow.lovable.app', category: 'Training Platform' },
];

function getRelatedProjects(relatedCategories: string[]) {
  const projects: { title: string; url: string; category: string }[] = [];
  
  // Add real projects that match
  realProjects.forEach(p => {
    if (relatedCategories.includes(p.category)) projects.push(p);
  });

  // Generate additional projects
  relatedCategories.forEach(cat => {
    for (let i = 1; i <= 3; i++) {
      projects.push({ title: `${cat} Pro v${i}`, url: '', category: cat });
    }
  });

  return projects.slice(0, 9);
}

const IndustryDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { lang } = useLanguage();
  const industry = industriesData[slug || ''];

  if (!industry) {
    return (
      <div className="min-h-screen pt-24 pb-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">
            {lang === 'ar' ? 'القطاع غير موجود' : 'Industry not found'}
          </h1>
          <Link to="/industries" className="text-primary hover:underline">
            {lang === 'ar' ? 'العودة للقطاعات' : 'Back to Industries'}
          </Link>
        </div>
      </div>
    );
  }

  const Icon = industry.icon;
  const relatedProjects = getRelatedProjects(industry.relatedCategories);
  const BackArrow = lang === 'ar' ? ArrowLeft : ArrowRight;

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16">
          <Link to="/industries" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-6 transition-colors">
            {lang === 'ar' ? <ArrowRight size={18} /> : <ArrowLeft size={18} />}
            {lang === 'ar' ? 'العودة للقطاعات' : 'Back to Industries'}
          </Link>
          <div className="flex items-center gap-6 mb-6">
            <div className="w-20 h-20 rounded-2xl hero-gradient flex items-center justify-center flex-shrink-0">
              <Icon size={40} className="text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold gradient-text">
                {lang === 'ar' ? industry.ar : industry.en}
              </h1>
            </div>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
            {lang === 'ar' ? industry.descAr : industry.descEn}
          </p>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            {lang === 'ar' ? 'المميزات والحلول' : 'Features & Solutions'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {(lang === 'ar' ? industry.featuresAr : industry.featuresEn).map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: lang === 'ar' ? 20 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="card-gradient rounded-xl border border-border p-5 flex items-center gap-3"
              >
                <CheckCircle2 size={20} className="text-primary flex-shrink-0" />
                <span className="text-foreground font-medium">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Related Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            {lang === 'ar' ? 'مشاريع ذات صلة' : 'Related Projects'}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProjects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="card-gradient rounded-2xl border border-border overflow-hidden group hover:glow-primary transition-all duration-300"
              >
                <div className="h-36 hero-gradient opacity-80 flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg text-center px-4">{project.title}</span>
                </div>
                <div className="p-4">
                  <p className="text-xs text-muted-foreground mb-2">{project.category}</p>
                  <h3 className="font-semibold text-foreground text-sm mb-3">{project.title}</h3>
                  {project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary text-sm font-medium inline-flex items-center gap-1 hover:underline"
                    >
                      {lang === 'ar' ? 'عرض المشروع' : 'View Project'} <ExternalLink size={14} />
                    </a>
                  ) : (
                    <span className="text-muted-foreground text-sm">{lang === 'ar' ? 'عرض المشروع' : 'View Project'}</span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card-gradient rounded-2xl border border-border p-10 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            {lang === 'ar' ? 'هل تحتاج نظام مخصص لعملك؟' : 'Need a custom system for your business?'}
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            {lang === 'ar' ? 'احصل على استشارة مجانية وسنساعدك في اختيار الحل الأمثل.' : 'Get a free consultation and we\'ll help you choose the best solution.'}
          </p>
          <Link
            to="/consultation"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl hero-gradient text-primary-foreground font-semibold text-lg hover:opacity-90 transition-opacity"
          >
            {lang === 'ar' ? 'احصل على استشارة مجانية' : 'Get a Free Consultation'}
            <BackArrow size={20} />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default IndustryDetailPage;
