import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Globe } from 'lucide-react';
import { categories, allProjects } from '@/data/portfolioData';

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
                key={`${project.id}-${i}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 12) * 0.03 }}
              >
                <Link
                  to={`/portfolio/${project.id}`}
                  className="block card-gradient rounded-2xl border border-border overflow-hidden group hover:glow-primary transition-all duration-300 relative"
                >
                  <div className="h-44 overflow-hidden relative">
                    <img
                      src={project.image}
                      alt={lang === 'ar' ? project.titleAr : project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-3">
                      <span className="px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-semibold inline-flex items-center gap-1.5 shadow-lg">
                        {lang === 'ar' ? 'عرض التفاصيل' : 'View Details'}
                      </span>
                    </div>
                    {project.url && (
                      <div className="absolute top-2 end-2 w-7 h-7 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center shadow-md">
                        <ExternalLink size={13} className="text-primary-foreground" />
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-muted-foreground mb-2">
                      {lang === 'ar' ? categories[project.catIndex]?.ar : categories[project.catIndex]?.en}
                    </p>
                    <h3 className="font-semibold text-foreground text-sm mb-2">
                      {lang === 'ar' ? project.titleAr : project.title}
                    </h3>
                    <span className="text-primary text-xs font-medium inline-flex items-center gap-1">
                      <ExternalLink size={12} /> {lang === 'ar' ? 'عرض المشروع' : 'View Project'}
                    </span>
                  </div>
                </Link>
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
