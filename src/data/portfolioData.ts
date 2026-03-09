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

export const categories = [
  { ar: 'الكل', en: 'All' },
  { ar: 'نظام إدارة عيادات', en: 'Clinic Management' },
  { ar: 'منصة صيدلة', en: 'Pharmacy Platform' },
  { ar: 'نظام POS مطاعم', en: 'Restaurant POS' },
  { ar: 'قائمة رقمية', en: 'Digital Menu' },
  { ar: 'مساعد أعمال ذكي', en: 'AI Assistant' },
  { ar: 'نظام إدارة مدارس', en: 'School Management' },
  { ar: 'نظام HR', en: 'HR System' },
  { ar: 'نظام مخزون', en: 'Inventory System' },
  { ar: 'منصة مستشفيات', en: 'Hospital Platform' },
  { ar: 'منصة توصيل', en: 'Delivery Platform' },
  { ar: 'منصة عقارية', en: 'Real Estate' },
  { ar: 'سوق إلكتروني', en: 'Marketplace' },
  { ar: 'نظام حجوزات', en: 'Booking System' },
  { ar: 'نظام CRM', en: 'CRM System' },
  { ar: 'منصة تدريب', en: 'Training Platform' },
  { ar: 'نظام محاسبة', en: 'Accounting System' },
  { ar: 'منصة لوجستية', en: 'Logistics Platform' },
  { ar: 'حجز مواعيد طبية', en: 'Medical Appointments' },
  { ar: 'نظام POS تجزئة', en: 'Retail POS' },
  { ar: 'نظام إدارة صالات رياضية', en: 'Gym Management' },
  { ar: 'منصة حجز فنادق', en: 'Hotel Booking' },
  { ar: 'منصة فعاليات', en: 'Event Platform' },
];

// Image map by category index for generated projects
const categoryImages: Record<number, string> = {
  1: clinicMgmt,
  2: pharmacyPlatform,
  3: restaurantPos,
  4: restaurantPos,
  5: hrSystem,
  6: teachSparkle,
  7: hrSystem,
  8: pharmacyPlatform,
  9: clinicMgmt,
  10: restaurantPos,
  11: realEstate,
  12: elegantAccessory,
  13: realEstate,
  14: hrSystem,
  15: teachSparkle,
  16: finFeeder,
  17: restaurantPos,
  18: clinicMgmt,
  19: elegantAccessory,
  20: hrSystem,
  21: realEstate,
  22: glamGala,
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
    'نظام متكامل لإدارة العمليات وتحسين الكفاءة التشغيلية.',
    'منصة ذكية مصممة لتبسيط سير العمل وزيادة الإنتاجية.',
    'حل تقني شامل يساعد في أتمتة العمليات اليومية.',
    'نظام متطور يوفر تحكم كامل في جميع جوانب العمل.',
  ];
  const descTemplatesEn = [
    'An integrated system for managing operations and improving operational efficiency.',
    'A smart platform designed to simplify workflow and increase productivity.',
    'A comprehensive tech solution that helps automate daily operations.',
    'An advanced system providing full control over all aspects of business.',
  ];

  while (projects.length < 100) {
    const catIdx = ((id - 1) % catNames.length) + 1;
    const version = Math.floor(id / catNames.length) + 1;
    const descIdx = id % descTemplatesAr.length;
    projects.push({
      id: `project-${id}`,
      title: `${catNames[catIdx - 1].en} Pro v${version}`,
      titleAr: `${catNames[catIdx - 1].ar} برو v${version}`,
      url: '',
      catIndex: catIdx,
      image: categoryImages[catIdx] || clinicMgmt,
      descriptionAr: descTemplatesAr[descIdx],
      descriptionEn: descTemplatesEn[descIdx],
      featuresAr: ['لوحة تحكم متقدمة', 'تقارير وإحصائيات', 'إدارة المستخدمين', 'تصميم متجاوب'],
      featuresEn: ['Advanced Dashboard', 'Reports & Analytics', 'User Management', 'Responsive Design'],
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
