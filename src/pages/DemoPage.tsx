import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { getProjectById, categories } from '@/data/portfolioData';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Phone, MessageCircle, BarChart3, Users, Calendar, Settings, ShoppingCart, Package, FileText, Bell, Search, Home, Menu, Star, Clock, MapPin, CreditCard, Shield, Wifi, ChevronDown } from 'lucide-react';

const DemoPage = () => {
  const { id } = useParams<{ id: string }>();
  const { lang } = useLanguage();
  const project = getProjectById(id || '');

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Demo not found</h1>
          <Link to="/portfolio" className="text-primary hover:underline">Back to Portfolio</Link>
        </div>
      </div>
    );
  }

  const category = categories[project.catIndex];
  const catEn = category?.en || '';

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-primary to-accent text-center py-2 px-4 text-xs font-medium text-primary-foreground">
        {lang === 'ar'
          ? `هذا عرض توضيحي لمشروع "${project.titleAr}" - تنفيذ وتصميم Instatech Labs | للتواصل: 01227080430`
          : `This is a demo of "${project.title}" - Designed by Instatech Labs | Contact: 01227080430`}
      </div>

      {/* Demo App Header */}
      <header className="bg-slate-900 border-b border-slate-800 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center font-bold text-sm">
              {catEn.charAt(0)}
            </div>
            <span className="font-bold text-sm">{lang === 'ar' ? project.titleAr : project.title}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center gap-1 bg-slate-800 rounded-lg px-3 py-1.5">
              <Search size={14} className="text-slate-400" />
              <span className="text-xs text-slate-400">{lang === 'ar' ? 'بحث...' : 'Search...'}</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center text-xs font-bold">A</div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden md:flex w-56 bg-slate-900 border-e border-slate-800 min-h-[calc(100vh-56px-32px)] flex-col p-3 gap-1 sticky top-14">
          {getSidebarItems(catEn).map((item, i) => (
            <div
              key={i}
              className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm cursor-default transition-colors ${
                i === 0 ? 'bg-blue-600/20 text-blue-400' : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
              }`}
            >
              <item.icon size={16} />
              <span>{item.label}</span>
            </div>
          ))}
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 md:p-6 max-w-6xl">
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            {getStats(catEn).map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-900 border border-slate-800 rounded-xl p-4"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-slate-400">{stat.label}</span>
                  <stat.icon size={14} className="text-slate-500" />
                </div>
                <p className="text-xl font-bold">{stat.value}</p>
                <p className="text-xs text-emerald-400 mt-1">+{stat.change}%</p>
              </motion.div>
            ))}
          </div>

          {/* Chart Area */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-slate-900 border border-slate-800 rounded-xl p-5 mb-6"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-sm">{lang === 'ar' ? 'نظرة عامة' : 'Overview'}</h3>
              <div className="flex gap-1">
                {['7D', '30D', '90D'].map(p => (
                  <button key={p} className={`px-2.5 py-1 rounded-md text-xs ${p === '30D' ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-400'}`}>{p}</button>
                ))}
              </div>
            </div>
            {/* Fake Chart */}
            <div className="h-48 flex items-end gap-1.5">
              {Array.from({ length: 20 }, (_, i) => {
                const h = 20 + Math.sin(i * 0.5) * 30 + Math.random() * 40;
                return (
                  <div
                    key={i}
                    className="flex-1 bg-gradient-to-t from-blue-600/60 to-blue-400/30 rounded-t-sm"
                    style={{ height: `${h}%` }}
                  />
                );
              })}
            </div>
          </motion.div>

          {/* Data Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden mb-6"
          >
            <div className="p-4 border-b border-slate-800 flex items-center justify-between">
              <h3 className="font-semibold text-sm">{lang === 'ar' ? 'البيانات الحديثة' : 'Recent Data'}</h3>
              <button className="text-xs bg-blue-600 text-white px-3 py-1.5 rounded-lg">{lang === 'ar' ? 'إضافة جديد' : 'Add New'}</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-slate-800">
                    {getTableHeaders(catEn).map((h, i) => (
                      <th key={i} className="text-start p-3 text-slate-400 font-medium">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {getTableRows(catEn).map((row, i) => (
                    <tr key={i} className="border-b border-slate-800/50 hover:bg-slate-800/30">
                      {row.map((cell, j) => (
                        <td key={j} className="p-3 text-slate-300">{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-3"
          >
            {getQuickActions(catEn).map((action, i) => (
              <div key={i} className="bg-slate-900 border border-slate-800 rounded-xl p-4 hover:border-blue-600/50 transition-colors cursor-default">
                <action.icon size={20} className="text-blue-400 mb-2" />
                <p className="text-sm font-medium">{action.label}</p>
                <p className="text-xs text-slate-400 mt-1">{action.desc}</p>
              </div>
            ))}
          </motion.div>
        </main>
      </div>

      {/* Bottom CTA Bar */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-t border-slate-700 py-6 mt-10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="font-bold text-lg mb-2">
            {lang === 'ar' ? 'هل تريد نظام مشابه لعملك؟' : 'Want a similar system for your business?'}
          </p>
          <p className="text-slate-400 text-sm mb-4">
            {lang === 'ar' ? 'تنفيذ وتصميم Instatech Labs | للتواصل: 01227080430 / 01554400044' : 'Designed & Developed by Instatech Labs | Contact: 01227080430 / 01554400044'}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/consultation"
              className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center gap-2"
            >
              {lang === 'ar' ? 'احصل على استشارة مجانية' : 'Get Free Consultation'}
            </Link>
            <a
              href="https://wa.me/201227080430"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl border border-green-500 text-green-400 font-semibold hover:bg-green-500/10 transition-colors inline-flex items-center justify-center gap-2"
            >
              <MessageCircle size={18} /> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper functions for dynamic content per category
function getSidebarItems(cat: string) {
  const base = [
    { icon: Home, label: 'Dashboard' },
    { icon: BarChart3, label: 'Analytics' },
  ];
  const categoryItems: Record<string, { icon: any; label: string }[]> = {
    'Clinic Management': [{ icon: Users, label: 'Patients' }, { icon: Calendar, label: 'Appointments' }, { icon: FileText, label: 'Records' }, { icon: CreditCard, label: 'Billing' }],
    'Pharmacy Platform': [{ icon: Package, label: 'Inventory' }, { icon: FileText, label: 'Prescriptions' }, { icon: ShoppingCart, label: 'Orders' }, { icon: Bell, label: 'Alerts' }],
    'Restaurant POS': [{ icon: ShoppingCart, label: 'Orders' }, { icon: Menu, label: 'Menu' }, { icon: Users, label: 'Staff' }, { icon: CreditCard, label: 'Payments' }],
    'Digital Menu': [{ icon: Menu, label: 'Menu Items' }, { icon: Star, label: 'Featured' }, { icon: ShoppingCart, label: 'Orders' }, { icon: Settings, label: 'Settings' }],
    'HR System': [{ icon: Users, label: 'Employees' }, { icon: Calendar, label: 'Leave' }, { icon: CreditCard, label: 'Payroll' }, { icon: FileText, label: 'Reports' }],
    'CRM System': [{ icon: Users, label: 'Contacts' }, { icon: Star, label: 'Deals' }, { icon: FileText, label: 'Pipeline' }, { icon: Bell, label: 'Tasks' }],
    'Marketplace': [{ icon: Package, label: 'Products' }, { icon: ShoppingCart, label: 'Orders' }, { icon: Users, label: 'Sellers' }, { icon: CreditCard, label: 'Payments' }],
    'Real Estate': [{ icon: Home, label: 'Properties' }, { icon: Users, label: 'Tenants' }, { icon: Calendar, label: 'Bookings' }, { icon: CreditCard, label: 'Payments' }],
  };
  const extra = categoryItems[cat] || [{ icon: Package, label: 'Items' }, { icon: Users, label: 'Users' }, { icon: FileText, label: 'Reports' }, { icon: Settings, label: 'Settings' }];
  return [...base, ...extra, { icon: Settings, label: 'Settings' }];
}

function getStats(cat: string) {
  const statsMap: Record<string, { label: string; value: string; change: number; icon: any }[]> = {
    'Clinic Management': [
      { label: 'Total Patients', value: '2,847', change: 12, icon: Users },
      { label: 'Appointments', value: '156', change: 8, icon: Calendar },
      { label: 'Revenue', value: '$48.5K', change: 15, icon: BarChart3 },
      { label: 'Satisfaction', value: '96%', change: 3, icon: Star },
    ],
    'Restaurant POS': [
      { label: 'Orders Today', value: '284', change: 18, icon: ShoppingCart },
      { label: 'Revenue', value: '$12.4K', change: 22, icon: BarChart3 },
      { label: 'Avg Order', value: '$43.6', change: 5, icon: CreditCard },
      { label: 'Active Tables', value: '18/24', change: 0, icon: Users },
    ],
    'Marketplace': [
      { label: 'Total Products', value: '12,456', change: 14, icon: Package },
      { label: 'Orders', value: '3,892', change: 21, icon: ShoppingCart },
      { label: 'Revenue', value: '$284K', change: 18, icon: BarChart3 },
      { label: 'Sellers', value: '342', change: 9, icon: Users },
    ],
  };
  return statsMap[cat] || [
    { label: 'Total Users', value: '1,234', change: 12, icon: Users },
    { label: 'Active Now', value: '89', change: 5, icon: Wifi },
    { label: 'Revenue', value: '$24.8K', change: 18, icon: BarChart3 },
    { label: 'Tasks Done', value: '456', change: 8, icon: Shield },
  ];
}

function getTableHeaders(cat: string) {
  const headersMap: Record<string, string[]> = {
    'Clinic Management': ['ID', 'Patient', 'Doctor', 'Date', 'Status'],
    'Restaurant POS': ['#', 'Table', 'Items', 'Total', 'Status'],
    'Pharmacy Platform': ['ID', 'Medicine', 'Stock', 'Price', 'Expiry'],
    'HR System': ['ID', 'Employee', 'Department', 'Role', 'Status'],
    'Marketplace': ['#', 'Product', 'Seller', 'Price', 'Stock'],
    'CRM System': ['#', 'Contact', 'Company', 'Deal Value', 'Stage'],
    'Real Estate': ['#', 'Property', 'Type', 'Price', 'Status'],
  };
  return headersMap[cat] || ['ID', 'Name', 'Type', 'Date', 'Status'];
}

function getTableRows(cat: string) {
  const rowsMap: Record<string, string[][]> = {
    'Clinic Management': [
      ['#1042', 'Ahmed Hassan', 'Dr. Sara Ali', '2026-03-09', '✅ Confirmed'],
      ['#1041', 'Fatima Omar', 'Dr. Mohamed', '2026-03-09', '⏳ Waiting'],
      ['#1040', 'Khalid Nour', 'Dr. Sara Ali', '2026-03-08', '✅ Completed'],
      ['#1039', 'Layla Ibrahim', 'Dr. Youssef', '2026-03-08', '✅ Completed'],
    ],
    'Restaurant POS': [
      ['#284', 'Table 5', '4 items', '$86.50', '🟢 Served'],
      ['#283', 'Table 12', '2 items', '$43.00', '🟡 Preparing'],
      ['#282', 'Takeaway', '6 items', '$124.80', '🟢 Ready'],
      ['#281', 'Table 3', '3 items', '$67.20', '🟡 Preparing'],
    ],
    'Marketplace': [
      ['#12456', 'Wireless Earbuds', 'TechStore', '$29.99', '156'],
      ['#12455', 'Leather Wallet', 'StyleHub', '$45.00', '89'],
      ['#12454', 'Running Shoes', 'SportMax', '$89.99', '234'],
      ['#12453', 'Smart Watch', 'GadgetPro', '$199.00', '67'],
    ],
  };
  return rowsMap[cat] || [
    ['#001', 'Item Alpha', 'Type A', '2026-03-09', '✅ Active'],
    ['#002', 'Item Beta', 'Type B', '2026-03-08', '⏳ Pending'],
    ['#003', 'Item Gamma', 'Type A', '2026-03-07', '✅ Active'],
    ['#004', 'Item Delta', 'Type C', '2026-03-06', '✅ Active'],
  ];
}

function getQuickActions(cat: string) {
  const actionsMap: Record<string, { icon: any; label: string; desc: string }[]> = {
    'Clinic Management': [
      { icon: Calendar, label: 'New Appointment', desc: 'Schedule a patient visit' },
      { icon: Users, label: 'Add Patient', desc: 'Register new patient' },
      { icon: FileText, label: 'Generate Report', desc: 'Monthly analytics' },
    ],
    'Restaurant POS': [
      { icon: ShoppingCart, label: 'New Order', desc: 'Create a new order' },
      { icon: Menu, label: 'Edit Menu', desc: 'Update menu items' },
      { icon: BarChart3, label: 'Sales Report', desc: 'View daily sales' },
    ],
    'Marketplace': [
      { icon: Package, label: 'Add Product', desc: 'List a new product' },
      { icon: ShoppingCart, label: 'Process Orders', desc: 'Handle pending orders' },
      { icon: BarChart3, label: 'Analytics', desc: 'Sales performance' },
    ],
  };
  return actionsMap[cat] || [
    { icon: FileText, label: 'New Record', desc: 'Create new entry' },
    { icon: Users, label: 'Manage Users', desc: 'User permissions' },
    { icon: BarChart3, label: 'View Reports', desc: 'Analytics dashboard' },
  ];
}

export default DemoPage;
