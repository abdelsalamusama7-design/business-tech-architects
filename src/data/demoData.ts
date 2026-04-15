import {
  Home, BarChart3, Users, Calendar, Settings, ShoppingCart, Package,
  FileText, Bell, Search, Menu, Star, Clock, MapPin, CreditCard,
  Shield, Wifi, Heart, Truck, BookOpen, Dumbbell, Hotel, Ticket,
  Monitor, Activity, Pill, Building, GraduationCap, Warehouse,
  Store, Share2, TrendingUp,
  type LucideIcon
} from 'lucide-react';

export interface DemoCategoryConfig {
  color: string; // tailwind gradient classes
  accentColor: string; // for active sidebar items
  icon: LucideIcon;
  heroTitle: { en: string; ar: string };
  heroDesc: { en: string; ar: string };
}

export const categoryThemes: Record<string, DemoCategoryConfig> = {
  'Clinic Management': {
    color: 'from-teal-500 to-emerald-600',
    accentColor: 'bg-teal-600/20 text-teal-400',
    icon: Heart,
    heroTitle: { en: 'Clinic Dashboard', ar: 'لوحة تحكم العيادة' },
    heroDesc: { en: 'Manage patients, appointments & billing in one place', ar: 'إدارة المرضى والمواعيد والفواتير في مكان واحد' },
  },
  'Pharmacy Platform': {
    color: 'from-blue-500 to-cyan-600',
    accentColor: 'bg-blue-600/20 text-blue-400',
    icon: Pill,
    heroTitle: { en: 'Pharmacy Dashboard', ar: 'لوحة تحكم الصيدلية' },
    heroDesc: { en: 'Track inventory, prescriptions & orders efficiently', ar: 'تتبع المخزون والوصفات والطلبات بكفاءة' },
  },
  'Restaurant POS': {
    color: 'from-orange-500 to-red-600',
    accentColor: 'bg-orange-600/20 text-orange-400',
    icon: ShoppingCart,
    heroTitle: { en: 'Restaurant POS', ar: 'نقطة بيع المطعم' },
    heroDesc: { en: 'Orders, tables, kitchen & payments — all connected', ar: 'الطلبات والطاولات والمطبخ والمدفوعات — كلها متصلة' },
  },
  'Digital Menu': {
    color: 'from-amber-500 to-yellow-600',
    accentColor: 'bg-amber-600/20 text-amber-400',
    icon: Menu,
    heroTitle: { en: 'Digital Menu', ar: 'القائمة الرقمية' },
    heroDesc: { en: 'Beautiful interactive menu for your restaurant', ar: 'قائمة تفاعلية جميلة لمطعمك' },
  },
  'HR System': {
    color: 'from-violet-500 to-purple-600',
    accentColor: 'bg-violet-600/20 text-violet-400',
    icon: Users,
    heroTitle: { en: 'HR Management', ar: 'إدارة الموارد البشرية' },
    heroDesc: { en: 'Employees, payroll, leave & performance tracking', ar: 'الموظفون والرواتب والإجازات وتتبع الأداء' },
  },
  'CRM System': {
    color: 'from-indigo-500 to-blue-600',
    accentColor: 'bg-indigo-600/20 text-indigo-400',
    icon: Star,
    heroTitle: { en: 'CRM Dashboard', ar: 'لوحة إدارة العملاء' },
    heroDesc: { en: 'Manage leads, deals & customer relationships', ar: 'إدارة العملاء المحتملين والصفقات والعلاقات' },
  },
  'Marketplace': {
    color: 'from-pink-500 to-rose-600',
    accentColor: 'bg-pink-600/20 text-pink-400',
    icon: Package,
    heroTitle: { en: 'Marketplace', ar: 'السوق الإلكتروني' },
    heroDesc: { en: 'Products, sellers, orders & payments platform', ar: 'منصة المنتجات والبائعين والطلبات والمدفوعات' },
  },
  'Real Estate': {
    color: 'from-emerald-500 to-green-600',
    accentColor: 'bg-emerald-600/20 text-emerald-400',
    icon: Building,
    heroTitle: { en: 'Real Estate Portal', ar: 'بوابة العقارات' },
    heroDesc: { en: 'Properties, tenants & lease management', ar: 'إدارة العقارات والمستأجرين وعقود الإيجار' },
  },
  'School Management': {
    color: 'from-sky-500 to-blue-600',
    accentColor: 'bg-sky-600/20 text-sky-400',
    icon: GraduationCap,
    heroTitle: { en: 'School Management', ar: 'إدارة المدرسة' },
    heroDesc: { en: 'Students, classes, grades & attendance', ar: 'الطلاب والفصول والدرجات والحضور' },
  },
  'Inventory System': {
    color: 'from-slate-500 to-zinc-600',
    accentColor: 'bg-slate-500/20 text-slate-400',
    icon: Warehouse,
    heroTitle: { en: 'Inventory System', ar: 'نظام المخزون' },
    heroDesc: { en: 'Stock tracking, warehouses & supply chain', ar: 'تتبع المخزون والمستودعات وسلسلة التوريد' },
  },
  'Hospital Platform': {
    color: 'from-red-500 to-rose-600',
    accentColor: 'bg-red-600/20 text-red-400',
    icon: Activity,
    heroTitle: { en: 'Hospital Platform', ar: 'منصة المستشفى' },
    heroDesc: { en: 'Departments, doctors, patients & operations', ar: 'الأقسام والأطباء والمرضى والعمليات' },
  },
  'Delivery Platform': {
    color: 'from-lime-500 to-green-600',
    accentColor: 'bg-lime-600/20 text-lime-400',
    icon: Truck,
    heroTitle: { en: 'Delivery Platform', ar: 'منصة التوصيل' },
    heroDesc: { en: 'Orders, drivers, tracking & logistics', ar: 'الطلبات والسائقين والتتبع واللوجستيات' },
  },
  'Booking System': {
    color: 'from-cyan-500 to-teal-600',
    accentColor: 'bg-cyan-600/20 text-cyan-400',
    icon: Calendar,
    heroTitle: { en: 'Booking System', ar: 'نظام الحجوزات' },
    heroDesc: { en: 'Appointments, availability & reminders', ar: 'المواعيد والتوافر والتذكيرات' },
  },
  'Gym Management': {
    color: 'from-red-600 to-orange-600',
    accentColor: 'bg-red-600/20 text-red-400',
    icon: Dumbbell,
    heroTitle: { en: 'Gym Management', ar: 'إدارة الصالة الرياضية' },
    heroDesc: { en: 'Members, subscriptions, trainers & classes', ar: 'الأعضاء والاشتراكات والمدربين والحصص' },
  },
  'Hotel Booking': {
    color: 'from-amber-600 to-yellow-600',
    accentColor: 'bg-amber-600/20 text-amber-400',
    icon: Hotel,
    heroTitle: { en: 'Hotel Booking', ar: 'حجز الفنادق' },
    heroDesc: { en: 'Rooms, reservations, guests & housekeeping', ar: 'الغرف والحجوزات والضيوف والتنظيف' },
  },
  'Event Platform': {
    color: 'from-fuchsia-500 to-purple-600',
    accentColor: 'bg-fuchsia-600/20 text-fuchsia-400',
    icon: Ticket,
    heroTitle: { en: 'Event Platform', ar: 'منصة الفعاليات' },
    heroDesc: { en: 'Events, tickets, venues & attendees', ar: 'الفعاليات والتذاكر والأماكن والحضور' },
  },
  'Retail POS': {
    color: 'from-teal-600 to-cyan-600',
    accentColor: 'bg-teal-600/20 text-teal-400',
    icon: Monitor,
    heroTitle: { en: 'Retail POS', ar: 'نقطة بيع التجزئة' },
    heroDesc: { en: 'Sales, inventory, returns & reports', ar: 'المبيعات والمخزون والمرتجعات والتقارير' },
  },
  'Logistics Platform': {
    color: 'from-blue-600 to-indigo-600',
    accentColor: 'bg-blue-600/20 text-blue-400',
    icon: Truck,
    heroTitle: { en: 'Logistics Platform', ar: 'المنصة اللوجستية' },
    heroDesc: { en: 'Shipments, routes, fleet & warehouse ops', ar: 'الشحنات والمسارات والأسطول وعمليات المستودع' },
  },
  'Online Store': {
    color: 'from-purple-500 to-fuchsia-600',
    accentColor: 'bg-purple-600/20 text-purple-400',
    icon: Store,
    heroTitle: { en: 'Online Store', ar: 'المتجر الإلكتروني' },
    heroDesc: { en: 'Products, orders, payments & shipping', ar: 'المنتجات والطلبات والمدفوعات والشحن' },
  },
  'Social Pages Store': {
    color: 'from-blue-500 to-indigo-600',
    accentColor: 'bg-blue-500/20 text-blue-400',
    icon: Share2,
    heroTitle: { en: 'Social Pages Store', ar: 'متجر صفحات السوشيال' },
    heroDesc: { en: 'Buy & sell social media pages and boost followers', ar: 'بيع وشراء صفحات السوشيال وزيادة المتابعين' },
  },
  'Social Media Management': {
    color: 'from-violet-500 to-purple-600',
    accentColor: 'bg-violet-500/20 text-violet-400',
    icon: TrendingUp,
    heroTitle: { en: 'Social Media Management', ar: 'إدارة السوشيال ميديا' },
    heroDesc: { en: 'Schedule posts, analyze performance & grow audience', ar: 'جدولة المنشورات وتحليل الأداء ونمو الجمهور' },
  },
};

// Sidebar items per category
export function getSidebarItems(cat: string) {
  const base = [
    { icon: Home, label: 'Dashboard' },
    { icon: BarChart3, label: 'Analytics' },
  ];
  const map: Record<string, { icon: LucideIcon; label: string }[]> = {
    'Clinic Management': [{ icon: Users, label: 'Patients' }, { icon: Calendar, label: 'Appointments' }, { icon: FileText, label: 'Medical Records' }, { icon: Pill, label: 'Prescriptions' }, { icon: CreditCard, label: 'Billing' }],
    'Pharmacy Platform': [{ icon: Package, label: 'Inventory' }, { icon: FileText, label: 'Prescriptions' }, { icon: ShoppingCart, label: 'Orders' }, { icon: Bell, label: 'Expiry Alerts' }, { icon: Truck, label: 'Suppliers' }],
    'Restaurant POS': [{ icon: ShoppingCart, label: 'Orders' }, { icon: Menu, label: 'Menu' }, { icon: Users, label: 'Staff' }, { icon: CreditCard, label: 'Payments' }, { icon: Clock, label: 'Kitchen' }],
    'Digital Menu': [{ icon: Menu, label: 'Menu Items' }, { icon: Star, label: 'Featured' }, { icon: ShoppingCart, label: 'Orders' }, { icon: Package, label: 'Categories' }],
    'HR System': [{ icon: Users, label: 'Employees' }, { icon: Calendar, label: 'Leave Mgmt' }, { icon: CreditCard, label: 'Payroll' }, { icon: FileText, label: 'Performance' }, { icon: Shield, label: 'Compliance' }],
    'CRM System': [{ icon: Users, label: 'Contacts' }, { icon: Star, label: 'Deals' }, { icon: FileText, label: 'Pipeline' }, { icon: Bell, label: 'Tasks' }, { icon: BarChart3, label: 'Forecasts' }],
    'Marketplace': [{ icon: Package, label: 'Products' }, { icon: ShoppingCart, label: 'Orders' }, { icon: Users, label: 'Sellers' }, { icon: CreditCard, label: 'Payments' }, { icon: Star, label: 'Reviews' }],
    'Real Estate': [{ icon: Home, label: 'Properties' }, { icon: Users, label: 'Tenants' }, { icon: Calendar, label: 'Viewings' }, { icon: CreditCard, label: 'Payments' }, { icon: FileText, label: 'Contracts' }],
    'School Management': [{ icon: GraduationCap, label: 'Students' }, { icon: BookOpen, label: 'Classes' }, { icon: FileText, label: 'Grades' }, { icon: Calendar, label: 'Attendance' }, { icon: Users, label: 'Teachers' }],
    'Inventory System': [{ icon: Package, label: 'Products' }, { icon: Warehouse, label: 'Warehouses' }, { icon: Truck, label: 'Suppliers' }, { icon: FileText, label: 'Purchase Orders' }, { icon: Bell, label: 'Low Stock' }],
    'Hospital Platform': [{ icon: Users, label: 'Patients' }, { icon: Activity, label: 'Departments' }, { icon: Calendar, label: 'Surgeries' }, { icon: FileText, label: 'Lab Results' }, { icon: Pill, label: 'Pharmacy' }],
    'Delivery Platform': [{ icon: ShoppingCart, label: 'Orders' }, { icon: Truck, label: 'Drivers' }, { icon: MapPin, label: 'Tracking' }, { icon: Clock, label: 'Schedule' }, { icon: Star, label: 'Ratings' }],
    'Booking System': [{ icon: Calendar, label: 'Bookings' }, { icon: Clock, label: 'Availability' }, { icon: Users, label: 'Clients' }, { icon: Bell, label: 'Reminders' }, { icon: CreditCard, label: 'Payments' }],
    'Gym Management': [{ icon: Users, label: 'Members' }, { icon: Dumbbell, label: 'Classes' }, { icon: Calendar, label: 'Schedule' }, { icon: CreditCard, label: 'Subscriptions' }, { icon: Star, label: 'Trainers' }],
    'Hotel Booking': [{ icon: Hotel, label: 'Rooms' }, { icon: Calendar, label: 'Reservations' }, { icon: Users, label: 'Guests' }, { icon: CreditCard, label: 'Billing' }, { icon: Star, label: 'Reviews' }],
    'Event Platform': [{ icon: Ticket, label: 'Events' }, { icon: Users, label: 'Attendees' }, { icon: MapPin, label: 'Venues' }, { icon: CreditCard, label: 'Tickets' }, { icon: Calendar, label: 'Schedule' }],
    'Retail POS': [{ icon: ShoppingCart, label: 'Sales' }, { icon: Package, label: 'Products' }, { icon: Users, label: 'Customers' }, { icon: CreditCard, label: 'Payments' }, { icon: FileText, label: 'Returns' }],
    'Logistics Platform': [{ icon: Truck, label: 'Shipments' }, { icon: MapPin, label: 'Routes' }, { icon: Package, label: 'Fleet' }, { icon: Warehouse, label: 'Warehouses' }, { icon: FileText, label: 'Documents' }],
    'Online Store': [{ icon: Package, label: 'Products' }, { icon: ShoppingCart, label: 'Orders' }, { icon: CreditCard, label: 'Payments' }, { icon: Truck, label: 'Shipping' }, { icon: Star, label: 'Reviews' }],
    'Social Pages Store': [{ icon: Share2, label: 'Pages' }, { icon: Users, label: 'Sellers' }, { icon: TrendingUp, label: 'Followers' }, { icon: CreditCard, label: 'Transactions' }, { icon: Shield, label: 'Escrow' }],
    'Social Media Management': [{ icon: Calendar, label: 'Schedule' }, { icon: FileText, label: 'Content' }, { icon: TrendingUp, label: 'Growth' }, { icon: Users, label: 'Accounts' }, { icon: BarChart3, label: 'Reports' }],
  };
  const extra = map[cat] || [{ icon: Package, label: 'Items' }, { icon: Users, label: 'Users' }, { icon: FileText, label: 'Reports' }];
  return [...base, ...extra, { icon: Settings, label: 'Settings' }];
}

// Stats per category
export function getStats(cat: string) {
  const map: Record<string, { label: string; value: string; change: number; icon: LucideIcon }[]> = {
    'Clinic Management': [
      { label: 'Total Patients', value: '2,847', change: 12, icon: Users },
      { label: 'Appointments Today', value: '38', change: 8, icon: Calendar },
      { label: 'Monthly Revenue', value: '$48.5K', change: 15, icon: BarChart3 },
      { label: 'Satisfaction Rate', value: '96%', change: 3, icon: Star },
    ],
    'Pharmacy Platform': [
      { label: 'Total Products', value: '4,521', change: 6, icon: Package },
      { label: 'Prescriptions', value: '234', change: 14, icon: FileText },
      { label: 'Daily Sales', value: '$8.2K', change: 11, icon: BarChart3 },
      { label: 'Expiring Soon', value: '18', change: -5, icon: Bell },
    ],
    'Restaurant POS': [
      { label: 'Orders Today', value: '284', change: 18, icon: ShoppingCart },
      { label: 'Revenue', value: '$12.4K', change: 22, icon: BarChart3 },
      { label: 'Avg Order Value', value: '$43.6', change: 5, icon: CreditCard },
      { label: 'Active Tables', value: '18/24', change: 0, icon: Users },
    ],
    'Digital Menu': [
      { label: 'Menu Views', value: '1,892', change: 25, icon: Menu },
      { label: 'QR Scans', value: '456', change: 30, icon: Search },
      { label: 'Online Orders', value: '89', change: 15, icon: ShoppingCart },
      { label: 'Menu Items', value: '124', change: 4, icon: Package },
    ],
    'HR System': [
      { label: 'Total Employees', value: '456', change: 3, icon: Users },
      { label: 'On Leave', value: '12', change: -2, icon: Calendar },
      { label: 'Payroll', value: '$284K', change: 5, icon: CreditCard },
      { label: 'Open Positions', value: '8', change: 12, icon: Star },
    ],
    'CRM System': [
      { label: 'Total Contacts', value: '5,672', change: 14, icon: Users },
      { label: 'Active Deals', value: '89', change: 21, icon: Star },
      { label: 'Pipeline Value', value: '$1.2M', change: 18, icon: BarChart3 },
      { label: 'Win Rate', value: '34%', change: 7, icon: Shield },
    ],
    'Marketplace': [
      { label: 'Total Products', value: '12,456', change: 14, icon: Package },
      { label: 'Active Orders', value: '3,892', change: 21, icon: ShoppingCart },
      { label: 'Monthly GMV', value: '$284K', change: 18, icon: BarChart3 },
      { label: 'Active Sellers', value: '342', change: 9, icon: Users },
    ],
    'Real Estate': [
      { label: 'Listed Properties', value: '234', change: 8, icon: Home },
      { label: 'Active Tenants', value: '189', change: 5, icon: Users },
      { label: 'Monthly Rent', value: '$156K', change: 12, icon: CreditCard },
      { label: 'Viewings', value: '45', change: 15, icon: Calendar },
    ],
    'School Management': [
      { label: 'Total Students', value: '1,245', change: 4, icon: GraduationCap },
      { label: 'Teachers', value: '86', change: 2, icon: Users },
      { label: 'Avg Grade', value: 'B+', change: 6, icon: Star },
      { label: 'Attendance', value: '94%', change: 3, icon: Calendar },
    ],
    'Inventory System': [
      { label: 'Total SKUs', value: '8,934', change: 7, icon: Package },
      { label: 'Low Stock Items', value: '23', change: -12, icon: Bell },
      { label: 'Stock Value', value: '$456K', change: 9, icon: BarChart3 },
      { label: 'Suppliers', value: '67', change: 4, icon: Truck },
    ],
    'Hospital Platform': [
      { label: 'Patients Today', value: '312', change: 8, icon: Users },
      { label: 'Surgeries', value: '14', change: 5, icon: Activity },
      { label: 'Beds Available', value: '42/180', change: 0, icon: Home },
      { label: 'Revenue', value: '$234K', change: 11, icon: BarChart3 },
    ],
    'Delivery Platform': [
      { label: 'Active Orders', value: '186', change: 22, icon: ShoppingCart },
      { label: 'Drivers Online', value: '34', change: 8, icon: Truck },
      { label: 'Avg Delivery', value: '28 min', change: -5, icon: Clock },
      { label: 'Revenue', value: '$18.6K', change: 15, icon: BarChart3 },
    ],
    'Booking System': [
      { label: 'Total Bookings', value: '456', change: 18, icon: Calendar },
      { label: 'Today\'s Slots', value: '24/36', change: 0, icon: Clock },
      { label: 'Revenue', value: '$12.8K', change: 14, icon: BarChart3 },
      { label: 'Repeat Clients', value: '67%', change: 6, icon: Star },
    ],
    'Gym Management': [
      { label: 'Active Members', value: '892', change: 10, icon: Users },
      { label: 'Today\'s Classes', value: '12', change: 0, icon: Dumbbell },
      { label: 'Monthly Revenue', value: '$34K', change: 8, icon: BarChart3 },
      { label: 'Trainers', value: '18', change: 2, icon: Star },
    ],
    'Hotel Booking': [
      { label: 'Occupancy', value: '78%', change: 12, icon: Hotel },
      { label: 'Check-ins Today', value: '24', change: 8, icon: Users },
      { label: 'Revenue', value: '$45.6K', change: 15, icon: BarChart3 },
      { label: 'Avg Rating', value: '4.7', change: 3, icon: Star },
    ],
    'Event Platform': [
      { label: 'Active Events', value: '34', change: 18, icon: Ticket },
      { label: 'Tickets Sold', value: '4,567', change: 25, icon: CreditCard },
      { label: 'Revenue', value: '$89K', change: 22, icon: BarChart3 },
      { label: 'Attendees', value: '8,234', change: 15, icon: Users },
    ],
    'Retail POS': [
      { label: 'Sales Today', value: '156', change: 12, icon: ShoppingCart },
      { label: 'Revenue', value: '$8.9K', change: 8, icon: BarChart3 },
      { label: 'Avg Basket', value: '$57', change: 5, icon: CreditCard },
      { label: 'Products', value: '2,345', change: 3, icon: Package },
    ],
    'Logistics Platform': [
      { label: 'Active Shipments', value: '234', change: 14, icon: Truck },
      { label: 'On-Time Rate', value: '94%', change: 3, icon: Clock },
      { label: 'Fleet Size', value: '48', change: 6, icon: Package },
      { label: 'Revenue', value: '$124K', change: 11, icon: BarChart3 },
    ],
  };
  return map[cat] || [
    { label: 'Total Users', value: '1,234', change: 12, icon: Users },
    { label: 'Active Now', value: '89', change: 5, icon: Wifi },
    { label: 'Revenue', value: '$24.8K', change: 18, icon: BarChart3 },
    { label: 'Tasks Done', value: '456', change: 8, icon: Shield },
  ];
}

// Table headers per category
export function getTableHeaders(cat: string) {
  const map: Record<string, string[]> = {
    'Clinic Management': ['ID', 'Patient', 'Doctor', 'Date', 'Status'],
    'Pharmacy Platform': ['ID', 'Medicine', 'Stock', 'Price', 'Expiry'],
    'Restaurant POS': ['#', 'Table', 'Items', 'Total', 'Status'],
    'Digital Menu': ['#', 'Item', 'Category', 'Price', 'Popular'],
    'HR System': ['ID', 'Employee', 'Department', 'Role', 'Status'],
    'CRM System': ['#', 'Contact', 'Company', 'Deal Value', 'Stage'],
    'Marketplace': ['#', 'Product', 'Seller', 'Price', 'Stock'],
    'Real Estate': ['#', 'Property', 'Type', 'Price', 'Status'],
    'School Management': ['#', 'Student', 'Class', 'Grade', 'Attendance'],
    'Inventory System': ['#', 'Product', 'SKU', 'Stock', 'Status'],
    'Hospital Platform': ['#', 'Patient', 'Department', 'Doctor', 'Status'],
    'Delivery Platform': ['#', 'Order', 'Driver', 'ETA', 'Status'],
    'Booking System': ['#', 'Client', 'Service', 'Time', 'Status'],
    'Gym Management': ['#', 'Member', 'Plan', 'Expiry', 'Status'],
    'Hotel Booking': ['#', 'Guest', 'Room', 'Check-in', 'Status'],
    'Event Platform': ['#', 'Event', 'Venue', 'Tickets', 'Status'],
    'Retail POS': ['#', 'Transaction', 'Items', 'Total', 'Payment'],
    'Logistics Platform': ['#', 'Shipment', 'Origin', 'Destination', 'Status'],
  };
  return map[cat] || ['ID', 'Name', 'Type', 'Date', 'Status'];
}

// Table rows per category
export function getTableRows(cat: string) {
  const map: Record<string, string[][]> = {
    'Clinic Management': [
      ['#1042', 'Ahmed Hassan', 'Dr. Sara Ali', '2026-03-13', '✅ Confirmed'],
      ['#1041', 'Fatima Omar', 'Dr. Mohamed', '2026-03-13', '⏳ Waiting'],
      ['#1040', 'Khalid Nour', 'Dr. Sara Ali', '2026-03-12', '✅ Completed'],
      ['#1039', 'Layla Ibrahim', 'Dr. Youssef', '2026-03-12', '✅ Completed'],
      ['#1038', 'Omar Saeed', 'Dr. Hana', '2026-03-11', '❌ Cancelled'],
    ],
    'Pharmacy Platform': [
      ['#P301', 'Amoxicillin 500mg', '2,340', '$8.50', '2027-06'],
      ['#P302', 'Paracetamol 500mg', '5,120', '$3.20', '2027-09'],
      ['#P303', 'Metformin 850mg', '890', '$12.00', '2026-12'],
      ['#P304', 'Omeprazole 20mg', '1,456', '$15.50', '2027-03'],
      ['#P305', 'Vitamin D3', '3,200', '$6.80', '2028-01'],
    ],
    'Restaurant POS': [
      ['#284', 'Table 5', '4 items', '$86.50', '🟢 Served'],
      ['#283', 'Table 12', '2 items', '$43.00', '🟡 Preparing'],
      ['#282', 'Takeaway', '6 items', '$124.80', '🟢 Ready'],
      ['#281', 'Table 3', '3 items', '$67.20', '🟡 Preparing'],
      ['#280', 'Delivery', '5 items', '$98.40', '🔵 Dispatched'],
    ],
    'Digital Menu': [
      ['#1', 'Grilled Chicken', 'Main Course', '$18.90', '⭐ 342'],
      ['#2', 'Caesar Salad', 'Appetizer', '$12.50', '⭐ 289'],
      ['#3', 'Margherita Pizza', 'Pizza', '$15.00', '⭐ 456'],
      ['#4', 'Chocolate Cake', 'Dessert', '$8.90', '⭐ 198'],
      ['#5', 'Fresh Juice', 'Beverages', '$6.50', '⭐ 234'],
    ],
    'HR System': [
      ['#E101', 'Sara Ahmed', 'Engineering', 'Senior Dev', '🟢 Active'],
      ['#E102', 'Mohamed Ali', 'Marketing', 'Manager', '🟢 Active'],
      ['#E103', 'Nour Hassan', 'HR', 'Specialist', '🟡 On Leave'],
      ['#E104', 'Amira Khalil', 'Finance', 'Analyst', '🟢 Active'],
      ['#E105', 'Youssef Omar', 'Sales', 'Executive', '🟢 Active'],
    ],
    'CRM System': [
      ['#C01', 'TechCorp Ltd', 'Technology', '$45,000', '🟢 Negotiation'],
      ['#C02', 'MediHealth', 'Healthcare', '$120,000', '🟡 Proposal'],
      ['#C03', 'EduFirst', 'Education', '$28,000', '🟢 Closed Won'],
      ['#C04', 'BuildPro', 'Construction', '$85,000', '⏳ Discovery'],
      ['#C05', 'FoodChain', 'F&B', '$62,000', '🟡 Proposal'],
    ],
    'Marketplace': [
      ['#12456', 'Wireless Earbuds', 'TechStore', '$29.99', '156'],
      ['#12455', 'Leather Wallet', 'StyleHub', '$45.00', '89'],
      ['#12454', 'Running Shoes', 'SportMax', '$89.99', '234'],
      ['#12453', 'Smart Watch', 'GadgetPro', '$199.00', '67'],
      ['#12452', 'Yoga Mat', 'FitGear', '$24.99', '312'],
    ],
    'Real Estate': [
      ['#R01', 'Marina Tower Apt', 'Apartment', '$1,200/mo', '🟢 Available'],
      ['#R02', 'Palm Villa', 'Villa', '$3,500/mo', '🔴 Occupied'],
      ['#R03', 'Downtown Office', 'Commercial', '$2,800/mo', '🟢 Available'],
      ['#R04', 'Garden Duplex', 'Duplex', '$1,800/mo', '🟡 Reserved'],
      ['#R05', 'City Studio', 'Studio', '$650/mo', '🔴 Occupied'],
    ],
    'School Management': [
      ['#S01', 'Ahmed Mostafa', '10-A', 'A', '98%'],
      ['#S02', 'Sara Ibrahim', '10-B', 'B+', '95%'],
      ['#S03', 'Omar Khalid', '11-A', 'A-', '92%'],
      ['#S04', 'Layla Hassan', '9-C', 'B', '88%'],
      ['#S05', 'Youssef Ali', '12-A', 'A+', '99%'],
    ],
    'Inventory System': [
      ['#I01', 'Widget A', 'WDG-001', '2,340', '🟢 In Stock'],
      ['#I02', 'Gadget B', 'GDG-002', '45', '🟡 Low Stock'],
      ['#I03', 'Part C', 'PRT-003', '890', '🟢 In Stock'],
      ['#I04', 'Tool D', 'TL-004', '12', '🔴 Critical'],
      ['#I05', 'Supply E', 'SPL-005', '1,200', '🟢 In Stock'],
    ],
    'Hospital Platform': [
      ['#H01', 'Patient A', 'Cardiology', 'Dr. Ahmed', '🟢 Stable'],
      ['#H02', 'Patient B', 'Orthopedics', 'Dr. Sara', '🟡 In Surgery'],
      ['#H03', 'Patient C', 'Emergency', 'Dr. Omar', '🔴 Critical'],
      ['#H04', 'Patient D', 'Pediatrics', 'Dr. Nour', '🟢 Discharged'],
      ['#H05', 'Patient E', 'Neurology', 'Dr. Khalid', '🟢 Stable'],
    ],
    'Delivery Platform': [
      ['#D01', 'ORD-4521', 'Driver Ali', '15 min', '🟢 On Way'],
      ['#D02', 'ORD-4520', 'Driver Sara', '8 min', '🟡 Picking Up'],
      ['#D03', 'ORD-4519', 'Driver Omar', 'Delivered', '✅ Done'],
      ['#D04', 'ORD-4518', 'Driver Nour', '22 min', '🟢 On Way'],
      ['#D05', 'ORD-4517', 'Unassigned', 'Pending', '⏳ Queue'],
    ],
    'Booking System': [
      ['#B01', 'Ahmed H.', 'Consultation', '10:00 AM', '🟢 Confirmed'],
      ['#B02', 'Sara M.', 'Follow-up', '11:30 AM', '🟢 Confirmed'],
      ['#B03', 'Omar K.', 'New Visit', '2:00 PM', '⏳ Pending'],
      ['#B04', 'Layla I.', 'Treatment', '3:30 PM', '🟢 Confirmed'],
      ['#B05', 'Khalid N.', 'Check-up', '5:00 PM', '❌ Cancelled'],
    ],
    'Gym Management': [
      ['#G01', 'Ahmed Ali', 'Premium', '2026-12-31', '🟢 Active'],
      ['#G02', 'Sara Hassan', 'Basic', '2026-06-15', '🟡 Expiring'],
      ['#G03', 'Omar Nour', 'Premium', '2027-03-01', '🟢 Active'],
      ['#G04', 'Nour Said', 'VIP', '2026-09-30', '🟢 Active'],
      ['#G05', 'Khalid Omar', 'Basic', '2026-04-01', '🔴 Expired'],
    ],
    'Hotel Booking': [
      ['#HB01', 'Mr. Johnson', 'Suite 401', 'Mar 13', '🟢 Checked In'],
      ['#HB02', 'Ms. Smith', 'Room 205', 'Mar 14', '⏳ Arriving'],
      ['#HB03', 'Dr. Ahmed', 'Suite 502', 'Mar 13', '🟢 Checked In'],
      ['#HB04', 'Mrs. Lee', 'Room 112', 'Mar 15', '⏳ Reserved'],
      ['#HB05', 'Mr. Garcia', 'Room 308', 'Mar 12', '🔵 Checked Out'],
    ],
    'Event Platform': [
      ['#EV01', 'Tech Summit 2026', 'Grand Hall', '500/500', '🟢 Sold Out'],
      ['#EV02', 'Music Festival', 'Open Arena', '3,200/5,000', '🟡 Selling'],
      ['#EV03', 'Art Exhibition', 'Gallery A', '120/200', '🟡 Selling'],
      ['#EV04', 'Startup Pitch', 'Conference B', '80/100', '🟢 Almost Full'],
      ['#EV05', 'Food Carnival', 'City Park', '1,800/3,000', '🟡 Selling'],
    ],
    'Retail POS': [
      ['#T01', 'TXN-8921', '5 items', '$234.50', '💳 Card'],
      ['#T02', 'TXN-8920', '2 items', '$45.00', '💵 Cash'],
      ['#T03', 'TXN-8919', '8 items', '$312.80', '💳 Card'],
      ['#T04', 'TXN-8918', '1 item', '$89.99', '📱 Mobile Pay'],
      ['#T05', 'TXN-8917', '3 items', '$67.50', '💵 Cash'],
    ],
    'Logistics Platform': [
      ['#L01', 'SHP-2341', 'Cairo', 'Alexandria', '🟢 In Transit'],
      ['#L02', 'SHP-2340', 'Dubai', 'Riyadh', '🟡 Loading'],
      ['#L03', 'SHP-2339', 'Cairo', 'Luxor', '✅ Delivered'],
      ['#L04', 'SHP-2338', 'Jeddah', 'Dammam', '🟢 In Transit'],
      ['#L05', 'SHP-2337', 'Cairo', 'Aswan', '⏳ Scheduled'],
    ],
  };
  return map[cat] || [
    ['#001', 'Item Alpha', 'Type A', '2026-03-13', '✅ Active'],
    ['#002', 'Item Beta', 'Type B', '2026-03-12', '⏳ Pending'],
    ['#003', 'Item Gamma', 'Type A', '2026-03-11', '✅ Active'],
    ['#004', 'Item Delta', 'Type C', '2026-03-10', '✅ Active'],
  ];
}

// Quick actions per category
export function getQuickActions(cat: string) {
  const map: Record<string, { icon: LucideIcon; label: string; desc: string }[]> = {
    'Clinic Management': [
      { icon: Calendar, label: 'New Appointment', desc: 'Schedule a patient visit' },
      { icon: Users, label: 'Add Patient', desc: 'Register new patient' },
      { icon: FileText, label: 'Generate Report', desc: 'Monthly analytics' },
    ],
    'Pharmacy Platform': [
      { icon: Package, label: 'Add Medicine', desc: 'Register new product' },
      { icon: FileText, label: 'New Prescription', desc: 'Process prescription' },
      { icon: Bell, label: 'Check Expiry', desc: 'View expiring items' },
    ],
    'Restaurant POS': [
      { icon: ShoppingCart, label: 'New Order', desc: 'Create a new order' },
      { icon: Menu, label: 'Edit Menu', desc: 'Update menu items' },
      { icon: BarChart3, label: 'Sales Report', desc: 'View daily sales' },
    ],
    'Digital Menu': [
      { icon: Menu, label: 'Add Item', desc: 'Add new menu item' },
      { icon: Star, label: 'Set Featured', desc: 'Highlight specials' },
      { icon: BarChart3, label: 'View Stats', desc: 'Menu analytics' },
    ],
    'HR System': [
      { icon: Users, label: 'New Employee', desc: 'Onboard a new hire' },
      { icon: CreditCard, label: 'Run Payroll', desc: 'Process monthly payroll' },
      { icon: Calendar, label: 'Leave Request', desc: 'Manage leave' },
    ],
    'CRM System': [
      { icon: Users, label: 'Add Contact', desc: 'Register new lead' },
      { icon: Star, label: 'Create Deal', desc: 'Start new deal' },
      { icon: BarChart3, label: 'Sales Forecast', desc: 'Revenue projection' },
    ],
    'Marketplace': [
      { icon: Package, label: 'Add Product', desc: 'List a new product' },
      { icon: ShoppingCart, label: 'Process Orders', desc: 'Handle pending orders' },
      { icon: BarChart3, label: 'Analytics', desc: 'Sales performance' },
    ],
    'Real Estate': [
      { icon: Home, label: 'Add Property', desc: 'List new property' },
      { icon: Calendar, label: 'Schedule Viewing', desc: 'Book a showing' },
      { icon: FileText, label: 'New Contract', desc: 'Create lease agreement' },
    ],
    'School Management': [
      { icon: GraduationCap, label: 'Enroll Student', desc: 'New enrollment' },
      { icon: FileText, label: 'Enter Grades', desc: 'Update gradebook' },
      { icon: Calendar, label: 'Mark Attendance', desc: 'Daily attendance' },
    ],
    'Inventory System': [
      { icon: Package, label: 'Add Product', desc: 'Register new SKU' },
      { icon: Truck, label: 'Purchase Order', desc: 'Order from supplier' },
      { icon: BarChart3, label: 'Stock Report', desc: 'Inventory analytics' },
    ],
    'Hospital Platform': [
      { icon: Users, label: 'Admit Patient', desc: 'New admission' },
      { icon: Calendar, label: 'Schedule Surgery', desc: 'Book operation' },
      { icon: FileText, label: 'Lab Request', desc: 'Order lab tests' },
    ],
    'Delivery Platform': [
      { icon: ShoppingCart, label: 'New Order', desc: 'Create delivery order' },
      { icon: Truck, label: 'Assign Driver', desc: 'Dispatch delivery' },
      { icon: MapPin, label: 'Track Live', desc: 'Real-time tracking' },
    ],
    'Booking System': [
      { icon: Calendar, label: 'New Booking', desc: 'Schedule appointment' },
      { icon: Clock, label: 'Set Availability', desc: 'Update time slots' },
      { icon: Bell, label: 'Send Reminder', desc: 'Notify clients' },
    ],
    'Gym Management': [
      { icon: Users, label: 'New Member', desc: 'Register member' },
      { icon: Dumbbell, label: 'Add Class', desc: 'Schedule new class' },
      { icon: CreditCard, label: 'Process Payment', desc: 'Subscription billing' },
    ],
    'Hotel Booking': [
      { icon: Calendar, label: 'New Reservation', desc: 'Book a room' },
      { icon: Users, label: 'Check-In Guest', desc: 'Guest arrival' },
      { icon: Star, label: 'View Reviews', desc: 'Guest feedback' },
    ],
    'Event Platform': [
      { icon: Ticket, label: 'Create Event', desc: 'Set up new event' },
      { icon: CreditCard, label: 'Sell Tickets', desc: 'Ticket sales' },
      { icon: MapPin, label: 'Book Venue', desc: 'Reserve location' },
    ],
    'Retail POS': [
      { icon: ShoppingCart, label: 'New Sale', desc: 'Process transaction' },
      { icon: Package, label: 'Add Product', desc: 'Register new item' },
      { icon: FileText, label: 'Process Return', desc: 'Handle refund' },
    ],
    'Logistics Platform': [
      { icon: Truck, label: 'New Shipment', desc: 'Create shipment' },
      { icon: MapPin, label: 'Plan Route', desc: 'Optimize delivery' },
      { icon: FileText, label: 'Generate BOL', desc: 'Bill of lading' },
    ],
  };
  return map[cat] || [
    { icon: FileText, label: 'New Record', desc: 'Create new entry' },
    { icon: Users, label: 'Manage Users', desc: 'User permissions' },
    { icon: BarChart3, label: 'View Reports', desc: 'Analytics dashboard' },
  ];
}

// Section-specific content for each sidebar page
export interface SectionContent {
  title: string;
  description: string;
  headers: string[];
  rows: string[][];
  stats: { label: string; value: string }[];
}

export function getSectionContent(sidebarLabel: string): SectionContent {
  const sections: Record<string, SectionContent> = {
    'Dashboard': {
      title: 'Dashboard', description: 'Overview of all key metrics',
      headers: [], rows: [], stats: [],
    },
    'Analytics': {
      title: 'Analytics', description: 'Detailed performance metrics and trends',
      headers: ['Metric', 'This Month', 'Last Month', 'Change'],
      rows: [
        ['Page Views', '24,891', '21,340', '+16.6%'],
        ['Sessions', '8,432', '7,890', '+6.9%'],
        ['Bounce Rate', '32.4%', '35.1%', '-2.7%'],
        ['Avg Duration', '4m 23s', '3m 58s', '+10.5%'],
        ['Conversions', '342', '298', '+14.8%'],
      ],
      stats: [{ label: 'Total Views', value: '24,891' }, { label: 'Conversion Rate', value: '4.1%' }, { label: 'Avg Session', value: '4m 23s' }],
    },
    'Patients': {
      title: 'Patients', description: 'Manage all registered patients',
      headers: ['ID', 'Name', 'Age', 'Phone', 'Last Visit', 'Status'],
      rows: [
        ['#P001', 'Ahmed Hassan', '34', '+20 1xx xxx', '2026-03-12', '🟢 Active'],
        ['#P002', 'Fatima Omar', '28', '+20 1xx xxx', '2026-03-10', '🟢 Active'],
        ['#P003', 'Khalid Nour', '45', '+20 1xx xxx', '2026-02-28', '🟡 Follow-up'],
        ['#P004', 'Layla Ibrahim', '52', '+20 1xx xxx', '2026-03-13', '🟢 Active'],
        ['#P005', 'Omar Saeed', '39', '+20 1xx xxx', '2026-01-15', '⚪ Inactive'],
      ],
      stats: [{ label: 'Total Patients', value: '2,847' }, { label: 'New This Month', value: '124' }, { label: 'Active', value: '2,340' }],
    },
    'Appointments': {
      title: 'Appointments', description: 'Schedule and manage appointments',
      headers: ['Time', 'Patient', 'Doctor', 'Type', 'Status'],
      rows: [
        ['09:00', 'Ahmed H.', 'Dr. Sara', 'Check-up', '✅ Confirmed'],
        ['09:30', 'Fatima O.', 'Dr. Mohamed', 'Follow-up', '✅ Confirmed'],
        ['10:00', 'Khalid N.', 'Dr. Sara', 'Consultation', '⏳ Pending'],
        ['10:30', 'Layla I.', 'Dr. Youssef', 'Treatment', '✅ Confirmed'],
        ['11:00', 'Omar S.', 'Dr. Hana', 'New Patient', '⏳ Pending'],
        ['11:30', 'Sara M.', 'Dr. Mohamed', 'Check-up', '❌ Cancelled'],
      ],
      stats: [{ label: 'Today', value: '38' }, { label: 'This Week', value: '156' }, { label: 'Pending', value: '12' }],
    },
    'Medical Records': {
      title: 'Medical Records', description: 'Patient history and documents',
      headers: ['Record ID', 'Patient', 'Type', 'Date', 'Doctor'],
      rows: [
        ['#MR-301', 'Ahmed H.', 'Lab Results', '2026-03-12', 'Dr. Sara'],
        ['#MR-300', 'Fatima O.', 'X-Ray', '2026-03-10', 'Dr. Mohamed'],
        ['#MR-299', 'Khalid N.', 'Prescription', '2026-03-09', 'Dr. Sara'],
        ['#MR-298', 'Layla I.', 'Diagnosis', '2026-03-08', 'Dr. Youssef'],
      ],
      stats: [{ label: 'Total Records', value: '12,456' }, { label: 'This Month', value: '342' }, { label: 'Pending Review', value: '18' }],
    },
    'Prescriptions': {
      title: 'Prescriptions', description: 'Manage prescriptions and medications',
      headers: ['Rx ID', 'Patient', 'Medication', 'Dosage', 'Status'],
      rows: [
        ['#RX-501', 'Ahmed H.', 'Amoxicillin 500mg', '3x daily - 7 days', '🟢 Active'],
        ['#RX-500', 'Fatima O.', 'Omeprazole 20mg', '1x daily - 30 days', '🟢 Active'],
        ['#RX-499', 'Khalid N.', 'Metformin 850mg', '2x daily - 90 days', '🟢 Active'],
        ['#RX-498', 'Layla I.', 'Paracetamol 500mg', 'As needed', '⚪ Completed'],
      ],
      stats: [{ label: 'Active Rx', value: '456' }, { label: 'Issued Today', value: '23' }, { label: 'Refills Due', value: '8' }],
    },
    'Billing': {
      title: 'Billing', description: 'Invoices and payment tracking',
      headers: ['Invoice', 'Patient', 'Service', 'Amount', 'Status'],
      rows: [
        ['#INV-1042', 'Ahmed H.', 'Consultation', '$150.00', '✅ Paid'],
        ['#INV-1041', 'Fatima O.', 'Lab Tests', '$280.00', '⏳ Pending'],
        ['#INV-1040', 'Khalid N.', 'X-Ray + Consult', '$420.00', '✅ Paid'],
        ['#INV-1039', 'Layla I.', 'Treatment Plan', '$650.00', '🟡 Partial'],
      ],
      stats: [{ label: 'Revenue (MTD)', value: '$48.5K' }, { label: 'Pending', value: '$12.3K' }, { label: 'Overdue', value: '$2.1K' }],
    },
    'Orders': {
      title: 'Orders', description: 'View and manage all orders',
      headers: ['Order #', 'Customer/Table', 'Items', 'Total', 'Status'],
      rows: [
        ['#ORD-284', 'Table 5', '4 items', '$86.50', '🟢 Served'],
        ['#ORD-283', 'Table 12', '2 items', '$43.00', '🟡 Preparing'],
        ['#ORD-282', 'Takeaway', '6 items', '$124.80', '🟢 Ready'],
        ['#ORD-281', 'Table 3', '3 items', '$67.20', '🟡 Preparing'],
        ['#ORD-280', 'Delivery', '5 items', '$98.40', '🔵 Dispatched'],
        ['#ORD-279', 'Table 8', '7 items', '$156.30', '🟢 Served'],
      ],
      stats: [{ label: 'Today\'s Orders', value: '284' }, { label: 'In Progress', value: '12' }, { label: 'Avg Wait', value: '18 min' }],
    },
    'Menu': {
      title: 'Menu Management', description: 'Manage menu items and categories',
      headers: ['Item', 'Category', 'Price', 'Available', 'Popular'],
      rows: [
        ['Grilled Chicken', 'Main Course', '$18.90', '✅ Yes', '⭐ 342'],
        ['Caesar Salad', 'Appetizer', '$12.50', '✅ Yes', '⭐ 289'],
        ['Margherita Pizza', 'Pizza', '$15.00', '✅ Yes', '⭐ 456'],
        ['Chocolate Cake', 'Dessert', '$8.90', '✅ Yes', '⭐ 198'],
        ['Fresh Juice', 'Beverages', '$6.50', '❌ Out', '⭐ 234'],
      ],
      stats: [{ label: 'Total Items', value: '124' }, { label: 'Categories', value: '8' }, { label: 'Out of Stock', value: '3' }],
    },
    'Menu Items': {
      title: 'Menu Items', description: 'All items in your digital menu',
      headers: ['Item', 'Category', 'Price', 'Views', 'Orders'],
      rows: [
        ['Grilled Chicken', 'Main Course', '$18.90', '1,234', '342'],
        ['Caesar Salad', 'Appetizer', '$12.50', '987', '289'],
        ['Margherita Pizza', 'Pizza', '$15.00', '1,567', '456'],
        ['Chocolate Cake', 'Dessert', '$8.90', '654', '198'],
      ],
      stats: [{ label: 'Total Items', value: '124' }, { label: 'Most Viewed', value: 'Pizza' }, { label: 'Best Seller', value: 'Chicken' }],
    },
    'Staff': {
      title: 'Staff Management', description: 'Manage your team members',
      headers: ['ID', 'Name', 'Role', 'Shift', 'Status'],
      rows: [
        ['#S01', 'Ali Hassan', 'Head Chef', 'Morning', '🟢 On Duty'],
        ['#S02', 'Sara Ahmed', 'Waiter', 'Morning', '🟢 On Duty'],
        ['#S03', 'Omar Khalid', 'Sous Chef', 'Evening', '⚪ Off'],
        ['#S04', 'Nour Ali', 'Cashier', 'Morning', '🟢 On Duty'],
        ['#S05', 'Khalid Omar', 'Waiter', 'Evening', '⚪ Off'],
      ],
      stats: [{ label: 'Total Staff', value: '24' }, { label: 'On Duty', value: '12' }, { label: 'On Leave', value: '2' }],
    },
    'Payments': {
      title: 'Payments', description: 'Transaction history and payment processing',
      headers: ['Transaction', 'Method', 'Amount', 'Date', 'Status'],
      rows: [
        ['#TXN-901', '💳 Visa', '$234.50', '2026-03-13', '✅ Completed'],
        ['#TXN-900', '💵 Cash', '$86.50', '2026-03-13', '✅ Completed'],
        ['#TXN-899', '📱 Apple Pay', '$124.80', '2026-03-13', '✅ Completed'],
        ['#TXN-898', '💳 Mastercard', '$67.20', '2026-03-13', '⏳ Processing'],
        ['#TXN-897', '💵 Cash', '$43.00', '2026-03-12', '✅ Completed'],
      ],
      stats: [{ label: 'Today\'s Revenue', value: '$12.4K' }, { label: 'Card', value: '68%' }, { label: 'Cash', value: '32%' }],
    },
    'Kitchen': {
      title: 'Kitchen Display', description: 'Real-time kitchen order queue',
      headers: ['Order #', 'Table', 'Items', 'Time', 'Priority'],
      rows: [
        ['#283', 'Table 12', 'Grilled Chicken x2', '5 min', '🔴 High'],
        ['#281', 'Table 3', 'Pizza, Salad, Soup', '8 min', '🟡 Medium'],
        ['#280', 'Delivery', 'Mixed Grill x3, Sides', '12 min', '🟡 Medium'],
        ['#279', 'Table 8', 'Pasta, Dessert x2', '3 min', '🔴 High'],
      ],
      stats: [{ label: 'In Queue', value: '8' }, { label: 'Avg Prep', value: '14 min' }, { label: 'Completed', value: '276' }],
    },
    'Employees': {
      title: 'Employees', description: 'Manage all employees',
      headers: ['ID', 'Name', 'Department', 'Position', 'Joined', 'Status'],
      rows: [
        ['#E101', 'Sara Ahmed', 'Engineering', 'Senior Dev', '2023-06', '🟢 Active'],
        ['#E102', 'Mohamed Ali', 'Marketing', 'Manager', '2022-01', '🟢 Active'],
        ['#E103', 'Nour Hassan', 'HR', 'Specialist', '2024-03', '🟡 On Leave'],
        ['#E104', 'Amira Khalil', 'Finance', 'Analyst', '2023-09', '🟢 Active'],
        ['#E105', 'Youssef Omar', 'Sales', 'Executive', '2024-01', '🟢 Active'],
      ],
      stats: [{ label: 'Total', value: '456' }, { label: 'Active', value: '442' }, { label: 'On Leave', value: '14' }],
    },
    'Leave Mgmt': {
      title: 'Leave Management', description: 'Track and approve leave requests',
      headers: ['ID', 'Employee', 'Type', 'From', 'To', 'Status'],
      rows: [
        ['#L01', 'Nour Hassan', 'Annual', 'Mar 10', 'Mar 14', '✅ Approved'],
        ['#L02', 'Ali Saeed', 'Sick', 'Mar 12', 'Mar 13', '✅ Approved'],
        ['#L03', 'Sara Mohamed', 'Annual', 'Mar 20', 'Mar 25', '⏳ Pending'],
        ['#L04', 'Omar Khalid', 'Personal', 'Mar 15', 'Mar 15', '⏳ Pending'],
      ],
      stats: [{ label: 'Pending', value: '8' }, { label: 'Approved (MTD)', value: '23' }, { label: 'Avg Days', value: '3.2' }],
    },
    'Payroll': {
      title: 'Payroll', description: 'Monthly payroll processing',
      headers: ['Employee', 'Base Salary', 'Allowances', 'Deductions', 'Net Pay'],
      rows: [
        ['Sara Ahmed', '$5,200', '$800', '$420', '$5,580'],
        ['Mohamed Ali', '$6,500', '$1,000', '$580', '$6,920'],
        ['Nour Hassan', '$4,800', '$600', '$380', '$5,020'],
        ['Amira Khalil', '$4,200', '$500', '$340', '$4,360'],
      ],
      stats: [{ label: 'Total Payroll', value: '$284K' }, { label: 'Processed', value: '448/456' }, { label: 'Pending', value: '8' }],
    },
    'Performance': {
      title: 'Performance Reviews', description: 'Employee performance tracking',
      headers: ['Employee', 'Department', 'Rating', 'Goals Met', 'Review Date'],
      rows: [
        ['Sara Ahmed', 'Engineering', '⭐ 4.8/5', '95%', '2026-03-01'],
        ['Mohamed Ali', 'Marketing', '⭐ 4.5/5', '88%', '2026-03-01'],
        ['Amira Khalil', 'Finance', '⭐ 4.6/5', '92%', '2026-03-01'],
        ['Youssef Omar', 'Sales', '⭐ 4.2/5', '85%', '2026-03-01'],
      ],
      stats: [{ label: 'Reviews Done', value: '342' }, { label: 'Avg Rating', value: '4.4' }, { label: 'Top Performer', value: 'Sara A.' }],
    },
    'Contacts': {
      title: 'Contacts', description: 'All contacts and leads',
      headers: ['Name', 'Company', 'Email', 'Phone', 'Stage'],
      rows: [
        ['John Smith', 'TechCorp', 'john@tech.com', '+1 555-xxx', '🟢 Customer'],
        ['Sara Lee', 'MediHealth', 'sara@medi.com', '+1 555-xxx', '🟡 Lead'],
        ['Ahmed K.', 'EduFirst', 'ahmed@edu.com', '+1 555-xxx', '🟢 Customer'],
        ['Maria G.', 'BuildPro', 'maria@build.com', '+1 555-xxx', '⏳ Prospect'],
      ],
      stats: [{ label: 'Total Contacts', value: '5,672' }, { label: 'Customers', value: '1,234' }, { label: 'New Leads', value: '89' }],
    },
    'Deals': {
      title: 'Deals', description: 'Active deals and opportunities',
      headers: ['Deal', 'Company', 'Value', 'Probability', 'Stage'],
      rows: [
        ['Enterprise License', 'TechCorp', '$45,000', '80%', '🟢 Negotiation'],
        ['Platform Setup', 'MediHealth', '$120,000', '60%', '🟡 Proposal'],
        ['Annual Contract', 'EduFirst', '$28,000', '95%', '🟢 Closing'],
        ['Custom Build', 'BuildPro', '$85,000', '30%', '⏳ Discovery'],
      ],
      stats: [{ label: 'Pipeline', value: '$1.2M' }, { label: 'This Quarter', value: '$340K' }, { label: 'Win Rate', value: '34%' }],
    },
    'Pipeline': {
      title: 'Sales Pipeline', description: 'Visual pipeline overview',
      headers: ['Stage', 'Deals', 'Total Value', 'Avg Size', 'Conv. Rate'],
      rows: [
        ['Discovery', '23', '$460K', '$20K', '45%'],
        ['Proposal', '15', '$380K', '$25.3K', '62%'],
        ['Negotiation', '8', '$240K', '$30K', '78%'],
        ['Closing', '5', '$145K', '$29K', '90%'],
      ],
      stats: [{ label: 'Total Pipeline', value: '$1.2M' }, { label: 'Avg Cycle', value: '28 days' }, { label: 'Deals in Pipeline', value: '51' }],
    },
    'Products': {
      title: 'Products', description: 'Product catalog management',
      headers: ['SKU', 'Product', 'Category', 'Price', 'Stock', 'Status'],
      rows: [
        ['SKU-001', 'Wireless Earbuds', 'Electronics', '$29.99', '156', '🟢 Active'],
        ['SKU-002', 'Leather Wallet', 'Accessories', '$45.00', '89', '🟢 Active'],
        ['SKU-003', 'Running Shoes', 'Footwear', '$89.99', '234', '🟢 Active'],
        ['SKU-004', 'Smart Watch', 'Electronics', '$199.00', '12', '🟡 Low Stock'],
        ['SKU-005', 'Yoga Mat', 'Fitness', '$24.99', '0', '🔴 Out of Stock'],
      ],
      stats: [{ label: 'Total Products', value: '2,345' }, { label: 'Active', value: '2,120' }, { label: 'Out of Stock', value: '18' }],
    },
    'Sellers': {
      title: 'Sellers', description: 'Manage marketplace sellers',
      headers: ['ID', 'Store Name', 'Owner', 'Products', 'Rating', 'Status'],
      rows: [
        ['#V01', 'TechStore', 'Ali H.', '234', '⭐ 4.8', '🟢 Active'],
        ['#V02', 'StyleHub', 'Sara M.', '156', '⭐ 4.6', '🟢 Active'],
        ['#V03', 'SportMax', 'Omar K.', '89', '⭐ 4.7', '🟢 Active'],
        ['#V04', 'GadgetPro', 'Nour A.', '312', '⭐ 4.5', '🟡 Under Review'],
      ],
      stats: [{ label: 'Total Sellers', value: '342' }, { label: 'Active', value: '318' }, { label: 'New This Month', value: '14' }],
    },
    'Reviews': {
      title: 'Reviews & Ratings', description: 'Customer feedback management',
      headers: ['Product', 'Customer', 'Rating', 'Comment', 'Date'],
      rows: [
        ['Wireless Earbuds', 'Ahmed H.', '⭐⭐⭐⭐⭐', 'Excellent quality!', '2026-03-12'],
        ['Leather Wallet', 'Sara M.', '⭐⭐⭐⭐', 'Good, but pricey', '2026-03-11'],
        ['Running Shoes', 'Omar K.', '⭐⭐⭐⭐⭐', 'Very comfortable', '2026-03-10'],
        ['Smart Watch', 'Nour A.', '⭐⭐⭐', 'Battery could be better', '2026-03-09'],
      ],
      stats: [{ label: 'Total Reviews', value: '8,456' }, { label: 'Avg Rating', value: '4.5' }, { label: 'This Week', value: '234' }],
    },
    'Properties': {
      title: 'Properties', description: 'All listed properties',
      headers: ['ID', 'Property', 'Type', 'Location', 'Price', 'Status'],
      rows: [
        ['#R01', 'Marina Tower Apt', 'Apartment', 'New Cairo', '$1,200/mo', '🟢 Available'],
        ['#R02', 'Palm Villa', 'Villa', '6th October', '$3,500/mo', '🔴 Occupied'],
        ['#R03', 'Downtown Office', 'Commercial', 'Downtown', '$2,800/mo', '🟢 Available'],
        ['#R04', 'Garden Duplex', 'Duplex', 'Maadi', '$1,800/mo', '🟡 Reserved'],
      ],
      stats: [{ label: 'Total Properties', value: '234' }, { label: 'Available', value: '89' }, { label: 'Occupancy Rate', value: '78%' }],
    },
    'Tenants': {
      title: 'Tenants', description: 'Tenant management',
      headers: ['ID', 'Name', 'Property', 'Lease End', 'Rent', 'Status'],
      rows: [
        ['#T01', 'Ahmed Corp', 'Downtown Office', '2027-06', '$2,800', '🟢 Active'],
        ['#T02', 'Sara Family', 'Palm Villa', '2026-12', '$3,500', '🟢 Active'],
        ['#T03', 'Omar LLC', 'Marina Apt', '2026-09', '$1,200', '🟡 Renewing'],
      ],
      stats: [{ label: 'Total Tenants', value: '189' }, { label: 'Active Leases', value: '176' }, { label: 'Renewals Due', value: '12' }],
    },
    'Inventory': {
      title: 'Inventory', description: 'Stock and product management',
      headers: ['SKU', 'Medicine', 'Category', 'Stock', 'Min Level', 'Status'],
      rows: [
        ['MED-001', 'Amoxicillin 500mg', 'Antibiotics', '2,340', '500', '🟢 OK'],
        ['MED-002', 'Paracetamol 500mg', 'Pain Relief', '5,120', '1,000', '🟢 OK'],
        ['MED-003', 'Insulin Pen', 'Diabetes', '45', '100', '🔴 Low'],
        ['MED-004', 'Vitamin D3', 'Supplements', '3,200', '500', '🟢 OK'],
      ],
      stats: [{ label: 'Total SKUs', value: '4,521' }, { label: 'Low Stock', value: '18' }, { label: 'Expired', value: '3' }],
    },
    'Expiry Alerts': {
      title: 'Expiry Alerts', description: 'Items approaching expiry date',
      headers: ['Medicine', 'Batch', 'Stock', 'Expiry Date', 'Days Left'],
      rows: [
        ['Amoxicillin 250mg', 'BTH-234', '120', '2026-04-15', '33 days'],
        ['Eye Drops', 'BTH-189', '45', '2026-03-28', '15 days'],
        ['Cough Syrup', 'BTH-156', '89', '2026-05-01', '49 days'],
      ],
      stats: [{ label: 'Expiring < 30d', value: '5' }, { label: 'Expiring < 90d', value: '18' }, { label: 'Action Required', value: '3' }],
    },
    'Suppliers': {
      title: 'Suppliers', description: 'Manage supplier relationships',
      headers: ['ID', 'Supplier', 'Category', 'Orders', 'Rating', 'Status'],
      rows: [
        ['#SP01', 'PharmaSupply Co', 'Medicines', '234', '⭐ 4.8', '🟢 Active'],
        ['#SP02', 'MedEquip Ltd', 'Equipment', '56', '⭐ 4.5', '🟢 Active'],
        ['#SP03', 'HealthCare Dist', 'General', '189', '⭐ 4.6', '🟢 Active'],
      ],
      stats: [{ label: 'Total Suppliers', value: '67' }, { label: 'Active', value: '62' }, { label: 'Pending Orders', value: '12' }],
    },
    'Students': {
      title: 'Students', description: 'Student enrollment and management',
      headers: ['ID', 'Name', 'Class', 'Grade', 'Attendance', 'Status'],
      rows: [
        ['#S01', 'Ahmed Mostafa', '10-A', 'A', '98%', '🟢 Active'],
        ['#S02', 'Sara Ibrahim', '10-B', 'B+', '95%', '🟢 Active'],
        ['#S03', 'Omar Khalid', '11-A', 'A-', '92%', '🟢 Active'],
        ['#S04', 'Layla Hassan', '9-C', 'B', '88%', '🟡 Warning'],
        ['#S05', 'Youssef Ali', '12-A', 'A+', '99%', '🟢 Active'],
      ],
      stats: [{ label: 'Total Students', value: '1,245' }, { label: 'Avg Grade', value: 'B+' }, { label: 'Attendance', value: '94%' }],
    },
    'Classes': {
      title: 'Classes', description: 'Class schedules and assignments',
      headers: ['Class', 'Subject', 'Teacher', 'Room', 'Time', 'Students'],
      rows: [
        ['10-A', 'Mathematics', 'Mr. Ahmed', 'Room 201', '08:00', '32'],
        ['10-B', 'English', 'Ms. Sara', 'Room 105', '08:00', '30'],
        ['11-A', 'Physics', 'Dr. Omar', 'Lab 3', '09:00', '28'],
        ['9-C', 'Arabic', 'Mr. Khalid', 'Room 302', '09:00', '34'],
      ],
      stats: [{ label: 'Total Classes', value: '42' }, { label: 'Teachers', value: '86' }, { label: 'Rooms', value: '36' }],
    },
    'Grades': {
      title: 'Grades', description: 'Grade management and reports',
      headers: ['Student', 'Math', 'English', 'Science', 'Arabic', 'GPA'],
      rows: [
        ['Ahmed M.', 'A', 'A-', 'A', 'A+', '3.9'],
        ['Sara I.', 'B+', 'A', 'B+', 'A', '3.6'],
        ['Omar K.', 'A-', 'B+', 'A', 'B', '3.5'],
        ['Layla H.', 'B', 'B', 'B+', 'A-', '3.2'],
      ],
      stats: [{ label: 'Class Avg GPA', value: '3.4' }, { label: 'Honor Roll', value: '45' }, { label: 'Needs Support', value: '12' }],
    },
    'Attendance': {
      title: 'Attendance', description: 'Daily attendance tracking',
      headers: ['Class', 'Present', 'Absent', 'Late', 'Rate'],
      rows: [
        ['10-A', '30', '1', '1', '94%'],
        ['10-B', '28', '2', '0', '93%'],
        ['11-A', '27', '0', '1', '96%'],
        ['9-C', '32', '2', '0', '94%'],
      ],
      stats: [{ label: 'Today\'s Rate', value: '94%' }, { label: 'Absent Today', value: '56' }, { label: 'Late Today', value: '12' }],
    },
    'Teachers': {
      title: 'Teachers', description: 'Faculty management',
      headers: ['ID', 'Name', 'Subject', 'Classes', 'Rating'],
      rows: [
        ['#T01', 'Mr. Ahmed Hassan', 'Mathematics', '4', '⭐ 4.9'],
        ['#T02', 'Ms. Sara Ali', 'English', '3', '⭐ 4.7'],
        ['#T03', 'Dr. Omar Nour', 'Physics', '3', '⭐ 4.8'],
        ['#T04', 'Mr. Khalid Said', 'Arabic', '5', '⭐ 4.6'],
      ],
      stats: [{ label: 'Total Teachers', value: '86' }, { label: 'Avg Rating', value: '4.7' }, { label: 'New Hires', value: '4' }],
    },
    'Warehouses': {
      title: 'Warehouses', description: 'Warehouse management',
      headers: ['ID', 'Location', 'Capacity', 'Used', 'Items', 'Status'],
      rows: [
        ['WH-01', 'Cairo Main', '10,000 sqm', '78%', '4,521', '🟢 Active'],
        ['WH-02', 'Alexandria', '5,000 sqm', '62%', '2,340', '🟢 Active'],
        ['WH-03', 'Giza Storage', '3,000 sqm', '91%', '1,890', '🟡 Near Full'],
      ],
      stats: [{ label: 'Total Capacity', value: '18K sqm' }, { label: 'Utilization', value: '76%' }, { label: 'Active', value: '3' }],
    },
    'Purchase Orders': {
      title: 'Purchase Orders', description: 'Supplier orders tracking',
      headers: ['PO #', 'Supplier', 'Items', 'Total', 'ETA', 'Status'],
      rows: [
        ['#PO-301', 'SupplyCo', '12 items', '$4,560', 'Mar 15', '🟡 In Transit'],
        ['#PO-300', 'MegaDist', '8 items', '$2,340', 'Mar 14', '🟢 Delivered'],
        ['#PO-299', 'ProParts', '24 items', '$8,900', 'Mar 18', '⏳ Processing'],
      ],
      stats: [{ label: 'Active POs', value: '23' }, { label: 'In Transit', value: '8' }, { label: 'This Month', value: '$45K' }],
    },
    'Low Stock': {
      title: 'Low Stock Alerts', description: 'Items below minimum levels',
      headers: ['Product', 'SKU', 'Current Stock', 'Min Level', 'Status'],
      rows: [
        ['Widget Pro', 'WDG-045', '12', '50', '🔴 Critical'],
        ['Sensor Kit', 'SNS-023', '34', '100', '🟡 Low'],
        ['Cable Type-C', 'CBL-089', '45', '200', '🟡 Low'],
        ['Battery Pack', 'BAT-012', '8', '30', '🔴 Critical'],
      ],
      stats: [{ label: 'Low Stock Items', value: '23' }, { label: 'Critical', value: '8' }, { label: 'Reorder Needed', value: '15' }],
    },
    'Departments': {
      title: 'Departments', description: 'Hospital departments overview',
      headers: ['Department', 'Head', 'Doctors', 'Beds', 'Occupancy'],
      rows: [
        ['Cardiology', 'Dr. Ahmed', '8', '40', '85%'],
        ['Orthopedics', 'Dr. Sara', '6', '30', '73%'],
        ['Emergency', 'Dr. Omar', '12', '20', '95%'],
        ['Pediatrics', 'Dr. Nour', '5', '25', '60%'],
        ['Neurology', 'Dr. Khalid', '4', '20', '70%'],
      ],
      stats: [{ label: 'Departments', value: '12' }, { label: 'Total Beds', value: '180' }, { label: 'Occupancy', value: '78%' }],
    },
    'Surgeries': {
      title: 'Surgeries', description: 'Surgical schedule and records',
      headers: ['ID', 'Patient', 'Surgery', 'Surgeon', 'OR', 'Time'],
      rows: [
        ['#SG-01', 'Patient A', 'Knee Replacement', 'Dr. Sara', 'OR-2', '08:00'],
        ['#SG-02', 'Patient B', 'Appendectomy', 'Dr. Ahmed', 'OR-1', '10:00'],
        ['#SG-03', 'Patient C', 'Heart Bypass', 'Dr. Omar', 'OR-3', '13:00'],
      ],
      stats: [{ label: 'Today', value: '14' }, { label: 'This Week', value: '42' }, { label: 'Success Rate', value: '99.2%' }],
    },
    'Lab Results': {
      title: 'Lab Results', description: 'Laboratory test results',
      headers: ['Test ID', 'Patient', 'Test Type', 'Result', 'Date'],
      rows: [
        ['#LB-501', 'Patient A', 'Blood Count', 'Normal', '2026-03-13'],
        ['#LB-500', 'Patient B', 'X-Ray', 'Reviewed', '2026-03-12'],
        ['#LB-499', 'Patient C', 'MRI', 'Pending', '2026-03-13'],
        ['#LB-498', 'Patient D', 'Urine Test', 'Normal', '2026-03-12'],
      ],
      stats: [{ label: 'Today\'s Tests', value: '45' }, { label: 'Pending', value: '12' }, { label: 'Avg Turnaround', value: '4 hrs' }],
    },
    'Pharmacy': {
      title: 'Hospital Pharmacy', description: 'In-house pharmacy management',
      headers: ['Medicine', 'Stock', 'Dispensed Today', 'Min Level', 'Status'],
      rows: [
        ['Morphine 10mg', '234', '12', '50', '🟢 OK'],
        ['Saline IV', '1,200', '45', '200', '🟢 OK'],
        ['Insulin Pen', '45', '8', '100', '🔴 Low'],
        ['Bandages', '3,400', '120', '500', '🟢 OK'],
      ],
      stats: [{ label: 'Items', value: '2,340' }, { label: 'Low Stock', value: '8' }, { label: 'Dispensed Today', value: '234' }],
    },
    'Drivers': {
      title: 'Drivers', description: 'Driver management and tracking',
      headers: ['ID', 'Name', 'Vehicle', 'Status', 'Deliveries', 'Rating'],
      rows: [
        ['#D01', 'Ali Hassan', 'Motorcycle', '🟢 Online', '12', '⭐ 4.9'],
        ['#D02', 'Sara Ahmed', 'Car', '🟢 On Delivery', '8', '⭐ 4.7'],
        ['#D03', 'Omar Nour', 'Van', '⚪ Offline', '0', '⭐ 4.8'],
        ['#D04', 'Khalid Ali', 'Motorcycle', '🟢 Online', '15', '⭐ 4.6'],
      ],
      stats: [{ label: 'Total Drivers', value: '48' }, { label: 'Online', value: '34' }, { label: 'Avg Rating', value: '4.7' }],
    },
    'Tracking': {
      title: 'Live Tracking', description: 'Real-time delivery tracking',
      headers: ['Order', 'Driver', 'Pickup', 'Destination', 'ETA', 'Status'],
      rows: [
        ['#4521', 'Ali H.', 'Restaurant A', 'Maadi', '12 min', '🟢 En Route'],
        ['#4520', 'Sara A.', 'Store B', 'Heliopolis', '5 min', '🟡 Picking Up'],
        ['#4519', 'Khalid A.', 'Café C', 'Zamalek', '18 min', '🟢 En Route'],
      ],
      stats: [{ label: 'Active Deliveries', value: '34' }, { label: 'Avg ETA', value: '22 min' }, { label: 'On-Time', value: '94%' }],
    },
    'Ratings': {
      title: 'Ratings & Feedback', description: 'Customer and driver ratings',
      headers: ['Order', 'Customer', 'Rating', 'Feedback', 'Date'],
      rows: [
        ['#4518', 'Ahmed H.', '⭐⭐⭐⭐⭐', 'Very fast delivery!', '2026-03-12'],
        ['#4517', 'Sara M.', '⭐⭐⭐⭐', 'Good service', '2026-03-12'],
        ['#4516', 'Omar K.', '⭐⭐⭐', 'A bit late', '2026-03-11'],
      ],
      stats: [{ label: 'Avg Rating', value: '4.6' }, { label: 'This Week', value: '456' }, { label: '5-Star', value: '68%' }],
    },
    'Bookings': {
      title: 'Bookings', description: 'All bookings and reservations',
      headers: ['#', 'Client', 'Service', 'Date', 'Time', 'Status'],
      rows: [
        ['#B001', 'Ahmed H.', 'Consultation', 'Mar 13', '10:00 AM', '✅ Confirmed'],
        ['#B002', 'Sara M.', 'Follow-up', 'Mar 13', '11:30 AM', '✅ Confirmed'],
        ['#B003', 'Omar K.', 'New Visit', 'Mar 14', '2:00 PM', '⏳ Pending'],
        ['#B004', 'Layla I.', 'Treatment', 'Mar 14', '3:30 PM', '✅ Confirmed'],
      ],
      stats: [{ label: 'Today', value: '24' }, { label: 'This Week', value: '89' }, { label: 'Pending', value: '12' }],
    },
    'Availability': {
      title: 'Availability', description: 'Manage time slots and availability',
      headers: ['Day', 'Time Slots', 'Booked', 'Available', 'Rate'],
      rows: [
        ['Monday', '12', '10', '2', '83%'],
        ['Tuesday', '12', '8', '4', '67%'],
        ['Wednesday', '12', '11', '1', '92%'],
        ['Thursday', '12', '9', '3', '75%'],
        ['Friday', '8', '7', '1', '88%'],
      ],
      stats: [{ label: 'Total Slots/Week', value: '56' }, { label: 'Avg Booking Rate', value: '81%' }, { label: 'Peak Day', value: 'Wednesday' }],
    },
    'Clients': {
      title: 'Clients', description: 'Client management',
      headers: ['ID', 'Name', 'Phone', 'Visits', 'Last Visit', 'Status'],
      rows: [
        ['#C01', 'Ahmed Hassan', '+20 1xx xxx', '12', 'Mar 12', '🟢 Regular'],
        ['#C02', 'Sara Mohamed', '+20 1xx xxx', '5', 'Mar 10', '🟢 Active'],
        ['#C03', 'Omar Khalid', '+20 1xx xxx', '1', 'Mar 13', '🆕 New'],
      ],
      stats: [{ label: 'Total Clients', value: '892' }, { label: 'Regular', value: '456' }, { label: 'New (MTD)', value: '34' }],
    },
    'Reminders': {
      title: 'Reminders', description: 'Automated appointment reminders',
      headers: ['Client', 'Appointment', 'Reminder Type', 'Sent', 'Status'],
      rows: [
        ['Ahmed H.', 'Mar 14, 10 AM', 'SMS', 'Mar 13', '✅ Delivered'],
        ['Sara M.', 'Mar 14, 2 PM', 'WhatsApp', 'Mar 13', '✅ Read'],
        ['Omar K.', 'Mar 15, 11 AM', 'Email', 'Scheduled', '⏳ Pending'],
      ],
      stats: [{ label: 'Sent Today', value: '45' }, { label: 'Delivery Rate', value: '98%' }, { label: 'No-Show Rate', value: '4%' }],
    },
    'Members': {
      title: 'Members', description: 'Gym membership management',
      headers: ['ID', 'Name', 'Plan', 'Joined', 'Expiry', 'Status'],
      rows: [
        ['#G01', 'Ahmed Ali', 'Premium', '2025-06', '2026-12-31', '🟢 Active'],
        ['#G02', 'Sara Hassan', 'Basic', '2025-12', '2026-06-15', '🟡 Expiring'],
        ['#G03', 'Omar Nour', 'Premium', '2026-01', '2027-03-01', '🟢 Active'],
        ['#G04', 'Nour Said', 'VIP', '2025-09', '2026-09-30', '🟢 Active'],
      ],
      stats: [{ label: 'Total Members', value: '892' }, { label: 'Active', value: '845' }, { label: 'Expiring', value: '23' }],
    },
    'Schedule': {
      title: 'Schedule', description: 'Class and event schedules',
      headers: ['Time', 'Class', 'Trainer', 'Room', 'Spots'],
      rows: [
        ['07:00', 'Yoga', 'Sara A.', 'Studio 1', '5/20'],
        ['08:00', 'CrossFit', 'Omar K.', 'Main Gym', '2/15'],
        ['09:30', 'Spinning', 'Ali H.', 'Studio 2', '8/20'],
        ['11:00', 'Boxing', 'Khalid N.', 'Ring', '10/12'],
        ['16:00', 'Pilates', 'Nour M.', 'Studio 1', '12/20'],
      ],
      stats: [{ label: 'Today\'s Classes', value: '12' }, { label: 'Total Spots', value: '180' }, { label: 'Booked', value: '142' }],
    },
    'Subscriptions': {
      title: 'Subscriptions', description: 'Subscription plans and billing',
      headers: ['Plan', 'Price', 'Duration', 'Members', 'Revenue'],
      rows: [
        ['Basic', '$30/mo', '1 Month', '234', '$7,020'],
        ['Premium', '$60/mo', '1 Month', '456', '$27,360'],
        ['VIP', '$100/mo', '1 Month', '89', '$8,900'],
        ['Annual Basic', '$300/yr', '12 Months', '67', '$20,100'],
      ],
      stats: [{ label: 'MRR', value: '$34K' }, { label: 'Churn Rate', value: '3.2%' }, { label: 'Avg Revenue/Member', value: '$42' }],
    },
    'Trainers': {
      title: 'Trainers', description: 'Personal trainer management',
      headers: ['ID', 'Name', 'Specialty', 'Clients', 'Rating', 'Status'],
      rows: [
        ['#TR01', 'Sara Ahmed', 'Yoga & Pilates', '24', '⭐ 4.9', '🟢 Available'],
        ['#TR02', 'Omar Khalid', 'CrossFit', '18', '⭐ 4.8', '🟢 In Session'],
        ['#TR03', 'Ali Hassan', 'Cardio', '15', '⭐ 4.7', '🟢 Available'],
        ['#TR04', 'Khalid Nour', 'Boxing', '12', '⭐ 4.9', '⚪ Day Off'],
      ],
      stats: [{ label: 'Total Trainers', value: '18' }, { label: 'Available Now', value: '8' }, { label: 'Avg Rating', value: '4.8' }],
    },
    'Rooms': {
      title: 'Rooms', description: 'Room management and availability',
      headers: ['Room #', 'Type', 'Floor', 'Price/Night', 'Status'],
      rows: [
        ['101', 'Standard', '1st', '$120', '🟢 Available'],
        ['205', 'Deluxe', '2nd', '$200', '🔴 Occupied'],
        ['308', 'Suite', '3rd', '$350', '🟢 Available'],
        ['401', 'Presidential', '4th', '$500', '🔴 Occupied'],
        ['112', 'Standard', '1st', '$120', '🟡 Maintenance'],
      ],
      stats: [{ label: 'Total Rooms', value: '120' }, { label: 'Available', value: '42' }, { label: 'Occupancy', value: '78%' }],
    },
    'Reservations': {
      title: 'Reservations', description: 'Booking and reservation management',
      headers: ['Res #', 'Guest', 'Room', 'Check-in', 'Check-out', 'Status'],
      rows: [
        ['#HB01', 'Mr. Johnson', 'Suite 401', 'Mar 13', 'Mar 16', '🟢 Checked In'],
        ['#HB02', 'Ms. Smith', 'Room 205', 'Mar 14', 'Mar 17', '⏳ Arriving'],
        ['#HB03', 'Dr. Ahmed', 'Suite 502', 'Mar 13', 'Mar 15', '🟢 Checked In'],
        ['#HB04', 'Mrs. Lee', 'Room 112', 'Mar 15', 'Mar 18', '⏳ Reserved'],
      ],
      stats: [{ label: 'Today Check-ins', value: '24' }, { label: 'Check-outs', value: '18' }, { label: 'Revenue Today', value: '$12.4K' }],
    },
    'Guests': {
      title: 'Guests', description: 'Guest profiles and history',
      headers: ['ID', 'Name', 'Visits', 'Loyalty Tier', 'Spent', 'Status'],
      rows: [
        ['#G01', 'Mr. Johnson', '8', '🥇 Gold', '$4,200', '🟢 In-House'],
        ['#G02', 'Ms. Smith', '3', '🥈 Silver', '$1,800', '⏳ Upcoming'],
        ['#G03', 'Dr. Ahmed', '12', '💎 Platinum', '$8,900', '🟢 In-House'],
      ],
      stats: [{ label: 'Total Guests', value: '3,456' }, { label: 'Returning', value: '45%' }, { label: 'VIP', value: '234' }],
    },
    'Events': {
      title: 'Events', description: 'Event management',
      headers: ['Event', 'Venue', 'Date', 'Tickets', 'Revenue', 'Status'],
      rows: [
        ['Tech Summit 2026', 'Grand Hall', 'Apr 15', '500/500', '$25K', '🟢 Sold Out'],
        ['Music Festival', 'Open Arena', 'May 1', '3,200/5,000', '$64K', '🟡 Selling'],
        ['Art Exhibition', 'Gallery A', 'Mar 28', '120/200', '$3.6K', '🟡 Selling'],
        ['Startup Pitch', 'Conference B', 'Apr 5', '80/100', '$4K', '🟢 Almost Full'],
      ],
      stats: [{ label: 'Active Events', value: '34' }, { label: 'Tickets Sold', value: '4,567' }, { label: 'Revenue', value: '$89K' }],
    },
    'Attendees': {
      title: 'Attendees', description: 'Event attendee management',
      headers: ['Name', 'Event', 'Ticket Type', 'Purchase Date', 'Status'],
      rows: [
        ['Ahmed H.', 'Tech Summit', 'VIP', 'Feb 15', '✅ Confirmed'],
        ['Sara M.', 'Music Festival', 'General', 'Mar 1', '✅ Confirmed'],
        ['Omar K.', 'Art Exhibition', 'Premium', 'Mar 10', '✅ Confirmed'],
        ['Nour A.', 'Tech Summit', 'General', 'Mar 5', '⏳ Pending'],
      ],
      stats: [{ label: 'Total Attendees', value: '8,234' }, { label: 'VIP', value: '456' }, { label: 'Check-in Rate', value: '92%' }],
    },
    'Venues': {
      title: 'Venues', description: 'Venue management',
      headers: ['Venue', 'Type', 'Capacity', 'Location', 'Status'],
      rows: [
        ['Grand Hall', 'Convention', '500', 'Downtown', '🟢 Available'],
        ['Open Arena', 'Outdoor', '5,000', 'City Park', '🔴 Booked'],
        ['Gallery A', 'Exhibition', '200', 'Art District', '🟢 Available'],
        ['Conference B', 'Meeting', '100', 'Business Center', '🟡 Setup'],
      ],
      stats: [{ label: 'Total Venues', value: '12' }, { label: 'Available', value: '5' }, { label: 'Booked This Month', value: '18' }],
    },
    'Tickets': {
      title: 'Ticket Sales', description: 'Ticket management and sales',
      headers: ['Event', 'Type', 'Price', 'Sold', 'Available', 'Revenue'],
      rows: [
        ['Tech Summit', 'VIP', '$100', '100', '0', '$10K'],
        ['Tech Summit', 'General', '$30', '400', '0', '$12K'],
        ['Music Festival', 'General', '$20', '3,200', '1,800', '$64K'],
        ['Art Exhibition', 'Premium', '$30', '120', '80', '$3.6K'],
      ],
      stats: [{ label: 'Total Sold', value: '4,567' }, { label: 'Revenue', value: '$89K' }, { label: 'Avg Price', value: '$35' }],
    },
    'Sales': {
      title: 'Sales', description: 'Point of sale transactions',
      headers: ['Trans #', 'Items', 'Subtotal', 'Tax', 'Total', 'Payment'],
      rows: [
        ['#T-8921', '5 items', '$220.00', '$14.50', '$234.50', '💳 Card'],
        ['#T-8920', '2 items', '$42.00', '$3.00', '$45.00', '💵 Cash'],
        ['#T-8919', '8 items', '$292.00', '$20.80', '$312.80', '💳 Card'],
        ['#T-8918', '1 item', '$84.00', '$5.99', '$89.99', '📱 Mobile'],
      ],
      stats: [{ label: 'Today\'s Sales', value: '$8.9K' }, { label: 'Transactions', value: '156' }, { label: 'Avg Basket', value: '$57' }],
    },
    'Customers': {
      title: 'Customers', description: 'Customer database',
      headers: ['ID', 'Name', 'Phone', 'Visits', 'Total Spent', 'Loyalty'],
      rows: [
        ['#C01', 'Ahmed Hassan', '+20 1xx xxx', '45', '$2,340', '🥇 Gold'],
        ['#C02', 'Sara Mohamed', '+20 1xx xxx', '23', '$1,200', '🥈 Silver'],
        ['#C03', 'Omar Khalid', '+20 1xx xxx', '8', '$450', '🥉 Bronze'],
      ],
      stats: [{ label: 'Total Customers', value: '3,456' }, { label: 'Active (30d)', value: '1,234' }, { label: 'Avg Spend', value: '$57' }],
    },
    'Returns': {
      title: 'Returns & Refunds', description: 'Process returns and refunds',
      headers: ['Return #', 'Original Trans', 'Items', 'Amount', 'Reason', 'Status'],
      rows: [
        ['#R-201', '#T-8900', '1 item', '$45.00', 'Defective', '✅ Refunded'],
        ['#R-200', '#T-8895', '2 items', '$89.00', 'Wrong size', '⏳ Processing'],
        ['#R-199', '#T-8890', '1 item', '$29.99', 'Changed mind', '✅ Refunded'],
      ],
      stats: [{ label: 'Returns (MTD)', value: '23' }, { label: 'Return Rate', value: '2.1%' }, { label: 'Refunded', value: '$1.2K' }],
    },
    'Shipments': {
      title: 'Shipments', description: 'Shipment tracking and management',
      headers: ['Shipment #', 'Origin', 'Destination', 'Weight', 'ETA', 'Status'],
      rows: [
        ['#SHP-2341', 'Cairo', 'Alexandria', '450 kg', 'Mar 14', '🟢 In Transit'],
        ['#SHP-2340', 'Dubai', 'Riyadh', '1,200 kg', 'Mar 15', '🟡 Loading'],
        ['#SHP-2339', 'Cairo', 'Luxor', '320 kg', 'Delivered', '✅ Complete'],
        ['#SHP-2338', 'Jeddah', 'Dammam', '890 kg', 'Mar 14', '🟢 In Transit'],
      ],
      stats: [{ label: 'Active Shipments', value: '234' }, { label: 'On-Time', value: '94%' }, { label: 'Delayed', value: '8' }],
    },
    'Routes': {
      title: 'Routes', description: 'Delivery route management',
      headers: ['Route', 'Stops', 'Distance', 'Driver', 'Time', 'Status'],
      rows: [
        ['Cairo → Alex', '3', '220 km', 'Ali H.', '3h 30m', '🟢 Active'],
        ['Cairo → Luxor', '5', '660 km', 'Omar K.', '8h', '🟢 Active'],
        ['Dubai → Riyadh', '2', '930 km', 'Khalid N.', '10h', '🟡 Planning'],
      ],
      stats: [{ label: 'Active Routes', value: '18' }, { label: 'Avg Distance', value: '340 km' }, { label: 'Fuel Cost/km', value: '$0.45' }],
    },
    'Fleet': {
      title: 'Fleet Management', description: 'Vehicle fleet overview',
      headers: ['Vehicle', 'Type', 'Plate', 'Driver', 'Mileage', 'Status'],
      rows: [
        ['Truck-01', 'Heavy Truck', 'ABC-1234', 'Ali H.', '45,230 km', '🟢 Active'],
        ['Van-05', 'Delivery Van', 'DEF-5678', 'Sara A.', '23,100 km', '🟢 Active'],
        ['Truck-03', 'Medium Truck', 'GHI-9012', 'None', '67,800 km', '🟡 Maintenance'],
      ],
      stats: [{ label: 'Fleet Size', value: '48' }, { label: 'Active', value: '42' }, { label: 'In Maintenance', value: '6' }],
    },
    'Documents': {
      title: 'Documents', description: 'Shipping documents and records',
      headers: ['Doc #', 'Type', 'Shipment', 'Created', 'Status'],
      rows: [
        ['#DOC-901', 'Bill of Lading', '#SHP-2341', 'Mar 13', '✅ Signed'],
        ['#DOC-900', 'Invoice', '#SHP-2340', 'Mar 12', '⏳ Pending'],
        ['#DOC-899', 'Customs Declaration', '#SHP-2339', 'Mar 11', '✅ Approved'],
      ],
      stats: [{ label: 'Total Docs', value: '1,234' }, { label: 'Pending', value: '23' }, { label: 'This Month', value: '89' }],
    },
    'Forecasts': {
      title: 'Sales Forecasts', description: 'Revenue projections and forecasts',
      headers: ['Quarter', 'Projected', 'Actual', 'Variance', 'Confidence'],
      rows: [
        ['Q1 2026', '$320K', '$342K', '+6.9%', '🟢 High'],
        ['Q2 2026', '$380K', '—', '—', '🟡 Medium'],
        ['Q3 2026', '$420K', '—', '—', '🟡 Medium'],
        ['Q4 2026', '$450K', '—', '—', '⚪ Low'],
      ],
      stats: [{ label: 'Annual Forecast', value: '$1.57M' }, { label: 'YoY Growth', value: '+18%' }, { label: 'Accuracy', value: '89%' }],
    },
    'Tasks': {
      title: 'Tasks', description: 'Task management and tracking',
      headers: ['Task', 'Assigned To', 'Priority', 'Due Date', 'Status'],
      rows: [
        ['Follow up with TechCorp', 'Ahmed H.', '🔴 High', 'Mar 14', '⏳ In Progress'],
        ['Send proposal to MediHealth', 'Sara M.', '🟡 Medium', 'Mar 15', '⏳ Pending'],
        ['Update CRM records', 'Omar K.', '🟢 Low', 'Mar 16', '⏳ Pending'],
        ['Schedule demo for BuildPro', 'Nour A.', '🔴 High', 'Mar 13', '✅ Done'],
      ],
      stats: [{ label: 'Open Tasks', value: '34' }, { label: 'Overdue', value: '5' }, { label: 'Completed (MTD)', value: '89' }],
    },
    'Compliance': {
      title: 'Compliance', description: 'Regulatory compliance tracking',
      headers: ['Requirement', 'Department', 'Due Date', 'Responsible', 'Status'],
      rows: [
        ['Annual Safety Training', 'All', 'Apr 30', 'HR Team', '🟡 In Progress'],
        ['Data Privacy Audit', 'IT', 'Mar 31', 'IT Manager', '✅ Completed'],
        ['Fire Drill', 'Facilities', 'Mar 20', 'Safety Officer', '⏳ Scheduled'],
      ],
      stats: [{ label: 'Total Requirements', value: '24' }, { label: 'Compliant', value: '20' }, { label: 'Overdue', value: '1' }],
    },
    'Featured': {
      title: 'Featured Items', description: 'Highlighted menu specials',
      headers: ['Item', 'Category', 'Price', 'Featured Since', 'Views'],
      rows: [
        ['Chef\'s Special Steak', 'Main Course', '$28.90', 'Mar 1', '2,340'],
        ['Seasonal Cocktail', 'Beverages', '$14.50', 'Mar 5', '1,890'],
        ['Truffle Pasta', 'Pasta', '$22.00', 'Mar 10', '1,234'],
      ],
      stats: [{ label: 'Featured Items', value: '6' }, { label: 'Avg Views', value: '1,821' }, { label: 'Conversion', value: '34%' }],
    },
    'Categories': {
      title: 'Menu Categories', description: 'Organize menu categories',
      headers: ['Category', 'Items', 'Avg Price', 'Best Seller', 'Status'],
      rows: [
        ['Main Course', '24', '$18.50', 'Grilled Chicken', '🟢 Active'],
        ['Appetizers', '12', '$10.20', 'Caesar Salad', '🟢 Active'],
        ['Pizza', '8', '$14.80', 'Margherita', '🟢 Active'],
        ['Desserts', '10', '$8.40', 'Chocolate Cake', '🟢 Active'],
        ['Beverages', '18', '$6.20', 'Fresh Juice', '🟢 Active'],
      ],
      stats: [{ label: 'Categories', value: '8' }, { label: 'Total Items', value: '124' }, { label: 'New Items', value: '5' }],
    },
    'Viewings': {
      title: 'Property Viewings', description: 'Schedule and manage viewings',
      headers: ['ID', 'Property', 'Client', 'Date', 'Time', 'Status'],
      rows: [
        ['#V01', 'Marina Apt', 'Ahmed H.', 'Mar 14', '10:00 AM', '✅ Confirmed'],
        ['#V02', 'Downtown Office', 'Sara Corp', 'Mar 14', '2:00 PM', '⏳ Pending'],
        ['#V03', 'Garden Duplex', 'Omar K.', 'Mar 15', '11:00 AM', '✅ Confirmed'],
      ],
      stats: [{ label: 'This Week', value: '12' }, { label: 'Confirmed', value: '8' }, { label: 'Conversion', value: '28%' }],
    },
    'Contracts': {
      title: 'Contracts', description: 'Lease and contract management',
      headers: ['Contract #', 'Tenant', 'Property', 'Start', 'End', 'Status'],
      rows: [
        ['#CT-201', 'Ahmed Corp', 'Downtown Office', 'Jan 2025', 'Jan 2027', '🟢 Active'],
        ['#CT-200', 'Sara Family', 'Palm Villa', 'Jun 2025', 'Jun 2026', '🟡 Renewing'],
        ['#CT-199', 'Omar LLC', 'Marina Apt', 'Mar 2025', 'Mar 2026', '🟡 Expiring'],
      ],
      stats: [{ label: 'Active Contracts', value: '176' }, { label: 'Renewing', value: '12' }, { label: 'Expiring (90d)', value: '23' }],
    },
    'Settings': {
      title: 'Settings', description: 'System configuration and preferences',
      headers: ['Setting', 'Category', 'Value', 'Last Updated'],
      rows: [
        ['Language', 'General', 'English / العربية', 'Mar 10'],
        ['Timezone', 'General', 'GMT+2 (Cairo)', 'Feb 28'],
        ['Notifications', 'Alerts', 'Email + SMS', 'Mar 12'],
        ['Auto Backup', 'Data', 'Daily at 2:00 AM', 'Mar 1'],
        ['Two-Factor Auth', 'Security', 'Enabled', 'Jan 15'],
      ],
      stats: [{ label: 'Users', value: '12' }, { label: 'Last Backup', value: '2h ago' }, { label: 'Uptime', value: '99.9%' }],
    },
  };

  return sections[sidebarLabel] || {
    title: sidebarLabel,
    description: `Manage ${sidebarLabel.toLowerCase()}`,
    headers: ['ID', 'Name', 'Type', 'Date', 'Status'],
    rows: [
      ['#001', 'Item Alpha', 'Type A', '2026-03-13', '✅ Active'],
      ['#002', 'Item Beta', 'Type B', '2026-03-12', '⏳ Pending'],
      ['#003', 'Item Gamma', 'Type A', '2026-03-11', '✅ Active'],
    ],
    stats: [{ label: 'Total', value: '234' }, { label: 'Active', value: '198' }, { label: 'New', value: '12' }],
  };
}
