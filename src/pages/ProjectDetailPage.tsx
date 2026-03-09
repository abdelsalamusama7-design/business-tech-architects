import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ExternalLink, CheckCircle2, Code2 } from 'lucide-react';
import { getProjectById, categories, allProjects } from '@/data/portfolioData';

const ProjectDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { lang, t } = useLanguage();
  const project = getProjectById(id || '');

  if (!project) {
    return (
      <div className="min-h-screen pt-24 pb-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">
            {lang === 'ar' ? 'المشروع غير موجود' : 'Project not found'}
          </h1>
          <Link to="/portfolio" className="text-primary hover:underline">
            {lang === 'ar' ? 'العودة للأعمال' : 'Back to Portfolio'}
          </Link>
        </div>
      </div>
    );
  }

  const category = categories[project.catIndex];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Back link */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <Link to="/portfolio" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors">
            {lang === 'ar' ? <ArrowRight size={18} /> : <ArrowLeft size={18} />}
            {lang === 'ar' ? 'العودة للأعمال' : 'Back to Portfolio'}
          </Link>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="rounded-2xl overflow-hidden border border-border mb-10"
        >
          <img
            src={project.image}
            alt={lang === 'ar' ? project.titleAr : project.title}
            className="w-full h-64 md:h-96 object-cover"
            loading="lazy"
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
              {lang === 'ar' ? category?.ar : category?.en}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-4">
              {lang === 'ar' ? project.titleAr : project.title}
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              {lang === 'ar' ? project.descriptionAr : project.descriptionEn}
            </p>

            {/* Features */}
            <h2 className="text-xl font-bold text-foreground mb-4">
              {lang === 'ar' ? 'المميزات الرئيسية' : 'Key Features'}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {(lang === 'ar' ? project.featuresAr : project.featuresEn).map((feature, i) => (
                <div key={i} className="flex items-center gap-2 card-gradient rounded-xl border border-border p-4">
                  <CheckCircle2 size={18} className="text-primary flex-shrink-0" />
                  <span className="text-foreground text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              {project.url ? (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl hero-gradient text-primary-foreground font-semibold text-lg hover:opacity-90 transition-opacity"
                >
                  {lang === 'ar' ? 'عرض المشروع مباشرة' : 'View Live Project'}
                  <ExternalLink size={20} />
                </a>
              ) : (
                <Link
                  to={`/demo/${project.id}`}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl hero-gradient text-primary-foreground font-semibold text-lg hover:opacity-90 transition-opacity"
                >
                  {lang === 'ar' ? 'عرض العرض التوضيحي' : 'View Live Demo'}
                  <ExternalLink size={20} />
                </Link>
              )}
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            {/* Tech Stack */}
            <div className="card-gradient rounded-2xl border border-border p-6">
              <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
                <Code2 size={18} className="text-primary" />
                {lang === 'ar' ? 'التقنيات المستخدمة' : 'Tech Stack'}
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="text-xs font-medium bg-muted text-muted-foreground px-3 py-1.5 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="card-gradient rounded-2xl border border-border p-6 text-center">
              <h3 className="font-bold text-foreground mb-3">
                {lang === 'ar' ? 'هل تريد مشروع مشابه؟' : 'Want a similar project?'}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {lang === 'ar' ? 'تواصل معنا للحصول على استشارة مجانية' : 'Contact us for a free consultation'}
              </p>
              <Link
                to="/consultation"
                className="block w-full py-3 rounded-xl hero-gradient text-primary-foreground font-semibold hover:opacity-90 transition-opacity text-center"
              >
                {lang === 'ar' ? 'استشارة مجانية' : 'Free Consultation'}
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Similar Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            {lang === 'ar' ? 'مشاريع مشابهة' : 'Similar Projects'}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {allProjects
              .filter(p => p.catIndex === project.catIndex && p.id !== project.id)
              .slice(0, 4)
              .map((p, i) => (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={`/portfolio/${p.id}`}
                    className="block card-gradient rounded-2xl border border-border overflow-hidden group hover:glow-primary transition-all duration-300"
                  >
                    <div className="h-36 overflow-hidden">
                      <img
                        src={p.image}
                        alt={lang === 'ar' ? p.titleAr : p.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-xs text-muted-foreground mb-1">
                        {lang === 'ar' ? categories[p.catIndex]?.ar : categories[p.catIndex]?.en}
                      </p>
                      <h3 className="font-semibold text-foreground text-sm">
                        {lang === 'ar' ? p.titleAr : p.title}
                      </h3>
                    </div>
                  </Link>
                </motion.div>
              ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
