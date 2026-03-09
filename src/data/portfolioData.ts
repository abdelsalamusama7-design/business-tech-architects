// Portfolio images imports
import elegantAccessory from '@/assets/portfolio/elegant-accessory-hub.jpg';
import glamGala from '@/assets/portfolio/glam-gala-boutique.jpg';
import blushBoot from '@/assets/portfolio/blush-boot-bliss.jpg';
import finFeeder from '@/assets/portfolio/fin-feeder-platform.jpg';
import teachSparkle from '@/assets/portfolio/teach-sparkle-flow.jpg';
import clinicMgmt from '@/assets/portfolio/clinic-management.jpg';
import restaurantPos from '@/assets/portfolio/restaurant-pos.jpg';
import pharmacyPlatform from '@/assets/portfolio/pharmacy-platform.jpg';
import hrSystem from '@/assets/portfolio/hr-system.jpg';
import realEstate from '@/assets/portfolio/real-estate.jpg';
import digitalMenu from '@/assets/portfolio/digital-menu.jpg';
import aiAssistant from '@/assets/portfolio/ai-assistant.jpg';
import inventorySystem from '@/assets/portfolio/inventory-system.jpg';
import deliveryPlatform from '@/assets/portfolio/delivery-platform.jpg';
import crmSystem from '@/assets/portfolio/crm-system.jpg';
import bookingSystem from '@/assets/portfolio/booking-system.jpg';
import logisticsPlatform from '@/assets/portfolio/logistics-platform.jpg';
import schoolManagement from '@/assets/portfolio/school-management.jpg';
import gymManagement from '@/assets/portfolio/gym-management.jpg';
import hotelBooking from '@/assets/portfolio/hotel-booking.jpg';
import eventPlatform from '@/assets/portfolio/event-platform.jpg';
import retailPos from '@/assets/portfolio/retail-pos.jpg';
import hospitalPlatform from '@/assets/portfolio/hospital-platform.jpg';

export const categories = [
  { ar: 'الكل', en: 'All' },
  { ar: 'نظام إدارة عيادات', en: 'Clinic Management' },       // 1
  { ar: 'منصة صيدلة', en: 'Pharmacy Platform' },              // 2
  { ar: 'نظام POS مطاعم', en: 'Restaurant POS' },            // 3
  { ar: 'قائمة رقمية', en: 'Digital Menu' },                   // 4
  { ar: 'مساعد أعمال ذكي', en: 'AI Assistant' },              // 5
  { ar: 'نظام إدارة مدارس', en: 'School Management' },        // 6
  { ar: 'نظام HR', en: 'HR System' },                          // 7
  { ar: 'نظام مخزون', en: 'Inventory System' },               // 8
  { ar: 'منصة مستشفيات', en: 'Hospital Platform' },           // 9
  { ar: 'منصة توصيل', en: 'Delivery Platform' },              // 10
  { ar: 'منصة عقارية', en: 'Real Estate' },                    // 11
  { ar: 'سوق إلكتروني', en: 'Marketplace' },                  // 12
  { ar: 'نظام حجوزات', en: 'Booking System' },                // 13
  { ar: 'نظام CRM', en: 'CRM System' },                       // 14
  { ar: 'منصة تدريب', en: 'Training Platform' },              // 15
  { ar: 'نظام محاسبة', en: 'Accounting System' },             // 16
  { ar: 'منصة لوجستية', en: 'Logistics Platform' },           // 17
  { ar: 'حجز مواعيد طبية', en: 'Medical Appointments' },      // 18
  { ar: 'نظام POS تجزئة', en: 'Retail POS' },                // 19
  { ar: 'نظام إدارة صالات رياضية', en: 'Gym Management' },    // 20
  { ar: 'منصة حجز فنادق', en: 'Hotel Booking' },             // 21
  { ar: 'منصة فعاليات', en: 'Event Platform' },               // 22
];

// Each category has its own unique screenshot
const categoryImages: Record<number, string> = {
  1: clinicMgmt,
  2: pharmacyPlatform,
  3: restaurantPos,
  4: digitalMenu,
  5: aiAssistant,
  6: schoolManagement,
  7: hrSystem,
  8: inventorySystem,
  9: hospitalPlatform,
  10: deliveryPlatform,
  11: realEstate,
  12: elegantAccessory,
  13: bookingSystem,
  14: crmSystem,
  15: teachSparkle,
  16: finFeeder,
  17: logisticsPlatform,
  18: clinicMgmt,
  19: retailPos,
  20: gymManagement,
  21: hotelBooking,
  22: eventPlatform,
};

export interface Project {
  id: string;
  title: string;
  titleAr: string;
  url: string;
  catIndex: number;
  image: string;
  descriptionAr: string;
  descriptionEn: string;
  featuresAr: string[];
  featuresEn: string[];
  techStack: string[];
}

const realProjects: Project[] = [
  {
    id: 'elegant-accessory-hub',
    title: 'Elegant Accessory Hub',
    titleAr: 'متجر الإكسسوارات الأنيق',
    url: 'https://elegant-accessory-hub.lovable.app',
    catIndex: 12,
    image: elegantAccessory,
    descriptionAr: 'متجر إلكتروني متكامل للإكسسوارات والمجوهرات مع تجربة تسوق سلسة وتصميم أنيق.',
    descriptionEn: 'A complete e-commerce store for accessories and jewelry with a smooth shopping experience and elegant design.',
    featuresAr: ['كتالوج منتجات متقدم', 'سلة تسوق ذكية', 'بوابة دفع آمنة', 'تصميم متجاوب', 'نظام تصفية وبحث'],
    featuresEn: ['Advanced Product Catalog', 'Smart Shopping Cart', 'Secure Payment Gateway', 'Responsive Design', 'Search & Filter System'],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase'],
  },
  {
    id: 'glam-gala-boutique',
    title: 'Glam Gala Boutique',
    titleAr: 'بوتيك جلام جالا',
    url: 'https://glam-gala-boutique.lovable.app',
    catIndex: 12,
    image: glamGala,
    descriptionAr: 'بوتيك أزياء فاخر على الإنترنت يعرض أحدث فساتين السهرة والملابس الراقية.',
    descriptionEn: 'A luxury online fashion boutique showcasing the latest evening dresses and high-end clothing.',
    featuresAr: ['عرض أزياء تفاعلي', 'نظام مقاسات ذكي', 'قائمة المفضلة', 'مشاركة على السوشيال ميديا'],
    featuresEn: ['Interactive Fashion Display', 'Smart Size System', 'Wishlist', 'Social Media Sharing'],
    techStack: ['React', 'TypeScript', 'Tailwind CSS'],
  },
  {
    id: 'blush-boot-bliss',
    title: 'Blush Boot Bliss',
    titleAr: 'بلاش بوت بليس',
    url: 'https://blush-boot-bliss.lovable.app',
    catIndex: 12,
    image: blushBoot,
    descriptionAr: 'متجر أحذية عصري يوفر تجربة تسوق ممتعة مع مجموعة واسعة من الأحذية والبوتات.',
    descriptionEn: 'A trendy shoe store providing an enjoyable shopping experience with a wide collection of boots and footwear.',
    featuresAr: ['تصفح حسب الفئة', 'عرض 360 درجة', 'مراجعات العملاء', 'شحن سريع'],
    featuresEn: ['Browse by Category', '360° View', 'Customer Reviews', 'Fast Shipping'],
    techStack: ['React', 'TypeScript', 'Tailwind CSS'],
  },
  {
    id: 'fin-feeder-platform',
    title: 'Fin Feeder Platform',
    titleAr: 'منصة فين فيدر المالية',
    url: 'https://fin-feeder-platform.lovable.app',
    catIndex: 16,
    image: finFeeder,
    descriptionAr: 'منصة محاسبة وإدارة مالية شاملة مع تقارير تحليلية متقدمة ولوحات بيانات تفاعلية.',
    descriptionEn: 'A comprehensive accounting and financial management platform with advanced analytical reports and interactive dashboards.',
    featuresAr: ['لوحة بيانات تفاعلية', 'تقارير مالية', 'إدارة الفواتير', 'تتبع المصروفات'],
    featuresEn: ['Interactive Dashboard', 'Financial Reports', 'Invoice Management', 'Expense Tracking'],
    techStack: ['React', 'TypeScript', 'Recharts', 'Supabase'],
  },
  {
    id: 'teach-sparkle-flow',
    title: 'Teach Sparkle Flow',
    titleAr: 'منصة تيتش سباركل فلو',
    url: 'https://teach-sparkle-flow.lovable.app',
    catIndex: 15,
    image: teachSparkle,
    descriptionAr: 'منصة تعليمية وتدريبية متكاملة مع دورات تفاعلية وتتبع تقدم الطلاب.',
    descriptionEn: 'A complete educational and training platform with interactive courses and student progress tracking.',
    featuresAr: ['دورات تفاعلية', 'تتبع التقدم', 'شهادات إتمام', 'منتدى نقاش'],
    featuresEn: ['Interactive Courses', 'Progress Tracking', 'Completion Certificates', 'Discussion Forum'],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase'],
  },
];

function generateProjects(): Project[] {
  const projects: Project[] = [...realProjects];
  const catNames = categories.slice(1);
  let id = 6;

  const descTemplatesAr = [
    'نظام متكامل لإدارة العمليات وتحسين الكفاءة التشغيلية مع لوحة تحكم متقدمة.',
    'منصة ذكية مصممة لتبسيط سير العمل وزيادة الإنتاجية بأحدث التقنيات.',
    'حل تقني شامل يساعد في أتمتة العمليات اليومية وتقليل التكاليف.',
    'نظام متطور يوفر تحكم كامل في جميع جوانب العمل مع تقارير تحليلية.',
  ];
  const descTemplatesEn = [
    'An integrated system for managing operations and improving efficiency with an advanced dashboard.',
    'A smart platform designed to simplify workflow and boost productivity with the latest technologies.',
    'A comprehensive tech solution that helps automate daily operations and reduce costs.',
    'An advanced system providing full control over all business aspects with analytical reports.',
  ];

  const featureSets = [
    { ar: ['لوحة تحكم متقدمة', 'تقارير وإحصائيات', 'إدارة المستخدمين', 'تصميم متجاوب', 'إشعارات ذكية'], en: ['Advanced Dashboard', 'Reports & Analytics', 'User Management', 'Responsive Design', 'Smart Notifications'] },
    { ar: ['إدارة شاملة', 'تكامل مع أنظمة خارجية', 'نظام صلاحيات', 'تطبيق موبايل', 'دعم متعدد اللغات'], en: ['Full Management', 'External System Integration', 'Permissions System', 'Mobile App', 'Multi-language Support'] },
    { ar: ['أتمتة العمليات', 'تخصيص كامل', 'نسخ احتياطي', 'أمان متقدم', 'واجهة سهلة'], en: ['Process Automation', 'Full Customization', 'Data Backup', 'Advanced Security', 'Easy Interface'] },
  ];

  while (projects.length < 100) {
    const catIdx = ((id - 1) % catNames.length) + 1;
    const version = Math.floor(id / catNames.length) + 1;
    const descIdx = id % descTemplatesAr.length;
    const featureIdx = id % featureSets.length;
    projects.push({
      id: `project-${id}`,
      title: `${catNames[catIdx - 1].en} Pro v${version}`,
      titleAr: `${catNames[catIdx - 1].ar} برو v${version}`,
      url: '',
      catIndex: catIdx,
      image: categoryImages[catIdx] || clinicMgmt,
      descriptionAr: descTemplatesAr[descIdx],
      descriptionEn: descTemplatesEn[descIdx],
      featuresAr: featureSets[featureIdx].ar,
      featuresEn: featureSets[featureIdx].en,
      techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase'],
    });
    id++;
  }
  return projects;
}

export const allProjects = generateProjects();

export function getProjectById(id: string): Project | undefined {
  return allProjects.find(p => p.id === id);
}
