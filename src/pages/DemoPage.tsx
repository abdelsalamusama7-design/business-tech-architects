import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { getProjectById, categories } from '@/data/portfolioData';
import { motion } from 'framer-motion';
import { ArrowLeft, MessageCircle, Search, Settings } from 'lucide-react';
import { categoryThemes, getSidebarItems, getStats, getTableHeaders, getTableRows, getQuickActions } from '@/data/demoData';

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
  const theme = categoryThemes[catEn];
  const gradientClass = theme?.color || 'from-blue-500 to-purple-600';
  const accentClass = theme?.accentColor || 'bg-blue-600/20 text-blue-400';
  const ThemeIcon = theme?.icon;
  const heroTitle = theme?.heroTitle || { en: catEn, ar: category?.ar || '' };
  const heroDesc = theme?.heroDesc || { en: 'Manage your business efficiently', ar: 'أدر أعمالك بكفاءة' };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Top Banner */}
      <div className={`bg-gradient-to-r ${gradientClass} text-center py-2.5 px-4 text-xs font-medium text-white`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to={`/portfolio/${id}`} className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
            <ArrowLeft size={14} />
            <span>{lang === 'ar' ? 'عودة للتفاصيل' : 'Back to Details'}</span>
          </Link>
          <span className="hidden sm:inline">
            {lang === 'ar'
              ? `عرض توضيحي: "${project.titleAr}" — Instatech Labs`
              : `Demo: "${project.title}" — Instatech Labs`}
          </span>
          <a href="tel:01227080430" className="hover:opacity-80 transition-opacity">📞 01227080430</a>
        </div>
      </div>

      {/* Demo App Header */}
      <header className="bg-slate-900 border-b border-slate-800 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${gradientClass} flex items-center justify-center font-bold text-sm shadow-lg`}>
              {ThemeIcon ? <ThemeIcon size={18} /> : catEn.charAt(0)}
            </div>
            <div>
              <span className="font-bold text-sm block leading-tight">{lang === 'ar' ? heroTitle.ar : heroTitle.en}</span>
              <span className="text-[10px] text-slate-500">{lang === 'ar' ? project.titleAr : project.title}</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center gap-1 bg-slate-800 rounded-lg px-3 py-1.5">
              <Search size={14} className="text-slate-400" />
              <span className="text-xs text-slate-400">{lang === 'ar' ? 'بحث...' : 'Search...'}</span>
            </div>
            <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${gradientClass} flex items-center justify-center text-xs font-bold shadow-md`}>A</div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden md:flex w-60 bg-slate-900/80 backdrop-blur border-e border-slate-800 min-h-[calc(100vh-56px-40px)] flex-col p-3 gap-0.5 sticky top-14">
          <div className={`mb-3 p-3 rounded-xl bg-gradient-to-br ${gradientClass} bg-opacity-10`}>
            <p className="text-xs font-semibold opacity-80">{lang === 'ar' ? 'مرحباً بك في' : 'Welcome to'}</p>
            <p className="text-sm font-bold">{lang === 'ar' ? heroTitle.ar : heroTitle.en}</p>
          </div>
          {getSidebarItems(catEn).map((item, i) => (
            <div
              key={i}
              className={`flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm cursor-default transition-all ${
                i === 0 ? `${accentClass} font-medium` : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              <item.icon size={16} />
              <span>{item.label}</span>
            </div>
          ))}
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 md:p-6 max-w-6xl">
          {/* Hero Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`bg-gradient-to-br ${gradientClass} rounded-2xl p-6 mb-6 relative overflow-hidden`}
          >
            <div className="absolute inset-0 bg-black/20" />
            <div className="relative z-10">
              <p className="text-xs font-medium opacity-80 mb-1">{lang === 'ar' ? 'لوحة التحكم' : 'Dashboard Overview'}</p>
              <h1 className="text-xl md:text-2xl font-bold mb-1">{lang === 'ar' ? heroTitle.ar : heroTitle.en}</h1>
              <p className="text-sm opacity-80 max-w-md">{lang === 'ar' ? heroDesc.ar : heroDesc.en}</p>
            </div>
            {ThemeIcon && (
              <ThemeIcon size={120} className="absolute -bottom-4 ltr:-right-4 rtl:-left-4 opacity-10" />
            )}
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            {getStats(catEn).map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="bg-slate-900 border border-slate-800 rounded-xl p-4 hover:border-slate-700 transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-slate-400">{stat.label}</span>
                  <div className={`w-7 h-7 rounded-lg bg-gradient-to-br ${gradientClass} bg-opacity-20 flex items-center justify-center`}>
                    <stat.icon size={14} className="text-white/80" />
                  </div>
                </div>
                <p className="text-xl font-bold">{stat.value}</p>
                <p className={`text-xs mt-1 ${stat.change >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                  {stat.change >= 0 ? '+' : ''}{stat.change}%
                </p>
              </motion.div>
            ))}
          </div>

          {/* Chart Area */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-slate-900 border border-slate-800 rounded-xl p-5 mb-6"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-sm">{lang === 'ar' ? 'نظرة عامة' : 'Overview'}</h3>
              <div className="flex gap-1">
                {['7D', '30D', '90D'].map(p => (
                  <button key={p} className={`px-2.5 py-1 rounded-md text-xs transition-colors ${p === '30D' ? `bg-gradient-to-r ${gradientClass} text-white` : 'bg-slate-800 text-slate-400 hover:text-slate-200'}`}>{p}</button>
                ))}
              </div>
            </div>
            <div className="h-48 flex items-end gap-1.5">
              {Array.from({ length: 24 }, (_, i) => {
                const h = 20 + Math.sin(i * 0.4) * 25 + Math.random() * 40;
                return (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ delay: 0.4 + i * 0.03, duration: 0.5 }}
                    className={`flex-1 bg-gradient-to-t ${gradientClass} opacity-60 rounded-t-sm hover:opacity-90 transition-opacity cursor-default`}
                  />
                );
              })}
            </div>
          </motion.div>

          {/* Data Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden mb-6"
          >
            <div className="p-4 border-b border-slate-800 flex items-center justify-between">
              <h3 className="font-semibold text-sm">{lang === 'ar' ? 'البيانات الحديثة' : 'Recent Data'}</h3>
              <button className={`text-xs bg-gradient-to-r ${gradientClass} text-white px-3 py-1.5 rounded-lg font-medium`}>
                {lang === 'ar' ? 'إضافة جديد' : 'Add New'}
              </button>
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
                    <tr key={i} className="border-b border-slate-800/50 hover:bg-slate-800/30 transition-colors">
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
            transition={{ delay: 0.5 }}
          >
            <h3 className="font-semibold text-sm mb-3">{lang === 'ar' ? 'إجراءات سريعة' : 'Quick Actions'}</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {getQuickActions(catEn).map((action, i) => (
                <div key={i} className="bg-slate-900 border border-slate-800 rounded-xl p-4 hover:border-slate-600 transition-all cursor-default group">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${gradientClass} bg-opacity-20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                    <action.icon size={20} className="text-white/80" />
                  </div>
                  <p className="text-sm font-medium">{action.label}</p>
                  <p className="text-xs text-slate-400 mt-1">{action.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </main>
      </div>

      {/* Bottom CTA Bar */}
      <div className={`bg-gradient-to-r ${gradientClass} py-8 mt-10`}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="font-bold text-xl mb-2">
            {lang === 'ar' ? 'هل تريد نظام مشابه لعملك؟' : 'Want a similar system for your business?'}
          </p>
          <p className="text-white/80 text-sm mb-5">
            {lang === 'ar' ? 'تنفيذ وتصميم Instatech Labs | للتواصل: 01227080430 / 01554400044' : 'Designed & Developed by Instatech Labs | Contact: 01227080430 / 01554400044'}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/consultation"
              className="px-6 py-3 rounded-xl bg-white text-slate-900 font-semibold hover:bg-white/90 transition-colors inline-flex items-center justify-center gap-2 shadow-lg"
            >
              {lang === 'ar' ? 'احصل على استشارة مجانية' : 'Get Free Consultation'}
            </Link>
            <a
              href="https://wa.me/201227080430"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl border-2 border-white/40 text-white font-semibold hover:bg-white/10 transition-colors inline-flex items-center justify-center gap-2"
            >
              <MessageCircle size={18} /> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoPage;
