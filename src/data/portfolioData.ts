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
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Node.js', 'PostgreSQL', 'Stripe API'],
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
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'REST API', 'Cloudinary'],
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
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB'],
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
    techStack: ['React', 'TypeScript', 'Recharts', 'Supabase', 'PostgreSQL', 'Node.js', 'Docker'],
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
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Node.js', 'PostgreSQL', 'WebSocket'],
  },
  {
    id: 'clinic-care-portal',
    title: 'Clinic Care Portal',
    titleAr: 'بوابة رعاية العيادات',
    url: 'https://clinic-care-portal.lovable.app',
    catIndex: 1,
    image: clinicMgmt,
    descriptionAr: 'نظام متكامل لإدارة العيادات الطبية مع جدولة المواعيد وملفات المرضى الإلكترونية.',
    descriptionEn: 'A complete clinic management system with appointment scheduling and electronic patient records.',
    featuresAr: ['جدولة مواعيد ذكية', 'ملفات المرضى الإلكترونية', 'الفوترة والمدفوعات', 'تقارير طبية', 'إشعارات SMS'],
    featuresEn: ['Smart Scheduling', 'Electronic Patient Records', 'Billing & Payments', 'Medical Reports', 'SMS Notifications'],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Node.js', 'PostgreSQL', 'Twilio'],
  },
  {
    id: 'pharma-hub-system',
    title: 'Pharma Hub System',
    titleAr: 'نظام الصيدلية الذكي',
    url: 'https://pharma-hub-system.lovable.app',
    catIndex: 2,
    image: pharmacyPlatform,
    descriptionAr: 'منصة صيدلة شاملة لإدارة المخزون والوصفات الطبية والمبيعات بكفاءة عالية.',
    descriptionEn: 'A comprehensive pharmacy platform for managing inventory, prescriptions, and sales efficiently.',
    featuresAr: ['إدارة المخزون', 'تتبع الوصفات', 'تنبيهات انتهاء الصلاحية', 'نقطة بيع متكاملة', 'تقارير المبيعات'],
    featuresEn: ['Inventory Management', 'Prescription Tracking', 'Expiry Alerts', 'Integrated POS', 'Sales Reports'],
    techStack: ['React', 'TypeScript', 'Supabase', 'Recharts', 'Node.js', 'PostgreSQL', 'Docker'],
  },
  {
    id: 'resto-order-pos',
    title: 'Resto Order POS',
    titleAr: 'نظام نقاط بيع المطاعم',
    url: 'https://resto-order-pos.lovable.app',
    catIndex: 3,
    image: restaurantPos,
    descriptionAr: 'نظام نقاط بيع متطور للمطاعم والكافيهات مع إدارة الطلبات والطاولات.',
    descriptionEn: 'An advanced POS system for restaurants and cafes with order and table management.',
    featuresAr: ['إدارة الطاولات', 'قائمة طعام رقمية', 'طباعة الفواتير', 'تتبع الطلبات', 'تقارير يومية'],
    featuresEn: ['Table Management', 'Digital Menu', 'Receipt Printing', 'Order Tracking', 'Daily Reports'],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Node.js', 'PostgreSQL', 'Socket.io'],
  },
  {
    id: 'smart-menu-digital',
    title: 'Smart Digital Menu',
    titleAr: 'القائمة الرقمية الذكية',
    url: 'https://smart-menu-digital.lovable.app',
    catIndex: 4,
    image: digitalMenu,
    descriptionAr: 'قائمة طعام رقمية تفاعلية مع QR Code وتحديث لحظي للأصناف والأسعار.',
    descriptionEn: 'An interactive digital food menu with QR Code and real-time item and price updates.',
    featuresAr: ['QR Code للطاولات', 'تحديث لحظي', 'صور عالية الجودة', 'تصنيف الأصناف', 'دعم متعدد اللغات'],
    featuresEn: ['Table QR Codes', 'Real-time Updates', 'HD Images', 'Item Categories', 'Multi-language Support'],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Firebase', 'QR Code API'],
  },
  {
    id: 'ai-biz-assistant',
    title: 'AI Business Assistant',
    titleAr: 'مساعد الأعمال الذكي',
    url: 'https://ai-biz-assistant.lovable.app',
    catIndex: 5,
    image: aiAssistant,
    descriptionAr: 'مساعد ذكاء اصطناعي لتحليل بيانات الأعمال وتقديم توصيات لتحسين الأداء.',
    descriptionEn: 'An AI assistant for analyzing business data and providing performance improvement recommendations.',
    featuresAr: ['تحليل البيانات بالذكاء الاصطناعي', 'توصيات ذكية', 'تقارير تلقائية', 'تكامل مع CRM', 'دردشة تفاعلية'],
    featuresEn: ['AI Data Analysis', 'Smart Recommendations', 'Auto Reports', 'CRM Integration', 'Interactive Chat'],
    techStack: ['React', 'TypeScript', 'OpenAI', 'Supabase', 'Python', 'FastAPI', 'LangChain', 'Docker'],
  },
  {
    id: 'school-master-pro',
    title: 'School Master Pro',
    titleAr: 'نظام إدارة المدارس الاحترافي',
    url: 'https://school-master-pro.lovable.app',
    catIndex: 6,
    image: schoolManagement,
    descriptionAr: 'نظام شامل لإدارة المدارس يتضمن شؤون الطلاب والحضور والدرجات والتقارير.',
    descriptionEn: 'A comprehensive school management system including student affairs, attendance, grades, and reports.',
    featuresAr: ['إدارة الطلاب', 'نظام الحضور والغياب', 'إدارة الدرجات', 'تواصل أولياء الأمور', 'جدول الحصص'],
    featuresEn: ['Student Management', 'Attendance System', 'Grade Management', 'Parent Communication', 'Class Schedule'],
    techStack: ['React', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Redis'],
  },
  {
    id: 'hr-flow-system',
    title: 'HR Flow System',
    titleAr: 'نظام إدارة الموارد البشرية',
    url: 'https://hr-flow-system.lovable.app',
    catIndex: 7,
    image: hrSystem,
    descriptionAr: 'نظام موارد بشرية متكامل لإدارة الموظفين والرواتب والإجازات والتقييمات.',
    descriptionEn: 'An integrated HR system for managing employees, payroll, leaves, and evaluations.',
    featuresAr: ['إدارة الموظفين', 'مسير الرواتب', 'نظام الإجازات', 'تقييم الأداء', 'الهيكل التنظيمي'],
    featuresEn: ['Employee Management', 'Payroll', 'Leave System', 'Performance Reviews', 'Org Chart'],
    techStack: ['React', 'TypeScript', 'Supabase', 'Recharts', 'Node.js', 'PostgreSQL', 'Docker'],
  },
  {
    id: 'stock-warehouse-mgmt',
    title: 'Stock Warehouse Manager',
    titleAr: 'نظام إدارة المخزون والمستودعات',
    url: 'https://stock-warehouse-mgmt.lovable.app',
    catIndex: 8,
    image: inventorySystem,
    descriptionAr: 'نظام متقدم لإدارة المخزون والمستودعات مع تتبع المنتجات وتنبيهات ذكية.',
    descriptionEn: 'An advanced inventory and warehouse management system with product tracking and smart alerts.',
    featuresAr: ['تتبع المخزون', 'تنبيهات النقص', 'باركود سكانر', 'تقارير المخزون', 'إدارة الموردين'],
    featuresEn: ['Inventory Tracking', 'Low Stock Alerts', 'Barcode Scanner', 'Stock Reports', 'Supplier Management'],
    techStack: ['React', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Barcode API'],
  },
  {
    id: 'hospital-care-platform',
    title: 'Hospital Care Platform',
    titleAr: 'منصة إدارة المستشفيات',
    url: 'https://hospital-care-platform.lovable.app',
    catIndex: 9,
    image: hospitalPlatform,
    descriptionAr: 'منصة شاملة لإدارة المستشفيات تشمل الأقسام والأطباء والمرضى والعمليات.',
    descriptionEn: 'A comprehensive hospital management platform covering departments, doctors, patients, and operations.',
    featuresAr: ['إدارة الأقسام', 'ملفات المرضى', 'جدولة الأطباء', 'إدارة الأسرّة', 'الصيدلية الداخلية'],
    featuresEn: ['Department Management', 'Patient Records', 'Doctor Scheduling', 'Bed Management', 'In-house Pharmacy'],
    techStack: ['React', 'TypeScript', 'Supabase', 'Recharts', 'Node.js', 'PostgreSQL', 'Docker', 'Redis'],
  },
  {
    id: 'quick-deliver-app',
    title: 'Quick Deliver App',
    titleAr: 'تطبيق التوصيل السريع',
    url: 'https://quick-deliver-app.lovable.app',
    catIndex: 10,
    image: deliveryPlatform,
    descriptionAr: 'منصة توصيل متكاملة مع تتبع الطلبات والسائقين في الوقت الحقيقي.',
    descriptionEn: 'A complete delivery platform with real-time order and driver tracking.',
    featuresAr: ['تتبع لحظي', 'إدارة السائقين', 'إشعارات فورية', 'تقييم الخدمة', 'تقارير الأداء'],
    featuresEn: ['Real-time Tracking', 'Driver Management', 'Instant Notifications', 'Service Rating', 'Performance Reports'],
    techStack: ['React', 'TypeScript', 'Supabase', 'Mapbox', 'Node.js', 'PostgreSQL', 'Socket.io', 'Firebase'],
  },
  {
    id: 'realty-finder-hub',
    title: 'Realty Finder Hub',
    titleAr: 'منصة العقارات الذكية',
    url: 'https://realty-finder-hub.lovable.app',
    catIndex: 11,
    image: realEstate,
    descriptionAr: 'منصة عقارية شاملة لعرض وبيع وتأجير العقارات مع خرائط تفاعلية.',
    descriptionEn: 'A comprehensive real estate platform for listing, selling, and renting properties with interactive maps.',
    featuresAr: ['خرائط تفاعلية', 'بحث متقدم', 'جولات افتراضية', 'مقارنة العقارات', 'تواصل مباشر'],
    featuresEn: ['Interactive Maps', 'Advanced Search', 'Virtual Tours', 'Property Comparison', 'Direct Contact'],
    techStack: ['React', 'TypeScript', 'Supabase', 'Mapbox', 'Node.js', 'PostgreSQL', 'Cloudinary'],
  },
  {
    id: 'booking-ease-system',
    title: 'Booking Ease System',
    titleAr: 'نظام الحجوزات السهل',
    url: 'https://booking-ease-system.lovable.app',
    catIndex: 13,
    image: bookingSystem,
    descriptionAr: 'نظام حجوزات مرن يناسب العيادات والصالونات والمطاعم مع تأكيد تلقائي.',
    descriptionEn: 'A flexible booking system suitable for clinics, salons, and restaurants with auto-confirmation.',
    featuresAr: ['حجز أونلاين', 'تأكيد تلقائي', 'تذكيرات SMS', 'إدارة المواعيد', 'تقويم تفاعلي'],
    featuresEn: ['Online Booking', 'Auto Confirmation', 'SMS Reminders', 'Appointment Management', 'Interactive Calendar'],
    techStack: ['React', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Twilio'],
  },
  {
    id: 'crm-sales-tracker',
    title: 'CRM Sales Tracker',
    titleAr: 'نظام إدارة علاقات العملاء',
    url: 'https://crm-sales-tracker.lovable.app',
    catIndex: 14,
    image: crmSystem,
    descriptionAr: 'نظام CRM متقدم لتتبع العملاء والمبيعات وإدارة الفرص التجارية.',
    descriptionEn: 'An advanced CRM system for tracking customers, sales, and managing business opportunities.',
    featuresAr: ['إدارة العملاء', 'تتبع المبيعات', 'Pipeline المبيعات', 'تقارير الأداء', 'أتمتة التسويق'],
    featuresEn: ['Customer Management', 'Sales Tracking', 'Sales Pipeline', 'Performance Reports', 'Marketing Automation'],
    techStack: ['React', 'TypeScript', 'Supabase', 'Recharts', 'Node.js', 'PostgreSQL', 'SendGrid'],
  },
  {
    id: 'logistics-fleet-pro',
    title: 'Logistics Fleet Pro',
    titleAr: 'منصة إدارة الأسطول اللوجستي',
    url: 'https://logistics-fleet-pro.lovable.app',
    catIndex: 17,
    image: logisticsPlatform,
    descriptionAr: 'منصة لوجستية متكاملة لإدارة الأسطول والشحنات وتتبع التوصيل.',
    descriptionEn: 'A comprehensive logistics platform for fleet management, shipments, and delivery tracking.',
    featuresAr: ['إدارة الأسطول', 'تتبع الشحنات', 'تخطيط المسارات', 'إدارة السائقين', 'تقارير التوصيل'],
    featuresEn: ['Fleet Management', 'Shipment Tracking', 'Route Planning', 'Driver Management', 'Delivery Reports'],
    techStack: ['React', 'TypeScript', 'Supabase', 'Mapbox', 'Node.js', 'PostgreSQL', 'Docker', 'Redis'],
  },
  {
    id: 'gym-fit-manager',
    title: 'Gym Fit Manager',
    titleAr: 'نظام إدارة الصالات الرياضية',
    url: 'https://gym-fit-manager.lovable.app',
    catIndex: 20,
    image: gymManagement,
    descriptionAr: 'نظام متكامل لإدارة الصالات الرياضية والاشتراكات والمدربين.',
    descriptionEn: 'A complete gym management system for memberships, trainers, and facility management.',
    featuresAr: ['إدارة الاشتراكات', 'جدول المدربين', 'تتبع اللياقة', 'نظام الدفع', 'تطبيق الأعضاء'],
    featuresEn: ['Membership Management', 'Trainer Schedule', 'Fitness Tracking', 'Payment System', 'Member App'],
    techStack: ['React', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Stripe'],
  },
  {
    id: 'hotel-stay-booking',
    title: 'Hotel Stay Booking',
    titleAr: 'منصة حجز الفنادق',
    url: 'https://hotel-stay-booking.lovable.app',
    catIndex: 21,
    image: hotelBooking,
    descriptionAr: 'منصة حجز فنادق احترافية مع مقارنة الأسعار وتقييمات النزلاء.',
    descriptionEn: 'A professional hotel booking platform with price comparison and guest reviews.',
    featuresAr: ['بحث وحجز فوري', 'مقارنة الأسعار', 'تقييمات النزلاء', 'صور بانورامية', 'دفع آمن'],
    featuresEn: ['Instant Search & Book', 'Price Comparison', 'Guest Reviews', 'Panoramic Photos', 'Secure Payment'],
    techStack: ['React', 'TypeScript', 'Supabase', 'Stripe'],
  },
  {
    id: 'event-hub-platform',
    title: 'Event Hub Platform',
    titleAr: 'منصة إدارة الفعاليات',
    url: 'https://event-hub-platform.lovable.app',
    catIndex: 22,
    image: eventPlatform,
    descriptionAr: 'منصة شاملة لتنظيم وإدارة الفعاليات والمؤتمرات مع نظام تذاكر متكامل.',
    descriptionEn: 'A comprehensive platform for organizing and managing events and conferences with an integrated ticketing system.',
    featuresAr: ['إدارة الفعاليات', 'نظام التذاكر', 'تسجيل الحضور', 'بث مباشر', 'تقارير الفعالية'],
    featuresEn: ['Event Management', 'Ticketing System', 'Attendance Check-in', 'Live Streaming', 'Event Reports'],
    techStack: ['React', 'TypeScript', 'Supabase', 'Tailwind CSS'],
  },
  {
    id: 'retail-smart-pos',
    title: 'Retail Smart POS',
    titleAr: 'نظام نقاط بيع التجزئة الذكي',
    url: 'https://retail-smart-pos.lovable.app',
    catIndex: 19,
    image: retailPos,
    descriptionAr: 'نظام نقاط بيع متطور لمتاجر التجزئة مع إدارة المخزون والتقارير.',
    descriptionEn: 'An advanced retail POS system with inventory management and reporting.',
    featuresAr: ['نقطة بيع سريعة', 'إدارة المخزون', 'باركود سكانر', 'تقارير المبيعات', 'إدارة الموظفين'],
    featuresEn: ['Fast POS', 'Inventory Management', 'Barcode Scanner', 'Sales Reports', 'Staff Management'],
    techStack: ['React', 'TypeScript', 'Supabase', 'Tailwind CSS'],
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
    const slug = `${catNames[catIdx - 1].en.toLowerCase().replace(/\s+/g, '-')}-pro-v${version}`;
    projects.push({
      id: `project-${id}`,
      title: `${catNames[catIdx - 1].en} Pro v${version}`,
      titleAr: `${catNames[catIdx - 1].ar} برو v${version}`,
      url: `https://${slug}.lovable.app`,
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
