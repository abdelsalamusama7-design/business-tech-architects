import {
  Home, BarChart3, Users, Calendar, Settings, ShoppingCart, Package,
  FileText, Bell, Search, Menu, Star, Clock, MapPin, CreditCard,
  Shield, Wifi, Heart, Truck, BookOpen, Dumbbell, Hotel, Ticket,
  Monitor, Activity, Pill, Building, GraduationCap, Warehouse,
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
