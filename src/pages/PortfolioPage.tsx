import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { ExternalLink } from 'lucide-react';

const categories = [
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

const realProjects = [
  { title: 'Elegant Accessory Hub', url: 'https://elegant-accessory-hub.lovable.app', catIndex: 12 },
  { title: 'Glam Gala Boutique', url: 'https://glam-gala-boutique.lovable.app', catIndex: 12 },
  { title: 'Blush Boot Bliss', url: 'https://blush-boot-bliss.lovable.app', catIndex: 12 },
  { title: 'Fin Feeder Platform', url: 'https://fin-feeder-platform.lovable.app', catIndex: 16 },
  { title: 'Teach Sparkle Flow', url: 'https://teach-sparkle-flow.lovable.app', catIndex: 15 },
];

function generateProjects() {
  const projects = [...realProjects];
  const catNames = categories.slice(1);
  let id = 6;
  while (projects.length < 100) {
    const catIdx = ((id - 1) % catNames.length) + 1;
    projects.push({
      title: `${catNames[catIdx - 1].en} Pro v${Math.floor(id / catNames.length) + 1}`,
      url: '',
      catIndex: catIdx,
    });
    id++;
  }
  return projects;
}

const allProjects = generateProjects();

const PortfolioPage = () => {
  const { t, lang } = useLanguage();
  const [activeCategory, setActiveCategory] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const filtered = activeCategory === 0
    ? allProjects
    : allProjects.filter(p => p.catIndex === activeCategory);

  const displayed = showAll ? filtered : filtered.slice(0, 12);

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">{t('portfolio.title')}</h1>
          <p className="text-lg text-muted-foreground">{t('portfolio.subtitle')}</p>
        </motion.div>

        {/* Filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => { setActiveCategory(i); setShowAll(false); }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === i
                  ? 'hero-gradient text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:text-foreground'
              }`}
            >
              {lang === 'ar' ? cat.ar : cat.en}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayed.map((project, i) => (
            <motion.div
              key={`${project.title}-${i}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 12) * 0.03 }}
              className="card-gradient rounded-2xl border border-border overflow-hidden group hover:glow-primary transition-all duration-300"
            >
              <div className="h-40 hero-gradient opacity-80 flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg text-center px-4">{project.title}</span>
              </div>
              <div className="p-4">
                <p className="text-xs text-muted-foreground mb-2">
                  {lang === 'ar' ? categories[project.catIndex]?.ar : categories[project.catIndex]?.en}
                </p>
                <h3 className="font-semibold text-foreground text-sm mb-3">{project.title}</h3>
                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary text-sm font-medium inline-flex items-center gap-1 hover:underline"
                  >
                    {t('portfolio.view')} <ExternalLink size={14} />
                  </a>
                ) : (
                  <span className="text-muted-foreground text-sm">{t('portfolio.view')}</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {!showAll && filtered.length > 12 && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(true)}
              className="px-8 py-3 rounded-xl hero-gradient text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
            >
              {t('common.viewAll')} ({filtered.length})
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PortfolioPage;
