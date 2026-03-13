import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { getProjectById, categories } from '@/data/portfolioData';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, MessageCircle, Search } from 'lucide-react';
import { categoryThemes, getSidebarItems, getStats, getQuickActions, getSectionContent } from '@/data/demoData';
import { t } from '@/data/demoTranslations';

const DemoPage = () => {
  const { id } = useParams<{ id: string }>();
  const { lang } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const project = getProjectById(id || '');

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">
            {lang === 'ar' ? 'العرض التوضيحي غير موجود' : 'Demo not found'}
          </h1>
          <Link to="/portfolio" className="text-primary hover:underline">
            {lang === 'ar' ? 'العودة للمعرض' : 'Back to Portfolio'}
          </Link>
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

  const sidebarItems = getSidebarItems(catEn);
  const activeLabel = sidebarItems[activeIndex]?.label || 'Dashboard';
  const isDashboard = activeLabel === 'Dashboard';
  const isAnalytics = activeLabel === 'Analytics';
  const section = getSectionContent(activeLabel);

  return (
    <div className="min-h-screen bg-slate-950 text-white" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      {/* Top Banner */}
      <div className={`bg-gradient-to-r ${gradientClass} text-center py-2.5 px-4 text-xs font-medium text-white`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to={`/portfolio/${id}`} className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
            <ArrowLeft size={14} className={lang === 'ar' ? 'rotate-180' : ''} />
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
          {sidebarItems.map((item, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm cursor-pointer transition-all text-start w-full ${
                i === activeIndex ? `${accentClass} font-medium` : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              <item.icon size={16} />
              <span>{t(item.label, lang)}</span>
            </button>
          ))}
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 md:p-6 max-w-6xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeLabel}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
            >
              {/* Dashboard View */}
              {isDashboard && (
                <>
                  {/* Hero Banner */}
                  <div className={`bg-gradient-to-br ${gradientClass} rounded-2xl p-6 mb-6 relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="relative z-10">
                      <p className="text-xs font-medium opacity-80 mb-1">{lang === 'ar' ? 'لوحة التحكم' : 'Dashboard Overview'}</p>
                      <h1 className="text-xl md:text-2xl font-bold mb-1">{lang === 'ar' ? heroTitle.ar : heroTitle.en}</h1>
                      <p className="text-sm opacity-80 max-w-md">{lang === 'ar' ? heroDesc.ar : heroDesc.en}</p>
                    </div>
                    {ThemeIcon && <ThemeIcon size={120} className="absolute -bottom-4 end-[-16px] opacity-10" />}
                  </div>

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
                          <span className="text-xs text-slate-400">{t(stat.label, lang)}</span>
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

                  {/* Chart */}
                  <ChartSection gradientClass={gradientClass} lang={lang} />

                  {/* Quick Actions */}
                  <h3 className="font-semibold text-sm mb-3">{lang === 'ar' ? 'إجراءات سريعة' : 'Quick Actions'}</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {getQuickActions(catEn).map((action, i) => (
                      <div key={i} className="bg-slate-900 border border-slate-800 rounded-xl p-4 hover:border-slate-600 transition-all cursor-default group">
                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${gradientClass} bg-opacity-20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                          <action.icon size={20} className="text-white/80" />
                        </div>
                        <p className="text-sm font-medium">{t(action.label, lang)}</p>
                        <p className="text-xs text-slate-400 mt-1">{t(action.desc, lang)}</p>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {/* Analytics View */}
              {isAnalytics && (
                <>
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h2 className="text-lg font-bold">{lang === 'ar' ? 'التحليلات' : 'Analytics'}</h2>
                      <p className="text-xs text-slate-400">{lang === 'ar' ? 'مقاييس الأداء والاتجاهات' : 'Performance metrics and trends'}</p>
                    </div>
                  </div>

                  {/* Two charts side by side */}
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <ChartSection gradientClass={gradientClass} lang={lang} title={lang === 'ar' ? 'الإيرادات' : 'Revenue'} />
                    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
                      <h3 className="font-semibold text-sm mb-4">{lang === 'ar' ? 'المستخدمون' : 'Users'}</h3>
                      <div className="h-48 flex items-end gap-1.5">
                        {Array.from({ length: 12 }, (_, i) => {
                          const h = 30 + Math.cos(i * 0.6) * 20 + Math.random() * 35;
                          return (
                            <motion.div
                              key={i}
                              initial={{ height: 0 }}
                              animate={{ height: `${h}%` }}
                              transition={{ delay: i * 0.05, duration: 0.5 }}
                              className="flex-1 bg-gradient-to-t from-emerald-500/60 to-emerald-400/30 rounded-t-sm hover:opacity-90 transition-opacity cursor-default"
                            />
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Analytics table */}
                  <SectionTable section={section} gradientClass={gradientClass} lang={lang} />
                </>
              )}

              {/* Generic Section View */}
              {!isDashboard && !isAnalytics && (
                <>
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h2 className="text-lg font-bold">{t(section.title, lang)}</h2>
                      <p className="text-xs text-slate-400">{t(section.description, lang)}</p>
                    </div>
                    <button className={`text-xs bg-gradient-to-r ${gradientClass} text-white px-4 py-2 rounded-lg font-medium`}>
                      {lang === 'ar' ? '+ إضافة جديد' : '+ Add New'}
                    </button>
                  </div>

                  {/* Section Stats */}
                  {section.stats.length > 0 && (
                    <div className="grid grid-cols-3 gap-3 mb-6">
                      {section.stats.map((s, i) => (
                        <div key={i} className="bg-slate-900 border border-slate-800 rounded-xl p-4">
                          <p className="text-xs text-slate-400 mb-1">{t(s.label, lang)}</p>
                          <p className="text-lg font-bold">{s.value}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Section Table */}
                  <SectionTable section={section} gradientClass={gradientClass} lang={lang} />
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>

      {/* Mobile Bottom Nav */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-slate-900 border-t border-slate-800 z-50 flex overflow-x-auto">
        {sidebarItems.slice(0, 5).map((item, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`flex-1 flex flex-col items-center gap-1 py-2.5 px-1 text-[10px] min-w-[60px] transition-colors ${
              i === activeIndex ? 'text-white' : 'text-slate-500'
            }`}
          >
            <item.icon size={18} />
            <span className="truncate max-w-[56px]">{t(item.label, lang)}</span>
          </button>
        ))}
      </div>

      {/* Bottom CTA Bar */}
      <div className={`bg-gradient-to-r ${gradientClass} py-8 mt-10 md:mb-0 mb-14`}>
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

// Reusable chart component
function ChartSection({ gradientClass, lang, title }: { gradientClass: string; lang: string; title?: string }) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-sm">{title || (lang === 'ar' ? 'نظرة عامة' : 'Overview')}</h3>
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
              transition={{ delay: 0.1 + i * 0.03, duration: 0.5 }}
              className={`flex-1 bg-gradient-to-t ${gradientClass} opacity-60 rounded-t-sm hover:opacity-90 transition-opacity cursor-default`}
            />
          );
        })}
      </div>
    </div>
  );
}

// Reusable table component for sections
function SectionTable({ section, gradientClass, lang }: { section: { headers: string[]; rows: string[][] }; gradientClass: string; lang: string }) {
  if (!section.headers.length) return null;
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b border-slate-800">
              {section.headers.map((h, i) => (
                <th key={i} className="text-start p-3 text-slate-400 font-medium">{t(h, lang)}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {section.rows.map((row, i) => (
              <tr key={i} className="border-b border-slate-800/50 hover:bg-slate-800/30 transition-colors cursor-default">
                {row.map((cell, j) => (
                  <td key={j} className="p-3 text-slate-300">{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DemoPage;
